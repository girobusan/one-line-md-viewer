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
  m.innerHTML = renderMd(b);
  document.body.innerHTML = m.outerHTML;
  try{
    const h = document.body.querySelectorAll("h1,h2,h3")[0];
    window.document.title = h.innerText;
  }catch{
    console.info("No title found.");
  }
})
