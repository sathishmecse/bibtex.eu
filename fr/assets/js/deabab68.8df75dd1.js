"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[3421],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,b=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return r?i.createElement(b,o(o({ref:t},u),{},{components:r})):i.createElement(b,o({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=r(7462),n=(r(7294),r(3905));const a={slug:"how-to-cite-apa-in-latex-bibtex",title:"Comment citer APA dans LaTeX / BibTeX ?",authors:{name:"BibTeX FAQ",title:"https://www.CiteDrive.com/",mail:"hello@citedrive.com",url:"https://www.CiteDrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["LaTeX","BibTeX","APA citation","reference management","academic writing"]},o="Comment citer APA dans LaTeX / BibTeX ?",l={permalink:"/fr/blog/how-to-cite-apa-in-latex-bibtex",editUrl:"https://github.com/citedrive/bibtex.eu/blog/blog/2023-02-16-apa-latex-bibtex.mdx",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2023-02-16-apa-latex-bibtex.mdx",title:"Comment citer APA dans LaTeX / BibTeX ?",description:"Afin de cr\xe9diter les auteurs originaux et de reconna\xeetre leurs contributions \xe0 la recherche, les \xe9crits universitaires n\xe9cessitent une citation correcte des sources. Le style de citation APA (American Psychological Association) est largement utilis\xe9 dans les sciences sociales, la psychologie et l'\xe9ducation. Dans ce billet de blog, nous allons voir comment utiliser BibTeX pour citer APA dans LaTeX.",date:"2023-02-16T00:00:00.000Z",formattedDate:"16 f\xe9vrier 2023",tags:[{label:"LaTeX",permalink:"/fr/blog/tags/la-te-x"},{label:"BibTeX",permalink:"/fr/blog/tags/bib-te-x"},{label:"APA citation",permalink:"/fr/blog/tags/apa-citation"},{label:"reference management",permalink:"/fr/blog/tags/reference-management"},{label:"academic writing",permalink:"/fr/blog/tags/academic-writing"}],readingTime:2.175,hasTruncateMarker:!1,authors:[{name:"BibTeX FAQ",title:"https://www.CiteDrive.com/",mail:"hello@citedrive.com",url:"https://www.CiteDrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],frontMatter:{slug:"how-to-cite-apa-in-latex-bibtex",title:"Comment citer APA dans LaTeX / BibTeX ?",authors:{name:"BibTeX FAQ",title:"https://www.CiteDrive.com/",mail:"hello@citedrive.com",url:"https://www.CiteDrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["LaTeX","BibTeX","APA citation","reference management","academic writing"]},prevItem:{title:"Les meilleurs logiciels de visualisation pour R en 2023",permalink:"/fr/blog/top-visualization-packages-for-r-in-2023"},nextItem:{title:"Dynamic Documents with Jupyter, R Markdown, and Bookdown",permalink:"/fr/blog/dynamic-documents-with-jupyter-r-markdown-and-bookdown"}},c={authorsImageUrls:[void 0]},s=[{value:"\xc9tape 1 : cr\xe9er un fichier .bib",id:"\xe9tape-1--cr\xe9er-un-fichier-bib",level:3},{value:"\xc9tape 2 : inclure le fichier .bib dans votre document LaTeX",id:"\xe9tape-2--inclure-le-fichier-bib-dans-votre-document-latex",level:2},{value:"\xc9tape 4 : ajout d&#39;une liste de r\xe9f\xe9rences",id:"\xe9tape-4--ajout-dune-liste-de-r\xe9f\xe9rences",level:3},{value:"\xc9tape 5 : Compilez votre document",id:"\xe9tape-5--compilez-votre-document",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Afin de cr\xe9diter les auteurs originaux et de reconna\xeetre leurs contributions \xe0 la recherche, les \xe9crits universitaires n\xe9cessitent une citation correcte des sources. Le style de citation APA (American Psychological Association) est largement utilis\xe9 dans les sciences sociales, la psychologie et l'\xe9ducation. Dans ce billet de blog, nous allons voir comment utiliser BibTeX pour citer APA dans LaTeX."),(0,n.kt)("p",null,"BibTeX est un outil de gestion des r\xe9f\xe9rences qui est utilis\xe9 conjointement avec LaTeX pour g\xe9n\xe9rer une bibliographie. Il s'agit d'un outil puissant de gestion des r\xe9f\xe9rences et des citations qui peut vous faire gagner beaucoup de temps et d'efforts lors de la r\xe9daction de documents. Voici comment utiliser BibTeX pour cr\xe9er des citations dans le style APA :"),(0,n.kt)("h3",{id:"\xe9tape-1--cr\xe9er-un-fichier-bib"},"\xc9tape 1 : cr\xe9er un fichier .bib"),(0,n.kt)("p",null,"Tout d'abord, cr\xe9ez un ",(0,n.kt)("a",{parentName:"p",href:"/"},"fichier BibTeX (fichier .bib)")," qui contient toutes les r\xe9f\xe9rences que vous souhaitez citer dans votre document. Ce fichier contient toutes les informations sur les sources, notamment le nom de l'auteur, la date de publication, le titre de l'article et le nom de la revue ou du livre."),(0,n.kt)("h2",{id:"\xe9tape-2--inclure-le-fichier-bib-dans-votre-document-latex"},"\xc9tape 2 : inclure le fichier .bib dans votre document LaTeX"),(0,n.kt)("p",null,"Ensuite, incluez le fichier .bib dans votre document LaTeX en ajoutant la commande suivante au pr\xe9ambule :"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"latex\n \\"),"Bibliographie{votrefichier.bib}"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'Veillez \xe0 remplacer "votrefichier" par le nom de votre fichier .bib.\n\n ## \xc9tape 3 : Citer les r\xe9f\xe9rences\n \n Pour citer une r\xe9f\xe9rence dans votre document, utilisez la commande ``cite{}` avec la cl\xe9 qui correspond \xe0 la r\xe9f\xe9rence dans votre fichier .bib. Par exemple :\n```latex\nSelon ``cite{smith2010}`, cette m\xe9thode est efficace.\n')),(0,n.kt)("p",null,"Cette commande cr\xe9era une citation dans le texte qui comprendra le nom de l'auteur et l'ann\xe9e de publication, comme (Smith, 2010)."),(0,n.kt)("h3",{id:"\xe9tape-4--ajout-dune-liste-de-r\xe9f\xe9rences"},"\xc9tape 4 : ajout d'une liste de r\xe9f\xe9rences"),(0,n.kt)("p",null,"Pour ajouter une liste de r\xe9f\xe9rences \xe0 votre document, utilisez la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"bibliographystyle{}")," pour sp\xe9cifier le style de la bibliographie, suivie de la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"bibliography{}")," pour sp\xe9cifier le fichier .bib :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-latex"},"\\bibliographiestyle{apalike} \n\\bibliographie{votrefichier.bib}\n")),(0,n.kt)("p",null,"Le code ci-dessus cr\xe9era une liste de r\xe9f\xe9rences \xe0 la fin de votre document en style APA.    "),(0,n.kt)("h2",{id:"\xe9tape-5--compilez-votre-document"},"\xc9tape 5 : Compilez votre document"),(0,n.kt)("p",null,"Enfin, compilez votre document LaTeX pour cr\xe9er la citation et la liste de r\xe9f\xe9rences."),(0,n.kt)("p",null,"En r\xe9sum\xe9, pour citer APA dans LaTeX en utilisant BibTeX, vous devez cr\xe9er un fichier .bib avec toutes les r\xe9f\xe9rences, inclure le fichier .bib dans votre document LaTeX, utiliser la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"cite{}")," pour citer les r\xe9f\xe9rences, et utiliser les commandes ",(0,n.kt)("inlineCode",{parentName:"p"},"bibliographystyle{}")," et ",(0,n.kt)("inlineCode",{parentName:"p"},"bibliography{}")," pour cr\xe9er une liste de r\xe9f\xe9rences. Gr\xe2ce \xe0 ces \xe9tapes, vous pourrez facilement g\xe9rer et citer vos r\xe9f\xe9rences en style APA lors de la r\xe9daction de vos travaux universitaires."))}m.isMDXComponent=!0}}]);