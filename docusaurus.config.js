// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Regelverk för Samordnad identitet och behörighet',
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
        docs: false,
        blog: {
          path: 'changelog',
          routeBasePath: 'changelog',
          blogTitle: 'Ändringslogg',
          blogSidebarTitle: 'Alla ändringar',
          showReadingTime: false,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'info',
        path: 'docs/info',
        routeBasePath: '/',
        sidebarPath: './sidebars-info.js',
        editUrl: undefined,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'villkorsbilagor',
        path: 'docs/villkorsbilagor',
        routeBasePath: 'villkorsbilagor',
        sidebarPath: './sidebars-villkorsbilagor.js',
        editUrl: undefined,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'avtalsmallar',
        path: 'docs/avtalsmallar',
        routeBasePath: 'avtalsmallar',
        sidebarPath: './sidebars-avtalsmallar.js',
        editUrl: undefined,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'policyer',
        path: 'docs/policyer',
        routeBasePath: 'policyer',
        sidebarPath: './sidebars-policyer.js',
        editUrl: undefined,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'styrning',
        path: 'docs/styrning',
        routeBasePath: 'styrning',
        sidebarPath: './sidebars-styrning.js',
        editUrl: undefined,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Metadata
      metadata: [
        { name: 'keywords', content: 'federation, identitet, behörighet, regelverk, SIB, Sverige, Digg, Ena' },
        { name: 'description', content: 'Regelverk för federationsplattformen inom Samordnad identitet och behörighet' },
      ],

      navbar: {
        title: 'SIB Regelverk',
        logo: {
          alt: 'Samordnad identitet och behörighet',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'omSidebar',
            docsPluginId: 'info',
            position: 'left',
            label: 'Om SIB',
          },
          {
            type: 'dropdown',
            label: 'Regelverk',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'villkorsbilagorSidebar',
                docsPluginId: 'villkorsbilagor',
                label: 'Villkorsbilagor',
              },
              {
                type: 'docSidebar',
                sidebarId: 'avtalsmallarSidebar',
                docsPluginId: 'avtalsmallar',
                label: 'Avtalsmallar',
              },
              {
                type: 'docSidebar',
                sidebarId: 'policyerSidebar',
                docsPluginId: 'policyer',
                label: 'Policyer',
              },
              {
                type: 'docSidebar',
                sidebarId: 'styrningSidebar',
                docsPluginId: 'styrning',
                label: 'Styrning',
              },
            ],
          },
          {
            type: 'docSidebar',
            sidebarId: 'guiderSidebar',
            docsPluginId: 'info',
            position: 'left',
            label: 'Guider',
          },
          {
            type: 'docSidebar',
            sidebarId: 'omRegelverketSidebar',
            docsPluginId: 'info',
            position: 'left',
            label: 'Om regelverket',
          },
      {
        to: '/changelog',
        label: 'Ändringslogg',
        position: 'right',
      },
          {
            type: 'docsVersionDropdown',
            docsPluginId: 'villkorsbilagor',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            docsPluginId: 'policyer',
            position: 'right',
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
                label: 'Samordnad identitet och behörighet',
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
            title: 'Källkod',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/johantjader/test-sib-federation-framework',
              },
            ],
          },
        ],
        copyright: 'Samordnad identitet och behörighet tillhandahålls av <a href="https://www.digg.se" target="_blank" rel="noopener noreferrer">Digg</a> som en del av <a href="https://www.digg.se/digitala-tjanster/ena" target="_blank" rel="noopener noreferrer">Ena \u2013 Sveriges digitala infrastruktur</a>.',
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
