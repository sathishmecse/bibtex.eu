"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[9360],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),y=i,d=u["".concat(a,".").concat(y)]||u[y]||f[y]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=y;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p[u]="string"==typeof e?e:i,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},2865:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={slug:"type",title:"BibTeX field type: type",sidebar_label:"type"},l="BibTeX field type: type",p={unversionedId:"fields/type",id:"fields/type",title:"BibTeX field type: type",description:'Within the BibTeX entry, the type field is used to declare an explicit type, i.e. for technical report "Research Note", or "Government Report".',source:"@site/docs/fields/type.mdx",sourceDirName:"fields",slug:"/fields/type",permalink:"/fields/type",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/type.mdx",tags:[],version:"current",frontMatter:{slug:"type",title:"BibTeX field type: type",sidebar_label:"type"},sidebar:"tutorialSidebar",previous:{title:"title",permalink:"/fields/title"},next:{title:"volume",permalink:"/fields/volume"}},a={},c=[{value:"example",id:"example",level:2}],s={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bibtex-field-type-type"},"BibTeX field type: type"),(0,i.kt)("p",null,'Within the BibTeX entry, the type field is used to declare an explicit type, i.e. for technical report "Research Note", or "Government Report".'),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"\n@techreport{...,\n    type={Research Note},\n}\n")))}f.isMDXComponent=!0}}]);