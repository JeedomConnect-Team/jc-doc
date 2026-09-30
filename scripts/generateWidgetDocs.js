#!/usr/bin/env node
/*
 * Génère une page de doc par widget (docs/documentation/plugin/types/widgets/<type>.md)
 * à partir du widgetsConfig.json de l'application / du plugin, ainsi que la
 * liste des widgets de la page d'index.
 *
 * Usage :
 *   node scripts/generateWidgetDocs.js [chemin/widgetsConfig.json] [dossier/images]
 *
 * Par défaut, lit ../JeedomConnect-App/src/widgets/widgetsConfig.json et
 * ../JeedomConnect-App/src/images (même contenu que core/config/widgetsConfig.json
 * et data/img du plugin).
 *
 * Seules les zones entre les marqueurs AUTO sont réécrites : tout ce qui est
 * rédigé à la main en dehors (présentation, captures, astuces…) est conservé.
 * Les champs title/sidebar_label/sidebar_position/description du front matter
 * sont aussi régénérés ; les autres clés ajoutées à la main sont conservées.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const configPath = path.resolve(process.argv[2] || path.join(ROOT, '../JeedomConnect-App/src/widgets/widgetsConfig.json'));
const imgDir = path.resolve(process.argv[3] || path.join(ROOT, '../JeedomConnect-App/src/images'));
const outDir = path.join(ROOT, 'docs/documentation/plugin/types/widgets');
const staticImgDir = path.join(ROOT, 'static/img/widgets');

// Options décrites une seule fois sur la page d'index (section Gestion des widgets)
const COMMON_OPTIONS = ['name', 'nameDisplayed', 'subtitle', 'image', 'statusImages', 'display'];

// Regroupement des widgets sur la page d'index. Un widget absent d'ici tombe dans "Autres".
const FAMILIES = [
  ['Éclairage et prises', ['single-light-switch', 'single-light-dim', 'single-light-color', 'group-light', 'plug', 'group-plug']],
  ['Ouvrants', ['door', 'group-door', 'window', 'group-window', 'shutter', 'group-shutter', 'frontgate']],
  ['Capteurs', ['temperature', 'humidity', 'brightness', 'power', 'pir', 'group-pir']],
  ['Chauffage et climatisation', ['thermostat', 'air-con']],
  ['Sécurité', ['alarm', 'group-alarm']],
  ['Caméras et multimédia', ['camera', 'frigate', 'media-player', 'image', 'webview']],
  ['Génériques', ['generic-info-binary', 'group-generic-info-binary', 'generic-info-numeric', 'generic-info-string',
    'generic-switch', 'generic-slider', 'generic-action-other', 'generic-message', 'choices-list', 'mode', 'event']],
  ['Historiques', ['history', 'group-history']],
  ['Localisation', ['geoloc', 'group-geoloc']],
  ['Résumés et favoris', ['widgets-summary', 'room', 'favorites']],
  ['Autres', ['scenario', 'appLauncher']],
];

const CATEGORY_LABELS = {
  string: 'Texte',
  stringList: 'Liste de choix',
  cmd: 'Commande',
  cmdList: 'Liste de commandes',
  img: 'Image',
  ifImgs: 'Images sous conditions',
  binary: 'Case à cocher',
  widgets: 'Liste de widgets',
  security: 'Sécurisation',
  scenario: 'Scénario',
  color: 'Couleur',
};

const SUBTYPE_LABELS = {
  binary: 'binaire',
  numeric: 'numérique',
  string: 'texte',
  other: '',
  slider: 'curseur',
  message: 'message',
  select: 'liste',
  color: 'couleur',
};

// Échappe un texte pour MDX (Docusaurus 3) et pour une cellule de tableau
const esc = (s) => String(s ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/\{/g, '&#123;')
  .replace(/\}/g, '&#125;')
  .replace(/\|/g, '\\|')
  .replace(/\r?\n/g, '<br/>');

const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8').replace(/^﻿/, ''));

const config = readJson(configPath);
const widgets = config.widgets.filter((w) => !w.hide);
const byType = Object.fromEntries(config.widgets.map((w) => [w.type, w]));

const imgTag = (w, size) => w.img
  ? `<img src={require('@site/static/img/widgets/${w.img}').default} alt="${esc(w.name)}" width="${size}" zoom="false" />`
  : '';

const optionType = (o) => {
  let label = CATEGORY_LABELS[o.category] || o.category;
  if (o.category === 'cmd' || o.category === 'cmdList') {
    const parts = [o.type, o.subtype && (o.subtype in SUBTYPE_LABELS ? SUBTYPE_LABELS[o.subtype] : o.subtype)].filter(Boolean);
    if (parts.length) label += ` ${parts.join(' ')}`;
  }
  return label;
};

const optionDescription = (o) => {
  const parts = [];
  if (o.description) parts.push(esc(o.description));
  if (o.category === 'stringList' && o.choices?.length) {
    const choices = o.choices.map((c) => esc(c.name) + (c.id === o.defaultChoice ? ' (par défaut)' : ''));
    parts.push(`Choix : ${choices.join(', ')}`);
  }
  if (o.whiteList?.length) {
    const links = o.whiteList.map((t) => byType[t] && !byType[t].hide ? `[${esc(byType[t].name)}](./${t}.md)` : esc(t));
    parts.push(`Widgets acceptés : ${links.join(', ')}`);
  }
  if (o.generic_type) parts.push(`Type générique : \`${o.generic_type}\``);
  return parts.join('<br/>');
};

const renderHeader = (w) => [
  '<!-- AUTO:HEADER:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->',
  imgTag(w, 80),
  '',
  `> ${esc(w.description)}`,
  '<!-- AUTO:HEADER:END -->',
].join('\n');

const renderConfig = (w) => {
  const options = (w.options || []);
  const common = COMMON_OPTIONS.filter((id) => options.some((o) => o.id === id))
    .map((id) => `**${esc(options.find((o) => o.id === id).name)}**`);
  const specific = options.filter((o) => !COMMON_OPTIONS.includes(o.id));

  const lines = ['<!-- AUTO:CONFIG:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->', '## Configuration', ''];
  if (common.length) {
    lines.push(`Options communes à tous les widgets (voir [Gestion des widgets](./index.md#gestionWidget)) : ${common.join(', ')}.`, '');
  }
  if (specific.length) {
    lines.push('| Option | Type | Obligatoire | Description |', '|---|---|:---:|---|');
    for (const o of specific) {
      lines.push(`| **${esc(o.name)}** | ${esc(optionType(o))} | ${o.required ? 'Oui' : ''} | ${optionDescription(o)} |`);
    }
    lines.push('');
  }
  if (w.variables?.length) {
    lines.push('## Variables pour textes dynamiques', '',
      'Utilisables dans le nom, le sous-titre et les conditions (voir [Textes dynamiques](./index.md#textes-dynamiques)).', '',
      '| Variable | Description |', '|---|---|');
    for (const v of w.variables) lines.push(`| \`#${v.name}#\` | ${esc(v.descr)} |`);
    lines.push('');
  }
  lines.push('<!-- AUTO:CONFIG:END -->');
  return lines.join('\n');
};

const replaceBlock = (content, name, block) => {
  const re = new RegExp(`<!-- AUTO:${name}:START[\\s\\S]*?<!-- AUTO:${name}:END -->`);
  return re.test(content) ? content.replace(re, block) : null;
};

const GENERATED_FM_KEYS = ['title', 'sidebar_label', 'sidebar_position', 'description'];

const renderFrontMatter = (w, position, existing) => {
  const fm = [
    `title: ${JSON.stringify(w.name)}`,
    `sidebar_label: ${JSON.stringify(w.name)}`,
    `sidebar_position: ${position}`,
    `description: ${JSON.stringify(w.description || '')}`,
  ];
  const kept = (existing || '').split(/\r?\n/)
    .filter((l) => l.trim() && !GENERATED_FM_KEYS.some((k) => l.startsWith(`${k}:`)));
  return `---\n${[...fm, ...kept].join('\n')}\n---`;
};

const writeWidgetPage = (w, position) => {
  const file = path.join(outDir, `${w.type}.md`);
  const header = renderHeader(w);
  const conf = renderConfig(w);
  let content;
  if (fs.existsSync(file)) {
    content = fs.readFileSync(file, 'utf8');
    const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    const body = fmMatch ? content.slice(fmMatch[0].length) : content;
    content = renderFrontMatter(w, position, fmMatch?.[1]) + body;
    content = replaceBlock(content, 'HEADER', header) ?? content;
    const replaced = replaceBlock(content, 'CONFIG', conf);
    content = replaced ?? `${content.trimEnd()}\n\n${conf}\n`;
  } else {
    content = `${renderFrontMatter(w, position)}\n\n${header}\n\n${conf}\n`;
  }
  fs.writeFileSync(file, content);
};

const renderIndexList = () => {
  const lines = ['<!-- AUTO:LIST:START - généré par scripts/generateWidgetDocs.js, ne pas modifier -->'];
  const placed = new Set();
  const families = FAMILIES.map(([label, types]) => [label, types.filter((t) => byType[t] && !byType[t].hide)]);
  const others = widgets.filter((w) => !FAMILIES.some(([, types]) => types.includes(w.type))).map((w) => w.type);
  if (others.length) families.find(([label]) => label === 'Autres')[1].push(...others);

  for (const [label, types] of families) {
    if (!types.length) continue;
    lines.push('', `### ${label}`, '', '| | Widget | Description |', '|:---:|---|---|');
    for (const t of types) {
      const w = byType[t];
      placed.add(t);
      lines.push(`| ${imgTag(w, 32)} | [${esc(w.name)}](./${t}.md) | ${esc(w.description)} |`);
    }
  }
  lines.push('', '<!-- AUTO:LIST:END -->');
  return lines.join('\n');
};

// --- Exécution ---
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(staticImgDir, { recursive: true });

const missingImgs = [];
for (const w of widgets) {
  if (!w.img) continue;
  const src = path.join(imgDir, w.img);
  if (fs.existsSync(src)) fs.copyFileSync(src, path.join(staticImgDir, w.img));
  else missingImgs.push(w.img);
}

const sorted = [...widgets].sort((a, b) => a.name.localeCompare(b.name, 'fr'));
sorted.forEach((w, i) => writeWidgetPage(w, i + 1));

const indexFile = path.join(outDir, 'index.md');
if (fs.existsSync(indexFile)) {
  const content = fs.readFileSync(indexFile, 'utf8');
  const updated = replaceBlock(content, 'LIST', renderIndexList());
  if (updated === null) console.warn('index.md : marqueurs AUTO:LIST absents, liste non mise à jour');
  else fs.writeFileSync(indexFile, updated);
}

console.log(`${widgets.length} pages de widgets générées dans ${path.relative(ROOT, outDir)}`);
if (missingImgs.length) console.warn(`Images introuvables : ${missingImgs.join(', ')}`);
