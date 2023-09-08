"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[5031],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),b=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=b(n),m=i,d=c["".concat(p,".").concat(m)]||c[m]||s[m]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var b=2;b<a;b++)l[b]=n[b];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>b});var r=n(7462),i=(n(7294),n(3905));const a={title:"BibTeX \u6587\u732e\u7ba1\u7406 - LaTeX\u7684\u8be6\u7ec6\u6307\u5357",description:"\u4e86\u89e3\u5982\u4f55\u5728LaTeX\u4e2d\u6709\u6548\u4f7f\u7528BibTeX\u8fdb\u884c\u6587\u732e\u7ba1\u7406\uff0c\u4ece\u521b\u5efa.bib\u6587\u4ef6\u5230\u6574\u5408\u5230\u60a8\u7684LaTeX\u6587\u6863\u3002",sidebar_label:"LaTeX\u6587\u732e\u7ba1\u7406\u4e0eBibTeX\uff08\u5feb\u901f\u5165\u95e8\uff09",sidebar_position:1,slug:"/"},l="LaTeX\u4e2d\u7684BibTeX\u6587\u732e\u7ba1\u7406",o={unversionedId:"intro",id:"intro",title:"BibTeX \u6587\u732e\u7ba1\u7406 - LaTeX\u7684\u8be6\u7ec6\u6307\u5357",description:"\u4e86\u89e3\u5982\u4f55\u5728LaTeX\u4e2d\u6709\u6548\u4f7f\u7528BibTeX\u8fdb\u884c\u6587\u732e\u7ba1\u7406\uff0c\u4ece\u521b\u5efa.bib\u6587\u4ef6\u5230\u6574\u5408\u5230\u60a8\u7684LaTeX\u6587\u6863\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/intro.mdx",sourceDirName:".",slug:"/",permalink:"/zh-CN/",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"BibTeX \u6587\u732e\u7ba1\u7406 - LaTeX\u7684\u8be6\u7ec6\u6307\u5357",description:"\u4e86\u89e3\u5982\u4f55\u5728LaTeX\u4e2d\u6709\u6548\u4f7f\u7528BibTeX\u8fdb\u884c\u6587\u732e\u7ba1\u7406\uff0c\u4ece\u521b\u5efa.bib\u6587\u4ef6\u5230\u6574\u5408\u5230\u60a8\u7684LaTeX\u6587\u6863\u3002",sidebar_label:"LaTeX\u6587\u732e\u7ba1\u7406\u4e0eBibTeX\uff08\u5feb\u901f\u5165\u95e8\uff09",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Natbib (In-depth Tutorial)",permalink:"/zh-CN/natbib"}},p={},b=[{value:"\u6b65\u9aa41\uff1a\u521b\u5efa\u5e76\u586b\u5145.bib\u6587\u4ef6",id:"\u6b65\u9aa41\u521b\u5efa\u5e76\u586b\u5145bib\u6587\u4ef6",level:2},{value:"\u6b65\u9aa42\uff1a\u6574\u5408\u5230LaTeX\u6587\u6863",id:"\u6b65\u9aa42\u6574\u5408\u5230latex\u6587\u6863",level:2},{value:"\u5f15\u7528\u7ba1\u7406\u5668\u63a8\u8350",id:"\u5f15\u7528\u7ba1\u7406\u5668\u63a8\u8350",level:2}],u={toc:b},c="wrapper";function s(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"latex\u4e2d\u7684bibtex\u6587\u732e\u7ba1\u7406"},"LaTeX\u4e2d\u7684BibTeX\u6587\u732e\u7ba1\u7406"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u521d\u5b66\u8005\uff0c",(0,i.kt)("strong",{parentName:"p"},"BibTeX"),"\u53ef\u80fd\u56e0\u5176\u591a\u6837\u7684\u7279\u70b9\u548c\u683c\u5f0f\u800c\u663e\u5f97\u6709\u6311\u6218\u6027\u3002\u4f46\u662f\uff0c\u672c\u6307\u5357\u4e3a\u60a8\u63d0\u4f9b\u4e86\u7b80\u5316\u7684\u6982\u8ff0\uff0c\u5e76\u5c55\u793a\u4e86\u5982\u4f55\u5728LaTeX\u4e2d\u9ad8\u6548\u4f7f\u7528BibTeX\u3002"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/bHD94qM0vyg",title:"YouTube\u89c6\u9891\u64ad\u653e\u5668",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,i.kt)("h2",{id:"\u6b65\u9aa41\u521b\u5efa\u5e76\u586b\u5145bib\u6587\u4ef6"},"\u6b65\u9aa41\uff1a\u521b\u5efa\u5e76\u586b\u5145.bib\u6587\u4ef6"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u521b\u5efa\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},".bib"),"\u6587\u4ef6\uff0c\u4f8b\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"bibliography.bib"),"\uff0c\u5e76\u6dfb\u52a0BibTeX\u6761\u76ee\u3002\u4e00\u4e2a\u5178\u578b\u7684\u4f8b\u5b50\u662f\u4e3aErnest Hemingway\u7684\u300a\u8001\u4eba\u4e0e\u6d77\u300b\u6dfb\u52a0\u5f15\u7528\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"@book{Hemingway1952,\n  title={\u8001\u4eba\u4e0e\u6d77},\n  author={Hemingway, Ernest},\n  year={1952},\n  publisher={Charles Scribner's Sons}\n}\n")),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5206\u89e3\u8fd9\u4e2a\u6761\u76ee\u7684\u201c\u7ed3\u6784\u201d\uff0c\u60a8\u53ea\u9700\u67e5\u770b\u4ee5\u4e0b\u4e09\u4e2a\u7ec4\u4ef6\uff0c\u5c31\u53ef\u4ee5\u4e86\u89e3\u6bcf\u4e2aBibTeX\u6761\u76ee\u662f\u5982\u4f55\u5b9a\u4e49\u7684\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u6761\u76ee\u7c7b\u578b"),": \u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"@book"),"\u6211\u4eec\u5b9a\u4e49\u4e86\u5f15\u7528\u7684\u7c7b\u578b\uff0c\u5373\u4e00\u4e2a\u4e66\u7c4d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u8f93\u5165\u5b57\u6bb5"),": \u5728\u6b64\u4f8b\u5b50\u4e2d\uff0c\u8fd9\u4e9b\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"title"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"author"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"year"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"publisher"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5f15\u6587\u952e"),": \u8fd9\u4e2a\u4f8b\u5b50\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"Hemingway1952"),"\uff0c\u7528\u4e8e\u5728LaTeX\u4e2d\u63d0\u4f9b\u6587\u5185\u5f15\u7528\uff0c\u5373\u5f15\u7528\u6765\u6e90\u3002\u4f7f\u7528\u76f8\u540c\u7684\u793a\u4f8b\uff0c\u6211\u4eec\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"\\cite{Hemingway1952}"),"\u6765\u5b9e\u73b0\u3002")),(0,i.kt)("h2",{id:"\u6b65\u9aa42\u6574\u5408\u5230latex\u6587\u6863"},"\u6b65\u9aa42\uff1a\u6574\u5408\u5230LaTeX\u6587\u6863"),(0,i.kt)("p",null,"\u8981\u5728LaTeX\u4e2d\u4f7f\u7528\u60a8\u7684\u5f15\u7528\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u793a\u4f8b\u64cd\u4f5c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\documentclass{article}\n\\usepackage[utf8]{inputenc}\n\n\\title{BibTeX\u5f15\u7528\u5728\\LaTeX\u4e2d}\n\\author{\u7ea6\u7ff0\xb7\u53f2\u5bc6\u65af}\n\n\\begin{document}\n\n\\maketitle\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim urna, dapibus et bibendum vel, consectetur et turpis. Cras a molestie nulla. \\cite{Hemingway1952}\n\\medskip\n\n\\bibliographystyle{unsrt}\n\\bibliography{bibliography}\n\n\\end{document}\n")),(0,i.kt)("p",null,"\u7f16\u8bd1LaTeX\u6587\u6863\u540e\uff0c\u60a8\u4f1a\u53d1\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},"\\cite{Hemingway1952}"),"\u547d\u4ee4\u5df2\u88ab\u66ff\u6362\u4e3aBibTeX\u6587\u4ef6\u4e2d\u6307\u5b9a\u7684\u8be5ID\u7684\u5f15\u7528\uff0c\u4f8b\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"[1]"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"BibTeX - LaTeX - Overleaf",src:n(1049).Z,width:"1146",height:"784"})),(0,i.kt)("p",null,"\u6211\u4eec\u547d\u540d\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"bibliography.bib"),"\u7684.bib\u6587\u4ef6\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"\\bibliography{bibliography}"),"\u4e2d\u5b9a\u4e49\uff0c\u5f15\u6587/\u53c2\u8003\u6587\u732e\u7684\u98ce\u683c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{unsrt}"),"\u3002"),(0,i.kt)("h2",{id:"\u5f15\u7528\u7ba1\u7406\u5668\u63a8\u8350"},"\u5f15\u7528\u7ba1\u7406\u5668\u63a8\u8350"),(0,i.kt)("p",null,"\u624b\u52a8\u7f16\u8f91BibTeX\u6587\u4ef6\u53ef\u80fd\u4f1a\u5f88\u8017\u65f6\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5efa\u8bae\u7684\u5f15\u7528\u7ba1\u7406\u5668\uff0c\u53ef\u4ee5\u7b80\u5316\u60a8\u7684\u5de5\u4f5c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.citedrive.com/"},"CiteDrive")," \u662f\u4e00\u4e2a\u57fa\u4e8eBibTeX\u7684\u3001\u534f\u4f5c\u7684\u3001\u57fa\u4e8e\u7f51\u7edc\u7684\u5de5\u5177\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.zotero.org/"},"Zotero")," \u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u529f\u80fd\uff0c\u5e76\u901a\u8fc7",(0,i.kt)("a",{parentName:"li",href:"https://retorque.re/zotero-better-bibtex/"},"Zotero\u7684Better BibTeX\u63d2\u4ef6"),"\u5f88\u597d\u5730\u6574\u5408\u5230BibTeX\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.jabref.org/"},"JabRef")," \u662f\u4e00\u4e2a\u8de8\u5e73\u53f0\u7684\u3001\u57fa\u4e8eBibTeX\u7684\u5f15\u7528\u7ba1\u7406\u5668\u3002")))}s.isMDXComponent=!0},1049:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/LaTeX_Overleaf_BibTeX-Example-a14c0028472d549ecd0e3106d1ff07a1.png"}}]);