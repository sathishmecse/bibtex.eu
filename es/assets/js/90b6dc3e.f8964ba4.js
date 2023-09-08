"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(y,a(a({ref:t},c),{},{components:n})):o.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const i={title:"Introduction to BibTeX and the Booklet Type Entry",sidebar_label:"booklet"},a="Introduction to BibTeX and the Booklet Type Entry",l={unversionedId:"types/booklet",id:"types/booklet",title:"Introduction to BibTeX and the Booklet Type Entry",description:"BibTeX is a reference management system for formatting lists of references in a document. It is widely used in the academic community, especially in the fields of science, technology, and mathematics.",source:"@site/docs/types/booklet.mdx",sourceDirName:"types",slug:"/types/booklet",permalink:"/es/types/booklet",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/types/booklet.mdx",tags:[],version:"current",frontMatter:{title:"Introduction to BibTeX and the Booklet Type Entry",sidebar_label:"booklet"},sidebar:"tutorialSidebar",previous:{title:"book",permalink:"/es/types/book"},next:{title:"conference",permalink:"/es/types/conference"}},p={},s=[{value:"The Booklet Entry Type",id:"the-booklet-entry-type",level:2},{value:"Using the Booklet Entry Type in LaTeX",id:"using-the-booklet-entry-type-in-latex",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-bibtex-and-the-booklet-type-entry"},"Introduction to BibTeX and the Booklet Type Entry"),(0,r.kt)("p",null,"BibTeX is a reference management system for formatting lists of references in a document. It is widely used in the academic community, especially in the fields of science, technology, and mathematics."),(0,r.kt)("p",null,"One of the many types of entries that can be included in a BibTeX file is the ",(0,r.kt)("inlineCode",{parentName:"p"},"booklet")," entry type. In this guide, we will introduce you to the ",(0,r.kt)("inlineCode",{parentName:"p"},"booklet")," entry type, and show you how to use it to manage your references in your LaTeX documents."),(0,r.kt)("h2",{id:"the-booklet-entry-type"},"The Booklet Entry Type"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"booklet")," entry type is used to refer to a printed work that is not formally published, but is bound together like a book. Examples of ",(0,r.kt)("inlineCode",{parentName:"p"},"booklet")," entries could include conference proceedings, program guides, or instruction manuals."),(0,r.kt)("p",null,"The required fields for a ",(0,r.kt)("inlineCode",{parentName:"p"},"booklet")," entry are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"title"),": The title of the booklet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"author"),": The author or authors of the booklet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"howpublished"),": How the booklet was published."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address"),": The address of the publisher or sponsoring institution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"year"),": The year the booklet was published.")),(0,r.kt)("p",null,"Optional fields for a ",(0,r.kt)("inlineCode",{parentName:"p"},"booklet")," entry include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"editor"),": The editor or editors of the booklet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"volume"),": The volume number of a multi-volume book."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number"),": The number of a journal or series."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"series"),": The name of a series or set of books."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"organization"),": The organization that published or sponsored the booklet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"month"),": The month of publication."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"note"),": Miscellaneous information.")),(0,r.kt)("p",null,"Here is an example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"booklet")," entry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@booklet{example_booklet,\n    title        = {Conference Proceedings},\n    author       = {Jane Doe and John Smith},\n    year         = 2022,\n    month        = {July},\n    address      = {San Francisco, CA},\n    note         = {This is a sample entry for a conference proceedings booklet.},\n    howpublished = {Presented at the Annual Conference on Technology},\n    editor       = {Bob Johnson}\n}\n\n")),(0,r.kt)("h2",{id:"using-the-booklet-entry-type-in-latex"},"Using the Booklet Entry Type in LaTeX"),(0,r.kt)("p",null,"Once you have created a ",(0,r.kt)("inlineCode",{parentName:"p"},"booklet")," entry in your BibTeX file, you can reference it in your LaTeX document using the ",(0,r.kt)("inlineCode",{parentName:"p"},"\\cite")," command. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"`\\documentclass{article}  \n\\begin{document}  \nAccording to \\cite{example_booklet}, the Annual Conference on Technology was a success.  \n\\bibliography{references} \n\\bibliographystyle{plain}  \n\\end{document}\n")),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"example_booklet")," entry in the ",(0,r.kt)("inlineCode",{parentName:"p"},"references.bib")," file is cited using the ",(0,r.kt)("inlineCode",{parentName:"p"},"\\cite")," command. The bibliography is then generated using the ",(0,r.kt)("inlineCode",{parentName:"p"},"plain")," style."))}d.isMDXComponent=!0}}]);