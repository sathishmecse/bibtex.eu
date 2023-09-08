"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[4238],{3905:(e,i,a)=>{a.d(i,{Zo:()=>s,kt:()=>b});var r=a(7294);function t(e,i,a){return i in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a,e}function n(e,i){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{};i%2?n(Object(a),!0).forEach((function(i){t(e,i,a[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))}))}return e}function o(e,i){if(null==e)return{};var a,r,t=function(e,i){if(null==e)return{};var a,r,t={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],i.indexOf(a)>=0||(t[a]=e[a]);return t}(e,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],i.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var d=r.createContext({}),u=function(e){var i=r.useContext(d),a=i;return e&&(a="function"==typeof e?e(i):l(l({},i),e)),a},s=function(e){var i=u(e.components);return r.createElement(d.Provider,{value:i},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var i=e.children;return r.createElement(r.Fragment,{},i)}},k=r.forwardRef((function(e,i){var a=e.components,t=e.mdxType,n=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(a),k=t,b=m["".concat(d,".").concat(k)]||m[k]||c[k]||n;return a?r.createElement(b,l(l({ref:i},s),{},{components:a})):r.createElement(b,l({ref:i},s))}));function b(e,i){var a=arguments,t=i&&i.mdxType;if("string"==typeof e||t){var n=a.length,l=new Array(n);l[0]=k;var o={};for(var d in i)hasOwnProperty.call(i,d)&&(o[d]=i[d]);o.originalType=e,o[m]="string"==typeof e?e:t,l[1]=o;for(var u=2;u<n;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8367:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var r=a(7462),t=(a(7294),a(3905));const n={slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"CiteDrive ve Quarto ile RStudio'da Al\u0131nt\u0131lar ve Kaynak\xe7alar Nas\u0131l Bi\xe7imlendirilir",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},l="CiteDrive ve Quarto ile RStudio'da Al\u0131nt\u0131lar ve Kaynak\xe7alar Nas\u0131l Bi\xe7imlendirilir",o={permalink:"/tr/blog/how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",editUrl:"https://github.com/citedrive/bibtex.eu/blog/blog/2022-08-28-quarto.mdx",source:"@site/i18n/tr/docusaurus-plugin-content-blog/2022-08-28-quarto.mdx",title:"CiteDrive ve Quarto ile RStudio'da Al\u0131nt\u0131lar ve Kaynak\xe7alar Nas\u0131l Bi\xe7imlendirilir",description:"RStudio'da bir ara\u015ft\u0131rma makalesi i\xe7in al\u0131nt\u0131lar\u0131 ve kaynak\xe7ay\u0131 bi\xe7imlendirmeniz mi gerekiyor? T\xfcm referanslar\u0131n\u0131z\u0131 ve bi\xe7imlendirme gereksinimlerinizi takip etmekte zorlan\u0131yor musunuz? Hi\xe7 korkmay\u0131n! CiteDrive ve Quarto size yard\u0131mc\u0131 olabilir. Bu blog yaz\u0131s\u0131 size g\xfczel, do\u011fru bi\xe7imlendirilmi\u015f al\u0131nt\u0131lar ve kaynak\xe7alar olu\u015fturmak i\xe7in her iki arac\u0131 nas\u0131l kullanaca\u011f\u0131n\u0131z\u0131 g\xf6sterecektir.",date:"2022-08-28T00:00:00.000Z",formattedDate:"28 A\u011fustos 2022",tags:[{label:"citedrive",permalink:"/tr/blog/tags/citedrive"},{label:"rstudio",permalink:"/tr/blog/tags/rstudio"},{label:"quarto",permalink:"/tr/blog/tags/quarto"},{label:"rmarkdown",permalink:"/tr/blog/tags/rmarkdown"}],readingTime:1.89,hasTruncateMarker:!1,authors:[{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],frontMatter:{slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"CiteDrive ve Quarto ile RStudio'da Al\u0131nt\u0131lar ve Kaynak\xe7alar Nas\u0131l Bi\xe7imlendirilir",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},prevItem:{title:"Overleaf and RStudio users, we have great news!",permalink:"/tr/blog/overleaf-and-rstudio-users-we-have-great-news"},nextItem:{title:"Overleaf'te Kaynak G\xf6sterme ve Kullanma: Ara\u015ft\u0131rmac\u0131lar i\xe7in Bir K\u0131lavuz",permalink:"/tr/blog/citing-and-using-references-on-overleaf-a-guide-for-researchers"}},d={authorsImageUrls:[void 0]},u=[{value:"Ba\u015flay\u0131n",id:"ba\u015flay\u0131n",level:2},{value:"Ad\u0131m 1: Projenize referanslar\u0131 dahil edin",id:"ad\u0131m-1-projenize-referanslar\u0131-dahil-edin",level:3},{value:"Ad\u0131m 2: Quarto belgenizi CiteDrive&#39;a ba\u011flay\u0131n",id:"ad\u0131m-2-quarto-belgenizi-citedrivea-ba\u011flay\u0131n",level:3},{value:"Ad\u0131m 3: At\u0131f anahtarlar\u0131n\u0131 kopyalay\u0131n.",id:"ad\u0131m-3-at\u0131f-anahtarlar\u0131n\u0131-kopyalay\u0131n",level:3},{value:"Ek bilgi",id:"ek-bilgi",level:2},{value:"Quarto",id:"quarto",level:3},{value:"CiteDrive",id:"citedrive",level:3}],s={toc:u},m="wrapper";function c(e){let{components:i,...n}=e;return(0,t.kt)(m,(0,r.Z)({},s,n,{components:i,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"RStudio'da bir ara\u015ft\u0131rma makalesi i\xe7in al\u0131nt\u0131lar\u0131 ve kaynak\xe7ay\u0131 bi\xe7imlendirmeniz mi gerekiyor? T\xfcm referanslar\u0131n\u0131z\u0131 ve bi\xe7imlendirme gereksinimlerinizi takip etmekte zorlan\u0131yor musunuz? Hi\xe7 korkmay\u0131n! CiteDrive ve Quarto size yard\u0131mc\u0131 olabilir. Bu blog yaz\u0131s\u0131 size g\xfczel, do\u011fru bi\xe7imlendirilmi\u015f al\u0131nt\u0131lar ve kaynak\xe7alar olu\u015fturmak i\xe7in her iki arac\u0131 nas\u0131l kullanaca\u011f\u0131n\u0131z\u0131 g\xf6sterecektir."),(0,t.kt)("h2",{id:"ba\u015flay\u0131n"},"Ba\u015flay\u0131n"),(0,t.kt)("p",null,"CiteDrive ve Quarto ile RStudio'da al\u0131nt\u0131lar\u0131 ve kaynak\xe7alar\u0131 bi\xe7imlendirmek i\xe7in a\u015fa\u011f\u0131daki ad\u0131mlar\u0131 izleyin:"),(0,t.kt)("h3",{id:"ad\u0131m-1-projenize-referanslar\u0131-dahil-edin"},"Ad\u0131m 1: Projenize referanslar\u0131 dahil edin"),(0,t.kt)("p",null,"\xd6ncelikle, web sitelerine giderek ve 'Kaydol' d\xfc\u011fmesini se\xe7erek bir CiteDrive hesab\u0131 olu\u015fturmal\u0131s\u0131n\u0131z. Hesab\u0131n\u0131z\u0131 tamamlad\u0131ktan sonra bir 'R-Markdown' (",(0,t.kt)("em",{parentName:"p"}," Quarto i\xe7in \xe7al\u0131\u015f\u0131yor, endi\u015felenmeyin"),") projesi olu\u015fturabilirsiniz; basit\xe7e projeyi adland\u0131r\u0131n ve ",(0,t.kt)("a",{parentName:"p",href:"https://citedrive.medium.com/adding-bibliographic-references-to-rstudio-using-citedrive-create-citations-in-r-markdown-or-9b1e1ab59cf6"},"projeyi referanslarla doldurun"),". Sizinki \u015funa benzer bir \u015fey olabilir:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"CiteDrive - \xd6rnek",src:a(5616).Z,width:"2226",height:"1344"})),(0,t.kt)("h3",{id:"ad\u0131m-2-quarto-belgenizi-citedrivea-ba\u011flay\u0131n"},"Ad\u0131m 2: Quarto belgenizi CiteDrive'a ba\u011flay\u0131n"),(0,t.kt)("p",null,"\u015eimdi, yeni CiteDrive'\u0131n\u0131z\u0131 Quarto belgenize ba\u011flayal\u0131m. Bunu yapmak i\xe7in 'bib' d\xfc\u011fmesine t\u0131klay\u0131n. Bu, BibTeX format\u0131ndaki t\xfcm giri\u015flerinizi i\xe7eren yeni bir sekme a\xe7acakt\u0131r. URL'yi yeni sekmeden kopyalay\u0131n ve QMD dosyan\u0131z\u0131n YAML k\u0131sm\u0131na yap\u0131\u015ft\u0131r\u0131n."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-md"},'---\nbibliography: "https://api.citedrive.com/bib/514b115a-e8b7-4e14-a7c8-83e88337ad12/references.bib?x=eyJpZCI6ICI1MTRiFTE1YS1lOGI3LTRlMTQtYTdjOC04M2U4ODMzN2FkMTIiLCAidXNlciI6ICI5NzgiLCAic2lnbmF0dXJlIjogIjBkZDgzNGM1NDg2YzE2MTRhYTUzZDAyNmI1YjFhZjgxNTg3ODc4NDQ3Yzk1ODQ1ZWI2ZTA5UTQ5YTFlNDdlMGIifQ==.bib"\n---\n')),(0,t.kt)("p",null,"A\u015fa\u011f\u0131daki klip R Markdown kullan\u0131rken ak\u0131\u015f\u0131 g\xf6stermektedir. Ancak Quarto'nun prensibi ayn\u0131d\u0131r:"),(0,t.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/7ON96F0GD-Y",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,t.kt)("h3",{id:"ad\u0131m-3-at\u0131f-anahtarlar\u0131n\u0131-kopyalay\u0131n"},"Ad\u0131m 3: At\u0131f anahtarlar\u0131n\u0131 kopyalay\u0131n."),(0,t.kt)("p",null,"Referanslar\u0131n\u0131z i\xe7e aktar\u0131ld\u0131ktan sonra, bunlar\u0131 Quarto belgenize ekleyebilirsiniz. Bunu yapmak i\xe7in, CiteDrive projenize ve belgenize eklemek istedi\u011finiz bir veya daha fazla referansa d\xf6n\xfcn ve al\u0131nt\u0131 yap d\xfc\u011fmesine t\u0131klay\u0131n. CiteDrive at\u0131f anahtar\u0131n\u0131 panonuza kopyalayacakt\u0131r."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"CiteDrive - \xd6rnek",src:a(6213).Z,width:"856",height:"320"})),(0,t.kt)("p",null,"Al\u0131nt\u0131 anahtar\u0131n\u0131z\u0131 Quarto belgenizin gerekli b\xf6l\xfcm\xfcne yap\u0131\u015ft\u0131r\u0131n."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"CiteDrive - Al\u0131nt\u0131 anahtar\u0131n\u0131 yap\u0131\u015ft\u0131r",src:a(1906).Z,width:"2054",height:"186"})),(0,t.kt)("p",null,'Anahtar\u0131 b\xf6l\xfcme yerle\u015ftirdikten sonra "i\u015fle" d\xfc\u011fmesine t\u0131klay\u0131n. Al\u0131nt\u0131 istedi\u011finiz stilde \xe7\u0131kt\u0131lanacak ve referans belgenizin sonunda g\xf6r\xfcnecektir.'),(0,t.kt)("p",null,"Hepsi bu kadar! CiteDrive, kaynak\xe7an\u0131z\u0131 y\xf6netmenize ve Quarto belgelerine al\u0131nt\u0131lar eklemenize yard\u0131mc\u0131 olacak m\xfckemmel bir ara\xe7t\u0131r. \u015eimdi test edin ve size ne kadar zaman kazand\u0131rabilece\u011fini g\xf6r\xfcn!"),(0,t.kt)("h2",{id:"ek-bilgi"},"Ek bilgi"),(0,t.kt)("h3",{id:"quarto"},"Quarto"),(0,t.kt)("p",null,"Quarto, \xe7e\u015fitli stillerde otomatik olarak al\u0131nt\u0131lar ve bibliyografyalar olu\u015fturabilen g\xfc\xe7l\xfc bir ara\u015ft\u0131rma yazma arac\u0131d\u0131r. BibTeX ve di\u011fer bi\xe7imlerdeki kaynak\xe7a dosyalar\u0131n\u0131 destekleyerek referanslar\u0131n\u0131z\u0131 takip etmenizi kolayla\u015ft\u0131r\u0131r."),(0,t.kt)("h3",{id:"citedrive"},"CiteDrive"),(0,t.kt)("p",null,"CiteDrive, bibliyografik verilerinizi d\xfczenlemenizi, kolayca saklaman\u0131z\u0131 ve araman\u0131z\u0131 sa\u011flayan bir referans y\xf6netim arac\u0131d\u0131r. Ekiplerinizi ve referanslar\u0131n\u0131z\u0131, \xf6rne\u011fin \xf6zel bir Quarto makalesi i\xe7in projeler halinde d\xfczenleyin. Siz veya ekip arkada\u015flar\u0131n\u0131zdan biri projenizdeki bibliyografik verileri g\xfcncelledi\u011finizde CiteDrive, Quarto'daki referanslar\u0131n\u0131z\u0131 otomatik olarak g\xfcncel tutar."),(0,t.kt)("p",null,"BibLaTeX'i mi tercih ediyorsunuz? Sorun de\u011fil, CiteDrive %100 BibTeX desteklidir ve her giri\u015f i\xe7in alan ve t\xfcrlerde \xf6zg\xfcrl\xfck sa\u011flar, yani BibLaTeX gibi herhangi bir BibTeX tabanl\u0131 paket veya alternatif kullanabilirsiniz."))}c.isMDXComponent=!0},6213:(e,i,a)=>{a.d(i,{Z:()=>r});const r=a.p+"assets/images/citedrive_copy_citation-e019cfea987e445e123586325ff1cd4e.gif"},1906:(e,i,a)=>{a.d(i,{Z:()=>r});const r=a.p+"assets/images/citedrive_paste_citation_rstudio-7b7cfbf5ffdf444fe88dfcd973120218.gif"},5616:(e,i,a)=>{a.d(i,{Z:()=>r});const r=a.p+"assets/images/citedrive_project_example-a643fff0a5509df6e27c5462fc2da4db.png"}}]);