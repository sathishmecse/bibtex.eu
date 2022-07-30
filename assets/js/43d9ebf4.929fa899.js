"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[8288],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=c(n),d=r,f=b["".concat(l,".").concat(d)]||b[d]||p[d]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}b.displayName="MDXCreateElement"},3437:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var i=n(3117),r=(n(7294),n(3905));const a={},o="How can I use BibTeX to cite a website in LaTeX?",s={unversionedId:"faq/how-can-i-use-bibtex-to-cite-a-website",id:"faq/how-can-i-use-bibtex-to-cite-a-website",title:"How can I use BibTeX to cite a website in LaTeX?",description:"There are several ways to cite a website in LaTeX. In this short answer to the question, we give three, the easiest being BibLaTeX via the CiteDrive browser extension in the last example.",source:"@site/docs/faq/how-can-i-use-bibtex-to-cite-a-website.md",sourceDirName:"faq",slug:"/faq/how-can-i-use-bibtex-to-cite-a-website",permalink:"/faq/how-can-i-use-bibtex-to-cite-a-website",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/faq/how-can-i-use-bibtex-to-cite-a-website.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BibTeX FAQ",permalink:"/faq/"},next:{title:"BibTeX Fields",permalink:"/fields/"}},l={},c=[{value:"Using BibTeX",id:"using-bibtex",level:2},{value:"Using BibLaTeX",id:"using-biblatex",level:2},{value:"Using CiteDrive",id:"using-citedrive",level:2},{value:"Using <code>natbib</code>",id:"using-natbib",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-can-i-use-bibtex-to-cite-a-website-in-latex"},"How can I use BibTeX to cite a website in LaTeX?"),(0,r.kt)("p",null,"There are several ways to cite a website in LaTeX. In this short answer to the question, we give three, the easiest being BibLaTeX via the CiteDrive browser extension in the last example."),(0,r.kt)("h2",{id:"using-bibtex"},"Using BibTeX"),(0,r.kt)("p",null,"In BibTeX we use ",(0,r.kt)("inlineCode",{parentName:"p"},"@misc")," as a workaround and make use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"note")," field to specify the URl and usually an access date. In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," (",(0,r.kt)("em",{parentName:"p"},"or ",(0,r.kt)("inlineCode",{parentName:"em"},"hyperref")),") is required using ",(0,r.kt)("inlineCode",{parentName:"p"},"usepackage{url}"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"@misc{CiteDrive2022,\n    title        = {CiteDrive brings reference management to Overleaf},\n    author       = {CiteDrive, Inc},\n    year         = 2022,\n    note         = {\\url{https://www.citedrive.com/overleaf} [Accessed: (Use the date of access)]}\n}\n")),(0,r.kt)("p",null,"Alternatively, the ",(0,r.kt)("inlineCode",{parentName:"p"},"howpublished")," field can be used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"@misc{CiteDrive2022,\n    title        = {CiteDrive brings reference management to Overleaf},\n    author       = {CiteDrive, Inc},\n    year         = 2022,\n    note         = {Accessed: (Use the date of access)},\n    howpublished = {\\url{https://www.citedrive.com/overleaf}}\n}\n")),(0,r.kt)("h2",{id:"using-biblatex"},"Using BibLaTeX"),(0,r.kt)("p",null,"If you use BibLaTeX, which we recommend, the ",(0,r.kt)("inlineCode",{parentName:"p"},"@online")," entry type is inherently supported and works without a further tweak. You can enter the URL and access date in the fields ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"urldate"),", respectively."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"@online{CiteDrive2022,\n    title        = {CiteDrive brings reference management to Overleaf},\n    author       = {CiteDrive, Inc},\n    year         = 2022,\n    url          = {https://www.citedrive.com/overleaf},\n    urldate      = {Use the date of access}\n}\n")),(0,r.kt)("h2",{id:"using-citedrive"},"Using CiteDrive"),(0,r.kt)("p",null,"... coming soon"),(0,r.kt)("h2",{id:"using-natbib"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"natbib")),(0,r.kt)("p",null,"People frequently inquire about how to cite web pages using ",(0,r.kt)("a",{parentName:"p",href:"/natbib"},"natbib"),". We emphasize that it works in the same way as BibTeX. Natbib is a tool for styling in-text citations, and it depends on BibTeX as a backend."))}p.isMDXComponent=!0}}]);