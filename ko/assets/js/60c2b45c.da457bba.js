"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[9625],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(t),f=i,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=u;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7357:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return p}});var r=t(3117),i=(t(7294),t(3905));const o={title:"Guide to BibTeX Type `Proceedings`",sidebar_label:"proceedings"},l='Guide to BibTeX Type "Proceedings"',a={unversionedId:"types/proceedings",id:"types/proceedings",title:"Guide to BibTeX Type `Proceedings`",description:'BibTeX is a reference management tool that is commonly used in LaTeX documents. The "proceedings" BibTeX type is used for conference proceedings, such as a collection of papers presented at a conference. In this guide, we will explain the required and optional fields for the "proceedings" BibTeX type.',source:"@site/docs/types/proceedings.md",sourceDirName:"types",slug:"/types/proceedings",permalink:"/ko/types/proceedings",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/types/proceedings.md",tags:[],version:"current",frontMatter:{title:"Guide to BibTeX Type `Proceedings`",sidebar_label:"proceedings"},sidebar:"tutorialSidebar",previous:{title:"phdthesis",permalink:"/ko/types/phdthesis"},next:{title:"techreport",permalink:"/ko/types/techreport"}},s={},p=[{value:"Required Fields",id:"required-fields",level:2},{value:"Optional Fields",id:"optional-fields",level:2},{value:"Example",id:"example",level:2}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"guide-to-bibtex-type-proceedings"},'Guide to BibTeX Type "Proceedings"'),(0,i.kt)("p",null,'BibTeX is a reference management tool that is commonly used in LaTeX documents. The "proceedings" BibTeX type is used for conference proceedings, such as a collection of papers presented at a conference. In this guide, we will explain the required and optional fields for the "proceedings" BibTeX type.'),(0,i.kt)("h2",{id:"required-fields"},"Required Fields"),(0,i.kt)("p",null,'The "proceedings" BibTeX type requires the following fields:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),": The title of the conference proceedings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"year"),": The year the conference proceedings were published.")),(0,i.kt)("h2",{id:"optional-fields"},"Optional Fields"),(0,i.kt)("p",null,'In addition to the required fields, the "proceedings" BibTeX type also has a number of optional fields that can be used to provide additional information. These fields include:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"editor"),": The name(s) of the editor(s) of the conference proceedings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"volume"),": The volume number of the conference proceedings, if applicable."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number"),": The issue number of the conference proceedings, if applicable."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"series"),": The name of the series that the conference proceedings belong to, if applicable."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address"),": The location of the conference."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"month"),": The month the conference was held."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"publisher"),": The name of the publisher of the conference proceedings.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,'Here is an example of how to use the "proceedings" BibTeX type:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@proceedings{myproceedings,\n    title        = {Proceedings of the International Conference on Example},\n    year         = 2022,\n    month        = {June},\n    publisher    = {ACM Press},\n    address      = {New York, NY},\n    series       = {Example Conference Proceedings},\n    volume       = 1,\n    number       = 2,\n    editor       = {Jane Doe and John Smith}\n}\n\n")),(0,i.kt)("p",null,'In this example, the BibTeX entry defines a set of conference proceedings titled "Proceedings of the International Conference on Example". The proceedings were published in 2022 and edited by Jane Doe and John Smith. The conference was held in June in New York, NY, and the proceedings were published as volume 1, issue 2 of the "Example Conference Proceedings" series by ACM Press.'))}d.isMDXComponent=!0}}]);