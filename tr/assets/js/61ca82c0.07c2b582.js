"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[5538],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(a),p=r,m=b["".concat(s,".").concat(p)]||b[p]||d[p]||n;return a?i.createElement(m,o(o({ref:t},c),{},{components:a})):i.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[b]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<n;u++)o[u]=a[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8009:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(7294);const r=()=>i.createElement(i.Fragment,null,i.createElement("iframe",{style:{borderRadius:15,border:"5px solid #776cfe"},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))},1808:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=a(7462),r=(a(7294),a(3905)),n=a(8009);const o={title:"Getting Started with BibLaTeX: A Quick Guide",sidebar_label:"Using BibLaTeX (Quick start)",sidebar_position:4},l=void 0,s={unversionedId:"biblatex",id:"biblatex",title:"Getting Started with BibLaTeX: A Quick Guide",description:"The following guide is still in the works, but since BibLaTeX is seen by many as the BibTeX killer (and we do not disagree), we thought it would be helpful to give you a head start. Please keep in mind that many options and customizations are available in BibLaTeX, and we will gradually expand the section.",source:"@site/docs/biblatex.mdx",sourceDirName:".",slug:"/biblatex",permalink:"/tr/biblatex",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/biblatex.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Getting Started with BibLaTeX: A Quick Guide",sidebar_label:"Using BibLaTeX (Quick start)",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Using Natbib (Quick start)",permalink:"/tr/natbib"},next:{title:"Using Quarto (RStudio/Posit) (Quick start)",permalink:"/tr/quarto"}},u={},c=[],b={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-biblatex-a-quick-guide"},"Getting Started with BibLaTeX: A Quick Guide"),(0,r.kt)("p",null,"The following guide is still in the works, but since BibLaTeX is seen by many as the BibTeX killer (and we do not disagree), we thought it would be helpful to give you a head start. Please keep in mind that many options and customizations are available in BibLaTeX, and we will gradually expand the section."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install BibLaTeX: Before you can use BibLaTeX, you must first install it on your computer. This is usually accomplished by installing a LaTeX distribution that includes BibLaTeX, such as MikTeX or TeX Live, or by using Overleaf, which, like many other packages, includes everything, including styles, out of the box. "),(0,r.kt)("li",{parentName:"ol"},"Add the BibLaTeX package to your LaTeX document: To add BibLaTeX to your LaTeX document, you need to include the following code in the preamble of your document:")),(0,r.kt)(n.Z,{mdxType:"CiteDrive"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"\\usepackage[style=authoryear,backend=biber]{biblatex}\n")),(0,r.kt)("p",null,'This line tells LaTeX to use the BibLaTeX package with the "authoryear" style and the "biber" backend. If that makes sense to you, you can also use BibTeX as a backend. However, many features will be missing, and we should emphasize that using BibTeX is not recommended - even for nostalgic reasons. '),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"If you're used to BibTeX, everything has stayed the same except that BibLaTeX now supports a few more types and fields. You keep your references in a separate bibliographic database, a text file with a ",(0,r.kt)("inlineCode",{parentName:"li"},".bib-file")," extension. Here's an example of a simple database, which we may call ",(0,r.kt)("inlineCode",{parentName:"li"},"bibliography.bib"),": ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"@book{key,   \n    author = {Author, A.},   \n    title = {The Title of the Book},   \n    year = {2021},   \n    publisher = \n    {Publisher}, \n}\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"To include the bib-file (your reference database), use the following command in your TeX document: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"\\addbibresource{bibliography.bib}\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"To cite a reference in your document, use the following syntax:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"\\autocite{key}\n")),(0,r.kt)("p",null,'where "key" is the key of the reference you want to cite.'),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"To include the bibliography, or reference list into for your document, you need to include the following code in your document where you want the bibliography to appear:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"\\printbibliography\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Finally, use a LaTeX compiler, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"pdflatex")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"xelatex"),", to compile your document. BibLaTeX will automatically generate the bibliography based on the references you have cited in your paper when you compile your document.")),(0,r.kt)("p",null,"That's all! You should now be able to use BibLaTeX to manage your references and citations in your LaTeX documents after following these simple steps. Remember that BibLaTeX is a highly customizable tool; as previously stated, we will add more in the future. But for the time being, you should be able to get started right away."))}p.isMDXComponent=!0}}]);