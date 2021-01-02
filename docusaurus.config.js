module.exports = {
  title: 'Chatness',
  tagline: 'Feature rich and portable chat stuff for Javascript apps',
  url: 'https://chatness.app',
  baseUrl: '/',
  favicon: 'images/favicon.png',
  organizationName: 'chatness',
  projectName: 'chatness',
  stylesheets: [],
  themeConfig: {
    disableDarkMode: false,
    prism: {
      theme: require('./src/js/monokaiTheme.js'),
    },
    navbar: {
      title: 'Chatness',
      image: 'images/chatness-logo.svg',
      logo: {
        alt: 'Chatness',
        src: 'images/chatness-logo.svg',
      },
      links: [
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
      copyright: `<small><span>©${new Date().getFullYear()}</span><br />handcrafted by <a href="https://twitter.com/stw" rel="noopener" target="_blank">Stw</a></small>`,
    },
    algolia: {
      apiKey: 'asdf',
      indexName: 'chatness',
      algoliaOptions: {},
    },
    googleAnalytics: {
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
};
