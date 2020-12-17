(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,m=p["".concat(r,".").concat(u)]||p[u]||b[u]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(3),a=n(7),o=(n(0),n(105)),r={title:"Outline and tags",id:"outline-and-tags",sidebar_label:"Outline and tags"},l={unversionedId:"guides/outline-and-tags",id:"guides/outline-and-tags",isDocsHomePage:!1,title:"Outline and tags",description:"Simple outline with several sections, several sidebars in an outline file, and outline tags.",source:"@site/docs\\guides\\outline-and-tags.md",slug:"/guides/outline-and-tags",permalink:"/docs/guides/outline-and-tags",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/outline-and-tags.md",version:"current",sidebar_label:"Outline and tags",sidebar:"docs",previous:{title:"Quick skelo demo",permalink:"/docs/quick-skelo-demo"},next:{title:"Build skeleton documentation",permalink:"/docs/guides/build-skeleton-documentation"}},c=[{value:"Sidebar name with simple outline",id:"sidebar-name-with-simple-outline",children:[]},{value:"Several sidebars in an outline file",id:"several-sidebars-in-an-outline-file",children:[]},{value:"Customize outline with tags",id:"customize-outline-with-tags",children:[{value:"@brief, @b",id:"brief-b",children:[]},{value:"@folder, @f",id:"folder-f",children:[]},{value:"@slug, @s",id:"slug-s",children:[]},{value:"@title, @t",id:"title-t",children:[]}]}],s={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Simple outline with several sections, several sidebars in an outline file, and outline tags."),Object(o.b)("h2",{id:"sidebar-name-with-simple-outline"},"Sidebar name with simple outline"),Object(o.b)("p",null,"Let's start with a simple outline, and move along slowly."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-md",metastring:'title="Example 1"',title:'"Example','1"':!0}),"## docs\n\n- Section A\n    - Topic 1\n    - Topic 2\n- Section B\n    - Topic 3\n- Section C\n    - Topic 4\n")),Object(o.b)("p",null,"This outline describes the structure of a sidebar called ",Object(o.b)("inlineCode",{parentName:"p"},"docs"),". We need a sidebar name when we refer to a sidebar's content. You place a sidebar name in a level 2 heading. Sidebar's structure appears in a bullet list immediately following the sidebar name. In our example above, the sidebar has three sections, Section A, Section B, and Section C. Topics inside each section appear as indented bullet list. Topic 1 and Topic 2 are topics inside Section A. Both Section B and Section C have a single topic, Topic 2 and Topic 4, respectively."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"sidebars.js")," -- the sidebars description ",Object(o.b)("inlineCode",{parentName:"p"},"skelo")," generates contains the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),'module.exports = {\n    "docs": {\n        "Section A": [\n            "topic-1",\n            "topic-2"\n        },\n        "Section B": [\n            "topic-3"\n        ],\n        "Section C": [\n            "topic-4"\n        ]\n    }\n}\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"skelo")," will generate topic files in ",Object(o.b)("inlineCode",{parentName:"p"},".md")," format: topic-1.md, topic-2.md, topic-3.md, and topic-4.md, and each topic will have a title identical to its sidebar entry. For example, clicking Topic 1 on the sidebar will show the topic-1.md whose title is Topic 1."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"topic-1.md")," contains YAML front-matter to describe the title, id, and sidebar_label -- the format Docusaurus expects for documentation files:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-md"}),"---\ntitle: Topic 1\nid: topic-1\nsidebar_label: Topic 1\n---\n")),Object(o.b)("p",null,"Let's move along, and create a sub-section in the outline:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-md",metastring:'title="Example 2"',title:'"Example','2"':!0}),"## docs\n\n- Section A\n    - Topic 1\n    - Subtopic 1 of A\n        - Topic 2\n        - Topic 5\n- Section B\n    - Topic 3\n- Section C\n    - Topic 4\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"sidebars.js")," file resulting from ",Object(o.b)("inlineCode",{parentName:"p"},"skelo")," after processing the outline above is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),'module.exports = {\n    "docs": {\n        "Section A": [\n            "topic-1",\n            {\n                type: "category",\n                label: "Subtopic 1 of A",\n                items: [\n                    "topic-2",\n                    "topic-5"\n                ]\n            }\n        },\n        "Section B": [\n            "topic-3"\n        ],\n        "Section C": [\n            "topic-4"\n        ]\n    }\n}\n')),Object(o.b)("p",null,"The outline above is similar to the one on top, with Section A containing Topic 1 and a subsection Subtopic 1 of A with Topic 2 and Topic 5 inside it. The following files will be generated:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"topic-1.md"),Object(o.b)("li",{parentName:"ul"},"topic-2.md"),Object(o.b)("li",{parentName:"ul"},"topic-3.md"),Object(o.b)("li",{parentName:"ul"},"topic-4.md"),Object(o.b)("li",{parentName:"ul"},"topic-5.md")),Object(o.b)("p",null,"We will make a further change:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-md",metastring:'title="Example 3"',title:'"Example','3"':!0}),"## docs\n\n- Section A\n    - Topic 1\n        - @headers\n            - Header 1\n                - Header 1.1\n                - Header 1.2\n            - Header 2\n                - Header 2.1\n                - Header 2.2\n    - Subtopic 1 of A\n        - Topic 2\n        - Topic 5\n- Section B\n    - Topic 3\n- Section C\n    - Topic 4\n")),Object(o.b)("p",null,"What's going on here? The @headers sub-item inside Topic 1 indicates a topic headers outline with Header 1 and Header 2 as top level headers inside the topic. Header 1.1 and Header 1.2 appear as sub-headers of Header 1, while Header 2.1 and Header 2.2 are sub-headers of Header 2."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"sidebars.js")," has not changed compared to previous example. What has changed is the ",Object(o.b)("strong",{parentName:"p"},"content")," of ",Object(o.b)("inlineCode",{parentName:"p"},"topic-1.md")," to include ## headers:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-md"}),"---\ntitle: Topic 1\nid: topic-1\nsidebar_label: Topic 1\n---\n\n## Header 1\n\n### Header 1.1\n\n### Header 1.2\n\n## Header 2\n\n### Header 2.1\n\n### Header 2.2\n")),Object(o.b)("h2",{id:"several-sidebars-in-an-outline-file"},"Several sidebars in an outline file"),Object(o.b)("p",null,"You can place several sidebars in an outline file as pairs of sidebar name and bullet list. The ",Object(o.b)("inlineCode",{parentName:"p"},"sidebars.js")," resulting from processing the outline file will contain sections for each sidebar name."),Object(o.b)("p",null,"Let's examine the ",Object(o.b)("inlineCode",{parentName:"p"},"multi-sidebars-outline.md")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-md",metastring:'title="multi-sidebars-outline.md"',title:'"multi-sidebars-outline.md"'}),"## docs\n\n- Getting started\n    - Overview\n    - Introduction\n- Guides\n    - Build basic documentation\n\n## features\n\n- Product features\n    - Features overview\n    - First feature\n    - Second feature\n")),Object(o.b)("p",null,"This outline contains definitions for two sidebars: ",Object(o.b)("inlineCode",{parentName:"p"},"docs")," and ",Object(o.b)("inlineCode",{parentName:"p"},"features"),", each sidebar name followed by its outline. All topic files ",Object(o.b)("inlineCode",{parentName:"p"},"skelo")," generate will go in the folder indicated in the ",Object(o.b)("inlineCode",{parentName:"p"},"-d")," or ",Object(o.b)("inlineCode",{parentName:"p"},"--docs")," option."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"sidebars.js")," file contains:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),'module.exports = {\n    "docs": {\n        "Getting started": [\n            "overview",\n            "introduction"\n        ],\n        "Guides": [\n            "build-basic-documentation"\n        ]\n    },\n    "features": {\n        "Product features": [\n            "features-overview",\n            "first-feature",\n            "second-feature"\n        ]\n    }\n}\n')),Object(o.b)("h2",{id:"customize-outline-with-tags"},"Customize outline with tags"),Object(o.b)("p",null,"You can control what ",Object(o.b)("inlineCode",{parentName:"p"},"skelo")," generates for sections, topic, sub-sections, and headers with outline tags. Outline tags follow the outline entry, and start with ",Object(o.b)("inlineCode",{parentName:"p"},"@")," followed by tag name and tag content. Each outline tag also has a shortcut, usually a single letter."),Object(o.b)("h3",{id:"brief-b"},"@brief, @b"),Object(o.b)("p",null,"Brief description text following the section, topic, or header."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage"),": @b word ","[word...]"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-md"}),"## docs\n\n- Getting started\n    - First topic @b Introduction to first topic page. This text is the first paragraph following topic title.\n")),Object(o.b)("h3",{id:"folder-f"},"@folder, @f"),Object(o.b)("p",null,"Create folder based on outline item, or use the ",Object(o.b)("inlineCode",{parentName:"p"},"@slug")," value."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage"),": @f"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-md"}),"## docs\n\n- Getting started\n    - First topic\n    - Second topic\n- Guides @f\n    - First guide @b This topic is stored in the guides folder as guides/first-guide.md\n    - Second guide @f @s other guide\n        - Third guide @b This is stored in the other-guide/third-guide.md\n")),Object(o.b)("h3",{id:"slug-s"},"@slug, @s"),Object(o.b)("p",null,'Slug words as alternative topic file identifier. Use next words to create a slug. For example, "@s Sample alternative" generates the topic slug: ',Object(o.b)("inlineCode",{parentName:"p"},"sample-alternative"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage"),": @slug word ","[word...]"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-md"}),"## docs\n\n- Getting started\n    - First topic @slug important topic\n    - Second topic @s document two @brief Alternative title for second topic\n")),Object(o.b)("h3",{id:"title-t"},"@title, @t"),Object(o.b)("p",null,"Alternative topic title to use instead of navigation item."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage"),": @topic word ","[word...]"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-md"}),"## docs\n\n- Getting started\n    - First topic @t Examine our first topic @slug important topic @b One of the most important features in this document is described here.\n    - Second topic @s document two @brief Alternative title for second topic\n")))}d.isMDXComponent=!0}}]);