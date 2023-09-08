"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[5324],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),l=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=l(n),d=r,b=c["".concat(u,".").concat(d)]||c[d]||h[d]||s;return n?i.createElement(b,a(a({ref:t},p),{},{components:n})):i.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:r,a[1]=o;for(var l=2;l<s;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const s={title:"Understanding the `unpublished` Entry Type in BibTeX",sidebar_label:"unpublished"},a="Understanding the unpublished Entry Type in BibTeX",o={unversionedId:"types/unpublished",id:"types/unpublished",title:"Understanding the `unpublished` Entry Type in BibTeX",description:'BibTeX is a popular bibliographic management system that assists researchers and academics in organizing and formatting their bibliographies. It is widely used in computer science, but it is also useful in many other fields that require citation of sources. The "unpublished" entry type in BibTeX is used to cite sources that have not been officially published, such as theses, dissertations, and technical reports.',source:"@site/docs/types/unpublished.mdx",sourceDirName:"types",slug:"/types/unpublished",permalink:"/de/types/unpublished",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/types/unpublished.mdx",tags:[],version:"current",frontMatter:{title:"Understanding the `unpublished` Entry Type in BibTeX",sidebar_label:"unpublished"},sidebar:"tutorialSidebar",previous:{title:"techreport",permalink:"/de/types/techreport"}},u={},l=[],p={toc:l},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"understanding-the-unpublished-entry-type-in-bibtex"},"Understanding the ",(0,r.kt)("inlineCode",{parentName:"h1"},"unpublished")," Entry Type in BibTeX"),(0,r.kt)("p",null,'BibTeX is a popular bibliographic management system that assists researchers and academics in organizing and formatting their bibliographies. It is widely used in computer science, but it is also useful in many other fields that require citation of sources. The "unpublished" entry type in BibTeX is used to cite sources that have not been officially published, such as theses, dissertations, and technical reports.'),(0,r.kt)("p",null,'The "unpublished" entry type is a versatile entry type that allows authors to include all relevant information about an unpublished source, such as the author\'s name, title, institution, and date. An example of a BibTeX entry for an unpublished source is as follows:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@unpublished{key,   \n    author = {John Doe},   \n    title = {The Importance of Unpublished Sources},   \n    institution = {University of Example},   \n    year = {2022}, \n}\n")),(0,r.kt)("p",null,'The "key" field in this example is a unique identifier that is used to refer to the source in the document\'s text. The "author" field contains the name(s) of the source\'s author(s), the "title" field contains the title of the source, the "institution" field contains the name of the institution where the source was written, and the "year" field contains the year the source was written.'),(0,r.kt)("p",null,'It should be noted that the "unpublished" entry type should only be used for sources that have not yet been formally published. If a source has been published, even if only online, it should be cited as a "techreport," "mastersthesis," or "phdthesis," depending on the type of publication.'))}h.isMDXComponent=!0}}]);