(()=>{
  if(!window.STORIES)return;
  const s5=window.STORIES.find(s=>s.id===5);
  const s6=window.STORIES.find(s=>s.id===6);
  if(s5)s5.end='0:15:38';
  if(s6)s6.start='0:15:38';
})();
