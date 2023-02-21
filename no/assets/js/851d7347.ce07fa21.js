"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[8067],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,f=m["".concat(u,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3823:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return p}});var a=n(3117),i=(n(7294),n(3905));const r={title:"Guide to BibTeX Type `Manual`",sidebar_label:"manual"},l='Guide to BibTeX Type "Manual"',o={unversionedId:"types/manual",id:"types/manual",title:"Guide to BibTeX Type `Manual`",description:'BibTeX is a reference management tool that is commonly used in LaTeX documents. The "manual" BibTeX type is used for technical manuals or user guides. In this guide, we will explain the required and optional fields for the "manual" BibTeX type.',source:"@site/docs/types/manual.md",sourceDirName:"types",slug:"/types/manual",permalink:"/no/types/manual",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/types/manual.md",tags:[],version:"current",frontMatter:{title:"Guide to BibTeX Type `Manual`",sidebar_label:"manual"},sidebar:"tutorialSidebar",previous:{title:"inproceedings",permalink:"/no/types/inproceedings"},next:{title:"phdthesis",permalink:"/no/types/mastersthesis"}},u={},p=[{value:"Required Fields",id:"required-fields",level:2},{value:"Optional Fields",id:"optional-fields",level:2},{value:"Example",id:"example",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"guide-to-bibtex-type-manual"},'Guide to BibTeX Type "Manual"'),(0,i.kt)("p",null,'BibTeX is a reference management tool that is commonly used in LaTeX documents. The "manual" BibTeX type is used for technical manuals or user guides. In this guide, we will explain the required and optional fields for the "manual" BibTeX type.'),(0,i.kt)("h2",{id:"required-fields"},"Required Fields"),(0,i.kt)("p",null,'The "manual" BibTeX type requires the following fields:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),": The title of the manual."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"year"),": The year the manual was published.")),(0,i.kt)("h2",{id:"optional-fields"},"Optional Fields"),(0,i.kt)("p",null,'In addition to the required fields, the "manual" BibTeX type also has a number of optional fields that can be used to provide additional information. These fields include:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"author"),": The author(s) of the manual."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"organization"),": The organization responsible for producing the manual."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address"),": The location of the organization."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"edition"),": The edition number of the manual."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"month"),": The month the manual was published."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"note"),": Any additional information about the manual.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,'Here is an example of how to use the "manual" BibTeX type:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@manual{mymanual,\n    title        = {Example User Guide},\n    author       = {John Smith and Jane Doe},\n    year         = 2022,\n    month        = {June},\n    address      = {Example City, CA},\n    note         = {Available at \\url{https://example.com/manual.pdf}},\n    organization = {Example Corporation},\n    edition      = {3rd}\n}\n\n")),(0,i.kt)("p",null,'In this example, the BibTeX entry defines a technical manual or user guide titled "Example User Guide". The manual was published in 2022 by the Example Corporation in Example City, CA. The manual was authored by John Smith and Jane Doe, and this is the third edition. A note is included that provides a URL for the manual.'))}d.isMDXComponent=!0}}]);