
:sunglasses: <br />How to publish markdown document with one line of code
======================================================

This idea is borrowed from [ blogtini ](https://github.com/traceypooh/blogtini) project.

1. Locate your markdown document
1. Download `view.js` file from `dist` folder of this repo and put it in the same folder.
1. Edit your markdown file, add line `<script src="view.js"></script>` at the end.
1. Change extension of markdown file to `html`
1. Open it in browser. It looks like nicely formatted HTML.

How does it work
----------------

1. Browser loads your markdown-in-html, and interprets it as HTML.
1. As your file does not have basic HTML structures, browser adds HEEAD and BODY tags, and puts all content to BODY.
1. Browser loads the script.
1. The script reads the document body content (which is markdown), renders it to HTML, and replaces body content with the rendered one, also adding some [ style ](https://simplecss.org/) and page title. 


 <script src="view.js"></script>
