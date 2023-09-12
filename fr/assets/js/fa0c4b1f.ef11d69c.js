"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[4088],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),b=l(r),u=n,m=b["".concat(c,".").concat(u)]||b[u]||p[u]||o;return r?i.createElement(m,a(a({ref:t},d),{},{components:r})):i.createElement(m,a({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[b]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(7294);const n=()=>i.createElement(i.Fragment,null,i.createElement("iframe",{style:{borderRadius:15,border:"5px solid #776cfe"},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))},449:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>h});var i=r(7462),n=r(7294),o=r(3905),a=r(9521);const s=a.ZP.div`
  border: 4px solid #000;
  border-radius: 36px;
  padding: 1rem;
  
`,c=a.ZP.input`
  border: 0px solid #000;
  border-radius: 36px;
  padding: 1rem;
  width: 100%;
  margin-bottom: 1rem;
`,l=a.ZP.button`
  border: 0px solid #000;
  border-radius: 36px;
  padding: 1rem;
  width: 100%;
  margin-bottom: 1rem;
  pointer: "cursor";
`,d=e=>{let{from:t,to:r}=e;return n.createElement(n.Fragment,null,n.createElement(s,null,"doi"===t&&"bibtex"===r&&n.createElement(n.Fragment,null,n.createElement(c,{autofocus:!0,placeholder:"Paste the DOI"}),n.createElement(l,{disabled:!0},"Convert DOI to BibTeX"),n.createElement("br",null))))};var b=r(8009);const p={title:"DOI to BibTeX converter",description:"",sidebar_label:"Doi to BibTex converter",sidebar_position:5},u=void 0,m={unversionedId:"converters/doi-to-bibtex-converter",id:"converters/doi-to-bibtex-converter",title:"DOI to BibTeX converter",description:"",source:"@site/docs/converters/doi-to-bibtex-converter.mdx",sourceDirName:"converters",slug:"/converters/doi-to-bibtex-converter",permalink:"/fr/converters/doi-to-bibtex-converter",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/converters/doi-to-bibtex-converter.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"DOI to BibTeX converter",description:"",sidebar_label:"Doi to BibTex converter",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"BibTeX Converters",permalink:"/fr/converters/"},next:{title:"BibTeX FAQ",permalink:"/fr/faq/"}},f={},h=[{value:"What is a DOI?",id:"what-is-a-doi",level:2},{value:"What is BibTeX?",id:"what-is-bibtex",level:2}],y={toc:h},v="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(v,(0,i.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(d,{from:"doi",to:"bibtex",mdxType:"Converter"}),(0,o.kt)("h2",{id:"what-is-a-doi"},"What is a DOI?"),(0,o.kt)("p",null,'DOI stands for "Digital Object Identifier." It\'s a one-of-a-kind identifier that permanently identifies a digital object like a research paper, article, or dataset. The identifier is a string of characters used to gain online access to the object, such as through a website or database. The DOI system allows you to find, access, and cite digital objects over time, even if the URL changes or the object is moved to a new location. The International DOI Foundation maintains the DOI system, widely used in the scholarly publishing industry.'),(0,o.kt)(b.Z,{mdxType:"CiteDrive"}),(0,o.kt)("h2",{id:"what-is-bibtex"},"What is BibTeX?"),(0,o.kt)("p",null,"BibTeX is a LaTeX tool for managing bibliographic references and formatting bibliographies. It is widely used in the academic community for typesetting scientific papers and articles. The tool allows you to save and organize bibliographic information in a plain text file with a.bib extension, such as the author, title, journal, and publication year of a paper. The data in a BibTeX file can be easily formatted and inserted into a LaTeX document using LaTeX commands, making it simple to create a consistent and accurate bibliography."),(0,o.kt)("p",null,'To encode bibliographic information, BibTeX employs a special syntax and a set of predefined entry types, such as "article," "book," and "inproceedings," to categorize different types of references. There are also numerous tools and websites that can generate BibTeX entries based on information you provide, such as a paper\'s DOI or ISBN.'))}g.isMDXComponent=!0}}]);