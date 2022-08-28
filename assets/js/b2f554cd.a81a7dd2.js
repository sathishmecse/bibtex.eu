"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto","metadata":{"permalink":"/blog/how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto","editUrl":"https://github.com/citedrive/bibtex.eu/blog/blog/2022-08-28-quarto.md","source":"@site/blog/2022-08-28-quarto.md","title":"How to Format Citations and Bibliographies in RStudio with CiteDrive and Quarto","description":"Do you need to format citations and a bibliography for a research paper in RStudio? Are you struggling to keep track of all your references and formatting requirements? Have no fear! CiteDrive and Quarto can help. This blog post will show you how to use both tools to create beautiful, correctly formatted citations and bibliographies.","date":"2022-08-28T00:00:00.000Z","formattedDate":"August 28, 2022","tags":[{"label":"citedrive","permalink":"/blog/tags/citedrive"},{"label":"rstudio","permalink":"/blog/tags/rstudio"},{"label":"quarto","permalink":"/blog/tags/quarto"},{"label":"rmarkdown","permalink":"/blog/tags/rmarkdown"}],"readingTime":2.315,"hasTruncateMarker":false,"authors":[{"name":"CiteDrive","title":"https://www.citedrive.com/","mail":"hello@citedrive.com","url":"https://www.citedrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],"frontMatter":{"slug":"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto","title":"How to Format Citations and Bibliographies in RStudio with CiteDrive and Quarto","authors":{"name":"CiteDrive","title":"https://www.citedrive.com/","mail":"hello@citedrive.com","url":"https://www.citedrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},"tags":["citedrive","rstudio","quarto","rmarkdown"]},"nextItem":{"title":"Citing and Using References on Overleaf: A Guide for Researchers","permalink":"/blog/citing-and-using-references-on-overleaf-a-guide-for-researchers"}},"content":"Do you need to format citations and a bibliography for a research paper in RStudio? Are you struggling to keep track of all your references and formatting requirements? Have no fear! CiteDrive and Quarto can help. This blog post will show you how to use both tools to create beautiful, correctly formatted citations and bibliographies.\\n\\n\\n## Get started\\n\\nTo format citations and bibliographies in RStudio with CiteDrive and Quarto, follow these steps:\\n\\n\\n### Step 1: Include references in your project\\n\\nFirst, you must create a CiteDrive account by going to their website and selecting the \'Sign Up\' button. Completing your account will then enable you to make an \'R-Markdown\' (*it works for Quarto, don\'t you worry*) project; simply name it and [fill the project with references](https://citedrive.medium.com/adding-bibliographic-references-to-rstudio-using-citedrive-create-citations-in-r-markdown-or-9b1e1ab59cf6). Yours might look something like this:\\n\\n![CiteDrive - Example](@site/static/img/tutorial/citedrive_project_example.png)\\n\\n### Step 2:  Connect your Quarto document to CiteDrive\\n\\nNow, let\'s connect your new CiteDrive to your Quarto document. To do this, click the \'bib\' button. This will open up a new tab with all your entries in BibTeX format. Copy the URL from the new tab and paste it into the YAML part of your QMD file.\\n\\n````md\\n---\\nbibliography: \\"api.citedrive.com/URL_BIB\\"\\n---\\n````\\n\\n### Step 3: Copy the citation keys.\\n\\nOnce your references are imported, you can insert them into your Quarto document. To do this, return to your CiteDrive project and one or more references your want to insert into your document and click the cite button. CiteDrive will copy the citation key to your clipboard.\\n\\n![CiteDrive - Example](@site/static/img/tutorial/citedrive_copy_citation.gif)\\n\\nPaste your citation key in the necessary passage of your Quarto document.\\n\\n![CiteDrive - Paste citationkey](@site/static/img/tutorial/citedrive_paste_citation_rstudio.gif)\\n\\n\\nAfter you insert the key in the section, click \u201crender.\u201d The citation will be outputted in your desired style, and the reference will appear at the end of your document.\\n\\nThat\'s all! CiteDrive is the perfect tool to help you manage your bibliography and insert citations into Quarto documents. Test it out now and see how much time it can save you!\\n\\n## Additional information\\n\\n### Quarto\\nQuarto is a powerful research writing tool that can automatically generate citations and bibliographies in various styles. It supports bibliography files in BibTeX and other formats, making it easy to keep track of your references.\\n\\n\\n### CiteDrive\\nCiteDrive is a reference management tool that allows you to organize, store easily, and search your bibliographic data. Organize your teams and references in projects, for example, for a dedicated Quarto paper. CiteDrive automatically keeps your references in Quarto up-to-date whenever you or one of your teammates updates the bibliographic data within your project.\\n\\nDo you prefer BibLaTeX? No problem, CiteDrive is 100 % BibTeX empowered and provides freedom in fields and types for each entry, meaning you can use any BibTeX-based package or alternative, like BibLaTeX."},{"id":"citing-and-using-references-on-overleaf-a-guide-for-researchers","metadata":{"permalink":"/blog/citing-and-using-references-on-overleaf-a-guide-for-researchers","editUrl":"https://github.com/citedrive/bibtex.eu/blog/blog/2022-08-16-doi-bibtex.md","source":"@site/blog/2022-08-16-doi-bibtex.md","title":"Citing and Using References on Overleaf: A Guide for Researchers","description":"When writing a research paper, it\'s important to use references to support your claims. Citing your sources correctly is key to creating a solid argument and avoiding plagiarism. This guide will show you how to cite references on Overleaf using CiteDrive. We\'ll also give you tips for finding reliable sources online. Let\'s get started!","date":"2022-08-16T00:00:00.000Z","formattedDate":"August 16, 2022","tags":[{"label":"citedrive","permalink":"/blog/tags/citedrive"},{"label":"overleaf","permalink":"/blog/tags/overleaf"},{"label":"latex","permalink":"/blog/tags/latex"},{"label":"bibtex","permalink":"/blog/tags/bibtex"},{"label":"biblatex","permalink":"/blog/tags/biblatex"},{"label":"natbib","permalink":"/blog/tags/natbib"}],"readingTime":3.895,"hasTruncateMarker":false,"authors":[{"name":"CiteDrive","title":"https://www.citedrive.com/","mail":"hello@citedrive.com","url":"https://www.citedrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],"frontMatter":{"slug":"citing-and-using-references-on-overleaf-a-guide-for-researchers","title":"Citing and Using References on Overleaf: A Guide for Researchers","authors":{"name":"CiteDrive","title":"https://www.citedrive.com/","mail":"hello@citedrive.com","url":"https://www.citedrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},"tags":["citedrive","overleaf","latex","bibtex","biblatex","natbib"]},"prevItem":{"title":"How to Format Citations and Bibliographies in RStudio with CiteDrive and Quarto","permalink":"/blog/how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto"},"nextItem":{"title":"How to Convert a DOI to a BibTeX Citation Using CiteDrive","permalink":"/blog/how-to-convert-a-doi-to-a-bibtex-citation-using-citedrive"}},"content":"When writing a research paper, it\'s important to use references to support your claims. Citing your sources correctly is key to creating a solid argument and avoiding plagiarism. This guide will show you how to cite references on Overleaf using CiteDrive. We\'ll also give you tips for finding reliable sources online. Let\'s get started!\\n\\n\\n\\n## Step 1: Connecting CiteDrive with Overleaf\\n\\nIf you\'re not already signed in to [Overleaf](https://www.overleaf.com/), you\'ll need to do so now. Then, go to [CiteDrive](https://www.citedrive.com/), create an Overleaf project, and [add references](https://citedrive.medium.com/adding-bibliographic-references-to-overleaf-with-citedrive-325f131e3ca2) to your new project. Your project could look like this:\\n\\n![CiteDrive - Example](@site/static/img/tutorial/citedrive_project_example.png)\\n\\nAfter that, click on \\"bib\\" on the top left of your project. This will open a new tab to the dynamic BibTeX file that you can use for your Overleaf, which will auto-update whenever you or your teammates add, update, or deletes references from your project.\\n\\n\\n\\nFinally, go to Overleaf, create a new file, select \\"From External URL\\", and paste the URL from the dynamic BibTeX to \\"URL to fetch the file from\\" name it here *references.bib*.\\nYour CiteDrive project is now connected to Overleaf! Remember that you need to click on refresh when you make changes in our CiteDrive project so that Overleaf gets the latest state.\\n\\n![Add files to Overleaf](@site/static/img/tutorial/export_bib_to_overleaf.png)\\n\\n## Step 2: Create a TeX document in Overleaf\\n\\nNow let\'s create a new tex-file for Overleaf, which we could call \\"document.tex\\" we can define the bibliography, the BibTeX file from CiteDrive with `\\\\bibliography{references}`. But what bibliography tools should we use? For Bibliography management in LaTeX/Overleaf, there are many options: most likely, natbib, bibtex, and biblatex. For the management of bibliographies in LaTeX, BibTeX is the mainstay that forms the basis for the format. With natbib, BibTeX is provided with an extension that offers more design freedom for in-text citations, and biblatex is a complete revision of BibTeX that offers more reference types, sorting, and filtering options for bibliographies and localization options. While BibteX is the best-known program, BibLaTex is not only just as robust but also the most recommended program for newcomers. The citation and bibliographical data for references and listings are kept in the so-called .bib-file, just as you see in the BibTeX file from CiteDrive. It\'s always in the same format:\\n\\n ```latex\\n @article{smith201X,\\n \\ttitle        = {An interesting article},\\n \\tauthor       = {John Smith},\\n \\tyear         = {201X},\\n \\tjournal      = {Journal of Interesting Articles}\\n }\\n ```\\n\\n Here `@article` is the source type, `title`, `author`, `year` and `journal`, the attributes used to display in your references lists and citations and lastly, `smith201X`, a unique identifier you can use to reference in your document, mainly with cite(key). CiteDrive is not picky about the format; any field and entry type making it work for the bibliographic package of your choice is acceptable. Because CiteDrive\'s fundamental goal is to separate bibliographic data from the document and citation styles, all alternatives are supported by CiteDrive.\\n\\n\\n As a result, we provide three templates below to get you started.\\n\\n ### Getting started with BibTeX:\\n\\n If you want to start with BibTeX, use the following template or open directly to Overleaf. For more information on BibTeX, see the documentation.\\n\\n ```latex title=\\"document.tex\\"\\n \\\\documentclass{article}\\n \\\\usepackage[utf8]{inputenc}\\n\\n \\\\title{BibTeX references in \\\\LaTeX}\\n \\\\author{John Smith}\\n\\n \\\\begin{document}\\n\\n \\\\maketitle\\n\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim urna, dapibus et bibendum vel, consectetur et turpis. Cras a molestie nulla. \\\\cite{Hemingway1952}\\n \\\\medskip\\n\\n \\\\bibliographystyle{unsrt}\\n \\\\bibliography{references}\\n\\n \\\\end{document}\\n ```\\n\\n\\n ### Getting started with natbib:\\n\\n ```latex\\n \\\\documentclass{article}\\n \\\\usepackage{natbib}\\n \\\\bibliographystyle{apalike}\\n \\\\title{A Short Guide to Reference Management using natbib with BibTeX}\\n \\\\author{CiteDrive}\\n \\\\date {January 1988}\\n\\n \\\\begin{document}\\n\\n \\\\maketitle\\n \\\\textbf{Narrative citation:} \\\\citet{Doe:1966} investigated the risks of incorrectly \\\\\\\\\\n recorded [...], which results in distortion.\\n \\\\textbf{Parenthetical citation:} The risks of incorrect recording of [...] could lead to distortion\\n \\\\citep{Doe:1966}.\\n\\n \\\\medskip\\n\\n \\\\bibliography{references}\\n\\n \\\\end{document}\\n\\n ```\\n\\n\\n\\n\\n\\n For more on natbib, please click here.\\n\\n ### Getting started with BibLaTeX:\u200b\\n\\n ```latex\\n \\\\documentclass{article}\\n \\\\usepackage{biblatex}\\n \\\\addbibresource{references.bib}\\n\\n \\\\begin{document}\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim urna, dapibus et bibendum vel, consectetur et turpis. Cras a molestie nulla. \\\\cite{Hemingway1952}\\n \\\\medskip\\n\\n \\\\printbibliography\\n\\n \\\\end{document}\\n ```\\n\\n\\n\\n For more on BibLaTeX, please click here.\\n\\n\\n\\n ## Step 3: In-Text citations\\n\\n\\n\\n If you have the browser extension installed, you can create citations by selecting the text and clicking on the CiteDrive icon in your toolbar.\\n\\n\\n\\n You can also cite references manually using the cite command. For example, if you wanted to cite Smith (201X), you would use `\\\\cite{smith201X}`. Or use the reference search in overleaf.\\n\\n\\n\\n Bibliography styles are preinstalled on Overleaf and depending which package you used references on the following pages:\\n\\n\\n\\n That\'s it! You should now have everything you need to start using references in Overleaf. Please let us know by e-mail at hello@citedrive.com  if you have any questions or feedback.\\n\\n\\n\\n Happy TeXing!"},{"id":"how-to-convert-a-doi-to-a-bibtex-citation-using-citedrive","metadata":{"permalink":"/blog/how-to-convert-a-doi-to-a-bibtex-citation-using-citedrive","editUrl":"https://github.com/citedrive/bibtex.eu/blog/blog/2022-08-12-overleaf-cite.md","source":"@site/blog/2022-08-12-overleaf-cite.md","title":"How to Convert a DOI to a BibTeX Citation Using CiteDrive","description":"If you\'re a researcher, then you know the importance of bibliographies and citations. And if you\'re using CiteDrive, then you know that it\'s the easiest way to create bibliographies and citations for your research papers. But what do you do if you come across a DOI instead of an ISBN or URL? Don\'t worry - we\'ve got you covered! In this blog post, we\'ll show you how to convert a DOI to a BibTeX citation using CiteDrive. Let\'s get started!","date":"2022-08-12T00:00:00.000Z","formattedDate":"August 12, 2022","tags":[{"label":"citedrive","permalink":"/blog/tags/citedrive"},{"label":"bibtex","permalink":"/blog/tags/bibtex"},{"label":"doi","permalink":"/blog/tags/doi"}],"readingTime":1.61,"hasTruncateMarker":false,"authors":[{"name":"CiteDrive","title":"https://www.CiteDrive.com/","mail":"hello@citedrive.com","url":"https://www.CiteDrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],"frontMatter":{"slug":"how-to-convert-a-doi-to-a-bibtex-citation-using-citedrive","title":"How to Convert a DOI to a BibTeX Citation Using CiteDrive","authors":{"name":"CiteDrive","title":"https://www.CiteDrive.com/","mail":"hello@citedrive.com","url":"https://www.CiteDrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},"tags":["citedrive","bibtex","doi"]},"prevItem":{"title":"Citing and Using References on Overleaf: A Guide for Researchers","permalink":"/blog/citing-and-using-references-on-overleaf-a-guide-for-researchers"}},"content":"If you\'re a researcher, then you know the importance of bibliographies and citations. And if you\'re using [CiteDrive](https://www.citedrive.com/), then you know that it\'s the easiest way to create bibliographies and citations for your research papers. But what do you do if you come across a [DOI](/fields/doi/) instead of an ISBN or URL? Don\'t worry - we\'ve got you covered! In this blog post, we\'ll show you how to convert a DOI to a BibTeX citation using CiteDrive. Let\'s get started!\\n\\n\\n\\n## Using the browser extension\\nConverting a DOI to a BibTeX citation is easy if you\'re using the \'CiteDrive Companion\' browser extension. Just highlight the DOI with the mouse, open the context menu with the right mouse button, and select \'Search doi\'.\\n\\n![CiteDrive - Example](@site/static/img/tutorial/browserextension-search-doi.png)\\n\\nAfter that, you\'ll see a BibTeX entry preview where you may change it before saving it to a project of your choosing.\\n\\n![CiteDrive - Example](@site/static/img/tutorial/browserextension-bibtex-preview.png)\\n\\n\\n\\n That\'s it! You will find the companion available from the following browsers:\\n\\n* [CiteDrive Companion Plugin for Google Chrome](https://chrome.google.com/webstore/detail/citedrive-bibtex-companio/gmmonfphegngpcbcapfbgembkjeookik)\\n* [CiteDrive Companion Plugin for Mozilla Firefox](https://addons.mozilla.org/af/firefox/addon/citedrive-companion/)\\n* [CiteDrive Companion Plugin for Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/citedrive-bibtex-compan/kpmepfpbjehnlgfbcnbmgihklkkmfnpo)\\n\\n\\n## Using the online tool:\\nIf you\'re not using the browser extension, don\'t worry - you can still use CiteDrive to convert your DOI to a BibTeX citation. Just go to the CiteDrive website and paste your DOI into the \'Enter DOI\' field, which you can find under Search via Doi when you call up the plus symbol in the upper navigation bar. . Then click on the \'Convert\' button, and voila! - your BibTeX citation will be generated automatically.\\n\\n![CiteDrive - Example](@site/static/img/tutorial/citedrive-search-doi.png)\\n\\n\\n\\n\\n\\n\\nWe hope this blog post has been helpful. If you have any questions, please don\'t hesitate to contact us. We\'re always happy to help!\\n\\nCiteDrive is the easiest way to create bibliographies and citations for your research papers. Convert a DOI to BibTeX citation using CiteDrive today! Try it for free at CiteDrive.com.\\n\\nHappy citing! :)"}]}')}}]);