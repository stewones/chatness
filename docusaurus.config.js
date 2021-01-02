module.exports = {
  title: 'Chatness',
  tagline: 'Feature rich and portable chat stuff for Javascript apps',
  url: 'https://docs.chatness.app',
  baseUrl: '/',
  favicon: 'images/favicon.png',
  organizationName: 'chatness',
  projectName: 'chatness',
  stylesheets: [],
  themeConfig: {
    colorMode: { disableSwitch: false },
    prism: {
      theme: require('./src/js/monokaiTheme.js'),
    },
    navbar: {
      title: 'Chatness',
      logo: {
        alt: 'Chatness',
        src: 'images/chatness-logo.svg',
      },
      items: [
        {
          label: 'Getting Started',
          to: 'getting-started',
          position: 'right',
        },
        {
          label: 'FAQ',
          to: 'faq',
          position: 'right',
          href: 'https://chatness.app/faq',
        },

        {
          label: 'Need help?',
          href: 'https://chatness.app/contact',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Home',
              to: 'https://chatness.app/',
            },
            {
              label: 'Demo',
              to: 'https://demo.chatness.app/auth?ip=demo&utm_source=home',
            },
            {
              label: 'Faq',
              to: 'https://chatness.app/faq',
            },
            {
              label: 'Roadmap',
              to: 'https://chatness.app/roadmap',
            },
            {
              label: 'Changelog',
              to: 'https://chatness.app/changelog',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Pricing',
              to: 'https://chatness.app/pricing',
            },
            {
              label: 'Licensing',
              to: 'https://chatness.app/license',
            },
            {
              label: 'Docs',
              to: 'https://docs.chatness.app/',
            },
            {
              label: 'Contact',
              to: 'https://chatness.app/contact',
            },
          ],
        },
        {
          title: 'Examples',
          items: [
            {
              label: 'Alpine',
              to: 'https://chatness.app/framework/alpine',
            },
            {
              label: 'Ember',
              to: 'https://chatness.app/framework/ember',
            },
            {
              label: 'jQuery',
              to: 'https://chatness.app/framework/jquery',
            },
            {
              label: 'Mithril',
              to: 'https://chatness.app/framework/mithril',
            },
            {
              label: 'Preact',
              to: 'https://chatness.app/framework/preact',
            },
          ],
        },
        {
          title: '..',
          items: [
            {
              label: 'React',
              to: 'https://chatness.app/framework/react',
            },
            {
              label: 'Stencil',
              to: 'https://chatness.app/framework/stencil',
            },
            {
              label: 'Svelte',
              to: 'https://chatness.app/framework/svelte',
            },
            {
              label: 'Vanilla',
              to: 'https://chatness.app/framework/vanilla',
            },
            {
              label: 'Vue',
              to: 'https://chatness.app/framework/vue',
            },
          ],
        },
      ],
      logo: {
        alt: 'Chatness Logo',
        src: 'images/chatness-logo.svg',
        href: 'https://chatness.app',
      },
      copyright: `<small><span>©${new Date().getFullYear()}</span><br />handcrafted by <a href="https://twitter.com/stewones" rel="noopener" target="_blank">Stew</a></small>`,
    },
    gtag: {
      trackingID: 'G-CVQ2BYVZLS',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: './docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        // whether to index docs pages
        indexDocs: true,
        // must start with "/" and correspond to the routeBasePath configured for the docs plugin
        // use "/" if you use docs-only-mode
        // (see https://v2.docusaurus.io/docs/2.0.0-alpha.70/docs-introduction#docs-only-mode)
        docsRouteBasePath: '/docs',

        // Whether to also index the titles of the parent categories in the sidebar of a doc page.
        // 0 disables this feature.
        // 1 indexes the direct parent category in the sidebar of a doc page
        // 2 indexes up to two nested parent categories of a doc page
        // 3...
        //
        // Do _not_ use Infinity, the value must be a JSON-serializable integer.
        indexDocSidebarParentCategories: 2,

        // whether to index blog pages
        indexBlog: false,
        // must start with "/" and correspond to the routeBasePath configured for the blog plugin
        // use "/" if you use blog-only-mode
        // (see https://v2.docusaurus.io/docs/2.0.0-alpha.70/blog#blog-only-mode)
        blogRouteBasePath: '/blog',

        // whether to index static pages
        // /404.html is never indexed
        indexPages: true,

        // language of your documentation, see next section
        language: 'en',

        // lunr.js-specific settings
        lunr: {
          // When indexing your documents, their content is split into "tokens".
          // Text entered into the search box is also tokenized.
          // This setting configures the separator used to determine where to split the text into tokens.
          // By default, it splits the text at whitespace and dashes.
          //
          // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
          tokenizerSeparator: /[\s\-]+/,
        },
      },
    ],
  ],
};
