"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[7521],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),a=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=a(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=a(r),y=o,d=f["".concat(u,".").concat(y)]||f[y]||l[y]||i;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var a=2;a<i;a++)s[a]=r[a];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9556:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return l},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return a}});var n=r(3117),o=(r(7294),r(3905));const i={title:"BibTeX misc type",sidebar_label:"misc"},s="BibTeX misc type",c={unversionedId:"types/misc",id:"types/misc",title:"BibTeX misc type",description:"Used when none of the other entry types in BibTeX do justice to the source. This could be pieces of music or lecture slides, but mostly it is to cite web pages. These unsupported source types are created with workaround fields from note and howpublished. If you frequently cite source types not supported by BibTex, you should look at BibLaTex, which offers a superset in terms of fields and types.",source:"@site/docs/types/misc.md",sourceDirName:"types",slug:"/types/misc",permalink:"/de/types/misc",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/types/misc.md",tags:[],version:"current",frontMatter:{title:"BibTeX misc type",sidebar_label:"misc"},sidebar:"tutorialSidebar",previous:{title:"article",permalink:"/de/types/article"}},u={},a=[],p={toc:a};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bibtex-misc-type"},"BibTeX misc type"),(0,o.kt)("p",null,"Used when none of the other entry types in BibTeX do justice to the source. This could be pieces of music or lecture slides, but mostly it is to cite web pages. These unsupported source types are created with workaround fields from ",(0,o.kt)("inlineCode",{parentName:"p"},"note")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"howpublished"),". If you frequently cite source types not supported by BibTex, you should look at BibLaTex, which offers a superset in terms of fields and types."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-latex"},"@article{citationKey,\n    ...\n}\n")))}l.isMDXComponent=!0}}]);