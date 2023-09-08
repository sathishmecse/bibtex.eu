"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[4088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,m=d["".concat(s,".").concat(u)]||d[u]||b[u]||a;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const a={},r="How to Use BibTeX-Related Commands for LaTeX Documents",l={unversionedId:"faq/how-to-use-bibtex-related-commands-for-latex-documents",id:"faq/how-to-use-bibtex-related-commands-for-latex-documents",title:"How to Use BibTeX-Related Commands for LaTeX Documents",description:"In order to use BibTeX in LaTeX, you need to know the following commands: \\bibliographystyle{}, \\bibliography, and \\cite{KEY}. In this short guide post, we will discuss what each of these commands do and how to use them in your LaTeX documents.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/faq/how-to-use-bibtex-related-commands-for-latex-documents.mdx",sourceDirName:"faq",slug:"/faq/how-to-use-bibtex-related-commands-for-latex-documents",permalink:"/pt/faq/how-to-use-bibtex-related-commands-for-latex-documents",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/faq/how-to-use-bibtex-related-commands-for-latex-documents.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How do I create a .BIB file to manage my BibTeX references?",permalink:"/pt/faq/how-do-i-create-a-bib-file-to-manage-my-bibtex-references"},next:{title:"How to Use URLs in BibTeX Entries",permalink:"/pt/faq/how-to-use-urls-in-bibtex-entries"}},s={},c=[{value:"bibliographystyle",id:"bibliographystyle",level:2},{value:"bibliography",id:"bibliography",level:2},{value:"cite",id:"cite",level:2}],p={toc:c},d="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-use-bibtex-related-commands-for-latex-documents"},"How to Use BibTeX-Related Commands for LaTeX Documents"),(0,o.kt)("p",null,"In order to use BibTeX in LaTeX, you need to know the following commands: ",(0,o.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{<style name>}"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"\\bibliography{bib-file}"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"\\cite{KEY}"),". In this short guide post, we will discuss what each of these commands do and how to use them in your LaTeX documents."),(0,o.kt)("h2",{id:"bibliographystyle"},"bibliographystyle"),(0,o.kt)("p",null,"The citation style is defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"bibliographystyle{<style name>}"),". BibTeX style files control the appearance of the bibliography and citations. BibTeX style files have a ",(0,o.kt)("inlineCode",{parentName:"p"},".bst")," extension and contain instructions in a stack-based programming language that controls the formatting of bibliographical entries. By default, LaTeX offers ",(0,o.kt)("inlineCode",{parentName:"p"},"plain"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"unsrt"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"alpha"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"abbrv")," as styles. natbib and jurabib are two LaTeX packages that provide extensive natural science and humanities additions, for example."),(0,o.kt)("h2",{id:"bibliography"},"bibliography"),(0,o.kt)("p",null,"The bibliography is created in the document by the command ",(0,o.kt)("inlineCode",{parentName:"p"},"\\bibliography{bibfile}")," if the file name of the BibTeX file with literature records is ",(0,o.kt)("inlineCode",{parentName:"p"},"bibfile.bib"),"."),(0,o.kt)("h2",{id:"cite"},"cite"),(0,o.kt)("p",null,"In a LaTeX document, the command ",(0,o.kt)("inlineCode",{parentName:"p"},"\\cite{KEY}")," is replaced by the citation given in the BibTeX file with this ID, which, for example, is ",(0,o.kt)("inlineCode",{parentName:"p"},"(Author, Year)")," in the final PDF."))}b.isMDXComponent=!0}}]);