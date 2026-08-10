(() => {
  const buttons=[...document.querySelectorAll('.timeline-filter')];
  const events=[...document.querySelectorAll('.life-event')];
  const count=document.querySelector('#timelineCount');
  if(!buttons.length||!events.length)return;

  function apply(filter){
    let visible=0;
    events.forEach(event=>{
      const show=filter==='all'||event.dataset.era===filter;
      event.hidden=!show;
      if(show)visible++;
    });
    buttons.forEach(button=>{
      const active=button.dataset.timelineFilter===filter;
      button.classList.toggle('active',active);
      button.setAttribute('aria-pressed',String(active));
    });
    if(count)count.textContent=`${visible} ${visible===1?'moment':'moments'} shown`;
  }

  buttons.forEach(button=>button.addEventListener('click',()=>{
    const filter=button.dataset.timelineFilter||'all';
    apply(filter);
    const url=new URL(location.href);
    if(filter==='all')url.searchParams.delete('era');else url.searchParams.set('era',filter);
    history.replaceState(null,'',url);
  }));

  const requested=new URLSearchParams(location.search).get('era');
  const valid=buttons.some(button=>button.dataset.timelineFilter===requested);
  apply(valid?requested:'all');
})();
