"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[5128],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>b});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(a),c=i,b=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(b,l(l({ref:e},d),{},{components:a})):n.createElement(b,l({ref:e},d))}));function b(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6146:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={title:"A Short Guide to Reference Management using natbib with BibTeX",description:"Natbib is a LaTeX package that allows you to customise citations in the text around the CITE command. This short tutorial shows you how to manage your references with BibTeX and natbib. ",sidebar_label:"Using Natbib (Quick start)",sidebar_position:3},l="A Short Guide to Reference Management using natbib with BibTeX",o={unversionedId:"natbib",id:"natbib",title:"A Short Guide to Reference Management using natbib with BibTeX",description:"Natbib is a LaTeX package that allows you to customise citations in the text around the \\CITE command. This short tutorial shows you how to manage your references with BibTeX and natbib. ",source:"@site/i18n/sv/docusaurus-plugin-content-docs/current/natbib.mdx",sourceDirName:".",slug:"/natbib",permalink:"/sv/natbib",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/natbib.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"A Short Guide to Reference Management using natbib with BibTeX",description:"Natbib is a LaTeX package that allows you to customise citations in the text around the \\CITE command. This short tutorial shows you how to manage your references with BibTeX and natbib. ",sidebar_label:"Using Natbib (Quick start)",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Using R Markdown (Quick start)",permalink:"/sv/rmarkdown"},next:{title:"Using BibLaTeX (Quick start)",permalink:"/sv/biblatex"}},p={},s=[{value:"Getting started: Using Parenthetical and Textual/Narrative In-Text Citations with natbib",id:"getting-started-using-parenthetical-and-textualnarrative-in-text-citations-with-natbib",level:2},{value:"<code>cite{*}</code> commands provided by natbib",id:"cite-commands-provided-by-natbib",level:2},{value:"Appendix",id:"appendix",level:2},{value:"Options for natbib",id:"options-for-natbib",level:3},{value:"Sources",id:"sources",level:3}],d={toc:s},m="wrapper";function u(t){let{components:e,...r}=t;return(0,i.kt)(m,(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"a-short-guide-to-reference-management-using-natbib-with-bibtex"},"A Short Guide to Reference Management using natbib with BibTeX"),(0,i.kt)("p",null,"The natbib package adds new features to the standard ",(0,i.kt)("inlineCode",{parentName:"p"},"\\cite{*}")," command in LaTeX that includes in-text citations with various options and customizations, especially for author-year schemes and displaying the textual and parenthetical when using BibTeX."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It is worth noting that the package is compatible with both author-year and numerical citations and with the standard bibliography ",(0,i.kt)("inlineCode",{parentName:"p"},"*.bst")," files.")),(0,i.kt)("p",null,"This article explains how to use natbib to format and cite bibliographic sources."),(0,i.kt)("h2",{id:"getting-started-using-parenthetical-and-textualnarrative-in-text-citations-with-natbib"},"Getting started: Using Parenthetical and Textual/Narrative In-Text Citations with natbib"),(0,i.kt)("p",null,"We specify a minimal structure, similar to the one discussed in the previous section. To do this, we load the library with ",(0,i.kt)("inlineCode",{parentName:"p"},"\\usepackage{natbib}"),". The library provides options that can be passed via ",(0,i.kt)("inlineCode",{parentName:"p"},"\\usepackagee[options]{{natbib}"),", which we cover later. The basic citation commands in Natbib are ",(0,i.kt)("inlineCode",{parentName:"p"},"\\citet{*}")," for textual/narrative citations and ",(0,i.kt)("inlineCode",{parentName:"p"},"\\citep{*}")," for parenthetical citations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\documentclass{article}\n\\usepackage{natbib}\n\\bibliographystyle{apalike}\n\\title{A Short Guide to Reference Management using natbib with BibTeX}\n\\author{CiteDrive}\n\\date {January 1988}\n\n\\begin{document}\n\n\\maketitle\n\\textbf{Narrative citation:} \\citet{Doe:1966} investigated the risks of incorrectly \\\\\nrecorded [...], which results in distortion.\n\\textbf{Parenthetical citation:} The risks of incorrect recording of [...] could lead to distortion\n\\citep{Doe:1966}.\n\n\\medskip\n\n\\bibliography{sample}\n\n\\end{document}\n\n")),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"\\bibliography{sample}")," we refer to our .bib-file, which contains two sample entries:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"@article{Doe:1966,\n    title        = {Study on the risks of incorrectly recorded [...] and their impact on [...].},\n    author       = {John Doe},\n    year         = 1966,\n    journal      = {BibTeX Publishing},\n    volume       = 44,\n    number       = 44,\n    pages        = {123--456}\n}\n@article{smith201X,\n    title        = {An interesting article},\n    author       = {John Smith},\n    year         = {201X},\n    journal      = {Journal of Interesting Articles}\n}\n\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A Short Guide to Reference Management using natbib with BibTeX",src:a(3796).Z,width:"1192",height:"1008"})),(0,i.kt)("p",null,"An example that natbib works wonderfully with numeric citation styles; let's change the corresponding commands of the code above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\usepackage[square,numbers]{natbib}\n\\bibliographystyle{abbrvnat}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A Short Guide to Reference Management using natbib with BibTeX",src:a(6666).Z,width:"1136",height:"770"})),(0,i.kt)("h2",{id:"cite-commands-provided-by-natbib"},(0,i.kt)("inlineCode",{parentName:"h2"},"cite{*}")," commands provided by natbib"),(0,i.kt)("p",null,"The following table summarizes the differences between the commands, based on ",(0,i.kt)("inlineCode",{parentName:"p"},"cite{*}"),", and what you might expect to see. Both numeric and author-year styles are included, as well as multiple citations."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"As we subsequently discover, we should note that some examples are not chosen sensibly: Hardly ever will two different sources share one chapter. ",(0,i.kt)("inlineCode",{parentName:"p"},"\\citet*{...}")," lists all authors without et. al.   Nevertheless, the table should offer a solid understanding of how the commands behave.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command (single citation)"),(0,i.kt)("th",{parentName:"tr",align:null},"Output (author-year)"),(0,i.kt)("th",{parentName:"tr",align:null},"Output (Numeric)"),(0,i.kt)("th",{parentName:"tr",align:null},"Command (Multiple citations)"),(0,i.kt)("th",{parentName:"tr",align:null},"Output (author-year)"),(0,i.kt)("th",{parentName:"tr",align:null},"Output (Numeric)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citet{Doe:1966}")),(0,i.kt)("td",{parentName:"tr",align:null},"Doe (1966)"),(0,i.kt)("td",{parentName:"tr",align:null},"Doe ","[1]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citet{Doe:1966,smith201X}")),(0,i.kt)("td",{parentName:"tr",align:null},"Doe (1966); Smith (201X)"),(0,i.kt)("td",{parentName:"tr",align:null},"Doe ","[1]",", Smith ","[2]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citet[chap.~4]{Doe:1966}")),(0,i.kt)("td",{parentName:"tr",align:null},"Doe (1966, chap. 4)"),(0,i.kt)("td",{parentName:"tr",align:null},"Doe ","[1, chap. 4]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citet[chap.~4]{Doe:1966,smith201X}")),(0,i.kt)("td",{parentName:"tr",align:null},"Doe (1966); Smith (201X, chap. 4)"),(0,i.kt)("td",{parentName:"tr",align:null},"Doe ","[1]",", Smith ","[2, chap. 4]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citep{Doe:1966}")),(0,i.kt)("td",{parentName:"tr",align:null},"(Doe, 1966)"),(0,i.kt)("td",{parentName:"tr",align:null},"[1]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citep{Doe:1966,smith201X}")),(0,i.kt)("td",{parentName:"tr",align:null},"(Doe, 1966; Smith, 201X)"),(0,i.kt)("td",{parentName:"tr",align:null},"[1, 2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citep[chap.~4]{Doe:1966}")),(0,i.kt)("td",{parentName:"tr",align:null},"(Doe, 1966, chap. 4)"),(0,i.kt)("td",{parentName:"tr",align:null},"[1, chap. 4"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citep[chap.~4]{Doe:1966,smith201X}")),(0,i.kt)("td",{parentName:"tr",align:null},"(Doe, 1966; Smith, 201X, chap. 4)"),(0,i.kt)("td",{parentName:"tr",align:null},"1, 2, chap. 4]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citep[see][]{Doe:1966}")),(0,i.kt)("td",{parentName:"tr",align:null},"(see Doe, 1966)"),(0,i.kt)("td",{parentName:"tr",align:null},"[see 1]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citep[see][]{Doe:1966,smith201X}")),(0,i.kt)("td",{parentName:"tr",align:null},"(see Doe, 1966; Smith, 201X)"),(0,i.kt)("td",{parentName:"tr",align:null},"[see 1, 2]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citep[see][chap.~4]{Doe:1966}")),(0,i.kt)("td",{parentName:"tr",align:null},"(see Doe, 1966, chap. 4)"),(0,i.kt)("td",{parentName:"tr",align:null},"[see 1, chap. 4]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citep[see][chap.~4]{Doe:1966,smith201X}")),(0,i.kt)("td",{parentName:"tr",align:null},"(see Doe, 1966; Smith, 201X, chap. 4)"),(0,i.kt)("td",{parentName:"tr",align:null},"[see 1, 2, chap. 4]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citet*{Doe:1966}")),(0,i.kt)("td",{parentName:"tr",align:null},"Doe (1966)"),(0,i.kt)("td",{parentName:"tr",align:null},"Doe ","[1]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citet*{Doe:1966,smith201X}")),(0,i.kt)("td",{parentName:"tr",align:null},"Doe (1966); Smith (201X)"),(0,i.kt)("td",{parentName:"tr",align:null},"Doe ","[1]",", Smith ","[2]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citep*{Doe:1966}")),(0,i.kt)("td",{parentName:"tr",align:null},"(Doe, 1966)"),(0,i.kt)("td",{parentName:"tr",align:null},"[1]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citep*{Doe:1966,smith201X}")),(0,i.kt)("td",{parentName:"tr",align:null},"(Doe, 1966; Smith, 201X)"),(0,i.kt)("td",{parentName:"tr",align:null},"[1, 2]")))),(0,i.kt)("p",null,"Other options are, for example, suppressed brackets with ",(0,i.kt)("inlineCode",{parentName:"p"},"\\citealp")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"\\citealt")," corresponding to the commands ",(0,i.kt)("inlineCode",{parentName:"p"},"\\citep")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"\\citet"),". With ",(0,i.kt)("inlineCode",{parentName:"p"},"\\citeauthor")," one can suppress the year, and with ",(0,i.kt)("inlineCode",{parentName:"p"},"\\citeyear")," the authors. Further commands and options around ",(0,i.kt)("inlineCode",{parentName:"p"},"\\cite")," in natbib can be found in the ",(0,i.kt)("em",{parentName:"p"},"Reference sheet for natbib usage")," ","[PDF]",": ",(0,i.kt)("a",{parentName:"p",href:"https://gking.harvard.edu/files/natnotes2.pdf"},"https://gking.harvard.edu/files/natnotes2.pdf"),"  "),(0,i.kt)("h2",{id:"appendix"},"Appendix"),(0,i.kt)("h3",{id:"options-for-natbib"},"Options for natbib"),(0,i.kt)("p",null,"The following are the options that can be declared via ",(0,i.kt)("inlineCode",{parentName:"p"},"\\usepackagee[options]{{natbib}"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"round"),(0,i.kt)("td",{parentName:"tr",align:null},"displays round parentheses")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"square"),(0,i.kt)("td",{parentName:"tr",align:null},"displays square brackets")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"curly"),(0,i.kt)("td",{parentName:"tr",align:null},"displays curly braces")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"angle"),(0,i.kt)("td",{parentName:"tr",align:null},"displays angle braces")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"semicolon"),(0,i.kt)("td",{parentName:"tr",align:null},"multiple citations are separated by semicolons")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"colon"),(0,i.kt)("td",{parentName:"tr",align:null},"same as semicolon")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"comma"),(0,i.kt)("td",{parentName:"tr",align:null},"multiple citations are separated by coma")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"authoryear"),(0,i.kt)("td",{parentName:"tr",align:null},"display author-year citations")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"numbers"),(0,i.kt)("td",{parentName:"tr",align:null},"display numerical citations")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"super"),(0,i.kt)("td",{parentName:"tr",align:null},"displays superscript numbers for numerical citations")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sort"),(0,i.kt)("td",{parentName:"tr",align:null},"sorts multiple citations in order of references displayed in bibliography.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"compress"),(0,i.kt)("td",{parentName:"tr",align:null},"sorting and multiple numerical citations are compressed where appropriate")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sort&compress"),(0,i.kt)("td",{parentName:"tr",align:null},"multiple numerical citations are compressed where appropriate")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"longnamesfirst"),(0,i.kt)("td",{parentName:"tr",align:null},"the full name of the author appears in the first citation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sectionbib"),(0,i.kt)("td",{parentName:"tr",align:null},"redefines ",(0,i.kt)("inlineCode",{parentName:"td"},"\\thebibliography")," to output ",(0,i.kt)("inlineCode",{parentName:"td"},"\\section")," instead of ",(0,i.kt)("inlineCode",{parentName:"td"},"\\chapter"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nonamebreak"),(0,i.kt)("td",{parentName:"tr",align:null},"Displays all author names of a citation in one line")))),(0,i.kt)("h3",{id:"sources"},"Sources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Bibliography management with natbib")," via ",(0,i.kt)("a",{parentName:"li",href:"https://www.overleaf.com/learn/latex/Bibliography_management_with_natbib"},"Overleaf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Natbib bibliography styles")," via ",(0,i.kt)("a",{parentName:"li",href:"https://www.overleaf.com/learn/latex/Natbib_bibliography_styles"},"Overleaf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Reference sheet for natbib usage")," ","[PDF]",": ",(0,i.kt)("a",{parentName:"li",href:"https://gking.harvard.edu/files/natnotes2.pdf"},"https://gking.harvard.edu/files/natnotes2.pdf"))))}u.isMDXComponent=!0},3796:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/output_example_bibtex_natbib-f0d22412c4148db735c651eca39c742b.png"},6666:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/output_example_bibtex_natbib_numeric-af4f9add2e9d8f27dcc4ecd37efce81a.png"}}]);