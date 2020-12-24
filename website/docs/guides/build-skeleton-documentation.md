---
title: Build skeleton documentation
id: build-skeleton-documentation
sidebar_label: Build skeleton documentation
---

<!-- @part src="../../website-parts/build-skeleton-documentation/h1-build-skeleton-documentation-description.md" -->

Incididunt ea ut aute Lorem. Tempor ad cillum sint proident laboris minim et. Excepteur aliqua nostrud consectetur ex culpa proident non ea incididunt nisi velit duis excepteur. Elit consectetur nisi velit tempor nostrud commodo sit. Proident cillum amet proident nisi nulla elit nisi exercitation reprehenderit sint anim consequat qui.
<!-- @/part -->

<!-- @part src="../../website-parts/build-skeleton-documentation/h1-build-skeleton-documentation-body.md" -->
<!-- Your content goes here, replacing this comment -->

## Create Docusaurus project

You may wonder "I thought this was Skelosaurus. What do you mean Docusaurus?". Skelosaurus, the tool explained here, creates files that Docusaurus will use. Skelosaurus helps content authors who are familiar with Docusaurus. Many of the concepts used in this documentation will make sense to seasoned Docusaurus users, but you can use Skelosaurus by following instructions in this site.

Create a Docusaurus project where Skelosaurus will generate files, specifically the `sidebars.js` and `docs` folder.

```bash
npx @docusaurus/init@latest init <project> <theme>
``` 
This executes the `docusaurus-init` script, use the `init` command and pass the project folder `project` using the `theme` setting.

Specifically, we will create the `website` project that uses the `classic` theme.

```bash
npx @docusaurus/init@latest init website classic
```
## Create documentation outline file

Docusaurus documentation uses one or more sidebars, the left section of the site with links to topics. A sidebar has several **sections** -- a title that opens or closes to reveal to show its content. Inside a section you will find items (links to pages) or other sections.

The documentation outline captures all these concepts. In the outline, you mention the sidebar name, and use a bullet list. Top level items in the bullet list indicate sections in the sidebar. Items inside the bullet list indicate documentation page. An item having its own items is actually a sub-section. Let's go over an example. You will recognize the Markdown format which is quite easy to use.

In `website` folder, create `outline.md`:

```md
## docs

- Getting started
	- Overview
	- How to use
	- Where to get it
		- Getting software from a brick store
		- Getting software from app store
- Guides
	- Configure your software
```
In the level two heading at the top of the file, we placed the sidebar name. The 

<!-- @/part -->

