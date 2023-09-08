"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[2521],{3905:(e,i,t)=>{t.d(i,{Zo:()=>u,kt:()=>v});var r=t(7294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function l(e,i){if(null==e)return{};var t,r,a=function(e,i){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var i=r.useContext(c),t=i;return e&&(t="function"==typeof e?e(i):n(n({},i),e)),t},u=function(e){var i=s(e.components);return r.createElement(c.Provider,{value:i},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var i=e.children;return r.createElement(r.Fragment,{},i)}},m=r.forwardRef((function(e,i){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(v,n(n({ref:i},u),{},{components:t})):r.createElement(v,n({ref:i},u))}));function v(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var o=t.length,n=new Array(o);n[0]=m;var l={};for(var c in i)hasOwnProperty.call(i,c)&&(l[c]=i[c]);l.originalType=e,l[d]="string"==typeof e?e:a,n[1]=l;for(var s=2;s<o;s++)n[s]=t[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},404:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"Come formattare citazioni e bibliografie in RStudio con CiteDrive e Quarto",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},n="Come formattare citazioni e bibliografie in RStudio con CiteDrive e Quarto",l={permalink:"/it/blog/how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",editUrl:"https://github.com/citedrive/bibtex.eu/blog/blog/2022-08-28-quarto.mdx",source:"@site/i18n/it/docusaurus-plugin-content-blog/2022-08-28-quarto.mdx",title:"Come formattare citazioni e bibliografie in RStudio con CiteDrive e Quarto",description:"Dovete formattare citazioni e bibliografia per un lavoro di ricerca in RStudio? Avete difficolt\xe0 a tenere traccia di tutti i riferimenti e dei requisiti di formattazione? Non temete! CiteDrive e Quarto possono aiutarvi. Questo blog post vi mostrer\xe0 come utilizzare entrambi gli strumenti per creare citazioni e bibliografie belle e formattate correttamente.",date:"2022-08-28T00:00:00.000Z",formattedDate:"28 agosto 2022",tags:[{label:"citedrive",permalink:"/it/blog/tags/citedrive"},{label:"rstudio",permalink:"/it/blog/tags/rstudio"},{label:"quarto",permalink:"/it/blog/tags/quarto"},{label:"rmarkdown",permalink:"/it/blog/tags/rmarkdown"}],readingTime:2.505,hasTruncateMarker:!1,authors:[{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],frontMatter:{slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"Come formattare citazioni e bibliografie in RStudio con CiteDrive e Quarto",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},prevItem:{title:"Overleaf and RStudio users, we have great news!",permalink:"/it/blog/overleaf-and-rstudio-users-we-have-great-news"},nextItem:{title:"Citing and Using References on Overleaf: A Guide for Researchers",permalink:"/it/blog/citing-and-using-references-on-overleaf-a-guide-for-researchers"}},c={authorsImageUrls:[void 0]},s=[{value:"Iniziare",id:"iniziare",level:2},{value:"Passo 1: Includere i riferimenti nel progetto",id:"passo-1-includere-i-riferimenti-nel-progetto",level:3},{value:"Passo 2: Collegare il documento Quarto a CiteDrive",id:"passo-2-collegare-il-documento-quarto-a-citedrive",level:3},{value:"Fase 3: Copiare le chiavi di citazione.",id:"fase-3-copiare-le-chiavi-di-citazione",level:3},{value:"Informazioni aggiuntive",id:"informazioni-aggiuntive",level:2},{value:"Quarto",id:"quarto",level:3},{value:"CiteDrive",id:"citedrive",level:3}],u={toc:s},d="wrapper";function p(e){let{components:i,...o}=e;return(0,a.kt)(d,(0,r.Z)({},u,o,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dovete formattare citazioni e bibliografia per un lavoro di ricerca in RStudio? Avete difficolt\xe0 a tenere traccia di tutti i riferimenti e dei requisiti di formattazione? Non temete! CiteDrive e Quarto possono aiutarvi. Questo blog post vi mostrer\xe0 come utilizzare entrambi gli strumenti per creare citazioni e bibliografie belle e formattate correttamente."),(0,a.kt)("h2",{id:"iniziare"},"Iniziare"),(0,a.kt)("p",null,"Per formattare citazioni e bibliografie in RStudio con CiteDrive e Quarto, seguite questi passaggi:"),(0,a.kt)("h3",{id:"passo-1-includere-i-riferimenti-nel-progetto"},"Passo 1: Includere i riferimenti nel progetto"),(0,a.kt)("p",null,'Per prima cosa, \xe8 necessario creare un account CiteDrive andando sul loro sito web e selezionando il pulsante "Sign Up". Il completamento dell\'account vi consentir\xe0 di creare un progetto "R-Markdown" (',(0,a.kt)("em",{parentName:"p"},"funziona anche per Quarto, non preoccupatevi"),"); basta dargli un nome e ",(0,a.kt)("a",{parentName:"p",href:"https://citedrive.medium.com/adding-bibliographic-references-to-rstudio-using-citedrive-create-citations-in-r-markdown-or-9b1e1ab59cf6"},"riempire il progetto di riferimenti"),". Il vostro potrebbe avere un aspetto simile a questo:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CiteDrive - Esempio",src:t(5616).Z,width:"2226",height:"1344"})),(0,a.kt)("h3",{id:"passo-2-collegare-il-documento-quarto-a-citedrive"},"Passo 2: Collegare il documento Quarto a CiteDrive"),(0,a.kt)("p",null,'Ora colleghiamo il nuovo CiteDrive al documento di Quarto. Per farlo, fare clic sul pulsante "bib". Si aprir\xe0 una nuova scheda con tutte le voci in formato BibTeX. Copiare l\'URL dalla nuova scheda e incollarlo nella parte YAML del file QMD.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},'---\nbibliografia: "https://api.citedrive.com/bib/514b115a-e8b7-4e14-a7c8-83e88337ad12/references.bib?x=eyJpZCI6ICI1MTRiFTE1YS1lOGI3LTRlMTQtYTdjOC04M2U4ODMzN2FkMTIiLCAidXNlciI6ICI5NzgiLCAic2lnbmF0dXJlIjogIjBkZDgzNGM1NDg2YzE2MTRhYTUzZDAyNmI1YjFhZjgxNTg3ODc4NDQ3Yzk1ODQ1ZWI2ZTA5UTQ5YTFlNDdlMGIifQ==.bib"\n---\n')),(0,a.kt)("p",null,"Il filmato seguente mostra il flusso quando si usa R Markdown. Tuttavia, il principio di Quarto \xe8 lo stesso:"),(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/7ON96F0GD-Y",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h3",{id:"fase-3-copiare-le-chiavi-di-citazione"},"Fase 3: Copiare le chiavi di citazione."),(0,a.kt)("p",null,"Una volta importati i riferimenti, \xe8 possibile inserirli nel documento di Quarto. Per farlo, tornate al vostro progetto CiteDrive e a uno o pi\xf9 riferimenti che volete inserire nel vostro documento e fate clic sul pulsante cita. CiteDrive copier\xe0 la chiave di citazione negli appunti."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CiteDrive - Esempio",src:t(6213).Z,width:"856",height:"320"})),(0,a.kt)("p",null,"Incollate la chiave di citazione nel passaggio necessario del vostro documento Quarto."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CiteDrive - Incolla chiave di citazione",src:t(1906).Z,width:"2054",height:"186"})),(0,a.kt)("p",null,'Dopo aver inserito la chiave nella sezione, fare clic su "render". La citazione verr\xe0 prodotta nello stile desiderato e il riferimento apparir\xe0 alla fine del documento.'),(0,a.kt)("p",null,"\xc8 tutto! CiteDrive \xe8 lo strumento perfetto per aiutarvi a gestire la vostra bibliografia e a inserire citazioni nei documenti di Quarto. Provatelo subito e vedrete quanto tempo vi far\xe0 risparmiare!"),(0,a.kt)("h2",{id:"informazioni-aggiuntive"},"Informazioni aggiuntive"),(0,a.kt)("h3",{id:"quarto"},"Quarto"),(0,a.kt)("p",null,"Quarto \xe8 un potente strumento di scrittura per la ricerca che pu\xf2 generare automaticamente citazioni e bibliografie in vari stili. Supporta file di bibliografia in BibTeX e altri formati, rendendo pi\xf9 facile tenere traccia dei vostri riferimenti."),(0,a.kt)("h3",{id:"citedrive"},"CiteDrive"),(0,a.kt)("p",null,"CiteDrive \xe8 uno strumento di gestione delle referenze che consente di organizzare, archiviare facilmente e ricercare i dati bibliografici. Organizzate i vostri gruppi di lavoro e i vostri riferimenti in progetti, ad esempio per un articolo dedicato a Quarto. CiteDrive mantiene automaticamente aggiornati i vostri riferimenti in Quarto ogni volta che voi o uno dei vostri collaboratori aggiornate i dati bibliografici del vostro progetto."),(0,a.kt)("p",null,"Preferite BibLaTeX? Nessun problema, CiteDrive \xe8 al 100% compatibile con BibTeX e offre libert\xe0 nei campi e nei tipi per ogni voce, il che significa che \xe8 possibile utilizzare qualsiasi pacchetto o alternativa basata su BibTeX, come BibLaTeX."))}p.isMDXComponent=!0},6213:(e,i,t)=>{t.d(i,{Z:()=>r});const r=t.p+"assets/images/citedrive_copy_citation-e019cfea987e445e123586325ff1cd4e.gif"},1906:(e,i,t)=>{t.d(i,{Z:()=>r});const r=t.p+"assets/images/citedrive_paste_citation_rstudio-7b7cfbf5ffdf444fe88dfcd973120218.gif"},5616:(e,i,t)=>{t.d(i,{Z:()=>r});const r=t.p+"assets/images/citedrive_project_example-a643fff0a5509df6e27c5462fc2da4db.png"}}]);