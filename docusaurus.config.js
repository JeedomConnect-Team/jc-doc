// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jeedom Connect',
  tagline: 'Solution mobile pour la maison connectée',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jeedomconnect-team.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/jc-doc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jeedomconnect-team', // Usually your GitHub org/user name.
  projectName: 'jc-doc', // Usually your repo name.
  deploymentBranch: 'build',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/jeedomconnect-team/jc-doc/edit/main/",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      imageZoom: {
        // CSS selector to apply the plugin to, defaults to '.markdown img'
        selector: '.markdown img:not([zoom="false"])',
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        options: {
          margin: 24,
          //background: '#BADA55',
          //scrollOffset: 0,
          //container: '#zoom-container',
          //template: '#zoom-template',
        },
      },
      // Replace with your project's social card
      image: 'img/social-card.png',
      navbar: {
        title: 'Jeedom Connect',
        logo: {
          alt: 'JeedomConnect Logo',
          src: 'img/jeedomConnect.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutoriels',
          },
          {
            type: 'docSidebar',
            sidebarId: 'changelogSidebar',
            position: 'left',
            label: 'Changelog',
          },
          { to: '/download', label: 'Téléchargement', position: 'left' },
          { to: '/showcase', label: 'Galerie', position: 'left' },
          {
            to: '/docs/help',
            label: 'A l\'aide',
            position: 'right',
          },
          {
            to: '/docs/donate',
            label: 'Nous soutenir',
            position: 'right',
          },
          {
            href: 'https://github.com/jeedomconnect-team/JeedomConnect',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'Documentation',
                to: '/docs/documentation/intro',
              },
              {
                label: 'Téléchargement',
                to: '/download',
              },
              {
                label: 'Licence',
                to: '/license',
              },
              {
                label: 'Politique de confidentialité',
                to: '/privacy',
              }
            ],
          },
          {
            title: 'Jeedom',
            items: [
              {
                label: 'Community Jeedom',
                href: 'https://community.jeedom.com/tag/plugin-jeedomconnect',
              },
              {
                label: 'Market Jeedom',
                href: 'https://market.jeedom.com/index.php?v=d&p=market_display&id=4077',
              }
            ],
          },
          {
            title: 'Plus',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/jeedomconnect-team/JeedomConnect',
              },
              {
                label: 'APK Versions',
                href: 'https://github.com/jeedomconnect-team/JeedomConnect/releases',
              },
              {
                label: 'Nous soutenir',
                to: '/docs/donate',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jeedom Connect.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
