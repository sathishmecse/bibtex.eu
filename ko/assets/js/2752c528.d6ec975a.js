"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[9816],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=i.createContext({}),c=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return i.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return r?i.createElement(f,a(a({ref:t},s),{},{components:r})):i.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(7294);const n=()=>{const[e,t]=(0,i.useState)(!1);return i.createElement(i.Fragment,null,i.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},4294:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var i=r(7462),n=(r(7294),r(3905)),o=r(8009);const a={slug:"volume",title:"BibTeX field type: volume",sidebar_label:"volume"},l=void 0,u={unversionedId:"fields/volume",id:"fields/volume",title:"BibTeX field type: volume",description:"The volume field in a BibTeX entry is essential when you are referencing a part of a larger work, such as an article in a journal or a chapter in a multi-volume book. This field allows you to specify which volume of a journal or book you are citing, providing the reader with more precise information to locate the cited work.",source:"@site/docs/fields/volume.mdx",sourceDirName:"fields",slug:"/fields/volume",permalink:"/ko/fields/volume",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/volume.mdx",tags:[],version:"current",frontMatter:{slug:"volume",title:"BibTeX field type: volume",sidebar_label:"volume"},sidebar:"tutorialSidebar",previous:{title:"type",permalink:"/ko/fields/type"},next:{title:"year",permalink:"/ko/fields/year"}},c={},s=[{value:"Example",id:"example",level:2}],p={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"volume")," field in a BibTeX entry is essential when you are referencing a part of a larger work, such as an article in a journal or a chapter in a multi-volume book. This field allows you to specify which volume of a journal or book you are citing, providing the reader with more precise information to locate the cited work."),(0,n.kt)(o.Z,{mdxType:"CiteDrive"}),(0,n.kt)("p",null,"In many scholarly and academic publications, journals are published in volumes, often with several issues in each volume. The volume number usually indicates a collection of issues published within a specific time frame, typically a year. Similarly, multi-volume books or series are segmented into different volumes, each containing a portion of the entire work."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"volume")," field is particularly crucial when citing journals, as it enables readers to find the specific collection of issues where the cited article was published. It is typically used in conjunction with the ",(0,n.kt)("inlineCode",{parentName:"p"},"number")," field, which further specifies the issue within the volume where the article can be found."),(0,n.kt)("p",null,"Here's how you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"volume")," field in a BibTeX entry:"),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{key,\n    title={Title of the Article},\n    author={Author Name},\n    journal={Journal Name},\n    volume={5},\n    number={3},\n    pages={123-456},\n    year={2022},\n}\n")),(0,n.kt)("p",null,"In this example, the ",(0,n.kt)("inlineCode",{parentName:"p"},"volume")," field specifies that the article was published in volume 5 of the journal. Including this detail helps in providing a complete and precise citation, making it easier for readers to locate the cited work."),(0,n.kt)("p",null,"Similarly, in multi-volume books or series, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"volume")," field to indicate the specific volume that contains the chapter or section you are citing. This usage again assists readers in finding the exact source material more efficiently."))}d.isMDXComponent=!0}}]);