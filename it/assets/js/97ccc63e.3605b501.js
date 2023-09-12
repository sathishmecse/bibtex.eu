"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[7440],{3905:(e,i,t)=>{t.d(i,{Zo:()=>p,kt:()=>d});var a=t(7294);function n(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){n(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function l(e,i){if(null==e)return{};var t,a,n=function(e,i){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],i.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),s=function(e){var i=a.useContext(c),t=i;return e&&(t="function"==typeof e?e(i):r(r({},i),e)),t},p=function(e){var i=s(e.components);return a.createElement(c.Provider,{value:i},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},b=a.forwardRef((function(e,i){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),b=n,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||o;return t?a.createElement(d,r(r({ref:i},p),{},{components:t})):a.createElement(d,r({ref:i},p))}));function d(e,i){var t=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var o=t.length,r=new Array(o);r[0]=b;var l={};for(var c in i)hasOwnProperty.call(i,c)&&(l[c]=i[c]);l.originalType=e,l[u]="string"==typeof e?e:n,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},4201:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(7462),n=(t(7294),t(3905));const o={title:"Gestione bibliografica con BibTeX - Una guida dettagliata per LaTeX",description:"Impara come utilizzare efficacemente BibTeX per la gestione bibliografica con LaTeX, dalla creazione di un file .bib alla sua integrazione nel tuo documento LaTeX.",sidebar_label:"Gestione bibliografica con LaTeX e BibTeX (Guida rapida)",sidebar_position:1,slug:"/"},r=void 0,l={unversionedId:"intro",id:"intro",title:"Gestione bibliografica con BibTeX - Una guida dettagliata per LaTeX",description:"Impara come utilizzare efficacemente BibTeX per la gestione bibliografica con LaTeX, dalla creazione di un file .bib alla sua integrazione nel tuo documento LaTeX.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/intro.mdx",sourceDirName:".",slug:"/",permalink:"/it/",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Gestione bibliografica con BibTeX - Una guida dettagliata per LaTeX",description:"Impara come utilizzare efficacemente BibTeX per la gestione bibliografica con LaTeX, dalla creazione di un file .bib alla sua integrazione nel tuo documento LaTeX.",sidebar_label:"Gestione bibliografica con LaTeX e BibTeX (Guida rapida)",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Natbib (In-depth Tutorial)",permalink:"/it/natbib"}},c={},s=[{value:"Passo 1: Creazione e popolazione di un file .bib",id:"passo-1-creazione-e-popolazione-di-un-file-bib",level:2},{value:"Passo 2: Integrazione in un documento LaTeX",id:"passo-2-integrazione-in-un-documento-latex",level:2},{value:"Raccomandazioni per i gestori di riferimenti",id:"raccomandazioni-per-i-gestori-di-riferimenti",level:2}],p={toc:s},u="wrapper";function m(e){let{components:i,...o}=e;return(0,n.kt)(u,(0,a.Z)({},p,o,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Per i principianti, ",(0,n.kt)("strong",{parentName:"p"},"BibTeX")," pu\xf2 sembrare complicato a causa delle sue molte specificit\xe0 e formati. Tuttavia, questa guida offre una panoramica semplificata e mostra come utilizzare BibTeX in modo efficiente con LaTeX."),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/bHD94qM0vyg",title:"Player video YouTube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.kt)("h2",{id:"passo-1-creazione-e-popolazione-di-un-file-bib"},"Passo 1: Creazione e popolazione di un file .bib"),(0,n.kt)("p",null,"Per iniziare, crea un file ",(0,n.kt)("inlineCode",{parentName:"p"},".bib"),", ad esempio ",(0,n.kt)("inlineCode",{parentName:"p"},"bibliography.bib"),', e aggiungi le voci di BibTeX. Un esempio tipico potrebbe essere l\'aggiunta di un riferimento a "Il Vecchio e il Mare" di Ernest Hemingway:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-latex"},"@book{Hemingway1952,\n  title={Il Vecchio e il Mare},\n  author={Hemingway, Ernest},\n  year={1952},\n  publisher={Charles Scribner's Sons}\n}\n\n")),(0,n.kt)("p",null,'Se analizzi "l\'anatomia" di questa voce, dovresti considerare solo i seguenti tre componenti per capire come ogni voce BibTeX \xe8 definita:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tipo di voce"),": Con ",(0,n.kt)("inlineCode",{parentName:"li"},"@book")," definiamo il tipo di riferimento, cio\xe8 (e questo esempio si riferisce a se stesso) come un libro. Ci sono anche ",(0,n.kt)("inlineCode",{parentName:"li"},"@article")," per articoli scientifici e molti altri. BibTeX ha regole specifiche su quali campi sono opzionali e quali sono necessari per citare correttamente la letteratura."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Campi di input"),": In questo esempio sono ",(0,n.kt)("inlineCode",{parentName:"li"},"title"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"author"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"year")," e ",(0,n.kt)("inlineCode",{parentName:"li"},"publisher"),". (Vedi ",(0,n.kt)("a",{parentName:"li",href:"/fields"},"Campi"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Chiave di citazione"),": Questo esempio usa ",(0,n.kt)("inlineCode",{parentName:"li"},"Hemingway1952"),", che \xe8 usato in LaTeX per le citazioni nel testo, cio\xe8 per fare riferimento alla fonte. Usando lo stesso esempio, lo facciamo con ",(0,n.kt)("inlineCode",{parentName:"li"},"\\cite{Hemingway1952}"),". La chiave di citazione pu\xf2 essere qualsiasi stringa, spesso una combinazione di autore, anno e una parola del titolo.")),(0,n.kt)("h2",{id:"passo-2-integrazione-in-un-documento-latex"},"Passo 2: Integrazione in un documento LaTeX"),(0,n.kt)("p",null,"Per utilizzare i tuoi riferimenti in LaTeX, segui l'esempio sottostante:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-latex"},"\\documentclass{article}\n\\usepackage[utf8]{inputenc}\n\n\\title{Riferimenti BibTeX in \\LaTeX}\n\\author{Giovanni Rossi}\n\n\\begin{document}\n\n\\maketitle\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim urna, dapibus et bibendum vel, consectetur et turpis. Cras a molestie nulla. \\cite{Hemingway1952}\n\\medskip\n\n\\bibliographystyle{unsrt}\n\\bibliography{bibliography}\n\n\\end{document}\n\n\n")),(0,n.kt)("p",null,"Dopo aver compilato il documento LaTeX, noterai che il comando ",(0,n.kt)("inlineCode",{parentName:"p"},"\\cite{Hemingway1952}")," \xe8 sostituito dal riferimento specificato nel file BibTeX con quell'ID, ad esempio ",(0,n.kt)("inlineCode",{parentName:"p"},"[1]"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BibTeX - LaTeX - Overleaf",src:t(1049).Z,width:"1146",height:"784"})),(0,n.kt)("p",null,"Il file .bib che abbiamo chiamato ",(0,n.kt)("inlineCode",{parentName:"p"},"bibliography.bib")," \xe8 definito in ",(0,n.kt)("inlineCode",{parentName:"p"},"\\bibliography{bibliography}")," e lo stile di citazione/bibliografia \xe8 ",(0,n.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{unsrt}"),", dove ",(0,n.kt)("inlineCode",{parentName:"p"},"unsrt")," si riferisce al file ",(0,n.kt)("inlineCode",{parentName:"p"},".bst"),", in questo caso ",(0,n.kt)("inlineCode",{parentName:"p"},"unsrt.bst"),", che contiene tutte le macro per formattare i tuoi riferimenti in quel stile. Puoi anche usare altri stili come ",(0,n.kt)("inlineCode",{parentName:"p"},"apalike.bst"),"."),(0,n.kt)("h2",{id:"raccomandazioni-per-i-gestori-di-riferimenti"},"Raccomandazioni per i gestori di riferimenti"),(0,n.kt)("p",null,"La modifica manuale dei file BibTeX pu\xf2 essere laboriosa. Ecco alcuni gestori di riferimenti consigliati che possono semplificare il tuo lavoro:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.citedrive.com/"},"CiteDrive")," \xe8 uno strumento collaborativo basato sul web e guidato da BibTeX."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.zotero.org/"},"Zotero")," offre funzionalit\xe0 avanzate e una buona integrazione con BibTeX attraverso il plugin ",(0,n.kt)("a",{parentName:"li",href:"https://retorque.re/zotero-better-bibtex/"},"Better BibTeX For Zotero"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.jabref.org/"},"JabRef")," \xe8 un gestore di riferimenti basato su BibTeX che funziona su molte piattaforme.")))}m.isMDXComponent=!0},1049:(e,i,t)=>{t.d(i,{Z:()=>a});const a=t.p+"assets/images/LaTeX_Overleaf_BibTeX-Example-a14c0028472d549ecd0e3106d1ff07a1.png"}}]);