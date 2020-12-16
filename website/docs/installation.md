---
title: Installation
id: installation
sidebar_label: Installation
---

<!-- @part src="../../website-parts/installation/h1-installation-description.md" -->

Deserunt eu culpa qui aliquip cillum elit sit non ut ipsum nostrud reprehenderit et. Pariatur adipisicing cupidatat laborum non ea aute eu amet proident velit exercitation esse ad eu. Duis irure do cillum esse et exercitation aliqua enim minim nostrud sint laborum. Veniam et adipisicing ad aute Lorem. Pariatur elit sint aute magna commodo sunt eu elit veniam exercitation irure est aute quis.
<!-- @/part -->

<!-- @part src="../../website-parts/installation/h1-installation-body.md" -->
<!-- Your content goes here, replacing this comment -->
<!-- @/part -->

## Installing Skelosaurus
<!-- @part src="..\..\website-parts/installing-skelosaurus/h2-installing-skelosaurus-description.md" -->
<!-- Dolore amet deserunt non tempor eiusmod proident magna velit proident ea. Id fugiat qui proident culpa esse. Qui incididunt nisi ipsum aute dolore. Ipsum tempor aliquip deserunt ex eiusmod proident dolore eiusmod consequat nulla ullamco. Ut tempor qui veniam deserunt sit magna veniam irure ullamco adipisicing aliqua aliquip ullamco. -->
<!-- @/part -->



<!-- @part src="..\..\website-parts/installing-skelosaurus/h2-installing-skelosaurus-body.md" -->
<!-- Your content goes here, replacing this comment -->
Install `skelosaurusv2` package globally:

```bash
npm i -g skelosaurusv2
```

`skelo` command is now available anywhere on your local computer.
<!-- @/part -->

## Check skelo runs
<!-- @part src="..\..\website-parts/check-skelo-runs/h2-check-skelo-runs-description.md" -->
Labore mollit ut laborum exercitation velit consectetur veniam. Cupidatat nostrud deserunt ipsum mollit commodo dolor velit laborum fugiat occaecat et incididunt in sunt. Occaecat do velit enim proident consequat ad. Et commodo cupidatat ut aliqua ut. Laboris et tempor aliquip eu laborum elit aute anim magna incididunt veniam labore commodo amet.
<!-- @/part -->



<!-- @part src="..\..\website-parts/check-skelo-runs/h2-check-skelo-runs-body.md" -->
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

