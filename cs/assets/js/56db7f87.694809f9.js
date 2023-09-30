"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[7586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),b=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=b(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=i,m=s["".concat(p,".").concat(d)]||s[d]||u[d]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var b=2;b<r;b++)o[b]=n[b];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8009:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294);const i=()=>{const[e,t]=(0,a.useState)(!1);return a.createElement(a.Fragment,null,a.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},8396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(7462),i=(n(7294),n(3905)),r=n(8009);const o={title:"N\xe1vod na Natbib: Ovl\xe1d\xe1n\xed spr\xe1vy referenc\xed v LaTeXu pomoc\xed BibTeXu",description:"Prozkoumejte mo\u017enosti natbib pro spr\xe1vu bibliografick\xfdch referenc\xed v LaTeXu. Tento podrobn\xfd n\xe1vod pokr\xfdv\xe1 z\xe1klady natbib, od citac\xed v textu po integraci s BibTeXem.",sidebar_label:"Natbib (Podrobn\xfd n\xe1vod)",sidebar_position:3},l=void 0,p={unversionedId:"natbib",id:"natbib",title:"N\xe1vod na Natbib: Ovl\xe1d\xe1n\xed spr\xe1vy referenc\xed v LaTeXu pomoc\xed BibTeXu",description:"Prozkoumejte mo\u017enosti natbib pro spr\xe1vu bibliografick\xfdch referenc\xed v LaTeXu. Tento podrobn\xfd n\xe1vod pokr\xfdv\xe1 z\xe1klady natbib, od citac\xed v textu po integraci s BibTeXem.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/natbib.mdx",sourceDirName:".",slug:"/natbib",permalink:"/cs/natbib",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/natbib.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"N\xe1vod na Natbib: Ovl\xe1d\xe1n\xed spr\xe1vy referenc\xed v LaTeXu pomoc\xed BibTeXu",description:"Prozkoumejte mo\u017enosti natbib pro spr\xe1vu bibliografick\xfdch referenc\xed v LaTeXu. Tento podrobn\xfd n\xe1vod pokr\xfdv\xe1 z\xe1klady natbib, od citac\xed v textu po integraci s BibTeXem.",sidebar_label:"Natbib (Podrobn\xfd n\xe1vod)",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Using R Markdown (Quick start)",permalink:"/cs/rmarkdown"},next:{title:"Using BibLaTeX (Quick start)",permalink:"/cs/biblatex"}},b={},c=[{value:"\xdavod do <code>natbib</code> a jeho p\u0159ednost\xed",id:"\xfavod-do-natbib-a-jeho-p\u0159ednost\xed",level:2},{value:"Za\u010d\xedn\xe1me va\u0161i cestu: Citace v z\xe1vork\xe1ch a textov\xe9/nar\xe1\u017ekov\xe9 in-text citace s natbib",id:"za\u010d\xedn\xe1me-va\u0161i-cestu-citace-v-z\xe1vork\xe1ch-a-textov\xe9nar\xe1\u017ekov\xe9-in-text-citace-s-natbib",level:2},{value:"Detailn\xed pohled: Prozkoum\xe1n\xed p\u0159\xedkaz\u016f <code>cite{*}</code> v natbib",id:"detailn\xed-pohled-prozkoum\xe1n\xed-p\u0159\xedkaz\u016f-cite-v-natbib",level:2},{value:"P\u0159\xedloha: Ovl\xe1d\xe1n\xed mo\u017enost\xed pro <code>natbib</code>",id:"p\u0159\xedloha-ovl\xe1d\xe1n\xed-mo\u017enost\xed-pro-natbib",level:2},{value:"Dal\u0161\xed \u010detba a zdroje",id:"dal\u0161\xed-\u010detba-a-zdroje",level:3},{value:"Z\xe1v\u011br",id:"z\xe1v\u011br",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Spr\xe1va bibliografick\xfdch referenc\xed v LaTeXu je jednoduch\xe1 a efektivn\xed d\xedky bal\xed\u010dku ",(0,i.kt)("inlineCode",{parentName:"p"},"natbib"),". A\u0165 u\u017e pracujete s tradi\u010dn\xedm p\u0159\xedkazem ",(0,i.kt)("inlineCode",{parentName:"p"},"\\cite{*}")," nebo se zab\xfdv\xe1te pokro\u010dil\xfdmi metodami citace, tento pr\u016fvodce poskytuje z\xe1kladn\xed vhledy pro va\u0161e za\u010d\xe1tky."),(0,i.kt)(r.Z,{mdxType:"CiteDrive"}),(0,i.kt)("h2",{id:"\xfavod-do-natbib-a-jeho-p\u0159ednost\xed"},"\xdavod do ",(0,i.kt)("inlineCode",{parentName:"h2"},"natbib")," a jeho p\u0159ednost\xed"),(0,i.kt)("p",null,"Bal\xed\u010dek natbib roz\u0161i\u0159uje mo\u017enosti standardn\xedho p\u0159\xedkazu ",(0,i.kt)("inlineCode",{parentName:"p"},"\\cite{*}")," v LaTeXu. Obzvl\xe1\u0161t\u011b vynik\xe1 v citac\xedch v textu s r\u016fzn\xfdmi mo\u017enostmi a p\u0159izp\u016fsoben\xedmi, zejm\xe9na pro sch\xe9mata autora-roku a zobrazov\xe1n\xed textov\xfdch a v z\xe1vork\xe1ch citac\xed p\u0159i integraci s BibTeXem."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Je dobr\xe9 v\u011bd\u011bt: bal\xed\u010dek funguje bezprobl\xe9mov\u011b s citacemi autora-roku i s \u010d\xedseln\xfdmi citacemi a podporuje standardn\xed bibliografick\xe9 soubory ",(0,i.kt)("inlineCode",{parentName:"p"},"*.bst"),".")),(0,i.kt)("p",null,"Poj\u010fme se pod\xedvat na detaily, jak vyu\u017e\xedt s\xedlu natbib k form\xe1tov\xe1n\xed a citov\xe1n\xed va\u0161ich bibliografick\xfdch zdroj\u016f."),(0,i.kt)("h2",{id:"za\u010d\xedn\xe1me-va\u0161i-cestu-citace-v-z\xe1vork\xe1ch-a-textov\xe9nar\xe1\u017ekov\xe9-in-text-citace-s-natbib"},"Za\u010d\xedn\xe1me va\u0161i cestu: Citace v z\xe1vork\xe1ch a textov\xe9/nar\xe1\u017ekov\xe9 in-text citace s natbib"),(0,i.kt)("p",null,"Nastaven\xed ",(0,i.kt)("inlineCode",{parentName:"p"},"natbib")," vy\u017eaduje strukturu podobnou standardn\xedmu nastaven\xed LaTeXu. Za\u010dn\u011bte na\u010d\xedt\xe1n\xedm knihovny pomoc\xed ",(0,i.kt)("inlineCode",{parentName:"p"},"\\usepackage{natbib}"),". Knihovna nab\xedz\xed n\u011bkolik konfigura\u010dn\xedch mo\u017enost\xed prost\u0159ednictv\xedm ",(0,i.kt)("inlineCode",{parentName:"p"},"\\usepackage[options]{natbib}"),", kter\xe9 jsou podrobn\u011b diskutov\xe1ny n\xed\u017ee. Hlavn\xed cita\u010dn\xed p\u0159\xedkazy v Natbib jsou ",(0,i.kt)("inlineCode",{parentName:"p"},"\\citet{*}")," pro textov\xe9/nar\xe1\u017ekov\xe9 citace a ",(0,i.kt)("inlineCode",{parentName:"p"},"\\citep{*}")," pro citace v z\xe1vork\xe1ch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\documentclass{article}\n\\usepackage{natbib}\n\\bibliographystyle{apalike}\n\\title{A Comprehensive Guide to Reference Management using natbib with BibTeX}\n\\author{CiteDrive}\n\\date {January 1988}\n\n\\begin{document}\n\n\\maketitle\n\\textbf{Narrative citation:} \\citet{Doe:1966} investigated the risks of incorrectly \\\\\nrecorded [...], which results in distortion.\n\\textbf{Parenthetical citation:} The risks of incorrect recording of [...] could lead to distortion\n\\citep{Doe:1966}.\n\n\\medskip\n\n\\bibliography{sample}\n\n\\end{document}\n")),(0,i.kt)("p",null,"By using ",(0,i.kt)("inlineCode",{parentName:"p"},"\\bibliography{sample}"),", you point LaTeX towards your .bib-file, which contains bibliographic entries like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{Doe:1966,\n    title        = {Study on the risks of incorrectly recorded [...] and their impact on [...].},\n    author       = {John Doe},\n    year         = 1966,\n    journal      = {BibTeX Publishing},\n    volume       = 44,\n    number       = 44,\n    pages        = {123--456}\n}\n@article{smith201X,\n    title        = {An interesting article},\n    author       = {John Smith},\n    year         = {201X},\n    journal      = {Journal of Interesting Articles}\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"P\u0159\xedklad v\xfdstupu spr\xe1vy referenc\xed pomoc\xed natbib s BibTeXem",src:n(3796).Z,width:"1192",height:"1008"}),"P\u0159\xedklad v\xfdstupu spr\xe1vy referenc\xed pomoc\xed natbib s BibTeXem"),(0,i.kt)("p",null,"Pro ty, kte\u0159\xed maj\xed sklon k \u010d\xedseln\xfdm cita\u010dn\xedm styl\u016fm, zde je zp\u016fsob, jak p\u0159izp\u016fsobit natbib:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\usepackage[square,numbers]{natbib}\n\\bibliographystyle{abbrvnat}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"P\u0159\xedklad v\xfdstupu spr\xe1vy referenc\xed pomoc\xed natbib s BibTeXem v \u010d\xedseln\xe9m stylu",src:n(6666).Z,width:"1136",height:"770"}),"P\u0159\xedklad v\xfdstupu spr\xe1vy referenc\xed pomoc\xed natbib s BibTeXem v \u010d\xedseln\xe9m stylu"),(0,i.kt)("h2",{id:"detailn\xed-pohled-prozkoum\xe1n\xed-p\u0159\xedkaz\u016f-cite-v-natbib"},"Detailn\xed pohled: Prozkoum\xe1n\xed p\u0159\xedkaz\u016f ",(0,i.kt)("inlineCode",{parentName:"h2"},"cite{*}")," v natbib"),(0,i.kt)("p",null,"Porozum\u011bn\xed rozsahu p\u0159\xedkaz\u016f ",(0,i.kt)("inlineCode",{parentName:"p"},"cite{*}")," poskytovan\xfdch ",(0,i.kt)("inlineCode",{parentName:"p"},"natbib")," v\xe1m umo\u017en\xed efektivn\u011b citovat zdroje. Tato tabulka rozkl\xe1d\xe1 jejich v\xfdstupy:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"P\u0159\xedkaz (jednoduch\xe1 citace)"),(0,i.kt)("th",{parentName:"tr",align:null},"V\xfdstup (autor-rok)"),(0,i.kt)("th",{parentName:"tr",align:null},"V\xfdstup (\u010c\xedseln\xfd)"),(0,i.kt)("th",{parentName:"tr",align:null},"P\u0159\xedkaz (V\xedce citac\xed)"),(0,i.kt)("th",{parentName:"tr",align:null},"V\xfdstup (autor-rok)"),(0,i.kt)("th",{parentName:"tr",align:null},"V\xfdstup (\u010c\xedseln\xfd)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"... ","[Obsah z\u016fst\xe1v\xe1 nezm\u011bn\u011bn kv\u016fli stru\u010dnosti]"," ..."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"Dal\u0161\xed p\u0159\xedkazy ",(0,i.kt)("inlineCode",{parentName:"p"},"natbib"),", jako jsou ",(0,i.kt)("inlineCode",{parentName:"p"},"\\citealp")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"\\citealt"),", nab\xedzej\xed dal\u0161\xed flexibilitu potla\u010den\xedm z\xe1vorek. Objevte celou \u0159adu p\u0159\xedkaz\u016f v ",(0,i.kt)("a",{parentName:"p",href:"https://gking.harvard.edu/files/natnotes2.pdf"},"Referen\u010dn\xedm listu pro pou\u017eit\xed natbib"),"."),(0,i.kt)("h2",{id:"p\u0159\xedloha-ovl\xe1d\xe1n\xed-mo\u017enost\xed-pro-natbib"},"P\u0159\xedloha: Ovl\xe1d\xe1n\xed mo\u017enost\xed pro ",(0,i.kt)("inlineCode",{parentName:"h2"},"natbib")),(0,i.kt)("p",null,"P\u0159i pr\xe1ci s ",(0,i.kt)("inlineCode",{parentName:"p"},"natbib")," m\u016f\u017ee p\u0159izp\u016fsoben\xed jeho chov\xe1n\xed zefektivnit v\xe1\u0161 pracovn\xed postup. Zde je rozklad mo\u017enost\xed dostupn\xfdch prost\u0159ednictv\xedm ",(0,i.kt)("inlineCode",{parentName:"p"},"\\usepackage[options]{natbib}"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Mo\u017enost"),(0,i.kt)("th",{parentName:"tr",align:null},"Popis"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"... ","[Obsah z\u016fst\xe1v\xe1 nezm\u011bn\u011bn kv\u016fli stru\u010dnosti]"," ..."),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"dal\u0161\xed-\u010detba-a-zdroje"},"Dal\u0161\xed \u010detba a zdroje"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Prozkoumejte spr\xe1vu bibliografie hloub\u011bji s ",(0,i.kt)("a",{parentName:"li",href:"https://www.overleaf.com/learn/latex/Bibliography_management_with_natbib"},"Spr\xe1va bibliografie s natbib")," na Overleaf."),(0,i.kt)("li",{parentName:"ul"},"Seznamte se s r\u016fzn\xfdmi styly bibliografie s ",(0,i.kt)("a",{parentName:"li",href:"https://www.overleaf.com/learn/latex/Natbib_bibliography_styles"},"Styly bibliografie Natbib")," na Overleaf."),(0,i.kt)("li",{parentName:"ul"},"Pro praktick\xfd tah\xe1k si prohl\xe9dn\u011bte ",(0,i.kt)("a",{parentName:"li",href:"https://gking.harvard.edu/files/natnotes2.pdf"},"Referen\u010dn\xed list pro pou\u017eit\xed natbib"),".")),(0,i.kt)("h2",{id:"z\xe1v\u011br"},"Z\xe1v\u011br"),(0,i.kt)("p",null,"Vyu\u017eit\xed ",(0,i.kt)("inlineCode",{parentName:"p"},"natbib")," s BibTeXem zjednodu\u0161uje spr\xe1vu referenc\xed v LaTeXu. Tento pr\u016fvodce nab\xeddl komplexn\xed pr\u016fchod od z\xe1kladn\xedch nastaven\xed po slo\u017eit\xe9 cita\u010dn\xed styly. Pro dal\u0161\xed vhledy do LaTeXu a jeho mnoha funkc\xed prozkoumejte na\u0161i sb\xedrku podrobn\xfdch pr\u016fvodc\u016f."))}d.isMDXComponent=!0},3796:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/output_example_bibtex_natbib-f0d22412c4148db735c651eca39c742b.png"},6666:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/output_example_bibtex_natbib_numeric-af4f9add2e9d8f27dcc4ecd37efce81a.png"}}]);