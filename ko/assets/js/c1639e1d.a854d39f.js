"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[8173],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),u=i,b=f["".concat(p,".").concat(u)]||f[u]||d[u]||o;return r?n.createElement(b,a(a({ref:t},s),{},{components:r})):n.createElement(b,a({ref:t},s))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[f]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6068:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={slug:"chapter",title:"BibTeX field type: chapter",sidebar_label:"chapter"},a=void 0,l={unversionedId:"fields/chapter",id:"fields/chapter",title:"BibTeX field type: chapter",description:"BibTeX field type: chapter",source:"@site/docs/fields/chapter.mdx",sourceDirName:"fields",slug:"/fields/chapter",permalink:"/ko/fields/chapter",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/chapter.mdx",tags:[],version:"current",frontMatter:{slug:"chapter",title:"BibTeX field type: chapter",sidebar_label:"chapter"},sidebar:"tutorialSidebar",previous:{title:"booktitle",permalink:"/ko/fields/booktitle"},next:{title:"crossref",permalink:"/ko/fields/crossref"}},p={},c=[{value:"BibTeX field type: chapter",id:"bibtex-field-type-chapter",level:2},{value:"Format",id:"format",level:2}],s={toc:c},f="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"bibtex-field-type-chapter"},"BibTeX field type: chapter"),(0,i.kt)("p",null,"A chapter, section, or a range of pages of a book is stored numerically in ",(0,i.kt)("inlineCode",{parentName:"p"},"chapter"),".\nThis BibTeX-field is used for ",(0,i.kt)("inlineCode",{parentName:"p"},"inbook")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"incollection"),". The former is mandatory.\n",(0,i.kt)("inlineCode",{parentName:"p"},"chapter")," is not supported in the entry-type ",(0,i.kt)("inlineCode",{parentName:"p"},"book")," because for the latter, the whole book is intended to be cited."),(0,i.kt)("h2",{id:"format"},"Format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"@book{Mueller2014The,\n\n  ...\n\n  chapter={ 2 }\n\n  ...\n\n}\n")))}d.isMDXComponent=!0}}]);