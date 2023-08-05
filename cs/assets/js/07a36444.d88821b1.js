"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[1221],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=s(r),p=c,d=f["".concat(l,".").concat(p)]||f[p]||m[p]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function p(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=r.length,o=new Array(i);o[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:c,o[1]=a;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2991:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(7294),c=r(6010),i=r(2802),o=r(9960),a=r(3919),l=r(5999),s="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function f(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,c.Z)("card padding--lg",s)},r)}function p(e){let{href:t,icon:r,title:i,description:o}=e;return n.createElement(f,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",u),title:i},r," ",i),o&&n.createElement("p",{className:(0,c.Z)("text--truncate",m),title:o},o))}function d(e){var t;let{item:r}=e;const c=(0,i.Wl)(r);return c?n.createElement(p,{href:c,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function b(e){var t,r;let{item:c}=e;const o=(0,a.Z)(c.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=c.docId)?t:void 0);return n.createElement(p,{href:c.href,icon:o,title:c.label,description:null!=(r=c.description)?r:null==l?void 0:l.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(b,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const o=(0,i.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e})))))}},2786:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return m}});var n=r(3117),c=(r(7294),r(3905)),i=r(2991),o=r(2802);const a={},l="BibTeX Converters",s={unversionedId:"converters/index",id:"converters/index",title:"BibTeX Converters",description:"",source:"@site/docs/converters/index.md",sourceDirName:"converters",slug:"/converters/",permalink:"/cs/converters/",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/converters/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"test",permalink:"/cs/citedrive/test"},next:{title:"Doi to BibTex converter",permalink:"/cs/converters/doi-to-bibtex-converter"}},u={},m=[],f={toc:m};function p(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"bibtex-converters"},"BibTeX Converters"),(0,c.kt)(i.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);