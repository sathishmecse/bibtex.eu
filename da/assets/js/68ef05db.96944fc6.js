"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[1262],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,m=u["".concat(c,".").concat(d)]||u[d]||y[d]||i;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const o=()=>{const[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},2448:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905)),i=r(8009);const s={title:"BibTeX misc type",sidebar_label:"misc"},a=void 0,c={unversionedId:"types/misc",id:"types/misc",title:"BibTeX misc type",description:"There are a variety of entry types in BibTeX, and sometimes you will come across a source that doesn't quite match any of the predefined types. In these cases, you can use the misc type. This type is for anything that doesn't fit into one of the other categories. This could be pieces of music or lecture slides, but mostly it is to cite web pages. These unsupported source types are created with workaround fields from note and howpublished. If you frequently cite source types not supported by BibTex, you should look at BibLaTex, which offers a superset in terms of fields and types.",source:"@site/docs/types/misc.mdx",sourceDirName:"types",slug:"/types/misc",permalink:"/da/types/misc",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/types/misc.mdx",tags:[],version:"current",frontMatter:{title:"BibTeX misc type",sidebar_label:"misc"},sidebar:"tutorialSidebar",previous:{title:"phdthesis",permalink:"/da/types/mastersthesis"},next:{title:"phdthesis",permalink:"/da/types/phdthesis"}},p={},l=[],u={toc:l},y="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are a variety of entry types in BibTeX, and sometimes you will come across a source that doesn't quite match any of the predefined types. In these cases, you can use the misc type. This type is for anything that doesn't fit into one of the other categories. This could be pieces of music or lecture slides, but mostly it is to cite web pages. These unsupported source types are created with workaround fields from ",(0,o.kt)("inlineCode",{parentName:"p"},"note")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"howpublished"),". If you frequently cite source types not supported by BibTex, you should look at BibLaTex, which offers a superset in terms of fields and types."),(0,o.kt)(i.Z,{mdxType:"CiteDrive"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-latex"},"\n@misc{citationKey,\n\n    ...\n\n}\n\n")),(0,o.kt)("p",null,"If you are looking to use misc to cite a website, check out this guide."))}d.isMDXComponent=!0}}]);