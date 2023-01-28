"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[8901],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=i,b=s["".concat(u,".").concat(f)]||s[f]||p[f]||o;return n?r.createElement(b,a(a({ref:t},d),{},{components:n})):r.createElement(b,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5805:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=n(3117),i=(n(7294),n(3905));const o={slug:"edition",title:"BibTeX field type: edition",sidebar_label:"edition"},a="BibTeX field type: edition",l={unversionedId:"fields/edition",id:"fields/edition",title:"BibTeX field type: edition",description:'The edition of a book, e.g. "edition = " Entering an ordinal number is recommended by default, and the first letter is usually capitalised.',source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/fields/edition.md",sourceDirName:"fields",slug:"/fields/edition",permalink:"/pt/fields/edition",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/edition.md",tags:[],version:"current",frontMatter:{slug:"edition",title:"BibTeX field type: edition",sidebar_label:"edition"},sidebar:"tutorialSidebar",previous:{title:"doi",permalink:"/pt/fields/doi"},next:{title:"editor",permalink:"/pt/fields/editor"}},u={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bibtex-field-type-edition"},"BibTeX field type: edition"),(0,i.kt)("p",null,'The edition of a book, e.g. "edition = {First}" Entering an ordinal number is recommended by default, and the first letter is usually capitalised.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"\n@book{ ... ,\n\n\n edition = {First},\n\n ...\n\n}\n")))}p.isMDXComponent=!0}}]);