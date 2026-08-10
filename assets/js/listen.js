(()=>{
  const player=document.getElementById('archiveAudio');
  const list=document.getElementById('chapterList');
  if(!player||!list||!window.STORIES)return;
  const nowNumber=document.getElementById('nowNumber');
  const nowTitle=document.getElementById('nowTitle');
  const nowMeta=document.getElementById('nowMeta');
  const fallback=document.getElementById('driveFallback');
  const errorBox=document.getElementById('playerError');
  const autoAdvance=document.getElementById('autoAdvance');
  let current=0;
  const pad=n=>String(n).padStart(3,'0');
  const seconds=t=>t.split(':').map(Number).reduce((a,n)=>a*60+n,0);
  const dur=s=>{const total=Math.max(0,seconds(s.end)-seconds(s.start)),m=Math.floor(total/60),x=total%60;return `${m}:${String(x).padStart(2,'0')}`};
  function rows(){
    list.innerHTML=STORIES.map((s,i)=>`<article class="chapter-row" data-index="${i}"><div class="chapter-num">${pad(s.id)}</div><div class="chapter-copy"><h3>${s.title}</h3><p>${s.start} · ${dur(s)} · ${s.speaker}</p></div><div class="chapter-actions"><button class="chapter-play" data-play="${i}">▶ Play</button><a class="chapter-story" href="story.html?id=${s.id}">Story page ↗</a></div></article>`).join('');
    list.querySelectorAll('[data-play]').forEach(btn=>btn.addEventListener('click',()=>select(Number(btn.dataset.play),true,true)));
  }
  function paint(){
    list.querySelectorAll('.chapter-row').forEach((row,i)=>row.classList.toggle('active',i===current));
  }
  function select(i,autoplay=false,scroll=false){
    if(i<0||i>=STORIES.length)return;
    current=i;
    const s=STORIES[current];
    nowNumber.textContent=pad(s.id);
    nowTitle.textContent=s.title;
    nowMeta.textContent=`${s.speaker} · ${dur(s)}`;
    fallback.href=s.audioUrl||'#';
    errorBox.hidden=true;
    player.src=s.audio||'';
    player.load();
    paint();
    history.replaceState(null,'',`listen.html?chapter=${s.id}`);
    if(scroll){
      const row=list.querySelector(`[data-index="${current}"]`);
      row&&row.scrollIntoView({behavior:'smooth',block:'center'});
    }
    if(autoplay){
      const p=player.play();
      if(p&&p.catch)p.catch(()=>{});
    }
  }
  player.addEventListener('ended',()=>{
    if(autoAdvance.checked&&current<STORIES.length-1)select(current+1,true,true);
  });
  player.addEventListener('error',()=>{errorBox.hidden=false});
  document.getElementById('playBeginning').addEventListener('click',()=>select(0,true,true));
  document.getElementById('prevChapter').addEventListener('click',()=>select(Math.max(0,current-1),true,true));
  document.getElementById('nextChapter').addEventListener('click',()=>select(Math.min(STORIES.length-1,current+1),true,true));
  rows();
  const requested=Number(new URLSearchParams(location.search).get('chapter'));
  const idx=Number.isFinite(requested)?STORIES.findIndex(s=>s.id===requested):-1;
  select(idx>=0?idx:0,false,false);
})();