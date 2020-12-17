(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(n),p=i,m=d["".concat(r,".").concat(p)]||d[p]||u[p]||o;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},150:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/website-documentation-overview-734e0d088bebd02fcee8040a9e910dc0.png"},151:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/website-installation-topic-d0c0893afa41025b2b8f475396a59806.png"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var i=n(3),a=n(7),o=(n(0),n(105)),r={title:"Quick skelo demo",id:"quick-skelo-demo",sidebar_label:"Quick skelo demo"},l={unversionedId:"quick-skelo-demo",id:"quick-skelo-demo",isDocsHomePage:!1,title:"Quick skelo demo",description:"Build a skeleton documentation quickly using skelo and a documentation outline file. View the documentation just as easily when you run Docusaurus development server.",source:"@site/docs\\quick-skelo-demo.md",slug:"/quick-skelo-demo",permalink:"/docs/quick-skelo-demo",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/quick-skelo-demo.md",version:"current",sidebar_label:"Quick skelo demo",sidebar:"docs",previous:{title:"How to install Skelosaurus",permalink:"/docs/installation"},next:{title:"Outline and tags",permalink:"/docs/guides/outline-and-tags"}},s=[{value:"Skeleton documentation in four steps",id:"skeleton-documentation-in-four-steps",children:[{value:"Step 1: Create working folder and scaffold Docusaurus v2 project",id:"step-1-create-working-folder-and-scaffold-docusaurus-v2-project",children:[]},{value:"Step 2: Create documentation outline file",id:"step-2-create-documentation-outline-file",children:[]},{value:"Step 3: Use skelo to generate files",id:"step-3-use-skelo-to-generate-files",children:[]},{value:"Step 4: View skeleton documentation on development server",id:"step-4-view-skeleton-documentation-on-development-server",children:[]}]},{value:"Custom topic title, topic headers",id:"custom-topic-title-topic-headers",children:[]}],c={rightToc:s};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Build a skeleton documentation quickly using ",Object(o.b)("inlineCode",{parentName:"p"},"skelo")," and a documentation outline file. View the documentation just as easily when you run Docusaurus development server."),Object(o.b)("h2",{id:"skeleton-documentation-in-four-steps"},"Skeleton documentation in four steps"),Object(o.b)("p",null,"Building a skeleton documentation is quite easy. You need a documentation outline written with easy-to follow Markdown notation. The outline indicates the sidebar name and its outline as bullet list. Top level items are major sections in the navigation bar, while indented bullet lists indicate topics in each section, or subsections, etc. A special item introduces headers inside a topic. We will cover these concepts in this quick demo."),Object(o.b)("h3",{id:"step-1-create-working-folder-and-scaffold-docusaurus-v2-project"},"Step 1: Create working folder and scaffold Docusaurus v2 project"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"mkdir my-project\ncd my-project\nnpx @docusaurus/init@latest init website classic\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create ",Object(o.b)("inlineCode",{parentName:"li"},"my-project")," folder and ",Object(o.b)("inlineCode",{parentName:"li"},"cd")," into it."),Object(o.b)("li",{parentName:"ul"},"Use ",Object(o.b)("inlineCode",{parentName:"li"},"npx")," to scaffold a Docusaurus v2 project. It creates ",Object(o.b)("inlineCode",{parentName:"li"},"website")," documentation project using the ",Object(o.b)("inlineCode",{parentName:"li"},"classic")," preset.")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"More of npx-ing Docusaurus 2")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Learn more about scaffolding a Docusaurus v2 project with ",Object(o.b)("inlineCode",{parentName:"p"},"npx")," at ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/installation#scaffold-project-website"}),"Docusaurus v2 Installation"),"."))),Object(o.b)("h3",{id:"step-2-create-documentation-outline-file"},"Step 2: Create documentation outline file"),Object(o.b)("p",null,"Create ",Object(o.b)("inlineCode",{parentName:"p"},"my-project/website-outline.md")," and paste the following content:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-md",metastring:'title="my-project/website-outline.md"',title:'"my-project/website-outline.md"'}),"## docs\n\n- Getting started\n    - Overview\n    - Installation @t How to install your software\n        - @headers\n            - Installing your software\n            - Running your software\n    - Quick demo @s example\n- Guides @f\n    - Configure your software\n\n")),Object(o.b)("h3",{id:"step-3-use-skelo-to-generate-files"},"Step 3: Use skelo to generate files"),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"my-project"),", run ",Object(o.b)("inlineCode",{parentName:"p"},"skelo build"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"skelo website-outline -w ./website -d ./website/docs -p ./website-parts\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"Topic file website/docs/overview.md generated.\nTopic file website/docs/installation.md generated.\nTopic file website/docs/example.md generated.\nTopic file website/docs/guides/configure-your-software.md generated.\nSidebars file website\\sidebars.js generated.\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Wait, what? Where is the ",Object(o.b)("inlineCode",{parentName:"p"},"build")," sub-command? The answer is simple: ",Object(o.b)("inlineCode",{parentName:"p"},"build")," sub-command is ",Object(o.b)("inlineCode",{parentName:"p"},"skelo"),"'s default sub-command, so ",Object(o.b)("inlineCode",{parentName:"p"},"skelo")," will use ",Object(o.b)("inlineCode",{parentName:"p"},"build")," when no sub-command appears."))),Object(o.b)("p",null,"Skelo generated several files:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"website/docs/*.md")," -- documentation source files in ",Object(o.b)("inlineCode",{parentName:"li"},".md")," format, and front-matter compatible with Docusaurus v2."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"website-parts/**.*.md")," -- Markdown files containing document partial content. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"website/sidebars.js")," -- sidebars design file that Docusaurus v2 uses to build documentation navigation.")),Object(o.b)("p",null,"If you are familiar with Docusarus v2, you will feel the urge to look at ",Object(o.b)("inlineCode",{parentName:"p"},"website/sidebars.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js",metastring:'title="website/sidebars.js"',title:'"website/sidebars.js"'}),'/**\n* Sidebar definitions for Docusaurus v2\n*/\n\nmodule.exports = {\n    "docs": {\n        "Getting started": [\n            "overview",\n            "installation",\n            "example"\n        ],\n        "Guides": [\n            "guides/configure-your-software"\n        ]\n    }\n}\n')),Object(o.b)("p",null,"Remember, you can get help on ",Object(o.b)("inlineCode",{parentName:"p"},"build")," sub-command: ",Object(o.b)("inlineCode",{parentName:"p"},"skelo help build"),"."),Object(o.b)("h3",{id:"step-4-view-skeleton-documentation-on-development-server"},"Step 4: View skeleton documentation on development server"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Edit ",Object(o.b)("inlineCode",{parentName:"li"},"website/docusaurus.config.js")," to configure documentation title and ",Object(o.b)("inlineCode",{parentName:"li"},"Docs")," top navigation item.")),Object(o.b)("p",null,"Replace:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"  themeConfig: {\n    navbar: {\n      title: 'My Site',\n      logo: {\n        alt: 'My Site Logo',\n        src: 'img/logo.svg',\n      },\n      items: [\n        {\n          to: 'docs/',\n          activeBasePath: 'docs',\n          label: 'Docs',\n          position: 'left',\n        },\n")),Object(o.b)("p",null,"With:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"  themeConfig: {\n    navbar: {\n      title: 'My Documentation',\n      logo: {\n        alt: 'My Documentation Logo',\n        src: 'img/logo.svg',\n      },\n      items: [\n        {\n          to: 'docs/overview',\n          label: 'Docs',\n          position: 'left',\n        },\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Start server")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"cd website\nnpm run start\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"\u221a Client\n  Compiled successfully in 8.76s\n\ni \uff62wds\uff63: Project is running at http://localhost:3000/\ni \uff62wds\uff63: webpack output is served from /\ni \uff62wds\uff63: Content not from webpack is served from C:\\Users\\ion.gireada\\Documents\\VSCode Development Projects\\my-project\\website\ni \uff62wds\uff63: 404s will fallback to /index.html\n")),Object(o.b)("p",null,"Your browser opens at http://localhost:3000/. Click ",Object(o.b)("inlineCode",{parentName:"p"},"Docs")," to view documentation."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Website documentation overview",src:n(150).default})),Object(o.b)("p",null,"The Overview page contains ",Object(o.b)("inlineCode",{parentName:"p"},"Lorem ipsum")," text. It helps you get a sense how your documentation looks."),Object(o.b)("h2",{id:"custom-topic-title-topic-headers"},"Custom topic title, topic headers"),Object(o.b)("p",null,"Click ",Object(o.b)("inlineCode",{parentName:"p"},"Installation")," and see a custom topic title, two headers, and ",Object(o.b)("inlineCode",{parentName:"p"},"Lorem ipsum")," text as defined in ",Object(o.b)("inlineCode",{parentName:"p"},"my-project/website-outline.md"),":"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Website installation topic",src:n(151).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"@t following ",Object(o.b)("inlineCode",{parentName:"li"},"Installation")," specifies the title appearing on the outline's item documentation page."),Object(o.b)("li",{parentName:"ul"},"@headers entry followed by two indented items indicate the headers to include in ",Object(o.b)("inlineCode",{parentName:"li"},"Installation")," topic."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Lorem ipsum")," text is generated automatically under title and each headers. However, there is way to include the brief description text for a topic or headers.")))}b.isMDXComponent=!0}}]);