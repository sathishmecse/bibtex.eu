"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[2303],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),b=i,y=f["".concat(c,".").concat(b)]||f[b]||p[b]||o;return r?n.createElement(y,a(a({ref:t},s),{},{components:r})):n.createElement(y,a({ref:t},s))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1968:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var n=r(3117),i=(r(7294),r(3905));const o={title:"BibTeX article type",sidebar_label:"article"},a="How to Cite an Article in LaTeX: BibTeX Reference Type",l={unversionedId:"types/article",id:"types/article",title:"BibTeX article type",description:"Scientific articles are stored with the article type in the .bib file. The required fields for this storage are author, title, journal, year, and volume. Number, pages, month DOI annotation, and key are all optional fields. In the bibliography, these fields will appear as follows:",source:"@site/docs/types/article.md",sourceDirName:"types",slug:"/types/article",permalink:"/cs/types/article",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/types/article.md",tags:[],version:"current",frontMatter:{title:"BibTeX article type",sidebar_label:"article"},sidebar:"tutorialSidebar",previous:{title:"BibTeX Entry types",permalink:"/cs/types/"},next:{title:"book",permalink:"/cs/types/book"}},c={},u=[],s={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-cite-an-article-in-latex-bibtex-reference-type"},"How to Cite an Article in LaTeX: BibTeX Reference Type"),(0,i.kt)("p",null,"Scientific articles are stored with the article type in the .bib file. The required fields for this storage are author, title, journal, year, and volume. Number, pages, month DOI annotation, and key are all optional fields. In the bibliography, these fields will appear as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"@article{citationKey,\n    title={The Title of the Article},\n    author= {LastName, FirstName},\n    journal={The Name of the Journal},\n    year={The Year the Article was Published},\n    volume={The Volume Number of the Journal},\n    number={The Issue Number of the Journal},\n    pages={The Page Numbers of the Article},\n    month={The Month the Article was Published},\n    doi={The Digital Object Identifier for the Article}\n\n}\n")),(0,i.kt)("p",null,"CiteDrive allows you to discover or save articles directly from your browser to your CiteDrive project, making it simple to keep track of all the research material you'll need. Check it out now!"))}p.isMDXComponent=!0}}]);