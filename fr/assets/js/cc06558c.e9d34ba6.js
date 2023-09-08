"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[18],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>b});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(i),d=r,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return i?n.createElement(b,o(o({ref:t},p),{},{components:i})):n.createElement(b,o({ref:t},p))}));function b(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=i[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},4694:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=i(7462),r=(i(7294),i(3905));const a={title:"Gestion bibliographique BibTeX - Un guide d\xe9taill\xe9 pour LaTeX",description:"Apprenez comment utiliser efficacement BibTeX pour la gestion bibliographique avec LaTeX, de la cr\xe9ation d'un fichier .bib \xe0 son int\xe9gration dans votre document LaTeX.",sidebar_label:"Gestion bibliographique avec LaTeX et BibTeX (D\xe9marrage rapide)",sidebar_position:1,slug:"/"},o="Gestion bibliographique BibTeX dans LaTeX",l={unversionedId:"intro",id:"intro",title:"Gestion bibliographique BibTeX - Un guide d\xe9taill\xe9 pour LaTeX",description:"Apprenez comment utiliser efficacement BibTeX pour la gestion bibliographique avec LaTeX, de la cr\xe9ation d'un fichier .bib \xe0 son int\xe9gration dans votre document LaTeX.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/intro.mdx",sourceDirName:".",slug:"/",permalink:"/fr/",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Gestion bibliographique BibTeX - Un guide d\xe9taill\xe9 pour LaTeX",description:"Apprenez comment utiliser efficacement BibTeX pour la gestion bibliographique avec LaTeX, de la cr\xe9ation d'un fichier .bib \xe0 son int\xe9gration dans votre document LaTeX.",sidebar_label:"Gestion bibliographique avec LaTeX et BibTeX (D\xe9marrage rapide)",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Using R Markdown (Quick start)",permalink:"/fr/rmarkdown"}},s={},u=[{value:"\xc9tape 1 : Cr\xe9ation et remplissage d&#39;un fichier .bib",id:"\xe9tape-1--cr\xe9ation-et-remplissage-dun-fichier-bib",level:2},{value:"\xc9tape 2 : Int\xe9gration dans un document LaTeX",id:"\xe9tape-2--int\xe9gration-dans-un-document-latex",level:2},{value:"Recommandations pour les gestionnaires de r\xe9f\xe9rences",id:"recommandations-pour-les-gestionnaires-de-r\xe9f\xe9rences",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gestion-bibliographique-bibtex-dans-latex"},"Gestion bibliographique BibTeX dans LaTeX"),(0,r.kt)("p",null,"Pour les d\xe9butants, ",(0,r.kt)("strong",{parentName:"p"},"BibTeX")," peut sembler complexe en raison de ses nombreuses sp\xe9cificit\xe9s et formats. Toutefois, ce guide offre une vue d'ensemble simplifi\xe9e et montre comment utiliser BibTeX efficacement avec LaTeX."),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/bHD94qM0vyg",title:"Lecteur vid\xe9o YouTube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("h2",{id:"\xe9tape-1--cr\xe9ation-et-remplissage-dun-fichier-bib"},"\xc9tape 1 : Cr\xe9ation et remplissage d'un fichier .bib"),(0,r.kt)("p",null,"Pour commencer, cr\xe9ez un fichier ",(0,r.kt)("inlineCode",{parentName:"p"},".bib"),", par exemple ",(0,r.kt)("inlineCode",{parentName:"p"},"bibliography.bib"),", et ajoutez des entr\xe9es BibTeX. Un exemple typique serait l'ajout d'une r\xe9f\xe9rence pour \"Le Vieil Homme et la Mer\" d'Ernest Hemingway :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"@book{Hemingway1952,\n  title={Le Vieil Homme et la Mer},\n  author={Hemingway, Ernest},\n  year={1952},\n  publisher={Charles Scribner's Sons}\n}\n")),(0,r.kt)("p",null,"Si vous d\xe9composez \"l'anatomie\" de cette entr\xe9e, vous n'avez qu'\xe0 examiner les trois composants suivants pour comprendre comment chaque entr\xe9e BibTeX est d\xe9finie :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type d'entr\xe9e")," : Avec ",(0,r.kt)("inlineCode",{parentName:"li"},"@book"),", nous d\xe9finissons le type de r\xe9f\xe9rence, c'est-\xe0-dire (et cet exemple se r\xe9f\xe8re \xe0 lui-m\xeame) comme un livre. Il existe aussi ",(0,r.kt)("inlineCode",{parentName:"li"},"@article")," pour les articles scientifiques, et bien d'autres. BibTeX a des r\xe8gles sp\xe9cifiques sur les champs qui sont optionnels et ceux qui sont n\xe9cessaires pour citer correctement la litt\xe9rature."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Champs de saisie")," : Dans cet exemple, il s'agit de ",(0,r.kt)("inlineCode",{parentName:"li"},"title"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"author"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"year")," et ",(0,r.kt)("inlineCode",{parentName:"li"},"publisher"),". (Voir ",(0,r.kt)("a",{parentName:"li",href:"/fields"},"Champs"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cl\xe9 de citation")," : Cet exemple utilise ",(0,r.kt)("inlineCode",{parentName:"li"},"Hemingway1952"),", qui est utilis\xe9 dans LaTeX pour les citations dans le texte, c'est-\xe0-dire pour r\xe9f\xe9rencer la source. En utilisant le m\xeame exemple, nous le faisons avec ",(0,r.kt)("inlineCode",{parentName:"li"},"\\cite{Hemingway1952}"),". La cl\xe9 de citation peut \xeatre n'importe quelle cha\xeene, souvent une combinaison de l'auteur, de l'ann\xe9e et d'un mot du titre.")),(0,r.kt)("h2",{id:"\xe9tape-2--int\xe9gration-dans-un-document-latex"},"\xc9tape 2 : Int\xe9gration dans un document LaTeX"),(0,r.kt)("p",null,"Pour utiliser vos r\xe9f\xe9rences dans LaTeX, suivez l'exemple ci-dessous :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"\\documentclass{article}\n\\usepackage[utf8]{inputenc}\n\n\\title{R\xe9f\xe9rences BibTeX dans \\LaTeX}\n\\author{Jean Dupont}\n\n\\begin{document}\n\n\\maketitle\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim urna, dapibus et bibendum vel, consectetur et turpis. Cras a molestie nulla. \\cite{Hemingway1952}\n\\medskip\n\n\\bibliographystyle{unsrt}\n\\bibliography{bibliography}\n\n\\end{document}\n")),(0,r.kt)("p",null,"Apr\xe8s avoir compil\xe9 le document LaTeX, vous constaterez que la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"\\cite{Hemingway1952}")," est remplac\xe9e par la r\xe9f\xe9rence sp\xe9cifi\xe9e dans le fichier BibTeX avec cet ID, par exemple ",(0,r.kt)("inlineCode",{parentName:"p"},"[1]"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"BibTeX - LaTeX - Overleaf",src:i(1049).Z,width:"1146",height:"784"})),(0,r.kt)("p",null,"Le fichier .bib que nous avons nomm\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"bibliography.bib")," est d\xe9fini dans ",(0,r.kt)("inlineCode",{parentName:"p"},"\\bibliography{bibliography}")," et le style de citation/bibliographie est ",(0,r.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{unsrt}"),", o\xf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"unsrt")," fait r\xe9f\xe9rence au fichier ",(0,r.kt)("inlineCode",{parentName:"p"},".bst"),", dans ce cas ",(0,r.kt)("inlineCode",{parentName:"p"},"unsrt.bst"),", qui contient tous les macros pour formater vos r\xe9f\xe9rences dans ce style. Vous pouvez \xe9galement utiliser d'autres styles comme ",(0,r.kt)("inlineCode",{parentName:"p"},"apalike.bst"),"."),(0,r.kt)("h2",{id:"recommandations-pour-les-gestionnaires-de-r\xe9f\xe9rences"},"Recommandations pour les gestionnaires de r\xe9f\xe9rences"),(0,r.kt)("p",null,"L'\xe9dition manuelle des fichiers BibTeX peut \xeatre fastidieuse. Voici quelques gestionnaires de r\xe9f\xe9rences recommand\xe9s qui peuvent faciliter votre travail :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.citedrive.com/"},"CiteDrive")," est un outil collaboratif bas\xe9 sur le web et pilot\xe9 par BibTeX."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.zotero.org/"},"Zotero")," offre des fonctionnalit\xe9s \xe9tendues et une bonne int\xe9gration avec BibTeX gr\xe2ce \xe0 l'extension ",(0,r.kt)("a",{parentName:"li",href:"https://retorque.re/zotero-better-bibtex/"},"Better BibTeX For Zotero"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jabref.org/"},"JabRef")," est un gestionnaire de r\xe9f\xe9rences bas\xe9 sur BibTeX qui fonctionne sur plusieurs plateformes.")))}m.isMDXComponent=!0},1049:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/LaTeX_Overleaf_BibTeX-Example-a14c0028472d549ecd0e3106d1ff07a1.png"}}]);