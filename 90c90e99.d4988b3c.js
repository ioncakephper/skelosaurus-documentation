(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),b=i,m=d["".concat(a,".").concat(b)]||d[b]||p[b]||r;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var i=n(3),o=n(7),r=(n(0),n(109)),a={title:"Build skeleton documentation",id:"build-skeleton-documentation",sidebar_label:"Build skeleton documentation"},s={unversionedId:"guides/build-skeleton-documentation",id:"guides/build-skeleton-documentation",isDocsHomePage:!1,title:"Build skeleton documentation",description:"Incididunt ea ut aute Lorem. Tempor ad cillum sint proident laboris minim et. Excepteur aliqua nostrud consectetur ex culpa proident non ea incididunt nisi velit duis excepteur. Elit consectetur nisi velit tempor nostrud commodo sit. Proident cillum amet proident nisi nulla elit nisi exercitation reprehenderit sint anim consequat qui.",source:"@site/docs\\guides\\build-skeleton-documentation.md",slug:"/guides/build-skeleton-documentation",permalink:"/docs/guides/build-skeleton-documentation",editUrl:"https://github.com/ioncakephper/skelosaurus-documentation/edit/master/website/docs/guides/build-skeleton-documentation.md",version:"current",sidebar_label:"Build skeleton documentation",sidebar:"docs",previous:{title:"Outline and tags",permalink:"/docs/guides/outline-and-tags"},next:{title:"Saving and loading topic content",permalink:"/docs/guides/saving-and-loading-topic-content"}},u=[{value:"Create Docusaurus project",id:"create-docusaurus-project",children:[]},{value:"Create documentation outline file",id:"create-documentation-outline-file",children:[]}],c={rightToc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Incididunt ea ut aute Lorem. Tempor ad cillum sint proident laboris minim et. Excepteur aliqua nostrud consectetur ex culpa proident non ea incididunt nisi velit duis excepteur. Elit consectetur nisi velit tempor nostrud commodo sit. Proident cillum amet proident nisi nulla elit nisi exercitation reprehenderit sint anim consequat qui."),Object(r.b)("h2",{id:"create-docusaurus-project"},"Create Docusaurus project"),Object(r.b)("p",null,'You may wonder "I thought this was Skelosaurus. What do you mean Docusaurus?". Skelosaurus, the tool explained here, creates files that Docusaurus will use. Skelosaurus helps content authors who are familiar with Docusaurus. Many of the concepts used in this documentation will make sense to seasoned Docusaurus users, but you can use Skelosaurus by following instructions in this site.'),Object(r.b)("p",null,"Create a Docusaurus project where Skelosaurus will generate files, specifically the ",Object(r.b)("inlineCode",{parentName:"p"},"sidebars.js")," and ",Object(r.b)("inlineCode",{parentName:"p"},"docs")," folder."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"npx @docusaurus/init@latest init <project> <theme>\n")),Object(r.b)("p",null,"This executes the ",Object(r.b)("inlineCode",{parentName:"p"},"docusaurus-init")," script, use the ",Object(r.b)("inlineCode",{parentName:"p"},"init")," command and pass the project folder ",Object(r.b)("inlineCode",{parentName:"p"},"project")," using the ",Object(r.b)("inlineCode",{parentName:"p"},"theme")," setting."),Object(r.b)("p",null,"Specifically, we will create the ",Object(r.b)("inlineCode",{parentName:"p"},"website")," project that uses the ",Object(r.b)("inlineCode",{parentName:"p"},"classic")," theme."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"npx @docusaurus/init@latest init website classic\n")),Object(r.b)("h2",{id:"create-documentation-outline-file"},"Create documentation outline file"),Object(r.b)("p",null,"Docusaurus documentation uses one or more sidebars, the left section of the site with links to topics. A sidebar has several ",Object(r.b)("strong",{parentName:"p"},"sections")," -- a title that opens or closes to reveal to show its content. Inside a section you will find items (links to pages) or other sections."),Object(r.b)("p",null,"The documentation outline captures all these concepts. In the outline, you mention the sidebar name, and use a bullet list. Top level items in the bullet list indicate sections in the sidebar. Items inside the bullet list indicate documentation page. An item having its own items is actually a sub-section. Let's go over an example. You will recognize the Markdown format which is quite easy to use."),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"website")," folder, create ",Object(r.b)("inlineCode",{parentName:"p"},"outline.md"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-md"}),"## docs\n\n- Getting started\n    - Overview\n    - How to use\n    - Where to get it\n        - Getting software from a brick store\n        - Getting software from app store\n- Guides\n    - Configure your software\n")),Object(r.b)("p",null,"In the level two heading at the top of the file, we placed the sidebar name. The "))}l.isMDXComponent=!0}}]);