"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[4485],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7478:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=n(3117),i=(n(7294),n(3905));const o={slug:"doi",title:"doi",author:"CiteDrive",author_title:"Seamless BibTeX reference management for Overleaf and other modern LaTeX editors.",author_url:"https://citedrive.com/en/",author_image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",tags:["bibtex","biblatex","doi"],date:new Date("2022-01-20T00:00:00.000Z")},a="doi",l={unversionedId:"fields/doi",id:"fields/doi",title:"doi",description:"`doi is used to store any DOI (Digital Object Identifier of the International DOI Foundation). DOI is a digital identifier that is intended to be permanent and unique. It is used, among other things, and mostly for articles from scientific journals. It can be used in article, but more rarely also in chapter, book, or inproceedings / conference`. This field is optional in all cases.",source:"@site/docs/fields/doi.md",sourceDirName:"fields",slug:"/fields/doi",permalink:"/fields/doi",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/doi.md",tags:[{label:"bibtex",permalink:"/tags/bibtex"},{label:"biblatex",permalink:"/tags/biblatex"},{label:"doi",permalink:"/tags/doi"}],version:"current",frontMatter:{slug:"doi",title:"doi",author:"CiteDrive",author_title:"Seamless BibTeX reference management for Overleaf and other modern LaTeX editors.",author_url:"https://citedrive.com/en/",author_image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",tags:["bibtex","biblatex","doi"],date:"2022-01-20T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"crossref",permalink:"/fields/crossref"},next:{title:"edition",permalink:"/fields/edition"}},s={},c=[{value:"Format",id:"format",level:2},{value:"Example",id:"example",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"doi"},"doi"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"doi")," is used to store any DOI (Digital Object Identifier of the International DOI Foundation). DOI is a digital identifier that is intended to be permanent and unique. It is used, among other things, and mostly for articles from scientific journals. It can be used in ",(0,i.kt)("inlineCode",{parentName:"p"},"article"),", but more rarely also in ",(0,i.kt)("inlineCode",{parentName:"p"},"chapter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"book"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"inproceedings")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"conference"),". This field is optional in all cases."),(0,i.kt)("h2",{id:"format"},"Format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"@article{Mueller2014The,\n\n  ...\n\n  doi={ https://doi.org/xxxxx }\n\n  ...\n\n}\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"@article{steinbeck2003chemistry,\n  title={The Chemistry Development Kit (CDK): An open-source Java library for chemo-and bioinformatics},\n  author={Steinbeck, Christoph and Han, Yongquan and Kuhn, Stefan and Horlacher, Oliver and Luttmann, Edgar and Willighagen, Egon},\n  journal={Journal of chemical information and computer sciences},\n  volume={43},\n  number={2},\n  pages={493--500},\n  year={2003},\n  publisher={ACS Publications}\n  doi={https://doi.org/10.1021/ci025584y}\n}\n")))}d.isMDXComponent=!0}}]);