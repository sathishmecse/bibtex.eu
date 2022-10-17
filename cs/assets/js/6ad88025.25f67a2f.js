"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[7507],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1789:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const i={slug:"editor",title:"BibTeX field type: editor",sidebar_label:"editor"},o="BibTeX field type: editor",l={unversionedId:"fields/editor",id:"fields/editor",title:"BibTeX field type: editor",description:"Tato str\xe1nka je v sou\u010dasn\xe9 dob\u011b k dispozici pouze v angli\u010dtin\u011b, ale velmi bychom pot\u0159ebovali va\u0161i pomoc s jej\xedm p\u0159ekladem do va\u0161eho jazyka! Pokud m\xe1te z\xe1jem, pod\xedvejte se na na\u0161e \xfalo\u017ei\u0161t\u011b GitHub, kde najdete dal\u0161\xed informace o tom, jak p\u0159isp\u011bt.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/fields/editor.md",sourceDirName:"fields",slug:"/fields/editor",permalink:"/cs/fields/editor",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/editor.md",tags:[],version:"current",frontMatter:{slug:"editor",title:"BibTeX field type: editor",sidebar_label:"editor"},sidebar:"tutorialSidebar",previous:{title:"edition",permalink:"/cs/fields/edition"},next:{title:"email",permalink:"/cs/fields/email"}},s={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bibtex-field-type-editor"},"BibTeX field type: editor"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Tato str\xe1nka je v sou\u010dasn\xe9 dob\u011b k dispozici pouze v angli\u010dtin\u011b, ale velmi bychom pot\u0159ebovali va\u0161i pomoc s jej\xedm p\u0159ekladem do va\u0161eho jazyka! Pokud m\xe1te z\xe1jem, pod\xedvejte se na na\u0161e \xfalo\u017ei\u0161t\u011b GitHub, kde najdete dal\u0161\xed informace o tom, jak p\u0159isp\u011bt.")),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"editor"),"-field, you can specify all editors to the work you want to cite. BibTeX has several ways of specifying editor names but expects in all cases a consistent and exact arrangement so that inaccurate information could lead to the unwanted output of the editor's name."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notation: ",(0,a.kt)("inlineCode",{parentName:"strong"},"{Firstname Lastname}"))),(0,a.kt)("p",null,"A natural indication such as ",(0,a.kt)("inlineCode",{parentName:"p"},"{Firstname Lastname}"),' is possible, but not vice versa, "Lastname Firstname."'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example, ",(0,a.kt)("inlineCode",{parentName:"strong"},"{Firstname Lastname}"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},"@article{ (...),\n\n  ...\n\n  editor={Isaac Newton}\n\n  ...\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notation: ",(0,a.kt)("inlineCode",{parentName:"strong"},"{Lastname, Firstname}")),"\nHowever, we recommend the following way ",(0,a.kt)("inlineCode",{parentName:"p"},"{Lastname, Firstname}")," i.e., last name and first name separated by a comma. This way allows for more control to distinguish between the first and last name."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example, ",(0,a.kt)("inlineCode",{parentName:"strong"},"{Lastname, Firstname}"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},"@article{ (...),\n\n  ...\n\n  editor={Newton, Isaac}\n\n  ...\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notation: ",(0,a.kt)("inlineCode",{parentName:"strong"},"{Lastname, Suffix, Firstname}"))),(0,a.kt)("p",null,"If you want to specify any suffix, for example, Junior, Senior, the 5th (Jr. Sr. V), do so in the following way strictly in this order, separating each component with a comma:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{Lastname, Suffix, Firstname}")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example, ",(0,a.kt)("inlineCode",{parentName:"strong"},"{Lastname, Suffix, Firstname}"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},"@article{ (...),\n\n  ...\n\n  editor={King, Jr , Luther}\n\n  ...\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How to add multiple editors in BibTeX?")),(0,a.kt)("p",null,"You specify the individual editors in the manner described above. The separator, AND, divides multiple editors. So in this way:\n",(0,a.kt)("inlineCode",{parentName:"p"},"{Lastname, Firstname AND Lastname, Firstname AND Lastname, Firstname AND ...}")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'Example, "How to add multiple editors?""')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},"@article{ (...),\n\n  ...\n\n  editor={Fisher, James AND Clark, John}\n\n  ...\n\n}\n")))}m.isMDXComponent=!0}}]);