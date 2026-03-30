// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Regelverk f\u00f6r Samordnad identitet och beh\u00f6righet',
  tagline: 'Federationsplattformens regelverk, villkor och tekniska specifikationer',
  favicon: 'img/favicon.ico',

  // GitHub Pages URL for test namespace
  url: 'https://johantjader.github.io',
  baseUrl: '/test-sib-federation-framework/',

  // GitHub Pages deployment config
  organizationName: 'johantjader',
  projectName: 'test-sib-federation-framework',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'sv',
    locales: ['sv'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // No editUrl — hides "Edit this page" for public-facing site
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Metadata
      metadata: [
        { name: 'keywords', content: 'federation, identitet, beh\u00f6righet, regelverk, SIB, Sverige, Digg, Ena' },
        { name: 'description', content: 'Regelverk f\u00f6r federationsplattformen inom Samordnad identitet och beh\u00f6righet' },
      ],

      navbar: {
        title: 'SIB Regelverk',
        logo: {
          alt: 'Samordnad identitet och beh\u00f6righet',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'omSidebar',
            position: 'left',
            label: 'Om SIB',
          },
          {
            type: 'docSidebar',
            sidebarId: 'regelverkSidebar',
            position: 'left',
            label: 'Regelverk',
          },
          {
            type: 'docSidebar',
            sidebarId: 'guiderSidebar',
            position: 'left',
            label: 'Guider',
          },
          {
            type: 'docSidebar',
            sidebarId: 'omRegelverketSidebar',
            position: 'left',
            label: 'Om regelverket',
          },
          {
            href: 'https://www.digg.se/digitala-tjanster/samordnad-identitet-och-behorighet',
            label: 'digg.se',
            position: 'right',
          },
          {
            href: 'https://github.com/johantjader/test-sib-federation-framework',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Om',
            items: [
              {
                label: 'Samordnad identitet och beh\u00f6righet',
                href: 'https://www.digg.se/digitala-tjanster/samordnad-identitet-och-behorighet',
              },
              {
                label: 'Ena \u2013 Sveriges digitala infrastruktur',
                href: 'https://www.digg.se/digitala-tjanster/ena',
              },
            ],
          },
          {
            title: 'Digg',
            items: [
              {
                label: 'digg.se',
                href: 'https://www.digg.se',
              },
            ],
          },
          {
            title: 'K\u00e4llkod',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/johantjader/test-sib-federation-framework',
              },
            ],
          },
        ],
        copyright: 'Samordnad identitet och beh\u00f6righet tillhandah\u00e5lls av <a href="https://www.digg.se" target="_blank" rel="noopener noreferrer">Digg</a> som en del av <a href="https://www.digg.se/digitala-tjanster/ena" target="_blank" rel="noopener noreferrer">Ena \u2013 Sveriges digitala infrastruktur</a>.',
      },

      // Support both light and dark mode
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      // Table of contents depth
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

export default config;
