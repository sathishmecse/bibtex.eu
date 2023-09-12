"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[65],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8009:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294);const i=()=>a.createElement(a.Fragment,null,a.createElement("iframe",{style:{borderRadius:15,border:"5px solid #776cfe"},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))},1744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(7462),i=(n(7294),n(3905)),r=n(8009);const o={},s="How can I use BibTeX to cite a website in LaTeX?",c={unversionedId:"faq/how-can-i-use-bibtex-to-cite-a-website",id:"faq/how-can-i-use-bibtex-to-cite-a-website",title:"How can I use BibTeX to cite a website in LaTeX?",description:"There are several ways to cite a website in LaTeX. In this short answer to the question, we give three, the easiest being BibLaTeX via the CiteDrive browser extension in the last example.",source:"@site/docs/faq/how-can-i-use-bibtex-to-cite-a-website.mdx",sourceDirName:"faq",slug:"/faq/how-can-i-use-bibtex-to-cite-a-website",permalink:"/ko/faq/how-can-i-use-bibtex-to-cite-a-website",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/faq/how-can-i-use-bibtex-to-cite-a-website.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BibTeX FAQ",permalink:"/ko/faq/"},next:{title:"How do I create a .BIB file to manage my BibTeX references?",permalink:"/ko/faq/how-do-i-create-a-bib-file-to-manage-my-bibtex-references"}},l={},p=[{value:"Using BibTeX",id:"using-bibtex",level:2},{value:"Using BibLaTeX",id:"using-biblatex",level:2},{value:"Using <code>natbib</code>",id:"using-natbib",level:2}],u={toc:p},b="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-can-i-use-bibtex-to-cite-a-website-in-latex"},"How can I use BibTeX to cite a website in LaTeX?"),(0,i.kt)("p",null,"There are several ways to cite a website in LaTeX. In this short answer to the question, we give three, the easiest being BibLaTeX via the CiteDrive browser extension in the last example."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.citedrive.com/"},"CiteDrive")," is a collaborative online reference management tool based on BibTeX that automatically synchronizes with publication systems such as ",(0,i.kt)("a",{parentName:"p",href:"https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf"},"Overleaf")," and ",(0,i.kt)("a",{parentName:"p",href:"https://citedrive.medium.com/bibliography-management-in-r-markdown-with-citedrive-and-rstudio-2585699dd619"},"RStudio"),". They offer a ",(0,i.kt)("a",{parentName:"p",href:"https://citedrive.medium.com/the-citedrive-companion-for-overleaf-and-rstudio-d8022adb9370"},"browser extension")," that allows you to save academic articles directly from the browser and in the correct BibTeX format so that you can, for example, cite them directly in the Overleaf project without having to switch between browser windows/tabs. The extension can also save web pages in BibLaTeX format, automatically capturing the title, URL, and access date.")),(0,i.kt)(r.Z,{mdxType:"CiteDrive"}),(0,i.kt)("h2",{id:"using-bibtex"},"Using BibTeX"),(0,i.kt)("p",null,"In BibTeX we use ",(0,i.kt)("inlineCode",{parentName:"p"},"@misc")," as a workaround and make use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"note")," field to specify the URl and usually an access date. In this example, ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," (",(0,i.kt)("em",{parentName:"p"},"or ",(0,i.kt)("inlineCode",{parentName:"em"},"hyperref")),") is required using ",(0,i.kt)("inlineCode",{parentName:"p"},"usepackage{url}"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"@misc{CiteDrive2022,\n    title        = {CiteDrive brings reference management to Overleaf},\n    author       = {CiteDrive, Inc},\n    year         = 2022,\n    note         = {\\url{https://www.citedrive.com/overleaf} [Accessed: (Use the date of access)]}\n}\n")),(0,i.kt)("p",null,"Alternatively, the ",(0,i.kt)("inlineCode",{parentName:"p"},"howpublished")," field can be used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"@misc{CiteDrive2022,\n    title        = {CiteDrive brings reference management to Overleaf},\n    author       = {CiteDrive, Inc},\n    year         = 2022,\n    note         = {Accessed: (Use the date of access)},\n    howpublished = {\\url{https://www.citedrive.com/overleaf}}\n}\n")),(0,i.kt)("h2",{id:"using-biblatex"},"Using BibLaTeX"),(0,i.kt)("p",null,"If you use BibLaTeX, which we recommend, the ",(0,i.kt)("inlineCode",{parentName:"p"},"@online")," entry type is inherently supported and works without a further tweak. You can enter the URL and access date in the fields ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"urldate"),", respectively."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"@online{CiteDrive2022,\n    title        = {CiteDrive brings reference management to Overleaf},\n    author       = {CiteDrive, Inc},\n    year         = 2022,\n    url          = {https://www.citedrive.com/overleaf},\n    urldate      = {Use the date of access}\n}\n")),(0,i.kt)("h2",{id:"using-natbib"},"Using ",(0,i.kt)("inlineCode",{parentName:"h2"},"natbib")),(0,i.kt)("p",null,"People frequently inquire about how to cite web pages using ",(0,i.kt)("a",{parentName:"p",href:"/natbib"},"natbib"),". We emphasize that it works in the same way as BibTeX. Natbib is a tool for styling in-text citations, and it depends on BibTeX as a backend."))}d.isMDXComponent=!0}}]);