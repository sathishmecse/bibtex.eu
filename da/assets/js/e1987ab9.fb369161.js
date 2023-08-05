"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[8869],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7824:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(3117),a=(n(7294),n(3905));const i={title:"Reference management with BibTeX, when using Quarto -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",sidebar_label:"Using Quarto (RStudio/Posit) (Quick start)",sidebar_position:5},o="Reference management in Quart (RStudio/Posit) with BibTeX: A short guide",s={unversionedId:"quarto",id:"quarto",title:"Reference management with BibTeX, when using Quarto -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",source:"@site/docs/quarto.md",sourceDirName:".",slug:"/quarto",permalink:"/da/quarto",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/quarto.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Reference management with BibTeX, when using Quarto -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",sidebar_label:"Using Quarto (RStudio/Posit) (Quick start)",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Using BibLaTeX (Quick start)",permalink:"/da/biblatex"},next:{title:"Using R Markdown (Quick start)",permalink:"/da/rmarkdown"}},l={},u=[{value:"Step 1: Create a .bib-file and create some entries.",id:"step-1-create-a-bib-file-and-create-some-entries",level:2},{value:"Step 2: Create a Quarto document and connect",id:"step-2-create-a-quarto-document-and-connect",level:2},{value:"Reference managers",id:"reference-managers",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reference-management-in-quart-rstudioposit-with-bibtex-a-short-guide"},"Reference management in Quart (RStudio/Posit) with BibTeX: A short guide"),(0,a.kt)("p",null,"Quarto is an excellent tool for producing reproducible reports, papers, and presentations, among other things. One of the features that distinguishes Quarto is its ability to integrate with other tools and software. BibTeX, a reference management system for LaTeX documents, is one such tool. BibTeX makes it simple to cite sources and create a bibliography in your document."),(0,a.kt)("h2",{id:"step-1-create-a-bib-file-and-create-some-entries"},"Step 1: Create a .bib-file and create some entries."),(0,a.kt)("p",null,"As in the previous section, we begin by creating a.bib-file called 'bibliography.bib,' which is then filled with BibTeX entries.\nBibTeX entries are built in the following format and contain enough information for citation and bibliography inclusion for each literature source (book, essay, etc.)."),(0,a.kt)("p",null,'We use the example from the previous section and quote the book "The Old Man and the Sea" by Ernest Hemingway. The result is as follows:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-latex"},"@book{Hemingway1952,\n  title={The Old Man and the Sea},\n  author={Hemingway, Ernest},\n  year={1952},\n  publisher={Charles Scribner's Sons}\n}\n")),(0,a.kt)("p",null,'Again, we dissect this entry\'s "anatomy," focusing on three components to understand how each BibTeX entry is defined:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Entry-type"),": with ",(0,a.kt)("inlineCode",{parentName:"li"},"@book")," we define the type according to the schema ",(0,a.kt)("inlineCode",{parentName:"li"},"@type")," of the reference. Possible are ",(0,a.kt)("inlineCode",{parentName:"li"},"@article")," for scientific articles and others. BibTeX likes to specify which fields are optional and which are required to indicate them correctly in the literature."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Entry fields"),": in this case of our ",(0,a.kt)("inlineCode",{parentName:"li"},"@book")," example, these are ",(0,a.kt)("inlineCode",{parentName:"li"},"title"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"author"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"year")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"publisher"),". (Cf. ",(0,a.kt)("a",{parentName:"li",href:"./fields"},"fields"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"citation-key"),": in our example, it is ",(0,a.kt)("inlineCode",{parentName:"li"},"Hemingway1952")," and is used to indicate an in-text citation in LaTeX, i.e., to refer to the source. in Quarto we do this with ",(0,a.kt)("inlineCode",{parentName:"li"},"[@Hemingway1952]"),". The citation key can be any string - often a combination of author, year, and a word from the title.")),(0,a.kt)("h2",{id:"step-2-create-a-quarto-document-and-connect"},"Step 2: Create a Quarto document and connect"),(0,a.kt)("p",null,"It is very simple to integrate BibTeX with Quarto. Simply specify the bib-file with 'bibliography: bibliography.bib' in YAML and the citation with '","[@Hemingway1952]","' at the location where you want the in-text citation to appear."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},'---\ntitle: "BibTeX references in Quarto"\nauthor: "John Doe"\ndate: \'2022-07-19\'\nbibliography: bibliography.bib\noutput: html_document\n---\n\n\n## BibTeX references in Quarto\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nPraesent enim urna, dapibus et bibendum vel, consectetur et turpis.\nCras a molestie nulla. [@Hemingway1952]\n\n\n')),(0,a.kt)("h2",{id:"reference-managers"},"Reference managers"),(0,a.kt)("p",null,"Manually formatting BibTeX files can be time-consuming, which is why it is generally recommended to use a reference manager. Here are a few that are ideal for this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.citedrive.com/"},"CiteDrive")," is a bibtex-powered, collaborative, and cloud-based tool for managing project references and teams. It provides a one-click export to Overleaf (",(0,a.kt)("a",{parentName:"li",href:"https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf"},(0,a.kt)("em",{parentName:"a"},"Cf. Overleaf Blog Post - https://www.overleaf.com/blog/citedrive... | CiteDrive-Easy Reference Management for Overleaf")),") along with Quarto (",(0,a.kt)("a",{parentName:"li",href:"https://citedrive.medium.com/bibliography-management-in-r-markdown-with-citedrive-and-rstudio-2585699dd619"},(0,a.kt)("em",{parentName:"a"},"Cf. Medium post: Bibliography Management in Quarto with CiteDrive and RStudio")),"), while keeping citations in sync."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.zotero.org/"},"Zotero")," is a free, open-source literature management tool that manages bibliographic data and related research materials (such as PDF files). The best performance for BibTeX in Zotero is achieved with ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://retorque.re/zotero-better-bibtex/"},"Better BibTeX For Zotero"))," by retorque."),(0,a.kt)("li",{parentName:"ul"},"The free, open-source software ",(0,a.kt)("a",{parentName:"li",href:"https://www.jabref.org/"},"JabRef")," is a BibTeX-supported reference manager that runs on Windows, Mac, and Linux. It is based on Java and is maintained by JabRef e.V.")))}m.isMDXComponent=!0}}]);