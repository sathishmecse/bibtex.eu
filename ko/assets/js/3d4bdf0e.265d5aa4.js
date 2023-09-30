"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[7212],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(r),h=n,b=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return r?i.createElement(b,l(l({ref:t},u),{},{components:r})):i.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:n,l[1]=a;for(var p=2;p<o;p++)l[p]=r[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(7294);const n=()=>{const[e,t]=(0,i.useState)(!1);return i.createElement(i.Fragment,null,i.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},5223:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var i=r(7462),n=(r(7294),r(3905)),o=r(8009);const l={slug:"howpublished",title:"BibTeX field type: howpublished",sidebar_label:"howpublished"},a=void 0,s={unversionedId:"fields/howpublished",id:"fields/howpublished",title:"BibTeX field type: howpublished",description:"The howpublished field is utilized in the @misc entry type, usually to address those source types that are not directly supported by BibTeX. This field comes in handy, especially when you are citing web pages and you want to provide a URL.",source:"@site/docs/fields/howpublished.mdx",sourceDirName:"fields",slug:"/fields/howpublished",permalink:"/ko/fields/howpublished",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/howpublished.mdx",tags:[],version:"current",frontMatter:{slug:"howpublished",title:"BibTeX field type: howpublished",sidebar_label:"howpublished"},sidebar:"tutorialSidebar",previous:{title:"email",permalink:"/ko/fields/email"},next:{title:"institution",permalink:"/ko/fields/institution"}},p={},u=[],c={toc:u},d="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"howpublished")," field is utilized in the ",(0,n.kt)("inlineCode",{parentName:"p"},"@misc")," entry type, usually to address those source types that are not directly supported by BibTeX. This field comes in handy, especially when you are citing web pages and you want to provide a URL."),(0,n.kt)(o.Z,{mdxType:"CiteDrive"}),(0,n.kt)("p",null,"In your BibTeX entries, you can utilize the ",(0,n.kt)("inlineCode",{parentName:"p"},"howpublished")," field to detail the publication medium or source of the reference. This field is highly useful when you need to incorporate non-traditional sources into your references, such as web pages or online reports."),(0,n.kt)("p",null,"Here is an example demonstrating how to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"howpublished")," field to specify a URL when citing a web page:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bibtex"},"@misc{BibTeXeu,\n  title = {{Reference management with BibTeX: A short guide}},\n  howpublished = {\\url{https://bibtex.eu/}},\n  note = {Accessed: 2022-06-12}\n}\n")),(0,n.kt)("p",null,"In this example, the ",(0,n.kt)("inlineCode",{parentName:"p"},"howpublished")," field is used to provide the URL of the web page being cited, offering readers a direct link to the source. Remember to include a ",(0,n.kt)("inlineCode",{parentName:"p"},"note")," field to specify the access date, which is a common requirement when citing online sources."))}h.isMDXComponent=!0}}]);