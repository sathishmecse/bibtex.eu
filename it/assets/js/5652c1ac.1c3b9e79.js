"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[8487],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8009:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);const a=()=>{const[e,t]=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},8822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),o=n(8009);const i={slug:"pages",title:"BibTeX field type: pages",sidebar_label:"pages"},l=void 0,s={unversionedId:"fields/pages",id:"fields/pages",title:"BibTeX field type: pages",description:"The pages field in a BibTeX entry denotes the specific pages that are being referred to within a larger work, such as a book or journal. This field can be essential when citing a chapter of a book or an article in a journal, helping to point readers directly to the pertinent section of the work.",source:"@site/docs/fields/pages.mdx",sourceDirName:"fields",slug:"/fields/pages",permalink:"/it/fields/pages",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/pages.mdx",tags:[],version:"current",frontMatter:{slug:"pages",title:"BibTeX field type: pages",sidebar_label:"pages"},sidebar:"tutorialSidebar",previous:{title:"organization",permalink:"/it/fields/organization"},next:{title:"publisher",permalink:"/it/fields/publisher"}},p={},c=[{value:"Formatting Guidelines",id:"formatting-guidelines",level:2},{value:"Examples",id:"examples",level:2},{value:"Note",id:"note",level:2}],u={toc:c},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pages")," field in a BibTeX entry denotes the specific pages that are being referred to within a larger work, such as a book or journal. This field can be essential when citing a chapter of a book or an article in a journal, helping to point readers directly to the pertinent section of the work."),(0,a.kt)(o.Z,{mdxType:"CiteDrive"}),(0,a.kt)("h2",{id:"formatting-guidelines"},"Formatting Guidelines"),(0,a.kt)("p",null,"You can specify a single page, a range of pages, or even non-consecutive pages. The recommended way to separate page numbers is either with commas or double dashes. Here are some guidelines to format the ",(0,a.kt)("inlineCode",{parentName:"p"},"pages")," field properly:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Single Page:")," If referring to a single page, you simply write the page number."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Range of Pages:")," For a range of pages, you should use double dashes (--). This indicates a continuous range from the first number to the second."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Non-consecutive Pages:")," If referring to non-consecutive pages, separate the different page numbers or ranges with a comma.")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Here are some examples demonstrating how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"pages")," field:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bibtex"},"@book{key,\n  title = {Title of the Book},\n  author = {Author Name},\n  year = {2023},\n  pages = {33--44},   % Range of pages from 33 to 44\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bibtex"},"@book{key,\n  title = {Title of the Book},\n  author = {Author Name},\n  year = {2023},\n  pages = {22, 33--44},   % Page 22 and a range from 33 to 44\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bibtex"},"@book{key,\n  title = {Title of the Book},\n  author = {Author Name},\n  year = {2023},\n  pages = {17},    % Single page\n}\n")),(0,a.kt)("h2",{id:"note"},"Note"),(0,a.kt)("p",null,"It is important to note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"pages")," field is not limited to ",(0,a.kt)("inlineCode",{parentName:"p"},"@book")," entries, and can also be used in other entry types like ",(0,a.kt)("inlineCode",{parentName:"p"},"@article")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"@inbook")," to denote the relevant pages in those contexts. Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"pages")," field correctly helps to create more accurate and helpful citations."))}g.isMDXComponent=!0}}]);