"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[7435],{3905:(e,t,o)=>{o.d(t,{Zo:()=>v,kt:()=>k});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},v=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,v=u(e,["components","mdxType","originalType","parentName"]),s=c(o),d=a,k=s["".concat(l,".").concat(d)]||s[d]||p[d]||i;return o?r.createElement(k,n(n({ref:t},v),{},{components:o})):r.createElement(k,n({ref:t},v))}));function k(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,n=new Array(i);n[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:a,n[1]=u;for(var c=2;c<i;c++)n[c]=o[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5149:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=o(7462),a=(o(7294),o(3905));const i={slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"Jak form\xe1tovat citace a bibliografie v RStudiu pomoc\xed CiteDrive a Quarto",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},n="Jak form\xe1tovat citace a bibliografie v RStudiu pomoc\xed CiteDrive a Quarto",u={permalink:"/cs/blog/how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",editUrl:"https://github.com/citedrive/bibtex.eu/blog/blog/2022-08-28-quarto.mdx",source:"@site/i18n/cs/docusaurus-plugin-content-blog/2022-08-28-quarto.mdx",title:"Jak form\xe1tovat citace a bibliografie v RStudiu pomoc\xed CiteDrive a Quarto",description:"Pot\u0159ebujete naform\xe1tovat citace a bibliografii pro v\xfdzkumnou pr\xe1ci v RStudiu? M\xe1te pot\xed\u017ee s p\u0159ehledem o v\u0161ech referenc\xedch a po\u017eadavc\xedch na form\xe1tov\xe1n\xed? Nebojte se! CiteDrive a Quarto v\xe1m mohou pomoci. Tento p\u0159\xedsp\u011bvek na blogu v\xe1m uk\xe1\u017ee, jak pomoc\xed obou n\xe1stroj\u016f vytvo\u0159it kr\xe1sn\xe9, spr\xe1vn\u011b naform\xe1tovan\xe9 citace a bibliografie.",date:"2022-08-28T00:00:00.000Z",formattedDate:"28. srpna 2022",tags:[{label:"citedrive",permalink:"/cs/blog/tags/citedrive"},{label:"rstudio",permalink:"/cs/blog/tags/rstudio"},{label:"quarto",permalink:"/cs/blog/tags/quarto"},{label:"rmarkdown",permalink:"/cs/blog/tags/rmarkdown"}],readingTime:2.23,hasTruncateMarker:!1,authors:[{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],frontMatter:{slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"Jak form\xe1tovat citace a bibliografie v RStudiu pomoc\xed CiteDrive a Quarto",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},prevItem:{title:"Overleaf and RStudio users, we have great news!",permalink:"/cs/blog/overleaf-and-rstudio-users-we-have-great-news"},nextItem:{title:"Citov\xe1n\xed a pou\u017e\xedv\xe1n\xed odkaz\u016f na Overleafu: P\u0159\xedru\u010dka pro v\xfdzkumn\xe9 pracovn\xedky",permalink:"/cs/blog/citing-and-using-references-on-overleaf-a-guide-for-researchers"}},l={authorsImageUrls:[void 0]},c=[{value:"Za\u010dn\u011bte",id:"za\u010dn\u011bte",level:2},{value:"Krok 1: Zahr\u0148te do sv\xe9ho projektu odkazy.",id:"krok-1-zahr\u0148te-do-sv\xe9ho-projektu-odkazy",level:3},{value:"Krok 2: P\u0159ipojte sv\u016fj dokument Quarto ke slu\u017eb\u011b CiteDrive",id:"krok-2-p\u0159ipojte-sv\u016fj-dokument-quarto-ke-slu\u017eb\u011b-citedrive",level:3},{value:"Krok 3: Zkop\xedrujte cita\u010dn\xed kl\xed\u010de.",id:"krok-3-zkop\xedrujte-cita\u010dn\xed-kl\xed\u010de",level:3},{value:"Dal\u0161\xed informace",id:"dal\u0161\xed-informace",level:2},{value:"Quarto",id:"quarto",level:3},{value:"CiteDrive",id:"citedrive",level:3}],v={toc:c},s="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(s,(0,r.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pot\u0159ebujete naform\xe1tovat citace a bibliografii pro v\xfdzkumnou pr\xe1ci v RStudiu? M\xe1te pot\xed\u017ee s p\u0159ehledem o v\u0161ech referenc\xedch a po\u017eadavc\xedch na form\xe1tov\xe1n\xed? Nebojte se! CiteDrive a Quarto v\xe1m mohou pomoci. Tento p\u0159\xedsp\u011bvek na blogu v\xe1m uk\xe1\u017ee, jak pomoc\xed obou n\xe1stroj\u016f vytvo\u0159it kr\xe1sn\xe9, spr\xe1vn\u011b naform\xe1tovan\xe9 citace a bibliografie."),(0,a.kt)("h2",{id:"za\u010dn\u011bte"},"Za\u010dn\u011bte"),(0,a.kt)("p",null,"Chcete-li form\xe1tovat citace a bibliografie v aplikaci RStudio pomoc\xed n\xe1stroj\u016f CiteDrive a Quarto, postupujte podle n\xe1sleduj\xedc\xedch krok\u016f:"),(0,a.kt)("h3",{id:"krok-1-zahr\u0148te-do-sv\xe9ho-projektu-odkazy"},"Krok 1: Zahr\u0148te do sv\xe9ho projektu odkazy."),(0,a.kt)("p",null,"Nejprve si mus\xedte vytvo\u0159it \xfa\u010det u slu\u017eby CiteDrive tak, \u017ee p\u0159ejdete na jej\xed webov\xe9 str\xe1nky a vyberete tla\u010d\xedtko \"Zaregistrovat se\". Dokon\u010den\xed \xfa\u010dtu v\xe1m pak umo\u017en\xed vytvo\u0159it projekt 'R-Markdown' (",(0,a.kt)("em",{parentName:"p"},"funguje i pro Quarto, nebojte se"),"); sta\u010d\xed jej pojmenovat a ",(0,a.kt)("a",{parentName:"p",href:"https://citedrive.medium.com/adding-bibliographic-references-to-rstudio-using-citedrive-create-citations-in-r-markdown-or-9b1e1ab59cf6"},"naplnit projekt referencemi"),". V\xe1\u0161 projekt m\u016f\u017ee vypadat n\u011bjak takto:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CiteDrive - P\u0159\xedklad",src:o(5616).Z,width:"2226",height:"1344"})),(0,a.kt)("h3",{id:"krok-2-p\u0159ipojte-sv\u016fj-dokument-quarto-ke-slu\u017eb\u011b-citedrive"},"Krok 2: P\u0159ipojte sv\u016fj dokument Quarto ke slu\u017eb\u011b CiteDrive"),(0,a.kt)("p",null,'Nyn\xed p\u0159ipoj\xedme v\xe1\u0161 nov\xfd CiteDrive k va\u0161emu dokumentu Quarto. To provedete kliknut\xedm na tla\u010d\xedtko "bib". T\xedm se otev\u0159e nov\xe1 karta se v\u0161emi va\u0161imi z\xe1znamy ve form\xe1tu BibTeX. Zkop\xedrujte adresu URL z nov\xe9 karty a vlo\u017ete ji do \u010d\xe1sti YAML va\u0161eho souboru QMD.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},'---\nbibliografie: "https://api.citedrive.com/bib/514b115a-e8b7-4e14-a7c8-83e88337ad12/references.bib?x=eyJpZCI6ICI1MTRiFTE1YS1lOGI3LTRlMTQtYTdjOC04M2U4ODMzN2FkMTIiLCAidXNlciI6ICI5NzgiLCAic2lnbmF0dXJlIjogIjBkZDgzNGM1NDg2YzE2MTRhYTUzZDAyNmI1YjFhZjgxNTg3ODc4NDQ3Yzk1ODQ1ZWI2ZTA5UTQ5YTFlNDdlMGIifQ==.bib"\n---\n')),(0,a.kt)("p",null,"N\xe1sleduj\xedc\xed uk\xe1zka ukazuje pr\u016fb\u011bh p\u0159i pou\u017eit\xed R Markdown. Princip Quarto je v\u0161ak stejn\xfd:"),(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/7ON96F0GD-Y",title:"P\u0159ehr\xe1va\u010d videa YouTube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h3",{id:"krok-3-zkop\xedrujte-cita\u010dn\xed-kl\xed\u010de"},"Krok 3: Zkop\xedrujte cita\u010dn\xed kl\xed\u010de."),(0,a.kt)("p",null,"Po importu citac\xed je m\u016f\u017eete vlo\u017eit do dokumentu Quarto. Za t\xedmto \xfa\u010delem se vra\u0165te do projektu CiteDrive a k jedn\xe9 nebo v\xedce referenc\xedm, kter\xe9 chcete vlo\u017eit do dokumentu, a klikn\u011bte na tla\u010d\xedtko citovat. CiteDrive zkop\xedruje cita\u010dn\xed kl\xed\u010d do va\u0161\xed schr\xe1nky."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CiteDrive - P\u0159\xedklad",src:o(6213).Z,width:"856",height:"320"})),(0,a.kt)("p",null,"Vlo\u017ete cita\u010dn\xed kl\xed\u010d do pot\u0159ebn\xe9 pas\xe1\u017ee dokumentu Quarto."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CiteDrive - Vlo\u017eit cita\u010dn\xed kl\xed\u010d",src:o(1906).Z,width:"2054",height:"186"})),(0,a.kt)("p",null,'Po vlo\u017een\xed kl\xed\u010de do \xfaseku klikn\u011bte na tla\u010d\xedtko "vykreslit". Citace bude vyps\xe1na v po\u017eadovan\xe9m stylu a odkaz se objev\xed na konci dokumentu.'),(0,a.kt)("p",null,"To je v\u0161e! CiteDrive je dokonal\xfd n\xe1stroj, kter\xfd v\xe1m pom\u016f\u017ee spravovat bibliografii a vkl\xe1dat citace do dokument\u016f Quarto. Vyzkou\u0161ejte jej nyn\xed a zjist\u011bte, kolik \u010dasu v\xe1m m\u016f\u017ee u\u0161et\u0159it!"),(0,a.kt)("h2",{id:"dal\u0161\xed-informace"},"Dal\u0161\xed informace"),(0,a.kt)("h3",{id:"quarto"},"Quarto"),(0,a.kt)("p",null,"Quarto je v\xfdkonn\xfd n\xe1stroj pro psan\xed re\u0161er\u0161\xed, kter\xfd dok\xe1\u017ee automaticky generovat citace a bibliografie v r\u016fzn\xfdch stylech. Podporuje bibliografick\xe9 soubory ve form\xe1tech BibTeX a dal\u0161\xedch form\xe1tech, tak\u017ee v\xe1m usnadn\xed p\u0159ehled o referenc\xedch."),(0,a.kt)("h3",{id:"citedrive"},"CiteDrive"),(0,a.kt)("p",null,"CiteDrive je n\xe1stroj pro spr\xe1vu referenc\xed, kter\xfd umo\u017e\u0148uje organizovat, snadno ukl\xe1dat a vyhled\xe1vat bibliografick\xe9 \xfadaje. Uspo\u0159\xe1dejte si sv\xe9 t\xfdmy a reference v projektech, nap\u0159\xedklad pro specializovan\xfd \u010dl\xe1nek Quarto. CiteDrive automaticky aktualizuje va\u0161e reference v Quarto, kdykoli vy nebo n\u011bkter\xfd z va\u0161ich koleg\u016f v t\xfdmu aktualizujete bibliografick\xe9 \xfadaje v r\xe1mci projektu."),(0,a.kt)("p",null,"D\xe1v\xe1te p\u0159ednost BibLaTeXu? \u017d\xe1dn\xfd probl\xe9m, CiteDrive je stoprocentn\u011b vybaven podporou BibTeXu a poskytuje volnost v pol\xedch a typech pro ka\u017ed\xfd z\xe1znam, co\u017e znamen\xe1, \u017ee m\u016f\u017eete pou\u017e\xedt jak\xfdkoli bal\xedk zalo\u017een\xfd na BibTeXu nebo alternativu, jako je BibLaTeX."))}p.isMDXComponent=!0},6213:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/citedrive_copy_citation-e019cfea987e445e123586325ff1cd4e.gif"},1906:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/citedrive_paste_citation_rstudio-7b7cfbf5ffdf444fe88dfcd973120218.gif"},5616:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/citedrive_project_example-a643fff0a5509df6e27c5462fc2da4db.png"}}]);