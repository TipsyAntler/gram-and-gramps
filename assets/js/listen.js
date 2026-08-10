(()=>{
  const frame=document.getElementById('archiveAudioFrame');
  const list=document.getElementById('chapterList');
  if(!frame||!list||!window.STORIES||!window.FULL_RECORDING)return;
  const nowNumber=document.getElementById('nowNumber');
  const nowTitle=document.getElementById('nowTitle');
  const nowMeta=document.getElementById('nowMeta');
  const fallback=document.getElementById('driveFallback');
  let current=-1;
  const pad=n=>String(n).padStart(3,'0');
  const seconds=t=>t.split(':').map(Number).reduce((a,n)=>a*60+n,0);
  const dur=s=>{const total=Math.max(0,seconds(s.end)-seconds(s.start)),m=Math.floor(total/60),x=total%60;return `${m}:${String(x).padStart(2,'0')}`};
  function rows(){
    list.innerHTML=STORIES.map((s,i)=>`<article class="chapter-row" data-index="${i}"><div class="chapter-num">${pad(s.id)}</div><div class="chapter-copy"><h3>${s.title}</h3><p>${s.start} · ${dur(s)} · ${s.speaker}</p></div><div class="chapter-actions"><button class="chapter-play" data-play="${i}">Load chapter</button><a class="chapter-story" href="story.html?id=${s.id}">Story page ↗</a></div></article>`).join('');
    list.querySelectorAll('[data-play]').forEach(btn=>btn.addEventListener('click',()=>selectChapter(Number(btn.dataset.play),true)));
  }
  function paint(){
    list.querySelectorAll('.chapter-row').forEach((row,i)=>row.classList.toggle('active',i===current));
  }
  function selectFull(){
    current=-1;
    nowNumber.textContent='FULL';
    nowTitle.textContent='The complete recording';
    nowMeta.textContent='December 26, 2018 · 1:55:52';
    frame.src=FULL_RECORDING.preview;
    fallback.href=FULL_RECORDING.url;
    paint();
    history.replaceState(null,'','listen.html');
  }
  function selectChapter(i,scroll=false){
    if(i<0||i>=STORIES.length)return;
    current=i;
    const s=STORIES[current];
    nowNumber.textContent=pad(s.id);
    nowTitle.textContent=s.title;
    nowMeta.textContent=`${s.speaker} · ${dur(s)}`;
    frame.src=s.audioPreview||'';
    fallback.href=s.audioUrl||'#';
    paint();
    history.replaceState(null,'',`listen.html?chapter=${s.id}`);
    if(scroll){
      const row=list.querySelector(`[data-index="${current}"]`);
      row&&row.scrollIntoView({behavior:'smooth',block:'center'});
    }
  }
  document.getElementById('fullRecording').addEventListener('click',selectFull);
  document.getElementById('prevChapter').addEventListener('click',()=>selectChapter(current<=0?0:current-1,true));
  document.getElementById('nextChapter').addEventListener('click',()=>selectChapter(current<0?0:Math.min(STORIES.length-1,current+1),true));
  rows();
  const raw=new URLSearchParams(location.search).get('chapter');
  const requested=raw===null?NaN:Number(raw);
  const idx=Number.isFinite(requested)?STORIES.findIndex(s=>s.id===requested):-1;
  if(idx>=0)selectChapter(idx,false);else selectFull();
})();