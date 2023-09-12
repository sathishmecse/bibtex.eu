"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[2002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8009:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(7294);const r=()=>i.createElement(i.Fragment,null,i.createElement("iframe",{style:{borderRadius:15,border:"5px solid #776cfe"},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))},3318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(7462),r=(n(7294),n(3905)),a=n(8009);const o={slug:"doi",title:"BibTeX field type: doi",sidebar_label:"doi"},l=void 0,s={unversionedId:"fields/doi",id:"fields/doi",title:"BibTeX field type: doi",description:"The doi field is an integral part of modern referencing, allowing for a seamless and permanent method to locate digital objects such as journal articles, research reports, and data sets in an online environment. Here, we delve deeper into the functionality and significance of the doi field in BibTeX, as well as provide guidance on its correct usage.",source:"@site/docs/fields/doi.mdx",sourceDirName:"fields",slug:"/fields/doi",permalink:"/ru/fields/doi",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/doi.mdx",tags:[],version:"current",frontMatter:{slug:"doi",title:"BibTeX field type: doi",sidebar_label:"doi"},sidebar:"tutorialSidebar",previous:{title:"crossref",permalink:"/ru/fields/crossref"},next:{title:"edition",permalink:"/ru/fields/edition"}},c={},d=[{value:"Overview",id:"overview",level:3},{value:"Syntax and Structure",id:"syntax-and-structure",level:3},{value:"Example",id:"example",level:3},{value:"Utilization Tips",id:"utilization-tips",level:3},{value:"Conclusion",id:"conclusion",level:3}],p={toc:d},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"doi")," field is an integral part of modern referencing, allowing for a seamless and permanent method to locate digital objects such as journal articles, research reports, and data sets in an online environment. Here, we delve deeper into the functionality and significance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"doi")," field in BibTeX, as well as provide guidance on its correct usage."),(0,r.kt)(a.Z,{mdxType:"CiteDrive"}),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"A Digital Object Identifier (DOI) is a unique alphanumeric string assigned to a digital object, facilitating a persistent link to its location on the internet. As a standardized method for identifying electronic resources, the DOI remains stable even if the URL of the item changes, ensuring the longevity of references."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"doi")," field in BibTeX serves to record this identifier, allowing for precise and permanent citations. While it is predominantly found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"article")," entry type, it can also be used in other types such as ",(0,r.kt)("inlineCode",{parentName:"p"},"book"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"chapter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"inproceedings"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"conference")," entries, albeit less frequently. Regardless of the entry type, the ",(0,r.kt)("inlineCode",{parentName:"p"},"doi")," field is optional."),(0,r.kt)("h3",{id:"syntax-and-structure"},"Syntax and Structure"),(0,r.kt)("p",null,"To correctly incorporate a DOI into your BibTeX entry, adhere to the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@entrytype{citationkey,\n  ...\n  doi={https://doi.org/xxxxx},\n  ...\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"doi"),' field encapsulates the full DOI URL, which typically starts with "',(0,r.kt)("a",{parentName:"p",href:"https://doi.org/"},"https://doi.org/"),'" followed by a unique identifier string.'),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Here's an exemplar BibTeX entry that includes a DOI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{steinbeck2003chemistry,\n  title={The Chemistry Development Kit (CDK): An open-source Java library for chemo-and bioinformatics},\n  author={Steinbeck, Christoph and Han, Yongquan and Kuhn, Stefan and Horlacher, Oliver and Luttmann, Edgar and Willighagen, Egon},\n  journal={Journal of chemical information and computer sciences},\n  volume={43},\n  number={2},\n  pages={493--500},\n  year={2003},\n  publisher={ACS Publications},\n  doi={https://doi.org/10.1021/ci025584y},\n}\n")),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"doi")," field houses the permanent URL that leads directly to the referenced article."),(0,r.kt)("h3",{id:"utilization-tips"},"Utilization Tips"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Finding DOIs"),": For scholarly articles, DOIs can often be found on the first page of the article or in the online database where the article is housed."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Cross-Referencing"),": Utilize the ",(0,r.kt)("inlineCode",{parentName:"li"},"doi")," field for cross-referencing in your paper, offering readers a direct route to the original source material."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Optional but Beneficial"),": While the ",(0,r.kt)("inlineCode",{parentName:"li"},"doi")," field is optional, including it enhances the reliability and traceability of your references.")),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The inclusion of the ",(0,r.kt)("inlineCode",{parentName:"p"},"doi")," field in your BibTeX entries represents best practice in scholarly writing, offering a steadfast link to the digital objects you reference. By adopting the DOI system, you promote the accessibility and permanence of scientific knowledge, supporting the global research community in their scholarly endeavors."),(0,r.kt)("p",null,"As you build your bibliography, remember to capitalize on the capabilities of the ",(0,r.kt)("inlineCode",{parentName:"p"},"doi")," field, fostering a richer, more reliable, and interconnected academic discourse."))}f.isMDXComponent=!0}}]);