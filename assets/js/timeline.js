(() => {
  const buttons=[...document.querySelectorAll('.timeline-filter')];
  const events=[...document.querySelectorAll('.life-event')];
  const count=document.querySelector('#timelineCount');
  if(!buttons.length||!events.length)return;

  function eventFor(year, kicker){
    return events.find(event=>{
      const y=event.querySelector('.life-event-date strong')?.textContent.trim();
      const k=event.querySelector('.life-kicker')?.textContent.trim();
      return y===year && (!kicker || k===kicker);
    });
  }
  function setPhoto(year, src, alt, options={}){
    const event=eventFor(year, options.kicker);
    if(!event)return;
    const card=event.querySelector('.life-event-card');
    let photo=card.querySelector('.life-photo');
    if(!photo){
      photo=document.createElement('div');
      photo.className='life-photo';
      const links=card.querySelector('.life-story-links');
      card.insertBefore(photo,links||null);
    }
    if(options.replaceFirst && photo.querySelector('img')){
      const img=photo.querySelector('img');
      img.src=src;
      img.alt=alt;
      return;
    }
    photo.className='life-photo';
    photo.innerHTML=`<img src="${src}" alt="${alt}">`;
  }

  // Requested timeline additions / swaps.
  setPhoto('1977','https://upload.wikimedia.org/wikipedia/commons/3/35/Hoboken_PO_jeh.jpg','Hoboken Main Post Office on River Street.');
  setPhoto('1981','https://drive.google.com/thumbnail?id=1GnEj5mgA_ZJ5b7b3DZuXxn1fiBGifidx&sz=w1600','Sam and Marietta during their Manalapan years.');
  setPhoto('1982','https://drive.google.com/thumbnail?id=16HmxOSReFeMPOmDpTCrNekWD25LqU4oR&sz=w1600','Family photograph from 1982.');
  setPhoto('1991','https://drive.google.com/thumbnail?id=1byvsnj3nlTkGbYV71XBO2O7R_azGjCZ1&sz=w1800','Sam and Marietta’s Bridle Lane home in Washington, New Jersey.');
  setPhoto('2022','https://drive.google.com/thumbnail?id=1zyRuD96_loQ-QS9p8Gy0TOdbIPPQgdS4&sz=w1600','Sam and Marietta together in 2022.',{kicker:'Seventy-five years',replaceFirst:true});

  // The 1945 V-J Day / lost-hat entry previously reused the same Navy portrait
  // already shown in the 1943–46 service entry. Use a different hat image here.
  setPhoto('1945','https://drive.google.com/thumbnail?id=0BxGndm7F7w5EUkpGUEFVNXc3SU0&sz=w1600','Sam’s Navy hat, connected to the Vancouver V-J Day story.');

  // Flag any accidental exact-image reuse during future edits.
  const seen=new Set();
  document.querySelectorAll('.life-timeline .life-photo img').forEach(img=>{
    if(seen.has(img.src)) console.warn('Duplicate timeline image:',img.src);
    seen.add(img.src);
  });

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
