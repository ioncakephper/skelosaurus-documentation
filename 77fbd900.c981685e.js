(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||b[d]||r;return n?o.a.createElement(m,i(i({ref:t},c),{},{components:n})):o.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),r=(n(0),n(105)),l={title:"How to install Skelosaurus",id:"installation",sidebar_label:"Installation"},i={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"How to install Skelosaurus",description:"Skelosaurus is a package with an executable script. To run the executable script, you have to install the package globally.",source:"@site/docs\\installation.md",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/installation.md",version:"current",sidebar_label:"Installation",sidebar:"docs",previous:{title:"Welcome to Skelosaurus",permalink:"/docs/overview"},next:{title:"Quick skelo demo",permalink:"/docs/quick-skelo-demo"}},s=[{value:"Installing Skelosaurus",id:"installing-skelosaurus",children:[]},{value:"Verifying skelo runs",id:"verifying-skelo-runs",children:[]}],c={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Skelosaurus is a package with an executable script. To run the executable script, you have to install the package globally."),Object(r.b)("h2",{id:"installing-skelosaurus"},"Installing Skelosaurus"),Object(r.b)("p",null,"Install ",Object(r.b)("inlineCode",{parentName:"p"},"skelosaurusv2")," package globally:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm i -g skelosaurusv2\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"skelo")," command is now available anywhere on your local computer."),Object(r.b)("h2",{id:"verifying-skelo-runs"},"Verifying skelo runs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A quick method to check you can use ",Object(r.b)("inlineCode",{parentName:"li"},"skelo")," is to get ",Object(r.b)("inlineCode",{parentName:"li"},"skelo"),"'s version.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"skelo -V\nskelo --version\nv2.0.10\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Note the uppercase ",Object(r.b)("inlineCode",{parentName:"p"},"-V")," shortcut for ",Object(r.b)("inlineCode",{parentName:"p"},"--version")," option. Some commands use lowercase, so make sure you use the correct shortcut."))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Get ",Object(r.b)("inlineCode",{parentName:"li"},"skelo")," help with ",Object(r.b)("inlineCode",{parentName:"li"},"-h")," or ",Object(r.b)("inlineCode",{parentName:"li"},"--help")," options. You can also use ",Object(r.b)("inlineCode",{parentName:"li"},"help")," sub-command.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"skelo -h\nskelo --help\nskelo help\n")),Object(r.b)("p",null,"Any of the methods of getting help will provide the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Usage: skelo command [options] outlineFiles...\n\nSkeleton documentation generator for Docusaurus (v2 and v1)\n\nOptions:\n  -V, --version                 output the version number\n  -h, --help                    display help for command\n\nCommands:\n  build [options] <sources...>  build doc files and sidebars file\n  load [options]                load documentation parts into respective\n                                files\n  save [options]                save documentation parts into respective\n                                files\n  help [command]                display help for command\n\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To get help for a sub-command, add sub-command to ",Object(r.b)("inlineCode",{parentName:"li"},"help")," sub-command. For example:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"skelo help build\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'Usage: skelo build [options] <sources...>\n\nbuild doc files and sidebars file\n\nOptions:\n  -c, --clear           start with a clear docs path\n  -d, --docs <path>     path where markdown files are generated into (default:\n                        "./docs")\n  -f, --autofolder      create subfolder for categories and subtopics (default:\n                        false)\n  -i, --intro           create an Intro page in each subcategory\n  --introTitle [title]  title to use in intro pages (default: "Overview")\n  --no-v2               generate for Docusaurus v1\n  -o, --out <filename>  filename to contains sidebars (default: "sidebars")\n  -p, --parts [path]    path where parts will be stored (default: "./")\n  -w, --website <path>  path to store sidebars content file (default: "./")\n  -h, --help            display help for command\n\n')))}u.isMDXComponent=!0}}]);