"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[5858],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,b=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?i.createElement(b,a(a({ref:t},s),{},{components:n})):i.createElement(b,a({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8009:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(7294);const o=()=>{const[e,t]=(0,i.useState)(!1);return i.createElement(i.Fragment,null,i.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},4162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var i=n(7462),o=(n(7294),n(3905)),r=n(8009);const a={title:"Introduction to BibTeX and the Inbook Type Entry",sidebar_label:"inbook"},l=void 0,p={unversionedId:"types/inbook",id:"types/inbook",title:"Introduction to BibTeX and the Inbook Type Entry",description:"BibTeX is a reference management system used to format lists of references in a document. It is widely used in academic writing, particularly in scientific and technical fields. In this guide, we will introduce you to the inbook entry type in BibTeX and show you how to use it in your LaTeX documents.",source:"@site/docs/types/inbook.mdx",sourceDirName:"types",slug:"/types/inbook",permalink:"/it/types/inbook",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/types/inbook.mdx",tags:[],version:"current",frontMatter:{title:"Introduction to BibTeX and the Inbook Type Entry",sidebar_label:"inbook"},sidebar:"tutorialSidebar",previous:{title:"conference",permalink:"/it/types/conference"},next:{title:"incollection",permalink:"/it/types/incollection"}},c={},s=[{value:"The Inbook Entry Type",id:"the-inbook-entry-type",level:2},{value:"Using the Inbook Entry Type in LaTeX",id:"using-the-inbook-entry-type-in-latex",level:2}],u={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"BibTeX is a reference management system used to format lists of references in a document. It is widely used in academic writing, particularly in scientific and technical fields. In this guide, we will introduce you to the ",(0,o.kt)("inlineCode",{parentName:"p"},"inbook")," entry type in BibTeX and show you how to use it in your LaTeX documents."),(0,o.kt)(r.Z,{mdxType:"CiteDrive"}),(0,o.kt)("h2",{id:"the-inbook-entry-type"},"The Inbook Entry Type"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"inbook")," entry type is used to refer to a specific chapter or section within a book. The required fields for an ",(0,o.kt)("inlineCode",{parentName:"p"},"inbook")," entry are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"author"),": The name(s) of the author(s) of the chapter or section."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"title"),": The title of the chapter or section."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"booktitle"),": The title of the book containing the chapter or section."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"publisher"),": The name of the publisher of the book."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"year"),": The year of publication.")),(0,o.kt)("p",null,"Optional fields for an ",(0,o.kt)("inlineCode",{parentName:"p"},"inbook")," entry include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"editor"),": The name(s) of the editor(s) of the book."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"volume"),": The volume number of the book."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"number"),": The number of a series or set of books."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"series"),": The name of a series or set of books."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"address"),": The location of the publisher."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"edition"),": The edition of the book."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"month"),": The month of publication."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pages"),": The page numbers of the chapter or section."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"note"),": Miscellaneous information.")),(0,o.kt)("p",null,"Here is an example of an ",(0,o.kt)("inlineCode",{parentName:"p"},"inbook")," entry:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bibtex"},"`@inbook{example_inbook,\n    title        = {The Effects of Climate Change},\n    author       = {John Smith},\n    year         = 2022,\n    booktitle    = {Environmental Issues and Solutions},\n    publisher    = {Wiley},\n    pages        = {101--112},\n    note         = {This is a sample entry for a chapter in a book.},\n    editor       = {Jane Doe},\n    edition      = {3rd}\n}\n")),(0,o.kt)("h2",{id:"using-the-inbook-entry-type-in-latex"},"Using the Inbook Entry Type in LaTeX"),(0,o.kt)("p",null,"Once you have created an ",(0,o.kt)("inlineCode",{parentName:"p"},"inbook")," entry in your BibTeX file, you can reference it in your LaTeX document using the ",(0,o.kt)("inlineCode",{parentName:"p"},"\\cite")," command. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-latex"},"\\documentclass{article}  \\begin{document}  According to \\cite{example_inbook}, climate change has significant effects on the planet.  \\bibliography{references} \\bibliographystyle{plain}  \\end{document}\n")),(0,o.kt)("p",null,"In this example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"example_inbook")," entry in the ",(0,o.kt)("inlineCode",{parentName:"p"},"references.bib")," file is cited using the ",(0,o.kt)("inlineCode",{parentName:"p"},"\\cite")," command. The bibliography is then generated using the ",(0,o.kt)("inlineCode",{parentName:"p"},"plain")," style."))}d.isMDXComponent=!0}}]);