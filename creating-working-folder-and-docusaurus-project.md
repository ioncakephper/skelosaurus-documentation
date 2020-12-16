
```bash
$ mkdir my-project
$ cd my-project
$ npx @docusaurus/init@latest my-documentation classic
```

```markdown title="my-project/my-documentation-outline.md"
## docs

- Getting started
    - Overview
    - Installation
    - Quick skeleton documentation
```

```bash title="build docs with skelo"

```bash title="build skeleton docs with skelo"
$ skelo my-documentation-outline -w ./my-documentation -d ./my-documentation/docs -p ./my-documentation-parts
```

```js title="edit docusaurus.config.js"
{
    ...
    navbar: {
      title: 'My Documentation',
      logo: {
        alt: 'My Documentation Logo',
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
        //     to: 'docs/overview',
        //     label: 'Docs',
        //     position: 'left',
        // },
            ...
    }
}
```

```bash title="run development server"
$ cd my-documentation
$ npm run start
```


