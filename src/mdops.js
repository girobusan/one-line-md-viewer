const yaml = require('js-yaml');
const emoji = require('markdown-it-emoji');
const frm = require('markdown-it-front-matter');

const md = require('markdown-it')({
  html:true,
  linkify: false,
  })
.use(require('markdown-it-checkbox'))
.use(emoji )
.use(require('markdown-it-multimd-table') , { 
  headerless: true,
  multiline: true
})
;



export function renderMd(m){
  const r = {};
  md.use(frm , (f)=>{
    try{
       r.fm = yaml.load(f);
    }catch(e){
       console.error("Can not parse frontmatter:" , e)
    }
  } );
  r.html = md.render(m);
  return r;
}
