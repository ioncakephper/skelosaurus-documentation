# skelosaurus-documentation

Skelosaurus-documentation contains the documentation for Skelosaurus. The documentation is a Docusaurus v2 project.

- `website` folder contains the Docusaurus v2 project.
- `website\docs` folder contains documentation files.
- `website\sidebars.js` is the sidebar description file. Docusaurus uses it when building documentation.
- `website\docusaurus.config.js` is the Docusaurus configuration file.
- `skelo-doc-outline.md` is documentation outline `skelo` uses to generate documentation files in `website\docs` and `website\sidebars.js`

## Edit Skelosaurus documentation

1. Edit documentation files

- Edit `website/docs` files to change the content of documentation pages.
- Edit `website/docusaurus.config.js` in the `themeConfig/navbar` to change top navigation items.
- Edit `website/sidebars.js` to make adjustments to navigation bars.

2. Deploy documentation

The following will deploy to Github. `docusaurus.config.js` file contains all settings needed to deploy to `ioncakephper/skelosaurus-documentation` in the `gh-pages` branch.

```bash
cd website
cmd /C "set "GIT_USER=ioncakephper" && yarn deploy"
```

## Building documentation skeleton

The following describes how to create Skelosaurus documentation skeleton. You would do this to create documentation files. After this, you will edit documentation files as described in [**Edit Skelosaurus documentation**](#edit-skelosaurus-documentation).

1. Install `skelo`

Check `skelo` is installed:

```bash
skelo -V
```

To install `skelo`:

```bash
npm i -g skelosaurus
```

2. Create Docusaurus v2 project

```bash
npx @docusaurus/init@latest init website classic
```

3. Build docs and `sidebar.js`

```bash
skelo skelo-doc-outline -w ./website -d ./website/docs -p ./website-parts
```

4. Paste the following in `website/docusaurus.config.js`

```js
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
        {
          to: 'docs/release-notes/overview',
          label: 'Release notes',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
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

```

Deploy `Skelosaurus` documentation -- follow steps in step 2 in [**Edit Skelosaurus documentation**](#edit-skelosaurus-documentation)


