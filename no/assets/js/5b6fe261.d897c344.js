"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[4760],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=c(n),m=o,u=b["".concat(s,".").concat(m)]||b[m]||p[m]||i;return n?r.createElement(u,a(a({ref:t},d),{},{components:n})):r.createElement(u,a({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[b]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8009:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const o=()=>r.createElement(r.Fragment,null,r.createElement("iframe",{style:{borderRadius:15,border:"5px solid #776cfe"},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))},8978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905)),i=n(8009);const a={},l="How to Use BibTeX-Related Commands for LaTeX Documents",s={unversionedId:"faq/how-to-use-bibtex-related-commands-for-latex-documents",id:"faq/how-to-use-bibtex-related-commands-for-latex-documents",title:"How to Use BibTeX-Related Commands for LaTeX Documents",description:"In order to use BibTeX in LaTeX, you need to know the following commands: \\bibliographystyle{}, \\bibliography, and \\cite{KEY}. In this short guide post, we will discuss what each of these commands do and how to use them in your LaTeX documents.",source:"@site/docs/faq/how-to-use-bibtex-related-commands-for-latex-documents.mdx",sourceDirName:"faq",slug:"/faq/how-to-use-bibtex-related-commands-for-latex-documents",permalink:"/no/faq/how-to-use-bibtex-related-commands-for-latex-documents",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/faq/how-to-use-bibtex-related-commands-for-latex-documents.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How do I create a .BIB file to manage my BibTeX references?",permalink:"/no/faq/how-do-i-create-a-bib-file-to-manage-my-bibtex-references"},next:{title:"How to Use URLs in BibTeX Entries",permalink:"/no/faq/how-to-use-urls-in-bibtex-entries"}},c={},d=[{value:"bibliographystyle",id:"bibliographystyle",level:2},{value:"bibliography",id:"bibliography",level:2},{value:"cite",id:"cite",level:2}],b={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-use-bibtex-related-commands-for-latex-documents"},"How to Use BibTeX-Related Commands for LaTeX Documents"),(0,o.kt)("p",null,"In order to use BibTeX in LaTeX, you need to know the following commands: ",(0,o.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{<style name>}"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"\\bibliography{bib-file}"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"\\cite{KEY}"),". In this short guide post, we will discuss what each of these commands do and how to use them in your LaTeX documents."),(0,o.kt)(i.Z,{mdxType:"CiteDrive"}),(0,o.kt)("h2",{id:"bibliographystyle"},"bibliographystyle"),(0,o.kt)("p",null,"The citation style is defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"bibliographystyle{<style name>}"),". BibTeX style files control the appearance of the bibliography and citations. BibTeX style files have a ",(0,o.kt)("inlineCode",{parentName:"p"},".bst")," extension and contain instructions in a stack-based programming language that controls the formatting of bibliographical entries. By default, LaTeX offers ",(0,o.kt)("inlineCode",{parentName:"p"},"plain"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"unsrt"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"alpha"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"abbrv")," as styles. natbib and jurabib are two LaTeX packages that provide extensive natural science and humanities additions, for example."),(0,o.kt)("h2",{id:"bibliography"},"bibliography"),(0,o.kt)("p",null,"The bibliography is created in the document by the command ",(0,o.kt)("inlineCode",{parentName:"p"},"\\bibliography{bibfile}")," if the file name of the BibTeX file with literature records is ",(0,o.kt)("inlineCode",{parentName:"p"},"bibfile.bib"),"."),(0,o.kt)("h2",{id:"cite"},"cite"),(0,o.kt)("p",null,"In a LaTeX document, the command ",(0,o.kt)("inlineCode",{parentName:"p"},"\\cite{KEY}")," is replaced by the citation given in the BibTeX file with this ID, which, for example, is ",(0,o.kt)("inlineCode",{parentName:"p"},"(Author, Year)")," in the final PDF."))}m.isMDXComponent=!0}}]);