"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[6625],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,b=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7351:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=n(3117),i=(n(7294),n(3905));const o={slug:"howpublished",title:"howpublished"},a=void 0,l={unversionedId:"fields/howpublished",id:"fields/howpublished",title:"howpublished",description:"The howpublished field is used with the @misc entry, typically as a workaround for a source type BibTeX does not support. The most common example is when citing web pages and specifying a URL.",source:"@site/docs/fields/howpublished.md",sourceDirName:"fields",slug:"/fields/howpublished",permalink:"/de/fields/howpublished",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/howpublished.md",tags:[],version:"current",frontMatter:{slug:"howpublished",title:"howpublished"},sidebar:"tutorialSidebar",previous:{title:"email",permalink:"/de/fields/email"},next:{title:"institution",permalink:"/de/fields/institution"}},u={},s=[],c={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"howpublished")," field is used with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@misc")," entry, typically as a workaround for a source type BibTeX does not support. The most common example is when citing web pages and specifying a URL."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"@misc{BibTeXeu,\n  title = {{Reference management with BibTeX: A short guide},\n  howpublished = {\\url{https://bibtex.eu/}},\n  note = {Accessed: 2022-06-12}\n}\n")))}p.isMDXComponent=!0}}]);