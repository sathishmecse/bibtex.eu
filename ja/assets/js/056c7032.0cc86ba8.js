"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[6073],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=p(i),c=r,m=h["".concat(o,".").concat(c)]||h[c]||u[c]||s;return i?n.createElement(m,a(a({ref:t},d),{},{components:i})):n.createElement(m,a({ref:t},d))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=i.length,a=new Array(s);a[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[h]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<s;p++)a[p]=i[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},3059:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=i(7462),r=(i(7294),i(3905));const s={title:"Guide to BibTeX Type PhdThesis",sidebar_label:"phdthesis"},a="Guide to BibTeX Type PhdThesis",l={unversionedId:"types/phdthesis",id:"types/phdthesis",title:"Guide to BibTeX Type PhdThesis",description:'BibTeX is a reference management tool that is commonly used in LaTeX documents. The "phdthesis" BibTeX type is used for PhD dissertations or theses. In this guide, we will explain the required and optional fields for the "phdthesis" BibTeX type.',source:"@site/docs/types/phdthesis.mdx",sourceDirName:"types",slug:"/types/phdthesis",permalink:"/ja/types/phdthesis",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/types/phdthesis.mdx",tags:[],version:"current",frontMatter:{title:"Guide to BibTeX Type PhdThesis",sidebar_label:"phdthesis"},sidebar:"tutorialSidebar",previous:{title:"misc",permalink:"/ja/types/misc"},next:{title:"proceedings",permalink:"/ja/types/proceedings"}},o={},p=[{value:"Required Fields",id:"required-fields",level:2},{value:"Optional Fields",id:"optional-fields",level:2},{value:"Example",id:"example",level:2}],d={toc:p},h="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(h,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"guide-to-bibtex-type-phdthesis"},"Guide to BibTeX Type PhdThesis"),(0,r.kt)("p",null,'BibTeX is a reference management tool that is commonly used in LaTeX documents. The "phdthesis" BibTeX type is used for PhD dissertations or theses. In this guide, we will explain the required and optional fields for the "phdthesis" BibTeX type.'),(0,r.kt)("h2",{id:"required-fields"},"Required Fields"),(0,r.kt)("p",null,'The "phdthesis" BibTeX type requires the following fields:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"author"),": The author of the thesis."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"title"),": The title of the thesis."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"school"),": The name of the institution that awarded the degree."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"year"),": The year the degree was awarded.")),(0,r.kt)("h2",{id:"optional-fields"},"Optional Fields"),(0,r.kt)("p",null,'In addition to the required fields, the "phdthesis" BibTeX type also has a number of optional fields that can be used to provide additional information. These fields include:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),': The type of the thesis, such as "PhD thesis" or "Master\'s thesis".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address"),": The location of the institution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"month"),": The month the thesis was submitted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"note"),": Any additional information about the thesis.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,'Here is an example of how to use the "phdthesis" BibTeX type:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@phdthesis{mythesis,\n    title        = {An Analysis of Example},\n    author       = {John Smith},\n    year         = 2022,\n    month        = {June},\n    address      = {Example City, CA},\n    note         = {Available at \\url{https://example.com/thesis.pdf}},\n    school       = {University of Example},\n    type         = {PhD thesis}\n}\n")),(0,r.kt)("p",null,'In this example, the BibTeX entry defines a PhD thesis authored by John Smith titled "An Analysis of Example". The degree was awarded in 2022 by the University of Example, and the thesis was submitted in June in Example City, CA. The type of the thesis is specified as "PhD thesis", and a note is included that provides a URL for the thesis.'))}u.isMDXComponent=!0}}]);