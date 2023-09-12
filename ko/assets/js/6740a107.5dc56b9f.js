"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[5411],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(i),h=r,f=u["".concat(d,".").concat(h)]||u[h]||p[h]||o;return i?n.createElement(f,a(a({ref:t},c),{},{components:i})):n.createElement(f,a({ref:t},c))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=i[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},8009:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(7294);const r=()=>n.createElement(n.Fragment,null,n.createElement("iframe",{style:{borderRadius:15,border:"5px solid #776cfe"},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))},5723:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var n=i(7462),r=(i(7294),i(3905)),o=i(8009);const a={slug:"edition",title:"BibTeX field type: edition",sidebar_label:"edition"},l=void 0,d={unversionedId:"fields/edition",id:"fields/edition",title:"BibTeX field type: edition",description:"In the academic and publishing world, the edition of a book signifies the version or form in which a work is published. The edition field in a BibTeX entry is used to specify this detail, often highlighting the revisions or updates that the work has undergone since its initial release. Including the edition is particularly pertinent when referencing textbooks or scholarly works that have undergone multiple iterations. Below, we elaborate on how to effectively use the edition field in your BibTeX entries.",source:"@site/docs/fields/edition.mdx",sourceDirName:"fields",slug:"/fields/edition",permalink:"/ko/fields/edition",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/edition.mdx",tags:[],version:"current",frontMatter:{slug:"edition",title:"BibTeX field type: edition",sidebar_label:"edition"},sidebar:"tutorialSidebar",previous:{title:"doi",permalink:"/ko/fields/doi"},next:{title:"editor",permalink:"/ko/fields/editor"}},s={},c=[{value:"Overview",id:"overview",level:3},{value:"Guidelines",id:"guidelines",level:3},{value:"Syntax and Structure",id:"syntax-and-structure",level:3},{value:"Example",id:"example",level:3},{value:"Additional Tips",id:"additional-tips",level:3},{value:"Conclusion",id:"conclusion",level:3}],u={toc:c},p="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the academic and publishing world, the edition of a book signifies the version or form in which a work is published. The ",(0,r.kt)("inlineCode",{parentName:"p"},"edition")," field in a BibTeX entry is used to specify this detail, often highlighting the revisions or updates that the work has undergone since its initial release. Including the edition is particularly pertinent when referencing textbooks or scholarly works that have undergone multiple iterations. Below, we elaborate on how to effectively use the ",(0,r.kt)("inlineCode",{parentName:"p"},"edition")," field in your BibTeX entries."),(0,r.kt)(o.Z,{mdxType:"CiteDrive"}),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"edition")," field is utilized to denote the edition of a book. This information is essential when the book you are citing has been published in various editions, each potentially having different contents or pagination. Indicating the edition helps in providing a clear and accurate reference, aiding readers in locating the exact version of the work you used."),(0,r.kt)("h3",{id:"guidelines"},"Guidelines"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Formatting"),': It is recommended to enter the edition as an ordinal number (e.g., "First," "Second," "Third," etc.) with the first letter capitalized.'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Spelling Out"),": Instead of numerical representations (1st, 2nd, 3rd), spelling out the ordinal numbers is favored for better readability."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Language Adaptation"),': For works in languages other than English, the edition can be indicated in that language (e.g., "Erste" for first in German).')),(0,r.kt)("h3",{id:"syntax-and-structure"},"Syntax and Structure"),(0,r.kt)("p",null,"The syntax for the ",(0,r.kt)("inlineCode",{parentName:"p"},"edition")," field is straightforward, as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@book{citationkey,\n  ...\n  edition={OrdinalNumber},\n  ...\n}\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Here's an example of a BibTeX entry incorporating the ",(0,r.kt)("inlineCode",{parentName:"p"},"edition")," field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@book{author2023title,\n  title={The Title of the Book},\n  author={Author, A.},\n  year={2023},\n  publisher={Publishing House},\n  edition={First},\n}\n")),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"edition")," field clearly indicates that the cited work is the first edition of the book."),(0,r.kt)("h3",{id:"additional-tips"},"Additional Tips"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Revised Editions"),': For books with revised editions, you might also use terms like "Revised" or "Updated" along with the edition number (e.g., "Second, Revised").'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Later Editions"),": If citing from a much later edition, it might be pertinent to include a note in your citation explaining the choice if the edition contains significantly different or updated content.")),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Properly specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"edition")," field in your BibTeX entries ensures a more accurate and trustworthy citation process. It helps in steering your readers towards the exact version of a source material that you referred to, thereby promoting clarity and scholarly integrity. Utilize this field wisely to enhance the quality and reliability of your bibliographic references."))}h.isMDXComponent=!0}}]);