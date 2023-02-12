var emoji = require('markdown-it-emoji');
// import { parse as emoParse } from 'twemoji';
var md = require('markdown-it')({
  html:true,
  linkify: false,
  })
.use(require('markdown-it-checkbox'))
.use(emoji )
.use(require('markdown-it-multimd-table') , { 
  headerless: true,
  multiline: true
})
.use(require('markdown-it-front-matter'), function(fm) {
  console.log(fm)
});
;



export function renderMd(m){
 return md.render(m);
}
