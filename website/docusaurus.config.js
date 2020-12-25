module.exports = {
  title: 'Skelosaurus',
  tagline: 'Skeleton documentation generator for Docusaurus-powered projects',
  url: 'https://skelosaurus.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ioncakephper', // Usually your GitHub org/user name.
  projectName: 'skelosaurus-documentation', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    hideableSidebar: true,
    navbar: {
      title: 'Skelosaurus',
      logo: {
        alt: 'Skelosaurus Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/overview',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {
        //   to: 'docs/release-notes/overview',
        //   label: 'Release notes',
        //   position: 'left',
        // },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/ioncakephper/skelosaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Markdown Style Guide',
              to: 'docs/style-guide',
            },
            {
              label: 'Outline and Tags',
              to: 'docs/guides/outline-and-tags'
            },
            {
              label: 'Build skeleton documentation',
              to: 'docs/guides/build-skeleton-documentation'
            }
            // {
            //   label: 'Second Doc',
            //   to: 'docs/doc2/',
            // },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/skelosaurus',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/xpf5YYCm5b',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/skelosaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ioncakephper/skelosaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Skelosaurus, Inc. Built with Docusaurus. Outlined with Skelosaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ioncakephper/skelosaurus-documentation/edit/master/website/',
            // 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ioncakephper/skelosaurus-documentation/edit/master/website/',
            // 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
