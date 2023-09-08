"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[6366],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>v});var l=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,l)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(t,e){if(null==t)return{};var r,l,a=function(t,e){if(null==t)return{};var r,l,a={},i=Object.keys(t);for(l=0;l<i.length;l++)r=i[l],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)r=i[l],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=l.createContext({}),g=function(t){var e=l.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=g(t.components);return l.createElement(p.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=n(t,["components","mdxType","originalType","parentName"]),s=g(r),m=a,v=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return r?l.createElement(v,o(o({ref:e},c),{},{components:r})):l.createElement(v,o({ref:e},c))}));function v(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=m;var n={};for(var p in e)hasOwnProperty.call(e,p)&&(n[p]=e[p]);n.originalType=t,n[s]="string"==typeof t?t:a,o[1]=n;for(var g=2;g<i;g++)o[g]=r[g];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6635:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>g});var l=r(7462),a=(r(7294),r(3905));const i={slug:"top-visualization-packages-for-r-in-2023",title:"2023\ub144 R\uc744 \uc704\ud55c \uc0c1\uc704 \ube44\uc8fc\uc5bc\ub9ac\uc81c\uc774\uc158 \ud328\ud0a4\uc9c0 \uc21c\uc704",authors:{name:"@rmarkdown",title:"https://www.CiteDrive.com/",mail:"hello@citedrive.com",url:"https://www.CiteDrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["visualization","R","ggplot2","plotly","lattice","ggvis","Highcharter","leaflet"]},o="2023\ub144 R\uc744 \uc704\ud55c \uc0c1\uc704 \ube44\uc8fc\uc5bc\ub9ac\uc81c\uc774\uc158 \ud328\ud0a4\uc9c0 \uc21c\uc704",n={permalink:"/ko/blog/top-visualization-packages-for-r-in-2023",editUrl:"https://github.com/citedrive/bibtex.eu/blog/blog/2023-03-26-top-viz.mdx",source:"@site/i18n/ko/docusaurus-plugin-content-blog/2023-03-26-top-viz.mdx",title:"2023\ub144 R\uc744 \uc704\ud55c \uc0c1\uc704 \ube44\uc8fc\uc5bc\ub9ac\uc81c\uc774\uc158 \ud328\ud0a4\uc9c0 \uc21c\uc704",description:"R\uc740 \ub370\uc774\ud130 \ubd84\uc11d \ubc0f \uc2dc\uac01\ud654\ub97c \uc704\ud574 \ub110\ub9ac \uc0ac\uc6a9\ub418\ub294 \uc5b8\uc5b4\uc785\ub2c8\ub2e4. \uac15\ub825\ud55c \uc2dc\uac01\ud654 \ud328\ud0a4\uc9c0\uc758 \ub3c4\uc6c0\uc73c\ub85c R\uc740 \ud1b5\ucc30\ub825 \uc788\uace0 \ub9e4\ub825\uc801\uc778 \ub370\uc774\ud130 \uc2dc\uac01\ud654\ub97c \ub9cc\ub4e4\uae30 \uc704\ud55c \ub3c4\uad6c\ub85c \uc790\ub9ac \uc7a1\uc558\uc2b5\ub2c8\ub2e4. \uc774 \ube14\ub85c\uadf8 \uac8c\uc2dc\ubb3c\uc5d0\uc11c\ub294 2023\ub144\uc5d0 \uac00\uc7a5 \uc778\uae30 \uc788\ub294 R\uc6a9 \uc2dc\uac01\ud654 \ud328\ud0a4\uc9c0 \uba87 \uac00\uc9c0\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.",date:"2023-03-26T00:00:00.000Z",formattedDate:"2023\ub144 3\uc6d4 26\uc77c",tags:[{label:"visualization",permalink:"/ko/blog/tags/visualization"},{label:"R",permalink:"/ko/blog/tags/r"},{label:"ggplot2",permalink:"/ko/blog/tags/ggplot-2"},{label:"plotly",permalink:"/ko/blog/tags/plotly"},{label:"lattice",permalink:"/ko/blog/tags/lattice"},{label:"ggvis",permalink:"/ko/blog/tags/ggvis"},{label:"Highcharter",permalink:"/ko/blog/tags/highcharter"},{label:"leaflet",permalink:"/ko/blog/tags/leaflet"}],readingTime:4.96,hasTruncateMarker:!1,authors:[{name:"@rmarkdown",title:"https://www.CiteDrive.com/",mail:"hello@citedrive.com",url:"https://www.CiteDrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],frontMatter:{slug:"top-visualization-packages-for-r-in-2023",title:"2023\ub144 R\uc744 \uc704\ud55c \uc0c1\uc704 \ube44\uc8fc\uc5bc\ub9ac\uc81c\uc774\uc158 \ud328\ud0a4\uc9c0 \uc21c\uc704",authors:{name:"@rmarkdown",title:"https://www.CiteDrive.com/",mail:"hello@citedrive.com",url:"https://www.CiteDrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["visualization","R","ggplot2","plotly","lattice","ggvis","Highcharter","leaflet"]},prevItem:{title:"Literature Management at Overleaf: Natbib, Bibtex, or Biblatex - Which is the Best for You?",permalink:"/ko/blog/literature-management-at-overleaf-natbib-bibtex-or-biblatex-which-is-the-best-for-you"},nextItem:{title:"How to Cite APA in LaTeX / BibTeX?",permalink:"/ko/blog/how-to-cite-apa-in-latex-bibtex"}},p={authorsImageUrls:[void 0]},g=[{value:"ggplot2",id:"ggplot2",level:2},{value:"plotly",id:"plotly",level:2},{value:"\uaca9\uc790",id:"\uaca9\uc790",level:2},{value:"ggvis",id:"ggvis",level:2},{value:"\ud558\uc774\ucc28\ud130",id:"\ud558\uc774\ucc28\ud130",level:2},{value:"\ub9ac\ud50c\ub81b",id:"\ub9ac\ud50c\ub81b",level:2},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}],c={toc:g},s="wrapper";function u(t){let{components:e,...r}=t;return(0,a.kt)(s,(0,l.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"R\uc740 \ub370\uc774\ud130 \ubd84\uc11d \ubc0f \uc2dc\uac01\ud654\ub97c \uc704\ud574 \ub110\ub9ac \uc0ac\uc6a9\ub418\ub294 \uc5b8\uc5b4\uc785\ub2c8\ub2e4. \uac15\ub825\ud55c \uc2dc\uac01\ud654 \ud328\ud0a4\uc9c0\uc758 \ub3c4\uc6c0\uc73c\ub85c R\uc740 \ud1b5\ucc30\ub825 \uc788\uace0 \ub9e4\ub825\uc801\uc778 \ub370\uc774\ud130 \uc2dc\uac01\ud654\ub97c \ub9cc\ub4e4\uae30 \uc704\ud55c \ub3c4\uad6c\ub85c \uc790\ub9ac \uc7a1\uc558\uc2b5\ub2c8\ub2e4. \uc774 \ube14\ub85c\uadf8 \uac8c\uc2dc\ubb3c\uc5d0\uc11c\ub294 2023\ub144\uc5d0 \uac00\uc7a5 \uc778\uae30 \uc788\ub294 R\uc6a9 \uc2dc\uac01\ud654 \ud328\ud0a4\uc9c0 \uba87 \uac00\uc9c0\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"ggplot2"},"ggplot2"),(0,a.kt)("p",null,"ggplot2\ub294 \uc6b0\uc544\ud558\uace0 \uc0ac\uc6a9\uc790 \uc9c0\uc815 \uac00\ub2a5\ud55c \ub370\uc774\ud130 \uc2dc\uac01\ud654\ub97c \ub9cc\ub4dc\ub294 \ub370 \ub110\ub9ac \uc0ac\uc6a9\ub418\ub294 \ud328\ud0a4\uc9c0\uc785\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\ub294 \uae30\ubcf8 \ub9c9\ub300 \ucc28\ud2b8\ubd80\ud130 \ubcf5\uc7a1\ud55c \ub2e4\uacc4\uce35 \uc2dc\uac01\ud654\uc5d0 \uc774\ub974\uae30\uae4c\uc9c0 \ub2e4\uc591\ud55c \ucc28\ud2b8\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ggplot2\ub294 '\uadf8\ub798\ud53d \ubb38\ubc95' \uc811\uadfc \ubc29\uc2dd\uc73c\ub85c \uc720\uba85\ud558\uba70, \uc774\ub294 \uc0ac\uc6a9\uc790\uac00 \ub2e4\uc591\ud55c \ub370\uc774\ud130 \ud3ec\uc778\ud2b8, \ubbf8\uc801 \ub9e4\ud551 \ubc0f \ub3c4\ud615\uc744 \ucd94\uac00\ud558\uc5ec \ucc28\ud2b8\ub97c \ub808\uc774\uc5b4\ubcc4\ub85c \uad6c\ucd95\ud560 \uc218 \uc788\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"plotly"},"plotly"),(0,a.kt)("p",null,"\ub294 R\uc5d0\uc11c \ub300\ud654\ud615 \ub3d9\uc801 \ub370\uc774\ud130 \uc2dc\uac01\ud654\ub97c \ub9cc\ub4e4\uae30 \uc704\ud55c \uac15\ub825\ud55c \ud328\ud0a4\uc9c0\ub85c, \uc0ac\uc6a9\uc790\ub294 \ubd84\uc0b0\ud615 \ucc28\ud2b8, \uaebe\uc740\uc120\ud615 \ucc28\ud2b8, \ub9c9\ub300 \ucc28\ud2b8 \ub4f1 \ub2e4\uc591\ud55c \ucc28\ud2b8\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\ub294 \ud50c\ub86f\ub9ac\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucc28\ud2b8\uc5d0 \ud638\ubc84 \ud6a8\uacfc \ubc0f \ud655\ub300/\ucd95\uc18c \ub4f1\uc758 \uc0c1\ud638 \uc791\uc6a9\uc744 \ucd94\uac00\ud558\uc5ec \ubcf5\uc7a1\ud55c \ub370\uc774\ud130 \uc9d1\ud569\uc744 \uc27d\uac8c \ud0d0\uc0c9\ud558\uace0 \ubd84\uc11d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uaca9\uc790"},"\uaca9\uc790"),(0,a.kt)("p",null,"\uaca9\uc790\ub294 \uc0ac\uc6a9\uc790\uac00 \ubd84\uc0b0\ud615 \ucc28\ud2b8, \ubc15\uc2a4\ud615 \ucc28\ud2b8, \ud788\uc2a4\ud1a0\uadf8\ub7a8 \ub4f1 \ub2e4\uc591\ud55c \ud1b5\uacc4 \uadf8\ub798\ud53d\uc744 \ub9cc\ub4e4 \uc218 \uc788\ub294 \ud328\ud0a4\uc9c0\uc785\ub2c8\ub2e4. \uc720\uc5f0\uc131\uacfc \uc0ac\uc6a9 \ud3b8\uc758\uc131\uc73c\ub85c \uc798 \uc54c\ub824\uc838 \uc788\uc73c\uba70, \ub2e4\uc591\ud55c \uc0c9 \uad6c\uc131\ud45c\ub97c \ucd94\uac00\ud558\uace0 \ucc28\ud2b8\uc758 \ub808\uc774\uc544\uc6c3\uc744 \ubcc0\uacbd\ud558\ub294 \ub4f1 \ub2e4\uc591\ud55c \ubc29\ubc95\uc73c\ub85c \ucc28\ud2b8\ub97c \uc0ac\uc6a9\uc790 \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"ggvis"},"ggvis"),(0,a.kt)("p",null,"ggvis\ub294 \uc0ac\uc6a9\uc790\uac00 R\uc5d0\uc11c \ub300\ud654\ud615 \ubc0f \uc0ac\uc6a9\uc790 \uc9c0\uc815 \uac00\ub2a5\ud55c \ube44\uc8fc\uc5bc\ub9ac\uc81c\uc774\uc158\uc744 \ub9cc\ub4e4 \uc218 \uc788\ub294 \ud328\ud0a4\uc9c0\ub85c, ggplot2 \ud328\ud0a4\uc9c0\ub97c \uae30\ubc18\uc73c\ub85c \ud558\uc9c0\ub9cc \ub354 \ub9ce\uc740 \ub300\ud654\ud615 \ubc0f \uc0ac\uc6a9\uc790 \uc9c0\uc815\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. ggvis\ub97c \uc0ac\uc6a9\ud558\uba74 \uc0ac\uc6a9\uc790\uac00 \uc0c8\ub85c\uc6b4 \ubc29\uc2dd\uc73c\ub85c \ub370\uc774\ud130\ub97c \ud0d0\uc0c9\ud558\uace0 \ubd84\uc11d\ud560 \uc218 \uc788\ub294 \ub300\ud654\ud615 \ucc28\ud2b8\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ud558\uc774\ucc28\ud130"},"\ud558\uc774\ucc28\ud130"),(0,a.kt)("p",null,"Highcharter\ub294 \uc0ac\uc6a9\uc790\uac00 Highcharts \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub300\ud654\ud615 \ub3d9\uc801 \ucc28\ud2b8\ub97c \ub9cc\ub4e4 \uc218 \uc788\ub294 \ud328\ud0a4\uc9c0\uc785\ub2c8\ub2e4. Highcharter\ub294 \ubd84\uc0b0\ud615 \ucc28\ud2b8, \uaebe\uc740\uc120\ud615 \ucc28\ud2b8, \ub9c9\ub300\ud615 \ucc28\ud2b8 \ub4f1 \ub2e4\uc591\ud55c \ucc28\ud2b8\ub97c \ub9cc\ub4e4 \uc218 \uc788\ub294 \uc0ac\uc6a9\ud558\uae30 \uc26c\uc6b4 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. Highcharter\ub97c \uc0ac\uc6a9\ud558\uba74 \ud655\ub300/\ucd95\uc18c \ubc0f \uc774\ub3d9\uacfc \uac19\uc740 \uc0c1\ud638 \uc791\uc6a9 \uae30\ub2a5\uc744 \ucc28\ud2b8\uc5d0 \ucd94\uac00\ud558\uc5ec \ubcf5\uc7a1\ud55c \ub370\uc774\ud130 \uc138\ud2b8\ub97c \uc27d\uac8c \ud0d0\uc0c9\ud558\uace0 \ubd84\uc11d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ub9ac\ud50c\ub81b"},"\ub9ac\ud50c\ub81b"),(0,a.kt)("p",null,"leaflet\uc740 R\uc5d0\uc11c \ub300\ud654\ud615 \ubc0f \uc0ac\uc6a9\uc790 \uc9c0\uc815 \uac00\ub2a5\ud55c \ub9f5\uc744 \ub9cc\ub4e4\uae30 \uc704\ud55c \ud328\ud0a4\uc9c0\ub85c, leaflet.js \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uae30\ubc18\uc73c\ub85c \ud558\uba70 \uc0ac\uc6a9\uc790\uac00 \ud788\ud2b8 \ub9f5, \ucf54\ub85c\ud398\uc2a4 \ub9f5 \ub4f1\uc744 \ud3ec\ud568\ud55c \ub2e4\uc591\ud55c \ub9f5\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9ac\ud50c\ub81b\uc744 \uc0ac\uc6a9\ud558\uba74 \ud655\ub300/\ucd95\uc18c \ubc0f \uc774\ub3d9\uacfc \uac19\uc740 \uc0c1\ud638 \uc791\uc6a9\uc744 \ub9f5\uc5d0 \ucd94\uac00\ud560 \uc218 \uc788\uc5b4 \ubcf5\uc7a1\ud55c \uacf5\uac04 \ub370\uc774\ud130 \uc9d1\ud569\uc744 \uc27d\uac8c \ud0d0\uc0c9\ud558\uace0 \ubd84\uc11d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,a.kt)("p",null,"R\uc740 \ub370\uc774\ud130 \ubd84\uc11d \ubc0f \uc2dc\uac01\ud654\ub97c \uc704\ud55c \uac15\ub825\ud55c \uc5b8\uc5b4\uc774\uba70, \uc774\ub7ec\ud55c \ucd5c\uace0\uc758 \uc2dc\uac01\ud654 \ud328\ud0a4\uc9c0\uc758 \ub3c4\uc6c0\uc73c\ub85c \uc0ac\uc6a9\uc790\ub294 \ubcf5\uc7a1\ud55c \ub370\uc774\ud130 \uc9d1\ud569\uc744 \ud0d0\uc0c9\ud558\uace0 \ubd84\uc11d\ud560 \uc218 \uc788\ub294 \ud1b5\ucc30\ub825 \uc788\uace0 \ub9e4\ub825\uc801\uc778 \ub370\uc774\ud130 \uc2dc\uac01\ud654\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc778 \ucc28\ud2b8\ubd80\ud130 \ubcf5\uc7a1\ud55c \ub300\ud654\ud615 \ube44\uc8fc\uc5bc\ub9ac\uc81c\uc774\uc158\uae4c\uc9c0, \uc774\ub7ec\ud55c \ud328\ud0a4\uc9c0\ub97c \ud1b5\ud574 \ubaa8\ub4e0 \uac83\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}u.isMDXComponent=!0}}]);