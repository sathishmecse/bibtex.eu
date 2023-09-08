"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[7024],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>b});var r=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},u=function(e){var a=l(e.components);return r.createElement(c.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(b,n(n({ref:a},u),{},{components:t})):r.createElement(b,n({ref:a},u))}));function b(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,n=new Array(o);n[0]=m;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s[d]="string"==typeof e?e:i,n[1]=s;for(var l=2;l<o;l++)n[l]=t[l];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1941:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const o={slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"C\xf3mo formatear citas y bibliograf\xedas en RStudio con CiteDrive y Quarto",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},n="C\xf3mo formatear citas y bibliograf\xedas en RStudio con CiteDrive y Quarto",s={permalink:"/es/blog/how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",editUrl:"https://github.com/citedrive/bibtex.eu/blog/blog/2022-08-28-quarto.mdx",source:"@site/i18n/es/docusaurus-plugin-content-blog/2022-08-28-quarto.mdx",title:"C\xf3mo formatear citas y bibliograf\xedas en RStudio con CiteDrive y Quarto",description:"\xbfNecesitas formatear citas y una bibliograf\xeda para un trabajo de investigaci\xf3n en RStudio? \xbfTe cuesta hacer un seguimiento de todas tus referencias y requisitos de formato? \xa1No temas! CiteDrive y Quarto pueden ayudarte. Esta entrada de blog te mostrar\xe1 c\xf3mo usar ambas herramientas para crear citas y bibliograf\xedas hermosas y correctamente formateadas.",date:"2022-08-28T00:00:00.000Z",formattedDate:"28 de agosto de 2022",tags:[{label:"citedrive",permalink:"/es/blog/tags/citedrive"},{label:"rstudio",permalink:"/es/blog/tags/rstudio"},{label:"quarto",permalink:"/es/blog/tags/quarto"},{label:"rmarkdown",permalink:"/es/blog/tags/rmarkdown"}],readingTime:2.545,hasTruncateMarker:!1,authors:[{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],frontMatter:{slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"C\xf3mo formatear citas y bibliograf\xedas en RStudio con CiteDrive y Quarto",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},prevItem:{title:"Overleaf and RStudio users, we have great news!",permalink:"/es/blog/overleaf-and-rstudio-users-we-have-great-news"},nextItem:{title:"Citar y utilizar las referencias en Overleaf: Gu\xeda para investigadores",permalink:"/es/blog/citing-and-using-references-on-overleaf-a-guide-for-researchers"}},c={authorsImageUrls:[void 0]},l=[{value:"Empezar",id:"empezar",level:2},{value:"Paso 1: Incluye referencias en tu proyecto",id:"paso-1-incluye-referencias-en-tu-proyecto",level:3},{value:"Paso 2: Conecta tu documento Quarto a CiteDrive",id:"paso-2-conecta-tu-documento-quarto-a-citedrive",level:3},{value:"Paso 3: Copie las claves de las citas.",id:"paso-3-copie-las-claves-de-las-citas",level:3},{value:"Informaci\xf3n adicional",id:"informaci\xf3n-adicional",level:2},{value:"Quarto",id:"quarto",level:3},{value:"CiteDrive",id:"citedrive",level:3}],u={toc:l},d="wrapper";function p(e){let{components:a,...o}=e;return(0,i.kt)(d,(0,r.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\xbfNecesitas formatear citas y una bibliograf\xeda para un trabajo de investigaci\xf3n en RStudio? \xbfTe cuesta hacer un seguimiento de todas tus referencias y requisitos de formato? \xa1No temas! CiteDrive y Quarto pueden ayudarte. Esta entrada de blog te mostrar\xe1 c\xf3mo usar ambas herramientas para crear citas y bibliograf\xedas hermosas y correctamente formateadas."),(0,i.kt)("h2",{id:"empezar"},"Empezar"),(0,i.kt)("p",null,"Para formatear citas y bibliograf\xedas en RStudio con CiteDrive y Quarto, sigue estos pasos:"),(0,i.kt)("h3",{id:"paso-1-incluye-referencias-en-tu-proyecto"},"Paso 1: Incluye referencias en tu proyecto"),(0,i.kt)("p",null,"En primer lugar, debes crear una cuenta en CiteDrive accediendo a su p\xe1gina web y seleccionando el bot\xf3n 'Sign Up'. Al completar tu cuenta podr\xe1s crear un proyecto 'R-Markdown' (",(0,i.kt)("em",{parentName:"p"},"funciona para Quarto, no te preocupes"),"); simplemente ponle un nombre y ",(0,i.kt)("a",{parentName:"p",href:"https://citedrive.medium.com/adding-bibliographic-references-to-rstudio-using-citedrive-create-citations-in-r-markdown-or-9b1e1ab59cf6"},"rellena el proyecto con referencias"),". El tuyo podr\xeda ser algo as\xed"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"CiteDrive - Ejemplo",src:t(5616).Z,width:"2226",height:"1344"})),(0,i.kt)("h3",{id:"paso-2-conecta-tu-documento-quarto-a-citedrive"},"Paso 2: Conecta tu documento Quarto a CiteDrive"),(0,i.kt)("p",null,"Ahora, vamos a conectar tu nuevo CiteDrive a tu documento Quarto. Para ello, haz clic en el bot\xf3n 'bib'. Esto abrir\xe1 una nueva pesta\xf1a con todas tus entradas en formato BibTeX. Copia la URL de la nueva pesta\xf1a y p\xe9gala en la parte YAML de tu archivo QMD."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},'---\nbibliograf\xeda: "https://api.citedrive.com/bib/514b115a-e8b7-4e14-a7c8-83e88337ad12/references.bib?x=eyJpZCI6ICI1MTRiFTE1YS1lOGI3LTRlMTQtYTdjOC04M2U4ODMzN2FkMTIiLCAidXNlciI6ICI5NzgiLCAic2lnbmF0dXJlIjogIjBkZDgzNGM1NDg2YzE2MTRhYTUzZDAyNmI1YjFhZjgxNTg3ODc4NDQ3Yzk1ODQ1ZWI2ZTA5UTQ5YTFlNDdlMGIifQ==.bib"\n---\n')),(0,i.kt)("p",null,"El siguiente clip muestra el flujo cuando se utiliza R Markdown. Sin embargo, el principio de Quarto es el mismo:"),(0,i.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/7ON96F0GD-Y",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h3",{id:"paso-3-copie-las-claves-de-las-citas"},"Paso 3: Copie las claves de las citas."),(0,i.kt)("p",null,"Una vez importadas tus referencias, puedes insertarlas en tu documento Quarto. Para ello, vuelve a tu proyecto CiteDrive y a una o m\xe1s referencias que quieras insertar en tu documento y haz clic en el bot\xf3n citar. CiteDrive copiar\xe1 la clave de la cita en tu portapapeles."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"CiteDrive - Ejemplo",src:t(6213).Z,width:"856",height:"320"})),(0,i.kt)("p",null,"Pegue su clave de citaci\xf3n en el pasaje necesario de su documento Quarto."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"CiteDrive - Pegar clave de citaci\xf3n",src:t(1906).Z,width:"2054",height:"186"})),(0,i.kt)("p",null,'Despu\xe9s de insertar la clave en la secci\xf3n, haz clic en "renderizar". La cita se mostrar\xe1 en el estilo deseado y la referencia aparecer\xe1 al final del documento.'),(0,i.kt)("p",null,"Eso es todo. CiteDrive es la herramienta perfecta para ayudarte a gestionar tu bibliograf\xeda e insertar citas en documentos Quarto. \xa1Pru\xe9balo ahora y ver\xe1s cu\xe1nto tiempo te puede ahorrar!"),(0,i.kt)("h2",{id:"informaci\xf3n-adicional"},"Informaci\xf3n adicional"),(0,i.kt)("h3",{id:"quarto"},"Quarto"),(0,i.kt)("p",null,"Quarto es una potente herramienta de escritura para la investigaci\xf3n que puede generar autom\xe1ticamente citas y bibliograf\xedas en varios estilos. Es compatible con archivos de bibliograf\xeda en BibTeX y otros formatos, por lo que es f\xe1cil hacer un seguimiento de sus referencias."),(0,i.kt)("h3",{id:"citedrive"},"CiteDrive"),(0,i.kt)("p",null,"CiteDrive es una herramienta de gesti\xf3n de referencias que te permite organizar, almacenar f\xe1cilmente y buscar tus datos bibliogr\xe1ficos. Organiza tus equipos y referencias en proyectos, por ejemplo, para un trabajo dedicado a Quarto. CiteDrive mantiene actualizadas autom\xe1ticamente tus referencias en Quarto cada vez que t\xfa o uno de tus compa\xf1eros de equipo actualiza los datos bibliogr\xe1ficos dentro de tu proyecto."),(0,i.kt)("p",null,"\xbfPrefieres BibLaTeX? No hay problema, CiteDrive es 100 % BibTeX y proporciona libertad en los campos y tipos para cada entrada, lo que significa que puedes utilizar cualquier paquete o alternativa basada en BibTeX, como BibLaTeX."))}p.isMDXComponent=!0},6213:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/citedrive_copy_citation-e019cfea987e445e123586325ff1cd4e.gif"},1906:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/citedrive_paste_citation_rstudio-7b7cfbf5ffdf444fe88dfcd973120218.gif"},5616:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/citedrive_project_example-a643fff0a5509df6e27c5462fc2da4db.png"}}]);