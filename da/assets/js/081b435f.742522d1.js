"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[8689],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return m}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=u(i),m=r,c=h["".concat(l,".").concat(m)]||h[m]||d[m]||a;return i?n.createElement(c,s(s({ref:t},p),{},{components:i})):n.createElement(c,s({ref:t},p))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,s=new Array(a);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<a;u++)s[u]=i[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},8253:function(e,t,i){i.r(t),i.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return u}});var n=i(3117),r=(i(7294),i(3905));const a={title:"Guide to BibTeX Type MasterThesis",sidebar_label:"phdthesis"},s='Guide to BibTeX Type "MasterThesis"',o={unversionedId:"types/mastersthesis",id:"types/mastersthesis",title:"Guide to BibTeX Type MasterThesis",description:'BibTeX is a reference management tool that is commonly used in LaTeX documents. The "masterthesis" BibTeX type is used for master\'s theses. In this guide, we will explain the required and optional fields for the "masterthesis" BibTeX type.',source:"@site/docs/types/mastersthesis.md",sourceDirName:"types",slug:"/types/mastersthesis",permalink:"/da/types/mastersthesis",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/types/mastersthesis.md",tags:[],version:"current",frontMatter:{title:"Guide to BibTeX Type MasterThesis",sidebar_label:"phdthesis"},sidebar:"tutorialSidebar",previous:{title:"manual",permalink:"/da/types/manual"},next:{title:"misc",permalink:"/da/types/misc"}},l={},u=[{value:"Required Fields",id:"required-fields",level:2},{value:"Optional Fields",id:"optional-fields",level:2},{value:"Example",id:"example",level:2}],p={toc:u};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"guide-to-bibtex-type-masterthesis"},'Guide to BibTeX Type "MasterThesis"'),(0,r.kt)("p",null,'BibTeX is a reference management tool that is commonly used in LaTeX documents. The "masterthesis" BibTeX type is used for master\'s theses. In this guide, we will explain the required and optional fields for the "masterthesis" BibTeX type.'),(0,r.kt)("h2",{id:"required-fields"},"Required Fields"),(0,r.kt)("p",null,'The "masterthesis" BibTeX type requires the following fields:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"author"),": The author of the thesis."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"title"),": The title of the thesis."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"school"),": The name of the institution that awarded the degree."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"year"),": The year the degree was awarded.")),(0,r.kt)("h2",{id:"optional-fields"},"Optional Fields"),(0,r.kt)("p",null,'In addition to the required fields, the "masterthesis" BibTeX type also has a number of optional fields that can be used to provide additional information. These fields include:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),': The type of the thesis, such as "Master\'s thesis".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address"),": The location of the institution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"month"),": The month the thesis was submitted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"note"),": Any additional information about the thesis.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,'Here is an example of how to use the "masterthesis" BibTeX type:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@masterthesis{mythesis,\n    title        = {A Study of Example},\n    author       = {Jane Doe},\n    year         = 2022,\n    month        = {June},\n    address      = {Example City, CA},\n    note         = {Available at \\url{https://example.com/thesis.pdf}},\n    school       = {University of Example},\n    type         = {Master's thesis}\n}\n\n")),(0,r.kt)("p",null,'In this example, the BibTeX entry defines a master\'s thesis authored by Jane Doe titled "A Study of Example". The degree was awarded in 2022 by the University of Example, and the thesis was submitted in June in Example City, CA. The type of the thesis is specified as "Master\'s thesis", and a note is included that provides a URL for the thesis.'))}d.isMDXComponent=!0}}]);