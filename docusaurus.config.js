// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const remarkFlex = require('./src/plugins/remark-flex');
const remarkImage = require('./src/plugins/remark-images');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Blog',
  tagline: 'Dev Blog by LeBalz',
  url: 'https://lebalz.ch',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lebalz', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  trailingSlash: true,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'synopsis',
          // Please change this to your repo.
          editUrl: 'https://github.com/lebalz/blog/edit/main/',
          beforeDefaultRemarkPlugins: [
            remarkImage
          ],
          remarkPlugins: [
            remarkFlex
          ],
        },
        blog: {
          blogTitle: 'Dev Blog',
          routeBasePath: '/',
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          postsPerPage: 15,
          blogSidebarTitle: 'Posts',
          // Please change this to your repo.
          editUrl:
            'https://github.com/lebalz/blog/edit/main/',
          beforeDefaultRemarkPlugins: [
            remarkImage
          ],
          remarkPlugins: [
            remarkFlex
          ]
        },
        pages: {
          beforeDefaultRemarkPlugins: [
            remarkImage
          ],
          remarkPlugins: [
            remarkFlex
          ]
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.scss'),
            require.resolve('./node_modules/react-image-gallery/styles/css/image-gallery.css')
          ]
        },
        sitemap: {
          priority: 0.9,
          changefreq: 'daily'
        }
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Dev Blog',
        logo: {
          alt: 'Le Balz',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Knowledgebase',
          },
          {
            href: 'https://github.com/lebalz/blog',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Knowledgebase',
            items: [
              {
                label: 'Dokku',
                to: '/synopsis/dokku',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/lebalz',
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} Le Balz`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'powershell'],
      },
    }),
  plugins: [
    'docusaurus-plugin-sass',
    '@saucelabs/theme-github-codeblock',
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Whether to also index the titles of the parent categories in the sidebar of a doc page.
        // 0 disables this feature.
        // 1 indexes the direct parent category in the sidebar of a doc page
        // 2 indexes up to two nested parent categories of a doc page
        // 3...
        //
        // Do _not_ use Infinity, the value must be a JSON-serializable integer.
        indexDocSidebarParentCategories: 5,

        // whether to index static pages
        // /404.html is never indexed
        indexPages: false,
      }
    ]
  ],
  scripts: [
    // Object format.
    {
      src: 'https://umami.lebalz.ch/tell-me.js',
      ['data-website-id']: 'fc37f18b-ef7a-4e4c-aebd-dc95acfcee02',
      ['data-domains']: 'lebalz.ch',
      async: true,
      defer: true
    },
  ],
};

module.exports = config;
