"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[7786],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?i.createElement(m,a(a({ref:t},p),{},{components:r})):i.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(7294);const n=()=>{const[e,t]=(0,i.useState)(!1);return i.createElement(i.Fragment,null,i.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},5581:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=r(7462),n=(r(7294),r(3905)),o=r(8009);const a={slug:"series",title:"BibTeX field type: series",sidebar_label:"series"},s=void 0,l={unversionedId:"fields/series",id:"fields/series",title:"BibTeX field type: series",description:"The series field in BibTeX is used to denote the series to which a book, report, or other publication belongs. Specifying the series can offer additional context for the reader, as it may relate to a broader thematic or scholarly discourse.",source:"@site/docs/fields/series.mdx",sourceDirName:"fields",slug:"/fields/series",permalink:"/it/fields/series",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/series.mdx",tags:[],version:"current",frontMatter:{slug:"series",title:"BibTeX field type: series",sidebar_label:"series"},sidebar:"tutorialSidebar",previous:{title:"school",permalink:"/it/fields/school"},next:{title:"title",permalink:"/it/fields/title"}},c={},p=[{value:"Format",id:"format",level:2},{value:"Example",id:"example",level:2}],d={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"series")," field in BibTeX is used to denote the series to which a book, report, or other publication belongs. Specifying the series can offer additional context for the reader, as it may relate to a broader thematic or scholarly discourse."),(0,n.kt)(o.Z,{mdxType:"CiteDrive"}),(0,n.kt)("p",null,"This field is optional and can be employed in various entry types including, but not limited to ",(0,n.kt)("inlineCode",{parentName:"p"},"@book"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"@inbook"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"@incollection"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"@inproceedings"),". It is particularly useful when the cited work is part of an ongoing series or a larger corpus of works that share a common theme, author, or publisher."),(0,n.kt)("p",null,"When inputting data into the ",(0,n.kt)("inlineCode",{parentName:"p"},"series")," field, it is recommended to use the full official title of the series. If the series has an ISSN, it might also be relevant to include this for more precise referencing."),(0,n.kt)("h2",{id:"format"},"Format"),(0,n.kt)("p",null,"The general format for including a series in your BibTeX entry is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bibtex"},"@entrytype{key,\n  ...\n  series = {Name of the Series},\n  ...\n}\n")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Here is an example of how to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"series")," field in a ",(0,n.kt)("inlineCode",{parentName:"p"},"@book")," entry:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bibtex"},"@book{doe2023,\n  author = {John Doe},\n  title = {Advanced Studies in Quantum Mechanics},\n  year = {2023},\n  publisher = {Scientific Publishing Ltd.},\n  series = {Cambridge Advanced Series in Physics},\n}\n")),(0,n.kt)("p",null,'In this example, the book is part of the "Cambridge Advanced Series in Physics," which might encompass various titles covering advanced topics in the field of physics. Including the series helps to locate the work within a larger academic conversation and can provide readers with additional resources on the topic.'))}f.isMDXComponent=!0}}]);