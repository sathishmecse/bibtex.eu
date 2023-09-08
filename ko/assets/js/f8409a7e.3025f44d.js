"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[3206],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(i),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return i?n.createElement(h,o(o({ref:t},u),{},{components:i})):n.createElement(h,o({ref:t},u))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},8009:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(7294);const a=()=>n.createElement(n.Fragment,null,n.createElement("iframe",{style:{borderRadius:15,border:"5px solid #776cfe"},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))},9568:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=i(7462),a=(i(7294),i(3905)),r=i(8009);const o={title:"BibTeX Guide: Mastering Reference Management for Bibliographies",description:"Discover how BibTeX, a premier reference management software, can simplify and streamline your bibliography creation process. Dive into this guide to harness the full power of BibTeX with LaTeX.",sidebar_label:"Using LaTeX (Quick start)",sidebar_position:1,slug:"/"},l=void 0,s={unversionedId:"intro",id:"intro",title:"BibTeX Guide: Mastering Reference Management for Bibliographies",description:"Discover how BibTeX, a premier reference management software, can simplify and streamline your bibliography creation process. Dive into this guide to harness the full power of BibTeX with LaTeX.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/",permalink:"/ko/",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"BibTeX Guide: Mastering Reference Management for Bibliographies",description:"Discover how BibTeX, a premier reference management software, can simplify and streamline your bibliography creation process. Dive into this guide to harness the full power of BibTeX with LaTeX.",sidebar_label:"Using LaTeX (Quick start)",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Natbib (In-depth Tutorial)",permalink:"/ko/natbib"}},p={},u=[{value:"Understanding BibTeX",id:"understanding-bibtex",level:2},{value:"Advantages of Using BibTeX",id:"advantages-of-using-bibtex",level:3},{value:"Limitations of BibTeX",id:"limitations-of-bibtex",level:3},{value:"Biber, BibLaTeX",id:"biber-biblatex",level:3},{value:"Pandoc",id:"pandoc",level:3},{value:"Quick Start Guide",id:"quick-start-guide",level:2},{value:"Preparations",id:"preparations",level:3},{value:"1. Install a LaTeX Distribution",id:"1-install-a-latex-distribution",level:4},{value:"2. Organize Your Document Structure",id:"2-organize-your-document-structure",level:4},{value:"Step-by-Step Guide",id:"step-by-step-guide",level:3},{value:"Step 1: Crafting a <code>.bib</code> File",id:"step-1-crafting-a-bib-file",level:4},{value:"Step 2: Picking a Style",id:"step-2-picking-a-style",level:4},{value:"Step 3: Integrating with LaTeX",id:"step-3-integrating-with-latex",level:4},{value:"Tool Recommendations",id:"tool-recommendations",level:2},{value:"Resources",id:"resources",level:2},{value:"Entry Types",id:"entry-types",level:3},{value:"Entry fields",id:"entry-fields",level:3}],d={toc:u},c="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bibtex-guide-harnessing-the-power-of-reference-management"},"BibTeX Guide: Harnessing the Power of Reference Management"),(0,a.kt)("p",null,"For those diving into academic or technical writing, ",(0,a.kt)("strong",{parentName:"p"},"BibTeX")," is an indispensable ally. Despite the intricate details surrounding LaTeX packages, citation styles, and formatting, with a structured approach, BibTeX can be easy to grasp."),(0,a.kt)(r.Z,{mdxType:"CiteDrive"}),"This guide provides a foundational understanding of BibTeX, helping you set up and use it effectively. While we'll explore other document systems in subsequent sections, our current focus is on mastering the BibTeX basics.",(0,a.kt)("h2",{id:"understanding-bibtex"},"Understanding BibTeX"),(0,a.kt)("p",null,"Developed in the 1980s by Oren Patashnik and Leslie Lamport, BibTeX has become the go-to software for managing and formatting bibliographies in LaTeX and markdown documents. Its widespread acceptance in academic circles, especially in fields like math, computer science, and physics, is a testament to its efficiency. By storing references in plain text ",(0,a.kt)("inlineCode",{parentName:"p"},".bib")," files and associating each with a unique key, BibTeX simplifies citations in the main LaTeX document."),(0,a.kt)("p",null,"The beauty of BibTeX lies in its versatility. The ",(0,a.kt)("inlineCode",{parentName:"p"},".bib-file")," entries can range from articles and books to conference papers, each containing fields like authors, title, journal, volume, and year, tailored to the reference type."),(0,a.kt)("p",null,"BibTeX eliminates redundancy. Once you've detailed a reference in the '.bib-file', simply use its unique key for citations in the LaTeX or Markdown document. During compilation, BibTeX takes care of the formatting, drawing from the ",(0,a.kt)("inlineCode",{parentName:"p"},".bib")," file and the style guidelines in the LaTeX document."),(0,a.kt)("h3",{id:"advantages-of-using-bibtex"},"Advantages of Using BibTeX"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Consistency"),": BibTeX ensures uniform citation styles, minimizing manual errors."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Efficiency"),": Change styles or reuse references without starting from scratch."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Flexibility"),": Compatible with diverse tools, including Pandoc for Markdown."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Control"),": Customize fields and types to fit specific requirements."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Reliability"),": Being text-file based, BibTeX databases are easy to backup and share.")),(0,a.kt)("h3",{id:"limitations-of-bibtex"},"Limitations of BibTeX"),(0,a.kt)("p",null,"While BibTeX is harmonious with LaTeX and Markdown, its integration with Microsoft Word, Libre Office, and Google Docs is somewhat patchy. Workarounds exist, like ",(0,a.kt)("a",{parentName:"p",href:"http://www.ee.ic.ac.uk/hp/staff/dmb/perl/index.html"},"Bibtex4Word")," (exclusive to Windows). For frequent users of these platforms, ",(0,a.kt)("a",{parentName:"p",href:"https://www.zotero.org/"},"Zotero")," might be more appropriate."),(0,a.kt)("p",null,"Moreover, the static nature of BibTeX can be a drawback. Its maintenance is sparse, which might leave users wanting more up-to-date fields or types. And while its format is easily readable, minor errors like a missing parenthesis can disrupt your LaTeX/Pandoc flow. To avoid such pitfalls, consider BibTeX tools like ",(0,a.kt)("a",{parentName:"p",href:"https://www.citedrive.com/"},"CiteDrive")," or ",(0,a.kt)("a",{parentName:"p",href:"https://www.jabref.org/"},"jabRef"),", which offer features like duplication prevention."),(0,a.kt)("p",null,"....."),(0,a.kt)("h3",{id:"biber-biblatex"},"Biber, BibLaTeX"),(0,a.kt)("p",null,"Please keep some of the alternatives in mind, especially Biber in conjunction with BibLaTeX. It is a complete reimplementation of BibTeX's bibliographic features; in addition to a large number of supported types and fields, it supports a wide range of customizations, including sorting bibliographies by types, keywords, authors, and other fields, as well as full Unicode and multi-language support and customizations with in-text citations without the need for additional packages, such as natbib. Although BibTeX is still highly regarded for its durability, it should be noted that bibLatex is far more powerful and well-maintained, as many significant BibTeX updates occurred decades ago. Although the tutorial is primarily geared toward BibTeX, much of it also applies to biblatex, making it an excellent place to start. The format remains the same; entries are saved in bib files with additional fields and types. Additional biblatex tutorials can be found on this page."),(0,a.kt)("h3",{id:"pandoc"},"Pandoc"),(0,a.kt)("p",null,"In a markdown file, you can specify your bibliography '.bib-file'in the YAML section for use with citations and in conjunction with Pandoc, which formats your document using Citation Style Language as a formatter and CiteProc as a processesor as a backend. More information is available on their website, or in our guides. "),(0,a.kt)("h2",{id:"quick-start-guide"},"Quick Start Guide"),(0,a.kt)("p",null,"BibTeX, while well-established, is evolving with the rise of Markdown-based systems such as Pandoc, Jupyter, Obsidian, Quarto, and R Markdown. Here's a brief tutorial on integrating BibTeX with LaTeX. Don't forget to check out our sections on BibLaTeX and Pandoc."),(0,a.kt)("h3",{id:"preparations"},"Preparations"),(0,a.kt)("h4",{id:"1-install-a-latex-distribution"},"1. Install a LaTeX Distribution"),(0,a.kt)("p",null,"If you wish to utilize BibTeX, ensure you have a LaTeX distribution installed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"TeX Live")," and ",(0,a.kt)("strong",{parentName:"li"},"MiKTeX")," are renowned open-source options."),(0,a.kt)("li",{parentName:"ul"},"Platforms like ",(0,a.kt)("strong",{parentName:"li"},"Overleaf")," come pre-packaged, removing the need for manual installations.")),(0,a.kt)("h4",{id:"2-organize-your-document-structure"},"2. Organize Your Document Structure"),(0,a.kt)("p",null,"Your project folder might look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desktop \n\u251c\u2500\u2500 thesis # root directory of your LaTeX project\n\u2502   \u2514\u2500\u2500 document.tex\n\u2502   \u2514\u2500\u2500 bibliography.bib\n\u2502   \u2514\u2500\u2500 style.bst\n\u251c\u2500\u2500 ...\n")),(0,a.kt)("h3",{id:"step-by-step-guide"},"Step-by-Step Guide"),(0,a.kt)("h4",{id:"step-1-crafting-a-bib-file"},"Step 1: Crafting a ",(0,a.kt)("inlineCode",{parentName:"h4"},".bib")," File"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},".bib")," file named ",(0,a.kt)("inlineCode",{parentName:"li"},"bibliography.bib"),". This will house your BibTeX entries."),(0,a.kt)("li",{parentName:"ol"},"Use text editors like Notepad or specialized tools such as ",(0,a.kt)("strong",{parentName:"li"},"CiteDrive")," or ",(0,a.kt)("strong",{parentName:"li"},"JabRef"),"."),(0,a.kt)("li",{parentName:"ol"},"A typical BibTeX entry might resemble:")),(0,a.kt)("p",null,"latexCopy code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bibtex"},"@book{Hemingway1952,\n    title        = {The Old Man and the Sea},\n    author       = {Hemingway, Ernest},\n    year         = 1952,\n    publisher    = {Charles Scribner's Sons}\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Key Components"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Entry-type"),": E.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"@book"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Entry fields"),": E.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"title"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"author"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Citation-key"),": E.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"Hemingway1952")," (used as ",(0,a.kt)("inlineCode",{parentName:"li"},"\\cite{Hemingway1952}")," in LaTeX).")),(0,a.kt)("h4",{id:"step-2-picking-a-style"},"Step 2: Picking a Style"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"With your ",(0,a.kt)("inlineCode",{parentName:"li"},".bib")," file ready, select a citation style."),(0,a.kt)("li",{parentName:"ol"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"\\bibliographystyle{style-name}")," command in LaTeX to specify your chosen style, omitting the ",(0,a.kt)("inlineCode",{parentName:"li"},".bst")," extension."),(0,a.kt)("li",{parentName:"ol"},"Common styles include: ",(0,a.kt)("inlineCode",{parentName:"li"},"plain"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"alpha"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"unsrt"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"abbrv"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ieee"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"apalike"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"apa"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"acm"),".")),(0,a.kt)("h4",{id:"step-3-integrating-with-latex"},"Step 3: Integrating with LaTeX"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Embed your references within a LaTeX document:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-latex"},"\\documentclass{article} \n\\usepackage[utf8]{inputenc}  \n\\title{BibTeX in \\LaTeX} \\author{Jane Doe}  \n\\begin{document} \\maketitle  Sample text with a reference. \\cite{Hemingway1952}  \n\\bibliographystyle{unsrt} \\bibliography{bibliography}  \n\\end{document}\n")),(0,a.kt)("p",null,"Upon compilation, the ",(0,a.kt)("inlineCode",{parentName:"p"},"\\cite{Hemingway1952}")," command will be replaced with a relevant citation."),(0,a.kt)("h2",{id:"tool-recommendations"},"Tool Recommendations"),(0,a.kt)("p",null,"Managing BibTeX entries manually can be cumbersome. Here are some tools to simplify the process:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CiteDrive"),": A web-based, collaborative tool offering seamless export functionalities to Overleaf and R Markdown."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Zotero"),": A powerful, free reference manager. For optimal BibTeX integration, consider the ",(0,a.kt)("a",{parentName:"li",href:"https://retorque.re/zotero-better-BibTeX/"},"Better BibTeX For Zotero")," plugin."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"JabRef"),": An open-source, BibTeX-centric reference manager available across major operating systems.")),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("h3",{id:"entry-types"},"Entry Types"),(0,a.kt)("p",null,"Next to ",(0,a.kt)("inlineCode",{parentName:"p"},"@book")," from our example above, BibTeX supports a wide range of reference types, including journal articles, theses, conference papers, and much more. Here's a list of some of the most commonly used reference types in BibTeX:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@article"),": used for articles in journals or magazines"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@book"),": used for complete books"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@inbook"),": used for chapters in a book"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@incollection"),": used for articles in a collection"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@inproceedings"),": used for conference or workshop papers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@phdthesis"),": used for PhD theses"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@mastersthesis"),": used for Master's theses"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@techreport"),": used for technical reports"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@manual"),": used for software manuals or guides")),(0,a.kt)("h3",{id:"entry-fields"},"Entry fields"),(0,a.kt)("p",null,"For each reference type, you'll need to provide a set of fields that describe the reference. The ones you'll need are determined by the type of reference and citation style you're using. For example, a @article reference will typically include fields for the author, title, journal, year, volume, and pages."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"author"),": the author of the reference"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"title"),": the title of the reference"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"journal"),": the name of the journal or magazine"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"year"),": the year the reference was published"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"volume"),": the volume number of the journal or book"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pages"),": the page numbers of the reference"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"booktitle"),": the title of the book in which the reference was published (for @inbook and @incollection references)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"editor"),": the editor of the book in which the reference was published (for @book references)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"series"),": the series in which the book was published (for @book references)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chapter"),": the chapter number of the reference (for @inbook references)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"address"),": the address of the publisher"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"edition"),": the edition of the book"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"publisher"),": the name of the publisher"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"school"),": the name of the school at which the thesis was written (for @phdthesis and @mastersthesis references)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"institution"),": the name of the institution that published the report (for @techreport references)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"howpublished"),": any special instructions for publishing the reference"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"note"),": any additional notes about the reference")),(0,a.kt)("p",null,"It is important to note that not all citation styles support all reference types and fields, but you should enter as much information into your BibTeX database as accurately and completely as possible. This ensures that your references are formatted correctly and that the information is correct. Fields that are not supported are simply ignored, so the more, the better. You should double-check any journal requirements."))}m.isMDXComponent=!0}}]);