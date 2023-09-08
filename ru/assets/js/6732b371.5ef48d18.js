"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[1219],{3905:(t,e,r)=>{r.d(e,{Zo:()=>g,kt:()=>h});var l=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,l)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,l,a=function(t,e){if(null==t)return{};var r,l,a={},i=Object.keys(t);for(l=0;l<i.length;l++)r=i[l],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)r=i[l],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=l.createContext({}),u=function(t){var e=l.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):n(n({},e),t)),r},g=function(t){var e=u(t.components);return l.createElement(c.Provider,{value:e},t.children)},p="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,g=o(t,["components","mdxType","originalType","parentName"]),p=u(r),m=a,h=p["".concat(c,".").concat(m)]||p[m]||s[m]||i;return r?l.createElement(h,n(n({ref:e},g),{},{components:r})):l.createElement(h,n({ref:e},g))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,n=new Array(i);n[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[p]="string"==typeof t?t:a,n[1]=o;for(var u=2;u<i;u++)n[u]=r[u];return l.createElement.apply(null,n)}return l.createElement.apply(null,r)}m.displayName="MDXCreateElement"},630:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>n,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var l=r(7462),a=(r(7294),r(3905));const i={slug:"top-visualization-packages-for-r-in-2023",title:"\u041b\u0443\u0447\u0448\u0438\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u043b\u044f R \u0432 2023 \u0433\u043e\u0434\u0443",authors:{name:"@rmarkdown",title:"https://www.CiteDrive.com/",mail:"hello@citedrive.com",url:"https://www.CiteDrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["visualization","R","ggplot2","plotly","lattice","ggvis","Highcharter","leaflet"]},n="\u041b\u0443\u0447\u0448\u0438\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u043b\u044f R \u0432 2023 \u0433\u043e\u0434\u0443",o={permalink:"/ru/blog/top-visualization-packages-for-r-in-2023",editUrl:"https://github.com/citedrive/bibtex.eu/blog/blog/2023-03-26-top-viz.mdx",source:"@site/i18n/ru/docusaurus-plugin-content-blog/2023-03-26-top-viz.mdx",title:"\u041b\u0443\u0447\u0448\u0438\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u043b\u044f R \u0432 2023 \u0433\u043e\u0434\u0443",description:"R - \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0439 \u044f\u0437\u044b\u043a \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0438 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445. \u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u043e\u0449\u043d\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 R \u0441\u0442\u0430\u043b \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u043c \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u043d\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0438 \u043f\u0440\u0438\u0432\u043b\u0435\u043a\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0439 \u0434\u0430\u043d\u043d\u044b\u0445. \u0412 \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0435 \u043c\u044b \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437 \u043b\u0443\u0447\u0448\u0438\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u043b\u044f R \u0432 2023 \u0433\u043e\u0434\u0443.",date:"2023-03-26T00:00:00.000Z",formattedDate:"26 \u043c\u0430\u0440\u0442\u0430 2023 \u0433.",tags:[{label:"visualization",permalink:"/ru/blog/tags/visualization"},{label:"R",permalink:"/ru/blog/tags/r"},{label:"ggplot2",permalink:"/ru/blog/tags/ggplot-2"},{label:"plotly",permalink:"/ru/blog/tags/plotly"},{label:"lattice",permalink:"/ru/blog/tags/lattice"},{label:"ggvis",permalink:"/ru/blog/tags/ggvis"},{label:"Highcharter",permalink:"/ru/blog/tags/highcharter"},{label:"leaflet",permalink:"/ru/blog/tags/leaflet"}],readingTime:2,hasTruncateMarker:!1,authors:[{name:"@rmarkdown",title:"https://www.CiteDrive.com/",mail:"hello@citedrive.com",url:"https://www.CiteDrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],frontMatter:{slug:"top-visualization-packages-for-r-in-2023",title:"\u041b\u0443\u0447\u0448\u0438\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u043b\u044f R \u0432 2023 \u0433\u043e\u0434\u0443",authors:{name:"@rmarkdown",title:"https://www.CiteDrive.com/",mail:"hello@citedrive.com",url:"https://www.CiteDrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["visualization","R","ggplot2","plotly","lattice","ggvis","Highcharter","leaflet"]},prevItem:{title:"Literature Management at Overleaf: Natbib, Bibtex, or Biblatex - Which is the Best for You?",permalink:"/ru/blog/literature-management-at-overleaf-natbib-bibtex-or-biblatex-which-is-the-best-for-you"},nextItem:{title:"How to Cite APA in LaTeX / BibTeX?",permalink:"/ru/blog/how-to-cite-apa-in-latex-bibtex"}},c={authorsImageUrls:[void 0]},u=[{value:"ggplot2",id:"ggplot2",level:2},{value:"plotly",id:"plotly",level:2},{value:"lattice",id:"lattice",level:2},{value:"ggvis",id:"ggvis",level:2},{value:"Highcharter",id:"highcharter",level:2},{value:"leaflet",id:"leaflet",level:2},{value:"\u0417\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",id:"\u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",level:2}],g={toc:u},p="wrapper";function s(t){let{components:e,...r}=t;return(0,a.kt)(p,(0,l.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"R - \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0439 \u044f\u0437\u044b\u043a \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0438 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445. \u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u043e\u0449\u043d\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 R \u0441\u0442\u0430\u043b \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u043c \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u043d\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0438 \u043f\u0440\u0438\u0432\u043b\u0435\u043a\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0439 \u0434\u0430\u043d\u043d\u044b\u0445. \u0412 \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0435 \u043c\u044b \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437 \u043b\u0443\u0447\u0448\u0438\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u043b\u044f R \u0432 2023 \u0433\u043e\u0434\u0443."),(0,a.kt)("h2",{id:"ggplot2"},"ggplot2"),(0,a.kt)("p",null,'ggplot2 - \u044d\u0442\u043e \u0448\u0438\u0440\u043e\u043a\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u043f\u0430\u043a\u0435\u0442 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u044d\u043b\u0435\u0433\u0430\u043d\u0442\u043d\u044b\u0445 \u0438 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0439 \u0434\u0430\u043d\u043d\u044b\u0445. \u041e\u043d \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u0441\u043f\u0435\u043a\u0442\u0440 \u0433\u0440\u0430\u0444\u0438\u043a\u043e\u0432, \u043e\u0442 \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u0433\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c \u0434\u043e \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u043c\u043d\u043e\u0433\u043e\u0441\u043b\u043e\u0439\u043d\u044b\u0445 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0439. ggplot2 \u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d \u0441\u0432\u043e\u0435\u0439 "\u0433\u0440\u0430\u043c\u043c\u0430\u0442\u0438\u043a\u043e\u0439 \u0433\u0440\u0430\u0444\u0438\u043a\u0438", \u0447\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043c\u043e\u0433\u0443\u0442 \u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0433\u0440\u0430\u0444\u0438\u043a \u0441\u043b\u043e\u0439 \u0437\u0430 \u0441\u043b\u043e\u0435\u043c, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0442\u043e\u0447\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u044d\u0441\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438 \u0433\u0435\u043e\u043c\u044b.'),(0,a.kt)("h2",{id:"plotly"},"plotly"),(0,a.kt)("p",null,"plotly - \u044d\u0442\u043e \u043c\u043e\u0449\u043d\u044b\u0439 \u043f\u0430\u043a\u0435\u0442 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0438 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0439 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 R. \u041e\u043d \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u0441\u043f\u0435\u043a\u0442\u0440 \u0433\u0440\u0430\u0444\u0438\u043a\u043e\u0432, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0440\u0430\u0441\u0441\u0435\u044f\u043d\u0438\u044f, \u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0435 \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b, \u0433\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0438 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435. \u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e plotly \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043c\u043e\u0433\u0443\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u043a \u0441\u0432\u043e\u0438\u043c \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430\u043c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0444\u0444\u0435\u043a\u0442\u044b \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0447\u0442\u043e \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435 \u0438 \u0430\u043d\u0430\u043b\u0438\u0437 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u043d\u0430\u0431\u043e\u0440\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,a.kt)("h2",{id:"lattice"},"lattice"),(0,a.kt)("p",null,"lattice - \u044d\u0442\u043e \u043f\u0430\u043a\u0435\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u0441\u043f\u0435\u043a\u0442\u0440 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0433\u0440\u0430\u0444\u0438\u043a\u043e\u0432, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0440\u0430\u0441\u0441\u0435\u044f\u043d\u0438\u044f, \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0435 \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b, \u0433\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0438 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435. \u041e\u043d \u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d \u0441\u0432\u043e\u0435\u0439 \u0433\u0438\u0431\u043a\u043e\u0441\u0442\u044c\u044e \u0438 \u043f\u0440\u043e\u0441\u0442\u043e\u0442\u043e\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0438 \u0433\u0440\u0430\u0444\u0438\u043a\u0438 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0446\u0432\u0435\u0442\u043e\u0432\u044b\u0445 \u0441\u0445\u0435\u043c \u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0433\u0440\u0430\u0444\u0438\u043a\u0430."),(0,a.kt)("h2",{id:"ggvis"},"ggvis"),(0,a.kt)("p",null,"ggvis - \u044d\u0442\u043e \u043f\u0430\u043a\u0435\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0438 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0432 R. \u041e\u043d \u043e\u0441\u043d\u043e\u0432\u0430\u043d \u043d\u0430 \u043f\u0430\u043a\u0435\u0442\u0435 ggplot2, \u043d\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0443\u044e \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0438 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u043e\u0441\u0442\u044c. \u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ggvis \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043c\u043e\u0433\u0443\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043f\u043e-\u043d\u043e\u0432\u043e\u043c\u0443 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c \u0438 \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435."),(0,a.kt)("h2",{id:"highcharter"},"Highcharter"),(0,a.kt)("p",null,"Highcharter - \u044d\u0442\u043e \u043f\u0430\u043a\u0435\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0438 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0433\u0440\u0430\u0444\u0438\u043a\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 Highcharts. Highcharter \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0448\u0438\u0440\u043e\u043a\u043e\u0433\u043e \u0441\u043f\u0435\u043a\u0442\u0440\u0430 \u0433\u0440\u0430\u0444\u0438\u043a\u043e\u0432, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0440\u0430\u0441\u0441\u0435\u044f\u043d\u0438\u044f, \u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0435 \u0438 \u0441\u0442\u043e\u043b\u0431\u0447\u0430\u0442\u044b\u0435 \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b. \u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Highcharter \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043c\u043e\u0433\u0443\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u043a \u0441\u0432\u043e\u0438\u043c \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430\u043c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u043f\u0430\u043d\u043e\u0440\u0430\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435 \u0438 \u0430\u043d\u0430\u043b\u0438\u0437 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u043d\u0430\u0431\u043e\u0440\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,a.kt)("h2",{id:"leaflet"},"leaflet"),(0,a.kt)("p",null,"leaflet - \u044d\u0442\u043e \u043f\u0430\u043a\u0435\u0442 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0438 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u043a\u0430\u0440\u0442 \u0432 R. \u041e\u043d \u043e\u0441\u043d\u043e\u0432\u0430\u043d \u043d\u0430 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0435 leaflet.js \u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u0441\u043f\u0435\u043a\u0442\u0440 \u043a\u0430\u0440\u0442, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0442\u0435\u043f\u043b\u043e\u0432\u044b\u0435 \u043a\u0430\u0440\u0442\u044b, \u0445\u043e\u0440\u043e\u043f\u043b\u0435\u0442\u044b \u0438 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435. \u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e leaflet \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043c\u043e\u0433\u0443\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u043a \u0441\u0432\u043e\u0438\u043c \u043a\u0430\u0440\u0442\u0430\u043c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u043f\u0430\u043d\u043e\u0440\u0430\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435 \u0438 \u0430\u043d\u0430\u043b\u0438\u0437 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,a.kt)("h2",{id:"\u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"},"\u0417\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"),(0,a.kt)("p",null,"R - \u044d\u0442\u043e \u043c\u043e\u0449\u043d\u044b\u0439 \u044f\u0437\u044b\u043a \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0438 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u044d\u0442\u0438\u0445 \u043b\u0443\u0447\u0448\u0438\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043c\u043e\u0433\u0443\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u043d\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0438 \u043f\u0440\u0438\u0432\u043b\u0435\u043a\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0435 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c \u0438 \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u043d\u0430\u0431\u043e\u0440\u044b \u0434\u0430\u043d\u043d\u044b\u0445. \u041d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u0442\u043e\u0433\u043e, \u043d\u0443\u0436\u043d\u043e \u043b\u0438 \u0432\u0430\u043c \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u0433\u0440\u0430\u0444\u0438\u043a\u0438 \u0438\u043b\u0438 \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438, \u044d\u0442\u0438 \u043f\u0430\u043a\u0435\u0442\u044b \u043f\u043e\u043c\u043e\u0433\u0443\u0442 \u0432\u0430\u043c."))}s.isMDXComponent=!0}}]);