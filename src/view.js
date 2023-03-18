import { renderMd } from "./mdops";
require("./simple.scss")
require("./additions.scss")
window.mdRendered = false;


window.addEventListener("DOMContentLoaded", ()=>{
  if(window.mdRendered){
  return}
  window.mdRendered = true;
  const b = document.body.innerHTML;
  const m = document.createElement("main");
  const rendered = renderMd(b);
  m.innerHTML = rendered.html;
  document.body.innerHTML = m.outerHTML;
  if(rendered.fm && rendered.fm.title){
      window.document.title = rendered.fm.title;
      return;
  }
  try{
    const h = document.body.querySelectorAll("h1,h2,h3")[0];
    window.document.title = h.innerText;
  }catch{
    console.info("No title found.");
  }
})
