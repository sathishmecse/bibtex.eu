"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[1661],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(o),y=r,d=c["".concat(s,".").concat(y)]||c[y]||b[y]||i;return o?n.createElement(d,a(a({ref:t},p),{},{components:o})):n.createElement(d,a({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}y.displayName="MDXCreateElement"},3446:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const i={title:"How to Cite a Book in LaTeX: BibTeX Reference Type",sidebar_label:"book"},a=void 0,l={unversionedId:"types/book",id:"types/book",title:"How to Cite a Book in LaTeX: BibTeX Reference Type",description:"If you want to cite a book in LaTeX, the @book BibTeX reference type is the one you need. This guide will show you how to format your BibTeX entry for a book citation. We will also provide some examples to see how it should be done. Let's get started!",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/types/book.mdx",sourceDirName:"types",slug:"/types/book",permalink:"/pt/types/book",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/types/book.mdx",tags:[],version:"current",frontMatter:{title:"How to Cite a Book in LaTeX: BibTeX Reference Type",sidebar_label:"book"},sidebar:"tutorialSidebar",previous:{title:"article",permalink:"/pt/types/article"},next:{title:"booklet",permalink:"/pt/types/booklet"}},s={},u=[],p={toc:u},c="wrapper";function b(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you want to cite a book in LaTeX, the ",(0,r.kt)("inlineCode",{parentName:"p"},"@book")," BibTeX reference type is the one you need. This guide will show you how to format your BibTeX entry for a book citation. We will also provide some examples to see how it should be done. Let's get started!"),(0,r.kt)("p",null,"The first thing you need to do is identify the information that you will need to include in your BibTeX entry. For a book citation, this includes the author's name, the title of the book, the publisher, and the year it was published. You may also want to include the edition number and/or ISBN (if available)."),(0,r.kt)("p",null,"Once you have gathered this information, you can begin to format your BibTeX entry. The template for a book citation in BibTeX is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"@book{author_lastname_year,\n  title = {title},\n  author = {author_lastname, author_firstname},\n  publisher = {publisher},\n  year = {year},\n  edition = {edition_number},\n  ISBN = {ISBN}\n}\n")),(0,r.kt)("p",null,'Let\'s look at an example to see how this would work in practice. Say you want to cite the book "The LaTeX Companion" by Leslie Lamport. The relevant information for your BibTeX entry would be as follows:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"@book{lamport_1994,\n  title = {The \\LaTeX\\ Companion},\n  author = {Leslie Lamport},\n  publisher = {Addison-Wesley},\n  year = {1994},\n  edition = {First},\n}\n")),(0,r.kt)("p",null,"Notice that the author's name is formatted as ",(0,r.kt)("inlineCode",{parentName:"p"},"{lastname, firstname}"),". This is the standard format for BibTeX entries."),(0,r.kt)("p",null,"Now that you know how to cite a book in LaTeX using the BibTeX reference type, you can be sure to include all the necessary information in your bibliography. Happy citing!"))}b.isMDXComponent=!0}}]);