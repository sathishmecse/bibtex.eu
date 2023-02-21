"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[8915],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=r,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return t?i.createElement(m,a(a({ref:n},c),{},{components:t})):i.createElement(m,a({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1135:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var i=t(3117),r=(t(7294),t(3905));const o={title:"Guide to BibTeX Type `Inproceedings`",sidebar_label:"inproceedings"},a='Guide to BibTeX Type "Inproceedings"',l={unversionedId:"types/inproceedings",id:"types/inproceedings",title:"Guide to BibTeX Type `Inproceedings`",description:'BibTeX is a reference management tool that is commonly used in LaTeX documents. The "inproceedings" BibTeX type is used for papers published in conference proceedings. In this guide, we will explain the required and optional fields for the "inproceedings" BibTeX type.',source:"@site/docs/types/inproceedings.md",sourceDirName:"types",slug:"/types/inproceedings",permalink:"/da/types/inproceedings",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/types/inproceedings.md",tags:[],version:"current",frontMatter:{title:"Guide to BibTeX Type `Inproceedings`",sidebar_label:"inproceedings"},sidebar:"tutorialSidebar",previous:{title:"incollection",permalink:"/da/types/incollection"},next:{title:"manual",permalink:"/da/types/manual"}},p={},s=[{value:"Required Fields",id:"required-fields",level:2},{value:"Optional Fields",id:"optional-fields",level:2},{value:"Example",id:"example",level:2}],c={toc:s};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"guide-to-bibtex-type-inproceedings"},'Guide to BibTeX Type "Inproceedings"'),(0,r.kt)("p",null,'BibTeX is a reference management tool that is commonly used in LaTeX documents. The "inproceedings" BibTeX type is used for papers published in conference proceedings. In this guide, we will explain the required and optional fields for the "inproceedings" BibTeX type.'),(0,r.kt)("h2",{id:"required-fields"},"Required Fields"),(0,r.kt)("p",null,'The "inproceedings" BibTeX type requires the following fields:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"author"),": The author(s) of the paper."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"title"),": The title of the paper."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"booktitle"),": The title of the conference proceedings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"year"),": The year the conference proceedings were published.")),(0,r.kt)("h2",{id:"optional-fields"},"Optional Fields"),(0,r.kt)("p",null,'In addition to the required fields, the "inproceedings" BibTeX type also has a number of optional fields that can be used to provide additional information. These fields include:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"editor"),": The name(s) of the editor(s) of the conference proceedings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"volume"),": The volume number of the conference proceedings, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number"),": The issue number of the conference proceedings, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"series"),": The name of the series that the conference proceedings belong to, if applicable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pages"),": The pages on which the paper appears in the conference proceedings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address"),": The location of the conference."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"month"),": The month the conference was held."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"organization"),": The organization that sponsored the conference."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"publisher"),": The name of the publisher of the conference proceedings.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,'Here is an example of how to use the "inproceedings" BibTeX type:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@inproceedings{mypaper,\n    title        = {An Analysis of Example},\n    author       = {John Smith and Jane Doe},\n    year         = 2022,\n    month        = {June},\n    booktitle    = {Proceedings of the International Conference on Example},\n    publisher    = {ACM Press},\n    address      = {New York, NY},\n    series       = {Example Conference Proceedings},\n    volume       = 1,\n    number       = 2,\n    pages        = {123--130},\n    editor       = {David Brown and Susan Green},\n    organization = {ACM}\n}\n\n")),(0,r.kt)("p",null,'In this example, the BibTeX entry defines a paper titled "An Analysis of Example" authored by John Smith and Jane Doe that appeared in the conference proceedings of the International Conference on Example. The proceedings were published in 2022 and edited by David Brown and Susan Green. The conference was held in June in New York, NY, and was sponsored by the ACM. The paper appeared on pages 123-130 of volume 1, issue 2 of the "Example Conference Proceedings" series published by ACM Press.'))}d.isMDXComponent=!0}}]);