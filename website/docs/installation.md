---
title: How to install Skelosaurus
id: installation
sidebar_label: Installation
---

<!-- @part src="../../website-parts/installation/h1-installation-description.md" -->

Skelosaurus is a package with an executable script. To run the executable script, you have to install the package globally.
<!-- @/part -->

<!-- @part src="../../website-parts/installation/h1-installation-body.md" -->
<!-- Your content goes here, replacing this comment -->
<!-- @/part -->

## Installing Skelosaurus
<!-- @part src="..\..\website-parts/installing-skelosaurus/h2-installing-skelosaurus-description.md" -->

<!-- @/part -->



<!-- @part src="..\..\website-parts/installing-skelosaurus/h2-installing-skelosaurus-body.md" -->
<!-- Your content goes here, replacing this comment -->
Install `skelosaurus` package globally:

```bash
npm i -g skelosaurus
```

`skelo` command is now available anywhere on your local computer.
<!-- @/part -->

## Verifying skelo runs
<!-- @part src="..\..\website-parts/verifying-skelo-runs/h2-verifying-skelo-runs-description.md" -->

<!-- @/part -->



<!-- @part src="..\..\website-parts/verifying-skelo-runs/h2-verifying-skelo-runs-body.md" -->
<!-- Your content goes here, replacing this comment -->
- A quick method to check you can use `skelo` is to get `skelo`'s version.

```bash
skelo -V
skelo --version
v2.0.10
```

:::info
Note the uppercase `-V` shortcut for `--version` option. Some commands use lowercase, so make sure you use the correct shortcut.
:::

- Get `skelo` help with `-h` or `--help` options. You can also use `help` sub-command.

```bash
skelo -h
skelo --help
skelo help
```

Any of the methods of getting help will provide the following:

```
Usage: skelo command [options] outlineFiles...

Skeleton documentation generator for Docusaurus (v2 and v1)

Options:
  -V, --version                 output the version number
  -h, --help                    display help for command

Commands:
  build [options] <sources...>  build doc files and sidebars file
  load [options]                load documentation parts into respective
                                files
  save [options]                save documentation parts into respective
                                files
  help [command]                display help for command

```

- To get help for a sub-command, add sub-command to `help` sub-command. For example:

```bash
skelo help build
```

```
Usage: skelo build [options] <sources...>

build doc files and sidebars file

Options:
  -c, --clear           start with a clear docs path
  -d, --docs <path>     path where markdown files are generated into (default:
                        "./docs")
  -f, --autofolder      create subfolder for categories and subtopics (default:
                        false)
  -i, --intro           create an Intro page in each subcategory
  --introTitle [title]  title to use in intro pages (default: "Overview")
  --no-v2               generate for Docusaurus v1
  -o, --out <filename>  filename to contains sidebars (default: "sidebars")
  -p, --parts [path]    path where parts will be stored (default: "./")
  -w, --website <path>  path to store sidebars content file (default: "./")
  -h, --help            display help for command

```
<!-- @/part -->

