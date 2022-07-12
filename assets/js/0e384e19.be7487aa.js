"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[9671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,p=d["".concat(l,".").concat(m)]||d[m]||f[m]||i;return n?r.createElement(p,o(o({ref:t},c),{},{components:n})):r.createElement(p,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(3117),a=(n(7294),n(3905));const i={title:"Reference management with BibTeX -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",sidebar_label:"Quick start (LaTeX)",sidebar_position:1,slug:"/"},o="Reference management with BibTeX: A short guide",s={unversionedId:"intro",id:"intro",title:"Reference management with BibTeX -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Reference management with BibTeX -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",sidebar_label:"Quick start (LaTeX)",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"BibTeX Fields",permalink:"/fields/"}},l={},u=[{value:"Step 1: Create a .bib-file and create some entries.",id:"step-1-create-a-bib-file-and-create-some-entries",level:2},{value:"Step 2: Create a LaTeX document and connect",id:"step-2-create-a-latex-document-and-connect",level:2},{value:"Reference managers",id:"reference-managers",level:2},{value:"Further notes",id:"further-notes",level:2}],c={toc:u};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reference-management-with-bibtex-a-short-guide"},"Reference management with BibTeX: A short guide"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BibTeX")," can be daunting to many newcomers because of all the specifics about ",(0,a.kt)("strong",{parentName:"p"},"LaTeX")," packages, citation styles, and formatting. Yet, many aspects are mostly unimportant, and the structure is usually always the same."),(0,a.kt)("p",null,"And that is exactly what this little guide aims to accomplish: give you a basic set-up using an example, and show you how to use BibTeX from the ground up. In the future, we'll refer to document systems other than LaTeX, and details on this website, but for now, we'll stay focused on the basics."),(0,a.kt)("h2",{id:"step-1-create-a-bib-file-and-create-some-entries"},"Step 1: Create a .bib-file and create some entries."),(0,a.kt)("p",null,"We begin by generating a .bib-file, such as ",(0,a.kt)("strong",{parentName:"p"},"bibliography.bib"),', which is then filled with BibTeX entries. A BibTeX entry is written in the following format and represents each literature source (book, essay, etc.) with the information required for citation and inclusion in the bibliography.\nLet\'s say we want to cite the book "The Old Man and the Sea" by Ernest Hemingway, then the entry would look like this:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-latex"},"@book{Hemingway1952,\n  title={The Old Man and the Sea}\n  author={Hemingway, Ernest}\n  year={1952}\n  publisher={Charles Scribner's Sons}\n}\n")),(0,a.kt)("p",null,'If you break down the "anatomy" of this entry, you only have to look at the following three components to understand how each BibTeX entry is defined:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Entry-type"),": With ",(0,a.kt)("inlineCode",{parentName:"li"},"@book")," we define the type of reference, i.e. (and this example refers to itself) as a book. There are also ",(0,a.kt)("inlineCode",{parentName:"li"},"@article")," for academic articles and others possible. BibTeX likes to specify which fields are optional and which are required to indicate them correctly in the literature."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Entry fields"),": in this example, these are ",(0,a.kt)("inlineCode",{parentName:"li"},"title"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"author"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"year"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"publisher"),". (Cf. ",(0,a.kt)("a",{parentName:"li",href:"./fields"},"fields"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"citation-key"),": This example is ",(0,a.kt)("inlineCode",{parentName:"li"},"Hemingway1952")," and is used to indicate in-text citation in LaTeX, i.e., to refer to the source. Using the same example, we do this with ",(0,a.kt)("inlineCode",{parentName:"li"},"\\cite{Hemingway1952}"),". The citation key can be any string of characters - often as a combination of author, year, and a word from the title.")),(0,a.kt)("h2",{id:"step-2-create-a-latex-document-and-connect"},"Step 2: Create a LaTeX document and connect"),(0,a.kt)("p",null,"..."),(0,a.kt)("h2",{id:"reference-managers"},"Reference managers"),(0,a.kt)("p",null,"..."),(0,a.kt)("h2",{id:"further-notes"},"Further notes"),(0,a.kt)("p",null,"We said in the introduction that you don't need to understand most of this to get started. That's true, but in the future, you may stumble upon the fact that BibTeX can mean two different things depending on the context."),(0,a.kt)("p",null,"BibTeX is the name of a program that converts TeX markups into bibliographic information. The file that contains all your TeX markups and references is known as a *.bib file, often referred to as a BibTeX file. Confusion can arise when using new implementations such as BibLaTeX, a superset of fields and types in the data structure."))}f.isMDXComponent=!0}}]);