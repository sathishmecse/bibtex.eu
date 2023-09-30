"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[3928],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=i,b=u["".concat(s,".").concat(d)]||u[d]||h[d]||o;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294);const i=()=>{const[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},6058:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(3905)),o=r(8009);const a={title:"Understanding the techreport Entry Type in BibTeX",sidebar_label:"techreport"},c=void 0,s={unversionedId:"types/techreport",id:"types/techreport",title:"Understanding the techreport Entry Type in BibTeX",description:'BibTeX is a well-known bibliographic management system that researchers and scholars use to organize and format their bibliographies. It is especially useful in computer science, but it can also be used in other fields. "techreport" is an entry type in BibTeX that is used to cite technical reports.',source:"@site/docs/types/techreport.mdx",sourceDirName:"types",slug:"/types/techreport",permalink:"/it/types/techreport",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/types/techreport.mdx",tags:[],version:"current",frontMatter:{title:"Understanding the techreport Entry Type in BibTeX",sidebar_label:"techreport"},sidebar:"tutorialSidebar",previous:{title:"proceedings",permalink:"/it/types/proceedings"},next:{title:"unpublished",permalink:"/it/types/unpublished"}},l={},p=[],u={toc:p},h="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'BibTeX is a well-known bibliographic management system that researchers and scholars use to organize and format their bibliographies. It is especially useful in computer science, but it can also be used in other fields. "techreport" is an entry type in BibTeX that is used to cite technical reports.'),(0,i.kt)("p",null,"Technical reports are documents that contain in-depth technical information about a specific subject or project. They are frequently created by organizations, institutions, or researchers and are intended for distribution to a specific group of people. Technical reports are rarely formally published, but they are a valuable source of information and should be cited in academic work."),(0,i.kt)("p",null,'In BibTeX, the "techreport" entry type is used to provide all relevant information about a technical report, such as the author, title, institution, year, and report number. A BibTeX entry for a technical report is shown below:'),(0,i.kt)(o.Z,{mdxType:"CiteDrive"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@techreport{key,   \n    author = {Jane Smith},   \n    title = {Technical Report on Advanced Robotics},   \n    institution = {Institute of Technology},   \n    year = {2021},   \n    number = {TR-1234}\n}\n")),(0,i.kt)("p",null,'In this example, the "key" field is a unique identifier that is used to refer to the source in the text of the document. The "author" field lists the author(s) of the technical report, the "title" field provides the title of the report, the "institution" field lists the institution where the report was written, the "year" field provides the year the report was written, and the "number" field provides the report number.'))}d.isMDXComponent=!0}}]);