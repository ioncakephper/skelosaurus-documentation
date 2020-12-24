---
title: Outline and tags
id: outline-and-tags
sidebar_label: Outline and tags
---

<!-- @part src="../../website-parts/outline-and-tags/h1-outline-and-tags-description.md" -->

Simple outline with several sections, several sidebars in an outline file, and outline tags.
<!-- @/part -->

<!-- @part src="../../website-parts/outline-and-tags/h1-outline-and-tags-body.md" -->
<!-- Your content goes here, replacing this comment -->
<!-- @/part -->

## Sidebar name with simple outline
<!-- @part src="..\..\website-parts/sidebar-name-with-simple-outline/h2-sidebar-name-with-simple-outline-description.md" -->
<!-- Eiusmod nisi velit eu ea commodo. Reprehenderit officia sunt ipsum ex mollit in nostrud. Qui esse ea eiusmod officia incididunt pariatur. Velit minim dolor sint fugiat esse irure aliquip labore pariatur. Labore consectetur nulla nulla sunt proident reprehenderit commodo sunt aliqua anim sint sint irure velit. -->
<!-- @/part -->



<!-- @part src="..\..\website-parts/sidebar-name-with-simple-outline/h2-sidebar-name-with-simple-outline-body.md" -->
<!-- Your content goes here, replacing this comment -->
Let's start with a simple outline, and move along slowly.

```md title="Example 1"
## docs

- Section A
	- Topic 1
	- Topic 2
- Section B
	- Topic 3
- Section C
	- Topic 4
```
This outline describes the structure of a sidebar called `docs`. We need a sidebar name when we refer to a sidebar's content. You place a sidebar name in a level 2 heading. Sidebar's structure appears in a bullet list immediately following the sidebar name. In our example above, the sidebar has three sections, Section A, Section B, and Section C. Topics inside each section appear as indented bullet list. Topic 1 and Topic 2 are topics inside Section A. Both Section B and Section C have a single topic, Topic 2 and Topic 4, respectively.

`sidebars.js` -- the sidebars description `skelo` generates contains the following:
```js
module.exports = {
	"docs": {
		"Section A": [
			"topic-1",
			"topic-2"
		},
		"Section B": [
			"topic-3"
		],
		"Section C": [
			"topic-4"
		]
	}
}
```

`skelo` will generate topic files in `.md` format: topic-1.md, topic-2.md, topic-3.md, and topic-4.md, and each topic will have a title identical to its sidebar entry. For example, clicking Topic 1 on the sidebar will show the topic-1.md whose title is Topic 1.

`topic-1.md` contains YAML front-matter to describe the title, id, and sidebar_label -- the format Docusaurus expects for documentation files:

```md
---
title: Topic 1
id: topic-1
sidebar_label: Topic 1
---
```

Let's move along, and create a sub-section in the outline:

```md  title="Example 2"
## docs

- Section A
	- Topic 1
	- Subtopic 1 of A
		- Topic 2
		- Topic 5
- Section B
	- Topic 3
- Section C
	- Topic 4
```
The `sidebars.js` file resulting from `skelo` after processing the outline above is:
```js
module.exports = {
	"docs": {
		"Section A": [
			"topic-1",
			{
				type: "category",
				label: "Subtopic 1 of A",
				items: [
					"topic-2",
					"topic-5"
				]
			}
		},
		"Section B": [
			"topic-3"
		],
		"Section C": [
			"topic-4"
		]
	}
}
```

The outline above is similar to the one on top, with Section A containing Topic 1 and a subsection Subtopic 1 of A with Topic 2 and Topic 5 inside it. The following files will be generated:
- topic-1.md
- topic-2.md
- topic-3.md
- topic-4.md
- topic-5.md

We will make a further change:

```md  title="Example 3"
## docs

- Section A
	- Topic 1
		- @headers
			- Header 1
				- Header 1.1
				- Header 1.2
			- Header 2
				- Header 2.1
				- Header 2.2
	- Subtopic 1 of A
		- Topic 2
		- Topic 5
- Section B
	- Topic 3
- Section C
	- Topic 4
```
What's going on here? The @headers sub-item inside Topic 1 indicates a topic headers outline with Header 1 and Header 2 as top level headers inside the topic. Header 1.1 and Header 1.2 appear as sub-headers of Header 1, while Header 2.1 and Header 2.2 are sub-headers of Header 2.

The `sidebars.js` has not changed compared to previous example. What has changed is the **content** of `topic-1.md` to include ## headers:

```md
---
title: Topic 1
id: topic-1
sidebar_label: Topic 1
---

## Header 1

### Header 1.1

### Header 1.2

## Header 2

### Header 2.1

### Header 2.2
```

<!-- @/part -->

## Several sidebars in an outline file
<!-- @part src="..\..\website-parts/several-sidebars-in-an-outline-file/h2-several-sidebars-in-an-outline-file-description.md" -->
<!-- Officia anim aliqua est dolore aute sit ea incididunt adipisicing in eiusmod amet pariatur. Est laborum ut anim ut ea amet quis. Consectetur reprehenderit mollit adipisicing ut velit magna velit ut dolore. Nulla id sint quis non ex est mollit et irure anim do. Consequat commodo irure consequat dolore Lorem cupidatat labore nostrud magna anim ullamco. -->
<!-- @/part -->



<!-- @part src="..\..\website-parts/several-sidebars-in-an-outline-file/h2-several-sidebars-in-an-outline-file-body.md" -->
<!-- Your content goes here, replacing this comment -->
You can place several sidebars in an outline file as pairs of sidebar name and bullet list. The `sidebars.js` resulting from processing the outline file will contain sections for each sidebar name.

Let's examine the `multi-sidebars-outline.md` file:

```md title="multi-sidebars-outline.md"
## docs

- Getting started
	- Overview
	- Introduction
- Guides
	- Build basic documentation

## features

- Product features
	- Features overview
	- First feature
	- Second feature
```
This outline contains definitions for two sidebars: `docs` and `features`, each sidebar name followed by its outline. All topic files `skelo` generate will go in the folder indicated in the `-d` or `--docs` option.

The `sidebars.js` file contains:

```js title="sidebars.js"
module.exports = {
	"docs": {
		"Getting started": [
			"overview",
			"introduction"
		],
		"Guides": [
			"build-basic-documentation"
		]
	},
	"features": {
		"Product features": [
			"features-overview",
			"first-feature",
			"second-feature"
		]
	}
}
```
<!-- @/part -->

## Customize outline with tags
<!-- @part src="..\..\website-parts/customize-outline-with-tags/h2-customize-outline-with-tags-description.md" -->
<!-- Aliquip labore in incididunt velit amet commodo incididunt. Incididunt officia elit cupidatat mollit ad laboris laboris eu ad sunt duis aliqua ea. Deserunt laboris dolor tempor aliquip. Nulla nostrud aliqua anim in anim ullamco sunt ex. Voluptate proident ipsum incididunt culpa. -->
<!-- @/part -->

You can control what `skelo` generates for sections, topic, sub-sections, and headers with outline tags. Outline tags follow the outline entry, and start with `@` followed by tag name and tag content. Each outline tag also has a shortcut, usually a single letter.

### @brief, @b

Brief description text following the section, topic, or header.

**Usage**: @b word [word...]

**Example**:

```md
## docs

- Getting started
	- First topic @b Introduction to first topic page. This text is the first paragraph following topic title.
```

### @folder, @f

Create folder based on outline item, or use the `@slug` value.

**Usage**: @f

**Example**:

```md
## docs

- Getting started
	- First topic
	- Second topic
- Guides @f
	- First guide @b This topic is stored in the guides folder as guides/first-guide.md
	- Second guide @f @s other guide
		- Third guide @b This is stored in the other-guide/third-guide.md
```

### @headers

Provide topic header outline on following lines.

The `@headers` tag appear on a line of its own, as a subitem of the topic. Following lines include the headers outline as a bullet list inside `@headers`

**Usage**: - @headers

**Example**:

```md
...
	- Topic
		- @headers
			- Header 1 inside Topic
				- Subheader 1 inside Header 1
				- Subheader 2 inside Header 1
			- Header 2 inside Topic
			- Header 3 Inside Topic
				- Subheader 3 Inside Header 3
					- Subsubheader 1 inside Subheader 3
```

### @slug, @s

Slug words as alternative topic file identifier. Use next words to create a slug. For example, "@s Sample alternative" generates the topic slug: `sample-alternative`.

**Usage**: @slug word [word...]

**Example**:

```md
## docs

- Getting started
	- First topic @slug important topic
	- Second topic @s document two @brief Alternative title for second topic
```

### @title, @t

Alternative topic title to use instead of navigation item.

**Usage**: @topic word [word...]

**Example**:

```md
## docs

- Getting started
	- First topic @t Examine our first topic @slug important topic @b One of the most important features in this document is described here.
	- Second topic @s document two @brief Alternative title for second topic
```
