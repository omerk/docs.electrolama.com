// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Electrolama Support',
  tagline: '',
  url: 'https://support.electrolama.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'electrolama',
  projectName: 'support.electrolama.com',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
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
    plugins: [
      [
        require.resolve("@cmfcmf/docusaurus-search-local"),
        {
          // whether to index docs pages
          indexDocs: true,

          // Whether to also index the titles of the parent categories in the sidebar of a doc page.
          // 0 disables this feature.
          // 1 indexes the direct parent category in the sidebar of a doc page
          // 2 indexes up to two nested parent categories of a doc page
          // 3...
          //
          // Do _not_ use Infinity, the value must be a JSON-serializable integer.
          indexDocSidebarParentCategories: 0,

          // whether to index blog pages
          indexBlog: false,

          // whether to index static pages
          // /404.html is never indexed
          indexPages: false,

          // language of your documentation, see next section
          language: "en",

          // setting this to "none" will prevent the default CSS to be included. The default CSS
          // comes from autocomplete-theme-classic, which you can read more about here:
          // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
          style: undefined,

          // lunr.js-specific settings
          lunr: {
            // When indexing your documents, their content is split into "tokens".
            // Text entered into the search box is also tokenized.
            // This setting configures the separator used to determine where to split the text into tokens.
            // By default, it splits the text at whitespace and dashes.
            //
            // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
            tokenizerSeparator: /[\s\-]+/,
            // https://lunrjs.com/guides/customising.html#similarity-tuning
            //
            // This parameter controls the importance given to the length of a document and its fields. This
            // value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
            // reduces the effect of different length documents on a term’s importance to that document.
            b: 0.75,
            // This controls how quickly the boost given by a common word reaches saturation. Increasing it
            // will slow down the rate of saturation and lower values result in quicker saturation. The
            // default value is 1.2. If the collection of documents being indexed have high occurrences
            // of words that are not covered by a stop word filter, these words can quickly dominate any
            // similarity calculation. In these cases, this value can be reduced to get more balanced results.
            k1: 1.2,
            // By default, we rank pages where the search term appears in the title higher than pages where
            // the search term appears in just the text. This is done by "boosting" title matches with a
            // higher value than content matches. The concrete boosting behavior can be controlled by changing
            // the following settings.
            titleBoost: 5,
            contentBoost: 1,
            parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
          }
        },
      ],
    ],
};

module.exports = config;
