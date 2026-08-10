const retryTreeFrame=document.querySelector('.topola-frame');
const retryTreeShell=document.querySelector('.tree-shell');
let retryGedcom;
function decodeTreeWithPako(){
  if(retryGedcom)return retryGedcom;
  const bytes=Uint8Array.from(atob(PUBLIC_GEDCOM_GZIP_B64),c=>c.charCodeAt(0));
  retryGedcom=new TextDecoder('utf-8').decode(window.pako.ungzip(bytes));
  return retryGedcom;
}
function sendTreeWithPako(){
  if(!retryTreeFrame?.contentWindow||!window.pako)return;
  try{
    retryTreeFrame.contentWindow.postMessage({message:'gedcom',gedcom:decodeTreeWithPako()},'*');
    retryTreeShell?.classList.remove('tree-error');
  }catch(error){
    console.error('Family tree fallback decoder error',error);
  }
}
window.addEventListener('message',event=>{
  if(retryTreeFrame&&event.source===retryTreeFrame.contentWindow&&event.data?.message==='ready')sendTreeWithPako();
});
retryTreeFrame?.addEventListener('load',()=>setTimeout(()=>retryTreeFrame.contentWindow?.postMessage({message:'parent_ready'},'*'),100));
