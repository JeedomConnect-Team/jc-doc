// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jeedom Connect',
  tagline: 'Solution mobile pour lamaison connectée',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jared-94.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/jc-doc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jared-94', // Usually your GitHub org/user name.
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
    'plugin-image-zoom'
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
            "https://github.com/jared-94/jc-doc/edit/main/",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Doc',
          },
          { to: '/download', label: 'Téléchargement', position: 'left' },
          { to: '/showcase', label: 'Galerie', position: 'left' },
          {
            href: 'https://github.com/jared-94/JeedomConnect',
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
                to: '/docs/intro',
              },
              {
                label: 'Téléchargement',
                to: '/download',
              }
            ],
          },
          {
            title: 'Jeedom',
            items: [
              {
                label: 'Community Jeedom',
                href: 'https://community.jeedom.com/',
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
                href: 'https://github.com/jared-94/JeedomConnect',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jeedom Connect.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
