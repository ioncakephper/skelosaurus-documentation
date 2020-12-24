(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),l=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),b=o,m=d["".concat(r,".").concat(b)]||d[b]||p[b]||a;return n?i.a.createElement(m,s(s({ref:t},c),{},{components:n})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var o=n(3),i=n(7),a=(n(0),n(109)),r={title:"Build skeleton documentation",id:"build-skeleton-documentation",sidebar_label:"Build skeleton documentation"},s={unversionedId:"guides/build-skeleton-documentation",id:"guides/build-skeleton-documentation",isDocsHomePage:!1,title:"Build skeleton documentation",description:"Building documentation skeleton with Skelosaurus is a fairy straighforward process. You describe sidebar outline in a outline file using Markdown, and use skelo to build documentation files Docusaurus uses to build the documentation. Turn to Docusaurus to show the documentation on the development server. That's it!",source:"@site/docs\\guides\\build-skeleton-documentation.md",slug:"/guides/build-skeleton-documentation",permalink:"/docs/guides/build-skeleton-documentation",editUrl:"https://github.com/ioncakephper/skelosaurus-documentation/edit/master/website/docs/guides/build-skeleton-documentation.md",version:"current",sidebar_label:"Build skeleton documentation",sidebar:"docs",previous:{title:"Outline and tags",permalink:"/docs/guides/outline-and-tags"},next:{title:"Saving and loading topic content",permalink:"/docs/guides/saving-and-loading-topic-content"}},u=[{value:"Create Docusaurus project",id:"create-docusaurus-project",children:[]},{value:"Create documentation outline file",id:"create-documentation-outline-file",children:[]}],c={rightToc:u};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Building documentation skeleton with Skelosaurus is a fairy straighforward process. You describe sidebar outline in a outline file using Markdown, and use ",Object(a.b)("inlineCode",{parentName:"p"},"skelo")," to build documentation files ",Object(a.b)("inlineCode",{parentName:"p"},"Docusaurus")," uses to build the documentation. Turn to Docusaurus to show the documentation on the development server. That's it!"),Object(a.b)("p",null,"Examine the documentation skeleton and decide what changes to make in sidebar design, topic headers number or content. Make changes to outline file, and rebuild documentation skeleton. When happy with how documentation skeleton looks, you can edit the documentation files using your favorite editor for Markdown."),Object(a.b)("p",null,"Content writers familiar with Docusaurus will see the the immediate benefits on development life cycle, and will have no problem using a documentation skelelon with Docusaurus v2."),Object(a.b)("h2",{id:"create-docusaurus-project"},"Create Docusaurus project"),Object(a.b)("p",null,'You may wonder "I thought this was Skelosaurus. What do you mean Docusaurus?". Skelosaurus, the tool explained here, creates files that Docusaurus will use. Skelosaurus helps content authors who are familiar with Docusaurus. Many of the concepts used in this documentation will make sense to seasoned Docusaurus users, but you can use Skelosaurus by following instructions in this site.'),Object(a.b)("p",null,"Create a Docusaurus project where Skelosaurus will generate files, specifically the ",Object(a.b)("inlineCode",{parentName:"p"},"sidebars.js")," and ",Object(a.b)("inlineCode",{parentName:"p"},"docs")," folder."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"npx @docusaurus/init@latest init <project> <theme>\n")),Object(a.b)("p",null,"This executes the ",Object(a.b)("inlineCode",{parentName:"p"},"docusaurus-init")," script, use the ",Object(a.b)("inlineCode",{parentName:"p"},"init")," command and pass the project folder ",Object(a.b)("inlineCode",{parentName:"p"},"project")," using the ",Object(a.b)("inlineCode",{parentName:"p"},"theme")," setting."),Object(a.b)("p",null,"Specifically, we will create the ",Object(a.b)("inlineCode",{parentName:"p"},"website")," project that uses the ",Object(a.b)("inlineCode",{parentName:"p"},"classic")," theme."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"npx @docusaurus/init@latest init website classic\n")),Object(a.b)("h2",{id:"create-documentation-outline-file"},"Create documentation outline file"),Object(a.b)("p",null,"Docusaurus documentation uses one or more sidebars, the left section of the site with links to topics. A sidebar has several ",Object(a.b)("strong",{parentName:"p"},"sections")," -- a title that opens or closes to reveal to show its content. Inside a section you will find items (links to pages) or other sections."),Object(a.b)("p",null,"The documentation outline captures all these concepts. In the outline, you mention the sidebar name, and use a bullet list. Top level items in the bullet list indicate sections in the sidebar. Items inside the bullet list indicate documentation page. An item having its own items is actually a sub-section. Let's go over an example. You will recognize the Markdown format which is quite easy to use."),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"website")," folder, create ",Object(a.b)("inlineCode",{parentName:"p"},"outline.md"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-md"}),"## docs\n\n- Getting started\n    - Overview\n    - How to use\n    - Where to get it\n        - Getting software from a brick store\n        - Getting software from app store\n- Guides\n    - Configure your software\n")),Object(a.b)("p",null,"In the level two heading at the top of the file, we placed the sidebar name. The "))}l.isMDXComponent=!0}}]);