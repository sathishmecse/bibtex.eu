"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[650],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=i,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294);const i=()=>{const[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},6982:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),i=(r(7294),r(3905)),o=r(8009);const a={slug:"journal",title:"BibTeX field type: journal",sidebar_label:"journal"},l=void 0,c={unversionedId:"fields/journal",id:"fields/journal",title:"BibTeX field type: journal",description:"The journal field is utilized to specify the name of the journal where the article was published. This field is critical in differentiating articles from various publications and providing the correct context for the referenced work.",source:"@site/docs/fields/journal.mdx",sourceDirName:"fields",slug:"/fields/journal",permalink:"/ko/fields/journal",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/journal.mdx",tags:[],version:"current",frontMatter:{slug:"journal",title:"BibTeX field type: journal",sidebar_label:"journal"},sidebar:"tutorialSidebar",previous:{title:"institution",permalink:"/ko/fields/institution"},next:{title:"month",permalink:"/ko/fields/month"}},u={},s=[],p={toc:s},f="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"journal")," field is utilized to specify the name of the journal where the article was published. This field is critical in differentiating articles from various publications and providing the correct context for the referenced work."),(0,i.kt)(o.Z,{mdxType:"CiteDrive"}),(0,i.kt)("p",null,"Here is a template to demonstrate how you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"journal")," field in a ",(0,i.kt)("inlineCode",{parentName:"p"},"@article")," entry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{ ... ,\n journal = {Name of the Journal},\n}\n\n")),(0,i.kt)("p",null,'In the above format, replace "Name of the Journal" with the actual name of the journal where the article was published. It is important to enter this information accurately to ensure correct citations.'),(0,i.kt)("p",null,"For instance, the following is an example showcasing a correct use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"journal")," field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{smith2023effects,\n title = {The Effects of XYZ on ABC},\n author = {Smith, John},\n journal = {Journal of ABC Research},\n year = {2023},\n}\n")))}d.isMDXComponent=!0}}]);