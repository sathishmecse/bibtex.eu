"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[4673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={slug:"annote",title:"BibTeX field type: annote",sidebar_label:"annote"},i="BibTeX field type: annote",l={unversionedId:"fields/annote",id:"fields/annote",title:"BibTeX field type: annote",description:"Tato str\xe1nka je v sou\u010dasn\xe9 dob\u011b k dispozici pouze v angli\u010dtin\u011b, ale velmi bychom pot\u0159ebovali va\u0161i pomoc s jej\xedm p\u0159ekladem do va\u0161eho jazyka! Pokud m\xe1te z\xe1jem, pod\xedvejte se na na\u0161e \xfalo\u017ei\u0161t\u011b GitHub, kde najdete dal\u0161\xed informace o tom, jak p\u0159isp\u011bt.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/fields/annote.mdx",sourceDirName:"fields",slug:"/fields/annote",permalink:"/cs/fields/annote",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/annote.mdx",tags:[],version:"current",frontMatter:{slug:"annote",title:"BibTeX field type: annote",sidebar_label:"annote"},sidebar:"tutorialSidebar",previous:{title:"address",permalink:"/cs/fields/address"},next:{title:"author",permalink:"/cs/fields/author"}},p={},s=[{value:"Example",id:"example",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bibtex-field-type-annote"},"BibTeX field type: annote"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Tato str\xe1nka je v sou\u010dasn\xe9 dob\u011b k dispozici pouze v angli\u010dtin\u011b, ale velmi bychom pot\u0159ebovali va\u0161i pomoc s jej\xedm p\u0159ekladem do va\u0161eho jazyka! Pokud m\xe1te z\xe1jem, pod\xedvejte se na na\u0161e \xfalo\u017ei\u0161t\u011b GitHub, kde najdete dal\u0161\xed informace o tom, jak p\u0159isp\u011bt.")),(0,r.kt)("p",null,"BibTeX Field type: ",(0,r.kt)("inlineCode",{parentName:"p"},"annote")," for 'Annotated bibliography':"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"annote")," field type, the user can store an annotation - a short, descriptive, and also an evaluative summary of the content of the reference the user wants to cite, typically displayed in the bibliography."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"annote")," is then of interest to the reader to determine the sources' quality, relevance, and accuracy in question."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tex"},"@article{Mueller2014The,\n\n  ...\n\n  annote={The authors offer a detailed overview of the...  }\n\n  ...\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reference types")),(0,r.kt)("p",null,"All ",(0,r.kt)("inlineCode",{parentName:"p"},"Entry types")," can process ",(0,r.kt)("inlineCode",{parentName:"p"},"annote"),". This attribute is considered atypical and is deemed to be optional in all cases."))}u.isMDXComponent=!0}}]);