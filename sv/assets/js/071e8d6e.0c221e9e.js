"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[9010],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=a,d=u["".concat(l,".").concat(b)]||u[b]||f[b]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5673:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={slug:"pages",title:"BibTeX field type: pages",sidebar_label:"pages"},i="BibTeX field type: pages",s={unversionedId:"fields/pages",id:"fields/pages",title:"BibTeX field type: pages",description:"Page range of, for example, a book. You can separate these either with commas or double dashes.",source:"@site/i18n/sv/docusaurus-plugin-content-docs/current/fields/pages.mdx",sourceDirName:"fields",slug:"/fields/pages",permalink:"/sv/fields/pages",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/pages.mdx",tags:[],version:"current",frontMatter:{slug:"pages",title:"BibTeX field type: pages",sidebar_label:"pages"},sidebar:"tutorialSidebar",previous:{title:"organization",permalink:"/sv/fields/organization"},next:{title:"publisher",permalink:"/sv/fields/publisher"}},l={},p=[],c={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bibtex-field-type-pages"},"BibTeX field type: pages"),(0,a.kt)("p",null,"Page range of, for example, a book. You can separate these either with commas or double dashes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},"@book{key,\n  pages={33--44},\n}\n\n@book{key,\n  pages={22,33--44},\n}\n\n@book{key,\n  pages={17},\n}\n")))}f.isMDXComponent=!0}}]);