"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Using LaTeX (Quick start)","href":"/","docId":"intro"},{"type":"link","label":"Using R Markdown (Quick start)","href":"/rmarkdown","docId":"rmarkdown"},{"type":"link","label":"Using Natbib (Quick start)","href":"/natbib","docId":"natbib"},{"type":"category","label":"BibTeX FAQ","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"How can I use BibTeX to cite a website in LaTeX?","href":"/faq/how-can-i-use-bibtex-to-cite-a-website","docId":"faq/how-can-i-use-bibtex-to-cite-a-website"},{"type":"link","label":"How do I create a .BIB file to manage my BibTeX references?","href":"/faq/how-do-i-create-a-bib-file-to-manage-my-bibtex-references","docId":"faq/how-do-i-create-a-bib-file-to-manage-my-bibtex-references"}],"href":"/faq/"},{"type":"category","label":"BibTeX Fields","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"address","href":"/fields/address","docId":"fields/address"},{"type":"link","label":"annote","href":"/fields/annote","docId":"fields/annote"},{"type":"link","label":"author","href":"/fields/author","docId":"fields/author"},{"type":"link","label":"booktitle","href":"/fields/booktitle","docId":"fields/booktitle"},{"type":"link","label":"chapter","href":"/fields/chapter","docId":"fields/chapter"},{"type":"link","label":"crossref","href":"/fields/crossref","docId":"fields/crossref"},{"type":"link","label":"doi","href":"/fields/doi","docId":"fields/doi"},{"type":"link","label":"edition","href":"/fields/edition","docId":"fields/edition"},{"type":"link","label":"editor","href":"/fields/editor","docId":"fields/editor"},{"type":"link","label":"email","href":"/fields/email","docId":"fields/email"},{"type":"link","label":"howpublished","href":"/fields/howpublished","docId":"fields/howpublished"},{"type":"link","label":"institution","href":"/fields/institution","docId":"fields/institution"},{"type":"link","label":"journal","href":"/fields/journal","docId":"fields/journal"},{"type":"link","label":"month","href":"/fields/month","docId":"fields/month"},{"type":"link","label":"note","href":"/fields/note","docId":"fields/note"},{"type":"link","label":"number","href":"/fields/number","docId":"fields/number"},{"type":"link","label":"organization","href":"/fields/organization","docId":"fields/organization"},{"type":"link","label":"pages","href":"/fields/pages","docId":"fields/pages"},{"type":"link","label":"publisher","href":"/fields/publisher","docId":"fields/publisher"},{"type":"link","label":"school","href":"/fields/school","docId":"fields/school"},{"type":"link","label":"series","href":"/fields/series","docId":"fields/series"},{"type":"link","label":"title","href":"/fields/title","docId":"fields/title"},{"type":"link","label":"type","href":"/fields/type","docId":"fields/type"},{"type":"link","label":"volume","href":"/fields/volume","docId":"fields/volume"},{"type":"link","label":"year","href":"/fields/year","docId":"fields/year"}],"href":"/fields/"},{"type":"category","label":"BibTeX Entry types","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"article","href":"/types/article","docId":"types/article"},{"type":"link","label":"misc","href":"/types/misc","docId":"types/misc"}],"href":"/types/"}]},"docs":{"faq/how-can-i-use-bibtex-to-cite-a-website":{"id":"faq/how-can-i-use-bibtex-to-cite-a-website","title":"How can I use BibTeX to cite a website in LaTeX?","description":"There are several ways to cite a website in LaTeX. In this short answer to the question, we give three, the easiest being BibLaTeX via the CiteDrive browser extension in the last example.","sidebar":"tutorialSidebar"},"faq/how-do-i-create-a-bib-file-to-manage-my-bibtex-references":{"id":"faq/how-do-i-create-a-bib-file-to-manage-my-bibtex-references","title":"How do I create a .BIB file to manage my BibTeX references?","description":"If you\'re looking for a way to manage your BibTeX references, you may be wondering how to create a .BIB file. In this article, we\'ll show you how to do it! We\'ll also provide some tips on how to use \\".BIB\\" files effectively.","sidebar":"tutorialSidebar"},"faq/index":{"id":"faq/index","title":"BibTeX FAQ","description":"","sidebar":"tutorialSidebar"},"fields/address":{"id":"fields/address","title":"address","description":"The address-field contains the publisher\'s (or any other institution) address.","sidebar":"tutorialSidebar"},"fields/annote":{"id":"fields/annote","title":"annote","description":"BibTeX Field type","sidebar":"tutorialSidebar"},"fields/author":{"id":"fields/author","title":"author","description":"In the `author`-field, you can specify all contributors to the work you want to cite. BibTeX has several ways of specifying author names but expects in all cases a consistent and exact arrangement so that inaccurate information could lead to the unwanted output of the author\'s name.","sidebar":"tutorialSidebar"},"fields/booktitle":{"id":"fields/booktitle","title":"booktitle","description":"To cite an `incollection, i.e., a part of a book/collection with its own title, or to give a title to an article, part of an inproceedings, the booktitle-field is used to distinguish. At the same time, title contains the title of the book, or incproceedings`.","sidebar":"tutorialSidebar"},"fields/chapter":{"id":"fields/chapter","title":"chapter","description":"chapter","sidebar":"tutorialSidebar"},"fields/crossref":{"id":"fields/crossref","title":"crossref","description":"If you have several entries referring to the same proceedings, you can use crossref to specify fields common to several entries only once by defining crossref = . Where citationkey is the citation key of the cross-referenced entry.","sidebar":"tutorialSidebar"},"fields/doi":{"id":"fields/doi","title":"doi","description":"`doi is used to store any DOI (Digital Object Identifier of the International DOI Foundation). DOI is a digital identifier that is intended to be permanent and unique. It is used, among other things, and mostly for articles from scientific journals. It can be used in article, but more rarely also in chapter, book, or inproceedings / conference`. This field is optional in all cases.","sidebar":"tutorialSidebar"},"fields/edition":{"id":"fields/edition","title":"edition","description":"The edition of a book, e.g. \\"edition = \\" Entering an ordinal number is recommended by default, and the first letter is usually capitalised.","sidebar":"tutorialSidebar"},"fields/editor":{"id":"fields/editor","title":"editor","description":"In the `editor`-field, you can specify all editors to the work you want to cite. BibTeX has several ways of specifying editor names but expects in all cases a consistent and exact arrangement so that inaccurate information could lead to the unwanted output of the editor\'s name.","sidebar":"tutorialSidebar"},"fields/email":{"id":"fields/email","title":"email","description":"Email includes the email address of the stated authors if you want to indicate them. It\'s not a common field and might not be supported.","sidebar":"tutorialSidebar"},"fields/howpublished":{"id":"fields/howpublished","title":"howpublished","description":"The howpublished field is used with the @misc entry, typically as a workaround for a source type BibTeX does not support. The most common example is when citing web pages and specifying a URL.","sidebar":"tutorialSidebar"},"fields/index":{"id":"fields/index","title":"BibTeX Fields","description":"A single BibTeX entry can hold the following fields. Note which are optional, required or ignored.","sidebar":"tutorialSidebar"},"fields/institution":{"id":"fields/institution","title":"institution","description":"The institution field is used together with the @techreport entry to specify the name of the institution that issued the report.","sidebar":"tutorialSidebar"},"fields/journal":{"id":"fields/journal","title":"journal","description":"The name of the journal in which the journal was published.","sidebar":"tutorialSidebar"},"fields/month":{"id":"fields/month","title":"month","description":"The month of publication, or creation if unpublished.","sidebar":"tutorialSidebar"},"fields/note":{"id":"fields/note","title":"note","description":"The notes field can be used to store additional information about a particular BibTeX entry that may be relevant to the reader or that is needed for a particular entry type and citation style but does not fit in any other field.","sidebar":"tutorialSidebar"},"fields/number":{"id":"fields/number","title":"number","description":"Usually the issue number (or similar identifier) of a journal, magazine or the number of technical report.","sidebar":"tutorialSidebar"},"fields/organization":{"id":"fields/organization","title":"organization","description":"Usually, an institution, the name of the conference sponsor/organizer is used here.","sidebar":"tutorialSidebar"},"fields/pages":{"id":"fields/pages","title":"pages","description":"Page range of, for example, a book. You can separate these either with commas or double dashes.","sidebar":"tutorialSidebar"},"fields/publisher":{"id":"fields/publisher","title":"publisher","description":"The name of the publisher of the book being cited.","sidebar":"tutorialSidebar"},"fields/school":{"id":"fields/school","title":"school","description":"school is specified when a phdthesis or mastersthesis is cited and is the educational institution where the student wrote the dissertation. This field is required in both entry types.","sidebar":"tutorialSidebar"},"fields/series":{"id":"fields/series","title":"series","description":"The field can, for example, optionally be used to specify the book series in which the book (or similar) was published.","sidebar":"tutorialSidebar"},"fields/title":{"id":"fields/title","title":"title","description":"The title field is saved for the title of a work to be cited. LaTeX-specific writing, such as capitalisation, should be taken into account.","sidebar":"tutorialSidebar"},"fields/type":{"id":"fields/type","title":"type","description":"Within the BibTeX entry, the type field is used to declare an explicit type, i.e. for technical report \\"Research Note\\", or \\"Government Report\\".","sidebar":"tutorialSidebar"},"fields/volume":{"id":"fields/volume","title":"volume","description":"The \'volume\' field is used to enter the volume of a journal or multi-volume book.","sidebar":"tutorialSidebar"},"fields/year":{"id":"fields/year","title":"year","description":"The year of publication, or creation if unpublished.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Reference management with BibTeX -- A short guide","description":"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.","sidebar":"tutorialSidebar"},"natbib":{"id":"natbib","title":"A Short Guide to Reference Management using natbib with BibTeX","description":"Natbib is a LaTeX package that allows you to customise citations in the text around the \\\\CITE command. This short tutorial shows you how to manage your references with BibTeX and natbib. ","sidebar":"tutorialSidebar"},"rmarkdown":{"id":"rmarkdown","title":"Reference management with BibTeX, when using R Markdown -- A short guide","description":"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.","sidebar":"tutorialSidebar"},"types/article":{"id":"types/article","title":"BibTeX article type","description":"Scientific articles from a journal or magazine are usually stored with the article type in the .bib file. Required fields are author, title, journal, year, and volume. Number, pages, month, doi, annotation, and key are optional fields.","sidebar":"tutorialSidebar"},"types/index":{"id":"types/index","title":"BibTeX Entry types","description":"BibTeX can support the following types of entries:","sidebar":"tutorialSidebar"},"types/misc":{"id":"types/misc","title":"BibTeX misc type","description":"Used when none of the other entry types in BibTeX do justice to the source. This could be pieces of music or lecture slides, but mostly it is to cite web pages. These unsupported source types are created with workaround fields from note and howpublished. If you frequently cite source types not supported by BibTex, you should look at BibLaTex, which offers a superset in terms of fields and types.","sidebar":"tutorialSidebar"}}}')}}]);