// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Electrolama Docs',
  tagline: '',
  url: 'https://docs.electrolama.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  //organizationName: 'facebook', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Electrolama Docs',
        logo: {
          alt: 'Electrolama!',
          src: 'img/electrolama-logo.png',
        },
        items: [
          {to: '/', label: 'Quick Start'},
          {to: '/guides', label: 'Guides & Articles'},
          {to: '/faq', label: 'Troubleshooting & FAQ'},
          {
            href: 'https://electrolama.com',
            label: 'electrolama.com',
            position: 'right',
          },
          {
            href: 'https://shop.electrolama.com',
            label: 'Shop',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Electrolama Docs',
            items: [
              {to: '/', label: 'Quick Start'},
              {to: '/guides', label: 'Guides & Articles'},
              {to: '/faq', label: 'Troubleshooting & FAQ'},
            ],
          },
          {
            title: 'More Electrolama',
            items: [
              {
                label: 'electrolama.com',
                href: 'https://electrolama.com',
              },
              {
                label: 'Electrolama Lab',
                href: 'https://lab.electrolama.com',
              },
            ],
          },
          {
            title: 'Elsewhere',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/electrolama',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UChY93DQb7u2Ow0mKY1KPVsA',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/electrolama',
              },
            ],
          },
        ],
        copyright: `All product and company names are trademarks or registered trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
