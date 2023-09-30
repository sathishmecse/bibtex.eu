"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[5800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,b=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8009:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294);const i=()=>{const[e,t]=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},4473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905)),o=n(8009);const l={slug:"publisher",title:"BibTeX field type: publisher",sidebar_label:"publisher"},a=void 0,s={unversionedId:"fields/publisher",id:"fields/publisher",title:"BibTeX field type: publisher",description:"The publisher field is used in various BibTeX entries such as @book, @inbook, or @incollection to specify the name of the publisher that published the referred work. Including the publisher in your citation helps to provide a comprehensive and precise reference, which can aid readers in locating the original source.",source:"@site/docs/fields/publisher.mdx",sourceDirName:"fields",slug:"/fields/publisher",permalink:"/no/fields/publisher",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/publisher.mdx",tags:[],version:"current",frontMatter:{slug:"publisher",title:"BibTeX field type: publisher",sidebar_label:"publisher"},sidebar:"tutorialSidebar",previous:{title:"pages",permalink:"/no/fields/pages"},next:{title:"school",permalink:"/no/fields/school"}},p={},c=[{value:"Examples",id:"examples",level:2},{value:"Book",id:"book",level:3},{value:"Inbook",id:"inbook",level:3},{value:"Incollection",id:"incollection",level:3}],u={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"publisher")," field is used in various BibTeX entries such as ",(0,i.kt)("inlineCode",{parentName:"p"},"@book"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@inbook"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"@incollection")," to specify the name of the publisher that published the referred work. Including the publisher in your citation helps to provide a comprehensive and precise reference, which can aid readers in locating the original source."),(0,i.kt)(o.Z,{mdxType:"CiteDrive"}),(0,i.kt)("p",null,"When including a publisher in your BibTeX entry, be sure to use the full and official name of the publisher. This will ensure the citation is both professional and credible. Additionally, it helps to prevent confusion with other publishers that may have similar names."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Here are a few examples demonstrating how to properly specify a publisher in different BibTeX entries:"),(0,i.kt)("h3",{id:"book"},"Book"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@book{key1,\n  title = {The Art of Scientific Research},\n  author = {John Doe},\n  year = {2023},\n  publisher = {Cambridge University Press},\n}\n\n")),(0,i.kt)("h3",{id:"inbook"},"Inbook"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@inbook{key2,\n  title = {Chapter on Quantum Mechanics},\n  author = {Jane Doe},\n  year = {2023},\n  publisher = {Oxford University Press},\n  pages = {45--78},\n  editor = {Sarah Smith},\n  booktitle = {Modern Physics},\n}\n\n")),(0,i.kt)("h3",{id:"incollection"},"Incollection"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@incollection{key3,\n  title = {Essay on Environmental Conservation},\n  author = {Alex Johnson},\n  year = {2023},\n  publisher = {Springer},\n  booktitle = {Sustainable Development: Theories and Practices},\n  editor = {Mark Lee},\n}\n\n")),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"publisher")," field is usually accompanied by other important fields such as ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"author"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"year"),", etc., to provide a complete citation. It's also worth noting that depending on the citation style being used, the format and placement of the publisher field may vary, so always be sure to follow the guidelines of the specific style you are adhering to."))}h.isMDXComponent=!0}}]);