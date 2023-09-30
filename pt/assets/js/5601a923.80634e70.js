"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[8986],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>f});var o=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function n(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),u=function(e){var a=o.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=u(e.components);return o.createElement(c.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},p=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=n(e,["components","mdxType","originalType","parentName"]),d=u(t),p=r,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||i;return t?o.createElement(f,s(s({ref:a},l),{},{components:t})):o.createElement(f,s({ref:a},l))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=p;var n={};for(var c in a)hasOwnProperty.call(a,c)&&(n[c]=a[c]);n.originalType=e,n[d]="string"==typeof e?e:r,s[1]=n;for(var u=2;u<i;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4541:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>u});var o=t(7462),r=(t(7294),t(3905));const i={slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"Como Formatar Cita\xe7\xf5es e Bibliografias em RStudio com CiteDrive e Quarto",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},s="Como Formatar Cita\xe7\xf5es e Bibliografias em RStudio com CiteDrive e Quarto",n={permalink:"/pt/blog/how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",editUrl:"https://github.com/citedrive/bibtex.eu/blog/blog/2022-08-28-quarto.mdx",source:"@site/i18n/pt/docusaurus-plugin-content-blog/2022-08-28-quarto.mdx",title:"Como Formatar Cita\xe7\xf5es e Bibliografias em RStudio com CiteDrive e Quarto",description:"Precisa de formatar as cita\xe7\xf5es e uma bibliografia para um trabalho de investiga\xe7\xe3o no RStudio? Tem dificuldade em acompanhar todas as suas refer\xeancias e requisitos de formata\xe7\xe3o? N\xe3o tenha medo! A CiteDrive e a Quarto podem ajudar. Este post no blogue ir\xe1 mostrar-lhe como utilizar ambas as ferramentas para criar cita\xe7\xf5es e bibliografias bonitas e correctamente formatadas.",date:"2022-08-28T00:00:00.000Z",formattedDate:"28 de agosto de 2022",tags:[{label:"citedrive",permalink:"/pt/blog/tags/citedrive"},{label:"rstudio",permalink:"/pt/blog/tags/rstudio"},{label:"quarto",permalink:"/pt/blog/tags/quarto"},{label:"rmarkdown",permalink:"/pt/blog/tags/rmarkdown"}],readingTime:2.53,hasTruncateMarker:!1,authors:[{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],frontMatter:{slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"Como Formatar Cita\xe7\xf5es e Bibliografias em RStudio com CiteDrive e Quarto",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},prevItem:{title:"Overleaf and RStudio users, we have great news!",permalink:"/pt/blog/overleaf-and-rstudio-users-we-have-great-news"},nextItem:{title:"Cita\xe7\xe3o e Utiliza\xe7\xe3o de Refer\xeancias no Overleaf: Um Guia para Investigadores",permalink:"/pt/blog/citing-and-using-references-on-overleaf-a-guide-for-researchers"}},c={authorsImageUrls:[void 0]},u=[{value:"Comece",id:"comece",level:2},{value:"Passo 1: Inclua refer\xeancias no seu projecto",id:"passo-1-inclua-refer\xeancias-no-seu-projecto",level:3},{value:"Passo 2: Ligue o seu documento Quarto ao CiteDrive",id:"passo-2-ligue-o-seu-documento-quarto-ao-citedrive",level:3},{value:"Passo 3: Copiar as chaves de cita\xe7\xe3o.",id:"passo-3-copiar-as-chaves-de-cita\xe7\xe3o",level:3},{value:"Informa\xe7\xe3o adicional",id:"informa\xe7\xe3o-adicional",level:2},{value:"Quarto",id:"quarto",level:3},{value:"CiteDrive",id:"citedrive",level:3}],l={toc:u},d="wrapper";function m(e){let{components:a,...i}=e;return(0,r.kt)(d,(0,o.Z)({},l,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Precisa de formatar as cita\xe7\xf5es e uma bibliografia para um trabalho de investiga\xe7\xe3o no RStudio? Tem dificuldade em acompanhar todas as suas refer\xeancias e requisitos de formata\xe7\xe3o? N\xe3o tenha medo! A CiteDrive e a Quarto podem ajudar. Este post no blogue ir\xe1 mostrar-lhe como utilizar ambas as ferramentas para criar cita\xe7\xf5es e bibliografias bonitas e correctamente formatadas."),(0,r.kt)("h2",{id:"comece"},"Comece"),(0,r.kt)("p",null,"Para formatar cita\xe7\xf5es e bibliografias no RStudio com CiteDrive e Quarto, siga estes passos:"),(0,r.kt)("h3",{id:"passo-1-inclua-refer\xeancias-no-seu-projecto"},"Passo 1: Inclua refer\xeancias no seu projecto"),(0,r.kt)("p",null,"Primeiro, deve criar uma conta CiteDrive, indo ao seu website e seleccionando o bot\xe3o 'Sign Up'. Completar a sua conta permitir-lhe-\xe1 ent\xe3o fazer um projecto 'R-Markdown' (",(0,r.kt)("em",{parentName:"p"},"funciona para a Quarto, n\xe3o se preocupe"),"); basta dar-lhe um nome e ",(0,r.kt)("a",{parentName:"p",href:"https://citedrive.medium.com/adding-bibliographic-references-to-rstudio-using-citedrive-create-citations-in-r-markdown-or-9b1e1ab59cf6"},"preencher o projecto com refer\xeancias"),". O seu pode parecer algo parecido com isto:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CiteDrive - Exemplo",src:t(5616).Z,width:"2226",height:"1344"})),(0,r.kt)("h3",{id:"passo-2-ligue-o-seu-documento-quarto-ao-citedrive"},"Passo 2: Ligue o seu documento Quarto ao CiteDrive"),(0,r.kt)("p",null,"Agora, vamos ligar o seu novo CiteDrive ao seu documento Quarto. Para o fazer, clique no bot\xe3o 'bib'. Isto abrir\xe1 um novo separador com todas as suas entradas no formato BibTeX. Copie o URL do novo separador e cole-o na parte YAML do seu ficheiro QMD."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'---\nbibliografia: "https://api.citedrive.com/bib/514b115a-e8b7-4e14-a7c8-83e88337ad12/references.bib?x=eyJpZCI6ICI1MTRiFTE1YS1lOGI3LTRlMTQtYTdjOC04M2U4ODMzN2FkMTIiLCAidXNlciI6ICI5NzgiLCAic2lnbmF0dXJlIjogIjBkZDgzNGM1NDg2YzE2MTRhYTUzZDAyNmI1YjFhZjgxNTg3ODc4NDQ3Yzk1ODQ1ZWI2ZTA5UTQ5YTFlNDdlMGIifQ==.bib"\n---\n')),(0,r.kt)("p",null,"O clip seguinte mostra o fluxo quando se utiliza R Markdown. No entanto, o princ\xedpio da Quarto \xe9 o mesmo:"),(0,r.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/7ON96F0GD-Y",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; girosc\xf3pio; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h3",{id:"passo-3-copiar-as-chaves-de-cita\xe7\xe3o"},"Passo 3: Copiar as chaves de cita\xe7\xe3o."),(0,r.kt)("p",null,"Uma vez importadas as suas refer\xeancias, pode inseri-las no seu documento Quarto. Para o fazer, volte ao seu projecto CiteDrive e uma ou mais refer\xeancias que pretenda inserir no seu documento e clique no bot\xe3o de cita\xe7\xe3o. CiteDrive ir\xe1 copiar a chave de cita\xe7\xe3o para a sua prancheta."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CiteDrive - Exemplo",src:t(6213).Z,width:"856",height:"320"})),(0,r.kt)("p",null,"Cole a sua chave de cita\xe7\xe3o na passagem necess\xe1ria do seu documento Quarto."),(0,r.kt)("p",null,"CiteDrive - Paste citation key](@site/static/img/tutorial/citedrive_paste_citation_rstudio.gif)"),(0,r.kt)("p",null,'Depois de inserir a chave na sec\xe7\xe3o, clique em "renderizar". A cita\xe7\xe3o ser\xe1 produzida no estilo desejado, e a refer\xeancia aparecer\xe1 no final do seu documento.'),(0,r.kt)("p",null,"E \xe9 tudo! CiteDrive \xe9 a ferramenta perfeita para o ajudar a gerir a sua bibliografia e inserir as cita\xe7\xf5es nos documentos Quarto. Teste-o agora e veja quanto tempo pode poupar-lhe!"),(0,r.kt)("h2",{id:"informa\xe7\xe3o-adicional"},"Informa\xe7\xe3o adicional"),(0,r.kt)("h3",{id:"quarto"},"Quarto"),(0,r.kt)("p",null,"Quarto \xe9 uma poderosa ferramenta de escrita de pesquisa que pode gerar automaticamente cita\xe7\xf5es e bibliografias em v\xe1rios estilos. Suporta ficheiros bibliogr\xe1ficos em BibTeX e outros formatos, o que facilita o acompanhamento das suas refer\xeancias."),(0,r.kt)("h3",{id:"citedrive"},"CiteDrive"),(0,r.kt)("p",null,"CiteDrive \xe9 uma ferramenta de gest\xe3o de refer\xeancia que lhe permite organizar, armazenar facilmente, e pesquisar os seus dados bibliogr\xe1ficos. Organize as suas equipas e refer\xeancias em projectos, por exemplo, para um trabalho dedicado \xe0 Quarto. CiteDrive mant\xe9m automaticamente as suas refer\xeancias na Quarto actualizadas sempre que voc\xea ou um dos seus colegas de equipa actualiza os dados bibliogr\xe1ficos dentro do seu projecto."),(0,r.kt)("p",null,"Prefere BibLaTeX? N\xe3o h\xe1 problema, CiteDrive \xe9 100 % BibTeX e proporciona liberdade em campos e tipos para cada entrada, o que significa que pode utilizar qualquer pacote ou alternativa baseada em BibTeX, como BibLaTeX."))}m.isMDXComponent=!0},6213:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/citedrive_copy_citation-e019cfea987e445e123586325ff1cd4e.gif"},5616:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/citedrive_project_example-a643fff0a5509df6e27c5462fc2da4db.png"}}]);