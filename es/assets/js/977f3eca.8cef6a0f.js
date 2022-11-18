"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[1652],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2991:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7294),i=n(6010),o=n(2802),a=n(9960),c=n(3919),s=n(5999),u="cardContainer_fWXF",l="cardTitle_rnsV",p="cardDescription_PWke";function f(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",u)},n)}function m(e){let{href:t,icon:n,title:o,description:a}=e;return r.createElement(f,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",l),title:o},n," ",o),a&&r.createElement("p",{className:(0,i.Z)("text--truncate",p),title:a},a))}function d(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){var t;let{item:n}=e;const i=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(m,{href:n.href,icon:i,title:n.label,description:null==a?void 0:a.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(b,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){let{items:t,className:n}=e;return r.createElement("section",{className:(0,i.Z)("row",n)},function(e){return e.filter((e=>"category"!==e.type||!!(0,o.Wl)(e)))}(t).map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},6735:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(3117),i=(n(7294),n(3905)),o=n(2991),a=n(2802);const c={},s="BibTeX FAQ",u={unversionedId:"faq/index",id:"faq/index",title:"BibTeX FAQ",description:"Esta p\xe1gina s\xf3lo est\xe1 disponible en ingl\xe9s, pero necesitamos tu ayuda para traducirla a tu idioma. Si est\xe1s interesado, consulta nuestro repositorio de GitHub para obtener m\xe1s informaci\xf3n sobre c\xf3mo contribuir.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/faq/index.md",sourceDirName:"faq",slug:"/faq/",permalink:"/es/faq/",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/faq/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Natbib (Quick start)",permalink:"/es/natbib"},next:{title:"How can I use BibTeX to cite a website in LaTeX?",permalink:"/es/faq/how-can-i-use-bibtex-to-cite-a-website"}},l={},p=[],f={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bibtex-faq"},"BibTeX FAQ"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Esta p\xe1gina s\xf3lo est\xe1 disponible en ingl\xe9s, pero necesitamos tu ayuda para traducirla a tu idioma. Si est\xe1s interesado, consulta nuestro repositorio de GitHub para obtener m\xe1s informaci\xf3n sobre c\xf3mo contribuir.")),(0,i.kt)(o.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);