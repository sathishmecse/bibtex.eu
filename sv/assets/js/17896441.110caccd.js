"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[7918],{9055:function(e,t,n){n.r(t),n.d(t,{default:function(){return ue}});var a=n(7294),l=n(1944),r=n(902);const o=a.createContext(null);function s(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(o.Provider,{value:l},t)}function c(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}function i(){var e;const{metadata:t,frontMatter:n,assets:r}=c();return a.createElement(l.d,{title:t.title,description:t.description,keywords:n.keywords,image:null!=(e=r.image)?e:n.image})}var d=n(6010),m=n(7524),u=n(3117),v=n(5999),f=n(2244);function b(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(f.Z,(0,u.Z)({},t,{subLabel:a.createElement(v.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(f.Z,(0,u.Z)({},n,{subLabel:a.createElement(v.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function h(){const{metadata:e}=c();return a.createElement(b,{previous:e.previous,next:e.next})}var p=n(2263),E=n(9960),g=n(143),L=n(5281),N=n(373),y=n(4477);const k={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(v.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(v.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function x(e){const t=k[e.versionMetadata.banner];return a.createElement(t,e)}function Z(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(v.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(E.Z,{to:n,onClick:l},a.createElement(v.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function _(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,p.Z)(),{pluginId:r}=(0,g.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,N.J)(r),{latestDocSuggestion:s,latestVersionSuggestion:c}=(0,g.Jo)(r),i=null!=s?s:(m=c).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,d.Z)(t,L.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(x,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(Z,{versionLabel:c.label,to:i.path,onClick:()=>o(c.name)})))}function C(e){let{className:t}=e;const n=(0,y.E)();return n.banner?a.createElement(_,{className:t,versionMetadata:n}):null}function H(e){let{className:t}=e;const n=(0,y.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,L.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(v.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function T(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function w(e){let{lastUpdatedBy:t}=e;return a.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function U(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:L.k.common.lastUpdated},a.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(T,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(w,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var A=n(4881),M=n(1526),B="lastUpdated_vwxv";function I(e){return a.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(M.Z,e)))}function S(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(A.Z,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",B)},(n||l)&&a.createElement(U,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function O(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:o}=e,s=o.length>0,i=!!(t||n||r);return s||i?a.createElement("footer",{className:(0,d.Z)(L.k.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(I,{tags:o}),i&&a.createElement(S,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var P=n(6043),V=n(3743),R="tocCollapsibleButton_TO0P",D="tocCollapsibleButtonExpanded_MG3E";function z(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",R,!t&&D,n.className)}),a.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var F="tocCollapsible_ETCw",j="tocCollapsibleContent_vkbj",q="tocCollapsibleExpanded_sAul";function G(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:s}=(0,P.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(F,!o&&q,n)},a.createElement(z,{collapsed:o,onClick:s}),a.createElement(P.z,{lazy:!0,className:j,collapsed:o},a.createElement(V.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}var J="tocMobile_ITEo";function W(){const{toc:e,frontMatter:t}=c();return a.createElement(G,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(L.k.docs.docTocMobile,J)})}var X=n(8234);function Q(){const{toc:e,frontMatter:t}=c();return a.createElement(X.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:L.k.docs.docTocDesktop})}var K=n(2503),Y=n(210);function $(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(L.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(K.Z,{as:"h1"},n)),a.createElement(Y.Z,null,t))}var ee=n(2802),te=n(8596),ne=n(4996);function ae(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var le={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function re(e){let{children:t,href:n,isLast:l}=e;const r="breadcrumbs__link";return l?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(E.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function oe(e){let{children:t,active:n,index:l,addMicrodata:r}=e;return a.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function se(){const e=(0,ne.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(E.Z,{"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,d.Z)("breadcrumbs__link",le.breadcrumbsItemLink),href:e},a.createElement(ae,{className:le.breadcrumbHomeIcon})))}function ce(){const e=(0,ee.s1)(),t=(0,te.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(L.k.docs.docBreadcrumbs,le.breadcrumbsContainer),"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(se,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(oe,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(re,{href:t.href,isLast:l},t.label))})))):null}var ie="docItemContainer_Djhp",de="docItemCol_VOVn";function me(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement(W,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(Q,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&de)},a.createElement(C,null),a.createElement("div",{className:ie},a.createElement("article",null,a.createElement(ce,null),a.createElement(H,null),n.mobile,a.createElement($,null,t),a.createElement(O,null)),a.createElement(h,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function ue(e){const t="docs-doc-id-"+e.content.metadata.unversionedId,n=e.content;return a.createElement(s,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(i,null),a.createElement(me,null,a.createElement(n,null))))}},3743:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(3117),l=n(7294),r=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function i(e,t){var n;let{anchorTopOffset:a}=t;const l=e.find((e=>c(e).top>=a));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=i(s,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}var v=l.memo(u);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:u,...f}=e;const b=(0,r.L)(),h=null!=d?d:b.tableOfContents.minHeadingLevel,p=null!=u?u:b.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>s({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:p});return m((0,l.useMemo)((()=>{if(c&&i)return{linkClassName:c,linkActiveClassName:i,minHeadingLevel:h,maxHeadingLevel:p}}),[c,i,h,p])),l.createElement(v,(0,a.Z)({toc:E,className:n,linkClassName:c},f))}},8234:function(e,t,n){n.d(t,{Z:function(){return y}});var a,l,r,o,s,c,i,d,m,u,v,f=n(3117),b=n(7294),h=n(6010),p=n(3743),E="tableOfContents_jeP5";function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}var L=e=>{let{title:t,titleId:n,...f}=e;return b.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 322 341","aria-labelledby":n},f),t?b.createElement("title",{id:n},t):null,a||(a=b.createElement("defs",null,b.createElement("style",null,".d{fill:#7967ff}"))),b.createElement("g",{transform:"translate(-381 -426)"},b.createElement("rect",{width:322,height:341,rx:16,transform:"translate(381 426)",style:{fill:"#ffb7b7"}}),b.createElement("g",{style:{opacity:.85}},b.createElement("path",{d:"M275.146 370.843H130.011v-28.895a27.507 27.507 0 0 1 24.5-27.429c26.366-2.895 81.848-12.9 81.848-47.42H253.6c0 35.033-42.564 58.542-97.22 64.551a10.294 10.294 0 0 0-9.125 10.3v11.65h127.891a66.742 66.742 0 0 0 66.676-66.677l-.238-124.357a67.559 67.559 0 0 0-67.483-67.5H253.36v152.208h-34.1c-45.038 0-83.5-33.567-87.583-76.424a84.058 84.058 0 0 1 21.623-65.284A84.911 84.911 0 0 1 216 77.843v17.224a67.5 67.5 0 0 0-67.172 74.152c3.262 34.1 34.191 60.813 70.433 60.813h16.875V77.843H274.1a84.805 84.805 0 0 1 84.706 84.706l.257 124.357a84.027 84.027 0 0 1-83.917 83.937Z",transform:"translate(320.173 372.157)",style:{fill:"#ff9f9f"}})),l||(l=b.createElement("path",{className:"d",d:"M410 629v-5h146v5z"})),b.createElement("text",{transform:"translate(432 519)",style:{fontSize:22,fontFamily:"SofiaPro-SemiBold,Sofia Pro",fontWeight:600}},r||(r=b.createElement("tspan",{x:0,y:0},"Let\u2019s .bib ")),o||(o=b.createElement("tspan",{x:0,y:26},"your first project!"))),s||(s=b.createElement("path",{className:"d",d:"M410 503h16v47h-16z"})),b.createElement("text",{transform:"translate(410 572)",style:{fontSize:14,fontFamily:"SofiaPro-Bold,Sofia Pro",fontWeight:700}},c||(c=b.createElement("tspan",{x:0,y:12},"Looking for a BibTeX-based reference ")),i||(i=b.createElement("tspan",{x:0,y:30},"manager that connects seamlessly with ")),d||(d=b.createElement("tspan",{x:0,y:48},"Overleaf and RStudio? "))),b.createElement("text",{transform:"translate(410 646)",style:{fontSize:13,fontFamily:"SofiaPro-Regular,Sofia Pro"}},m||(m=b.createElement("tspan",{x:0,y:12},"CiteDrive lets you manage your references ")),u||(u=b.createElement("tspan",{x:0,y:29},"directly in your next LaTeX, Quarto, or R ")),v||(v=b.createElement("tspan",{x:0,y:46},"Markdown document!")))))};var N=()=>b.createElement(b.Fragment,null,b.createElement("div",{style:{cursor:"pointer",padding:15},onClick:()=>{window.open("https://citedrive.com/?via_bibtex.eu","_blank")}},b.createElement(L,null)));function y(e){let{className:t,...n}=e;return b.createElement("div",{className:(0,h.Z)(E,"thin-scrollbar",t)},b.createElement(p.Z,(0,f.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})),b.createElement("div",null,b.createElement(N,null)))}}}]);