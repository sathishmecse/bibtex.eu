"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[417],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=i,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294);const i=()=>{const[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},3015:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905)),a=r(8009);const o={slug:"number",title:"BibTeX field type: number",sidebar_label:"number"},l=void 0,s={unversionedId:"fields/number",id:"fields/number",title:"BibTeX field type: number",description:"In BibTeX, the number field is used to specify the issue number of a journal, the number of a technical report, or other identifiers that are part of a larger series. This field helps to pinpoint the exact issue or edition of a series where the referenced work can be found, providing more precise information for locating the material.",source:"@site/docs/fields/number.mdx",sourceDirName:"fields",slug:"/fields/number",permalink:"/ja/fields/number",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/number.mdx",tags:[],version:"current",frontMatter:{slug:"number",title:"BibTeX field type: number",sidebar_label:"number"},sidebar:"tutorialSidebar",previous:{title:"note",permalink:"/ja/fields/note"},next:{title:"organization",permalink:"/ja/fields/organization"}},u={},c=[{value:"Format",id:"format",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Journal Article",id:"example-1-journal-article",level:3},{value:"Example 2: Technical Report",id:"example-2-technical-report",level:3}],p={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In BibTeX, the ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," field is used to specify the issue number of a journal, the number of a technical report, or other identifiers that are part of a larger series. This field helps to pinpoint the exact issue or edition of a series where the referenced work can be found, providing more precise information for locating the material."),(0,i.kt)(a.Z,{mdxType:"CiteDrive"}),(0,i.kt)("p",null,"This field is commonly used in conjunction with the ",(0,i.kt)("inlineCode",{parentName:"p"},"volume")," field, especially for journal articles and periodicals. For a technical report, the ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," field would typically contain the report number assigned by the institution or organization that published the report."),(0,i.kt)("h2",{id:"format"},"Format"),(0,i.kt)("p",null,"The format for the ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," field is relatively straightforward. In the context of an article entry, it would appear as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{citation_key,\n  ...\n  number={issue_number},\n  ...\n}\n\n")),(0,i.kt)("p",null,'Here, "citation_key" represents a unique identifier for the entry, and "issue_number" represents the number of the journal issue, technical report, or other publication.'),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Below are some examples showcasing the application of the ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," field in different contexts:"),(0,i.kt)("h3",{id:"example-1-journal-article"},"Example 1: Journal Article"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{doe2023study,\n  author = {Doe, Jane},\n  title = {A Comprehensive Study on Quantum Computing},\n  journal = {Journal of Advanced Computing},\n  year = {2023},\n  volume = {29},\n  number = {3},\n  pages = {215-230},\n}\n\n")),(0,i.kt)("p",null,"In this example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),' field specifies the third issue of the 29th volume of the "Journal of Advanced Computing".'),(0,i.kt)("h3",{id:"example-2-technical-report"},"Example 2: Technical Report"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@techreport{smith2022analysis,\n  author = {Smith, John},\n  title = {An Analysis of Renewable Energy Trends},\n  institution = {Energy Research Institute},\n  year = {2022},\n  number = {TR-2022-45},\n  type = {Technical Report},\n}\n")),(0,i.kt)("p",null,"In this case, the ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),' field is used to indicate the specific report number assigned by the "Energy Research Institute".'),(0,i.kt)("p",null,"Utilizing the ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," field accurately can facilitate the reader in finding the source material more easily and verifying the cited information. It's an essential detail in scholarly writing and research documentation."))}d.isMDXComponent=!0}}]);