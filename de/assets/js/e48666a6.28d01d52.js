"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[6145],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),s=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(u.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},b=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(t),b=r,m=p["".concat(u,".").concat(b)]||p[b]||c[b]||a;return t?i.createElement(m,l(l({ref:n},d),{},{components:t})):i.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=b;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}b.displayName="MDXCreateElement"},4834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const a={title:"BibTeX Literaturverwaltung - Ein detaillierter Leitfaden f\xfcr LaTeX",description:"Lernen Sie, wie Sie BibTeX effektiv zur Literaturverwaltung mit LaTeX nutzen k\xf6nnen, von der Erstellung einer .bib-Datei bis zur Integration in Ihr LaTeX-Dokument.",sidebar_label:"LaTeX Literaturverwaltung mit BibTeX (Schnellstart)",sidebar_position:1,slug:"/"},l=void 0,o={unversionedId:"intro",id:"intro",title:"BibTeX Literaturverwaltung - Ein detaillierter Leitfaden f\xfcr LaTeX",description:"Lernen Sie, wie Sie BibTeX effektiv zur Literaturverwaltung mit LaTeX nutzen k\xf6nnen, von der Erstellung einer .bib-Datei bis zur Integration in Ihr LaTeX-Dokument.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/intro.mdx",sourceDirName:".",slug:"/",permalink:"/de/",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"BibTeX Literaturverwaltung - Ein detaillierter Leitfaden f\xfcr LaTeX",description:"Lernen Sie, wie Sie BibTeX effektiv zur Literaturverwaltung mit LaTeX nutzen k\xf6nnen, von der Erstellung einer .bib-Datei bis zur Integration in Ihr LaTeX-Dokument.",sidebar_label:"LaTeX Literaturverwaltung mit BibTeX (Schnellstart)",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Bei der verwendung von R Markdown (Schnellstart)",permalink:"/de/rmarkdown"}},u={},s=[{value:"Schritt 1: Erstellung und Bef\xfcllung einer .bib-Datei",id:"schritt-1-erstellung-und-bef\xfcllung-einer-bib-datei",level:2},{value:"Schritt 2: Integration in ein LaTeX-Dokument",id:"schritt-2-integration-in-ein-latex-dokument",level:2},{value:"Empfehlungen f\xfcr Referenz-Manager",id:"empfehlungen-f\xfcr-referenz-manager",level:2}],d={toc:s},p="wrapper";function c(e){let{components:n,...a}=e;return(0,r.kt)(p,(0,i.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"F\xfcr Einsteiger kann ",(0,r.kt)("strong",{parentName:"p"},"BibTeX")," aufgrund seiner vielen Besonderheiten und Formate herausfordernd erscheinen. Dieser Leitfaden bietet jedoch einen vereinfachten \xdcberblick und zeigt, wie Sie BibTeX effizient mit LaTeX nutzen k\xf6nnen."),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/bHD94qM0vyg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("h2",{id:"schritt-1-erstellung-und-bef\xfcllung-einer-bib-datei"},"Schritt 1: Erstellung und Bef\xfcllung einer .bib-Datei"),(0,r.kt)("p",null,"Um zu starten, erstellen Sie eine ",(0,r.kt)("inlineCode",{parentName:"p"},".bib"),"-Datei, z.B. ",(0,r.kt)("inlineCode",{parentName:"p"},"bibliography.bib"),', und f\xfcgen Sie BibTeX-Eintr\xe4ge hinzu. Ein typisches Beispiel ist das Hinzuf\xfcgen einer Referenz f\xfcr "The Old Man and the Sea" von Ernest Hemingway:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"@book{Hemingway1952,\n  title={The Old Man and the Sea},\n  author={Hemingway, Ernest},\n  year={1952},\n  publisher={Charles Scribner's Sons}\n}\n")),(0,r.kt)("p",null,'Wenn Sie die "Anatomie" dieses Eintrags aufschl\xfcsseln, m\xfcssen Sie sich nur die folgenden drei Komponenten ansehen, um zu verstehen, wie jeder BibTeX-Eintrag definiert ist:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Eintragstyp"),": Mit ",(0,r.kt)("inlineCode",{parentName:"li"},"@book")," definieren wir die Art der Referenz, d.h. (und dieses Beispiel bezieht sich auf sich selbst) als ein Buch. Es sind auch ",(0,r.kt)("inlineCode",{parentName:"li"},"@article")," f\xfcr wissenschaftliche Artikel und andere m\xf6glich. BibTeX legt gerne fest, welche Felder optional und welche erforderlich sind, um sie in der Literatur korrekt anzugeben."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Eingabefelder"),": in diesem Beispiel sind dies ",(0,r.kt)("inlineCode",{parentName:"li"},"Titel"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Autor"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Jahr")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"Verlag"),". (Vgl. ",(0,r.kt)("a",{parentName:"li",href:"./fields"},"Felder"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Zitat-Schl\xfcssel"),": Dieses Beispiel lautet ",(0,r.kt)("inlineCode",{parentName:"li"},"Hemingway1952")," und wird verwendet, um in LaTeX In-Text-Zitate anzugeben, d.h. um auf die Quelle zu verweisen. Mit dem gleichen Beispiel machen wir dies mit ",(0,r.kt)("inlineCode",{parentName:"li"},"\\cite{Hemingway1952}"),". Der Zitierschl\xfcssel kann eine beliebige Zeichenkette sein - oft eine Kombination aus Autor, Jahr und einem Wort aus dem Titel.")),(0,r.kt)("h2",{id:"schritt-2-integration-in-ein-latex-dokument"},"Schritt 2: Integration in ein LaTeX-Dokument"),(0,r.kt)("p",null,"Um Ihre Referenzen in LaTeX zu nutzen, folgen Sie dem nachstehenden Beispiel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"\\documentclass{article}\n\\usepackage[utf8]{inputenc}\n\n\\title{BibTeX references in \\LaTeX}\n\\author{John Smith}\n\n\\begin{document}\n\n\\maketitle\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim urna, dapibus et bibendum vel, consectetur et turpis. Cras a molestie nulla. \\cite{Hemingway1952}\n\\medskip\n\n\\bibliographystyle{unsrt}\n\\bibliography{bibliography}\n\n\\end{document}\n")),(0,r.kt)("p",null,"Nach dem Kompilieren des LaTeX-Dokuments werden wir feststellen, dass der Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"\\cite{Hemingway1952}")," durch die in der BibTeX-Datei angegebene Referenz mit dieser ID im Beispiel ",(0,r.kt)("inlineCode",{parentName:"p"},"[1]")," ersetzt wird."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"BibTeX - LaTeX - Overleaf",src:t(1049).Z,width:"1146",height:"784"})),(0,r.kt)("p",null,"Die .bib-Datei, die wir ",(0,r.kt)("inlineCode",{parentName:"p"},"bibliography.bib")," genannt haben, ist in ",(0,r.kt)("inlineCode",{parentName:"p"},"\\bibliography{bibliography}")," definiert und der Zitier-/Bibliographiestil ",(0,r.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{unsrt}"),", wobei sich unsrt auf die ",(0,r.kt)("inlineCode",{parentName:"p"},".bst-Datei")," bezieht, in diesem Fall auf ",(0,r.kt)("inlineCode",{parentName:"p"},"unsrt.bst"),", die alle Makros zur Formatierung Ihrer Referenzen im Stil enth\xe4lt. Sie k\xf6nnen stattdessen auch andere Stile wie ",(0,r.kt)("inlineCode",{parentName:"p"},"apalike.bst")," verwenden."),(0,r.kt)("h2",{id:"empfehlungen-f\xfcr-referenz-manager"},"Empfehlungen f\xfcr Referenz-Manager"),(0,r.kt)("p",null,"Die manuelle Bearbeitung von BibTeX-Dateien kann zeitaufw\xe4ndig sein. Hier sind einige empfohlene Referenz-Manager, die Ihre Arbeit erleichtern k\xf6nnen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.citedrive.com/"},"CiteDrive")," ist ein Bibtex-gesteuertes, kollaboratives und webbasiertes Tool."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.zotero.org/"},"Zotero")," bietet umfangreiche Funktionen und eine gute Integration in BibTeX durch das Add-on ",(0,r.kt)("a",{parentName:"li",href:"https://retorque.re/zotero-better-bibtex/"},"Better BibTeX For Zotero"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jabref.org/"},"JabRef")," ist ein BibTeX-basierter Referenzmanager, der plattform\xfcbergreifend funktioniert.")))}c.isMDXComponent=!0},1049:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/LaTeX_Overleaf_BibTeX-Example-a14c0028472d549ecd0e3106d1ff07a1.png"}}]);