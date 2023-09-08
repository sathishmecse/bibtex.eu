"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[5619],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),p=a,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||i;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=()=>n.createElement(n.Fragment,null,n.createElement("iframe",{style:{borderRadius:15,border:"5px solid #776cfe"},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))},2948:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),i=r(8009);const o={title:"Reference management with BibTeX, when using R Markdown -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",sidebar_label:"Using R Markdown (Quick start)",sidebar_position:6},s=void 0,l={unversionedId:"rmarkdown",id:"rmarkdown",title:"Reference management with BibTeX, when using R Markdown -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",source:"@site/docs/rmarkdown.mdx",sourceDirName:".",slug:"/rmarkdown",permalink:"/es/rmarkdown",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/rmarkdown.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Reference management with BibTeX, when using R Markdown -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",sidebar_label:"Using R Markdown (Quick start)",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Using Quarto (RStudio/Posit) (Quick start)",permalink:"/es/quarto"},next:{title:"Using Overleaf (Quick start)",permalink:"/es/overleaf"}},c={},d=[{value:"Step 1: Create a .bib-file and create some entries.",id:"step-1-create-a-bib-file-and-create-some-entries",level:2},{value:"Step 2: Create a R Markdown document and connect",id:"step-2-create-a-r-markdown-document-and-connect",level:2},{value:"Reference managers",id:"reference-managers",level:2}],u={toc:d},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reference-management-in-r-markdown-with-bibtex-a-short-guide"},"Reference management in R Markdown with BibTeX: A short guide"),(0,a.kt)("p",null,"R Markdown is an great tool for creating reproducible reports, papers, presentations, and more. One of the things that makes R-Markdown so powerful is its ability to integrate with other tools and software. One such tool is BibTeX, which is a reference management system for LaTeX documents. BibTeX allows you to cite sources easily in your document and create a bibliography."),(0,a.kt)(i.Z,{mdxType:"CiteDrive"}),(0,a.kt)("h2",{id:"step-1-create-a-bib-file-and-create-some-entries"},"Step 1: Create a .bib-file and create some entries."),(0,a.kt)("p",null,"As with the previous section, we start by generating a .bib-file, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"bibliography.bib"),", which is subsequently filled with BibTeX entries.\nBibTeX entries are constructed in the following format and contain enough information for citation and inclusion in the bibliography for each literature source (book, essay, etc.)."),(0,a.kt)("p",null,'We use the example from the previous section and quote the book "The Old Man and the Sea" by Ernest Hemingway. The entry then looks like this:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-latex"},"@book{Hemingway1952,\n  title={The Old Man and the Sea},\n  author={Hemingway, Ernest},\n  year={1952},\n  publisher={Charles Scribner's Sons}\n}\n")),(0,a.kt)("p",null,'Again, we break down the "anatomy" of this entry, looking at three components to understand how each BibTeX entry is defined:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Entry-type"),": with ",(0,a.kt)("inlineCode",{parentName:"li"},"@book")," we define the type according to the schema ",(0,a.kt)("inlineCode",{parentName:"li"},"@type")," of the reference. Possible are ",(0,a.kt)("inlineCode",{parentName:"li"},"@article")," for scientific articles and others. BibTeX likes to specify which fields are optional and which are required to indicate them correctly in the literature."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Entry fields"),": in this case of our ",(0,a.kt)("inlineCode",{parentName:"li"},"@book")," example, these are ",(0,a.kt)("inlineCode",{parentName:"li"},"title"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"author"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"year")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"publisher"),". (Cf. ",(0,a.kt)("a",{parentName:"li",href:"./fields"},"fields"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"citation-key"),": in our example, it is ",(0,a.kt)("inlineCode",{parentName:"li"},"Hemingway1952")," and is used to indicate an in-text citation in LaTeX, i.e., to refer to the source. in R Markdown we do this with ",(0,a.kt)("inlineCode",{parentName:"li"},"[@Hemingway1952]"),". The citation key can be any string - often a combination of author, year, and a word from the title.")),(0,a.kt)("h2",{id:"step-2-create-a-r-markdown-document-and-connect"},"Step 2: Create a R Markdown document and connect"),(0,a.kt)("p",null,"Integrating BibTeX with R Markdown is very simple. All you have to do is specify the bib-file with ",(0,a.kt)("inlineCode",{parentName:"p"},"bibliography: bibliography.bib")," in YAML and the citation with ",(0,a.kt)("inlineCode",{parentName:"p"},"[@Hemingway1952]")," at the place where you want to place the in-text citation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},'---\ntitle: "BibTeX references in R Markdown"\nauthor: "John Doe"\ndate: \'2022-07-19\'\nbibliography: bibliography.bib\noutput: html_document\n---\n\n\n## BibTeX references in R Markdown\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nPraesent enim urna, dapibus et bibendum vel, consectetur et turpis.\nCras a molestie nulla. [@Hemingway1952]\n\n\n')),(0,a.kt)("h2",{id:"reference-managers"},"Reference managers"),(0,a.kt)("p",null,"Formatting BibTeX files by hand can be tedious, which is why it is generally recommended to use a reference manager. Here are a few that are well suited for this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.citedrive.com/"},"CiteDrive")," is a bibtex-powered, collaborative and cloud-based tool to manage your references and teams in projects. It offers a single-click export to Overleaf (",(0,a.kt)("a",{parentName:"li",href:"https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf"},(0,a.kt)("em",{parentName:"a"},"Cf. Overleaf Blog Post - https://www.overleaf.com/blog/citedrive... | CiteDrive-Easy Reference Management for Overleaf")),") along with R Markdown (",(0,a.kt)("a",{parentName:"li",href:"https://citedrive.medium.com/bibliography-management-in-r-markdown-with-citedrive-and-rstudio-2585699dd619"},(0,a.kt)("em",{parentName:"a"},"Cf. Medium post: Bibliography Management in R Markdown with CiteDrive and RStudio")),"), while keeping citations in sync."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.zotero.org/"},"Zotero")," is a free, open-source literature management tool that manages bibliographic data and related research materials (such as PDF files). The best performance for BibTeX in Zotero is achieved with ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://retorque.re/zotero-better-bibtex/"},"Better BibTeX For Zotero"))," by retorque."),(0,a.kt)("li",{parentName:"ul"},"The free, open-source software ",(0,a.kt)("a",{parentName:"li",href:"https://www.jabref.org/"},"JabRef")," is a BibTeX-supported reference manager that runs on Windows, Mac, and Linux. It is based on Java and is maintained by JabRef e.V.")))}p.isMDXComponent=!0}}]);