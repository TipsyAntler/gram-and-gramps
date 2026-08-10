storyImage=function(s){
  const f=window.STORY_FEATURES&&window.STORY_FEATURES[s.id];
  if(f&&f.image)return f.image;
  return ARCHIVE_IMAGES.wedding;
};
function locationMarkup(f){
  if(!f.locations||!f.locations.length)return '';
  const cards=f.locations.map(loc=>{
    const href=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.query)}`;
    const embed=`https://www.google.com/maps?q=${encodeURIComponent(loc.query)}&output=embed`;
    return `<article class="location-card"><div class="location-map-wrap"><iframe class="location-map" src="${embed}" title="Map of ${loc.label}" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe></div><div class="location-copy"><div class="eyebrow">On the map</div><h3>${loc.label}</h3><p>${loc.note||''}</p><a class="button map-button" href="${href}" target="_blank" rel="noopener">Open in Google Maps ↗</a></div></article>`;
  }).join('');
  return `<section class="location-section"><div class="section-head mini"><div><div class="eyebrow">Where it happened</div><h2>Put the story on the map.</h2></div></div><div class="location-grid">${cards}</div></section>`;
}
renderStoryPage=function(){
  const root=$('#storyPage');if(!root)return;
  const id=Number(new URLSearchParams(location.search).get('id')??1),s=STORIES.find(x=>x.id===id)||STORIES[1],f=(window.STORY_FEATURES&&window.STORY_FEATURES[s.id])||{};
  document.title=`${s.title} — Gram & Gramps`;
  const related=STORIES.filter(x=>x.id!==s.id&&(x.group===s.group||x.era===s.era)).slice(0,3);
  const quote=f.quote?`<figure class="story-quote"><blockquote>${f.quote}</blockquote><figcaption>${f.quoteBy||s.speaker}</figcaption></figure>`:'';
  const context=f.context?`<section class="archive-note"><div class="eyebrow">Archive note</div><h3>${f.contextTitle||'A little more context'}</h3><p>${f.context}</p></section>`:'';
  const photoNote=f.photoNote?`<div class="photo-note">${f.photoNote}</div>`:'';
  const locations=locationMarkup(f);
  root.innerHTML=`<section class="story-hero"><img src="${storyImage(s)}" alt=""><div class="story-hero-overlay"></div><div class="story-hero-copy wrap"><div class="eyebrow light">${padId(s.id)} · ${s.group} · ${duration(s.start,s.end)}</div><h1>${s.title}</h1><p>${s.teaser}</p></div>${photoNote}</section><section class="section wrap story-layout"><div class="story-main"><div class="audio-box"><div><div class="eyebrow">Original recording · December 26, 2018</div><h2>Hear it in their voices</h2></div>${audioMarkup(s)}</div>${quote}<div class="prose"><h2>About this story</h2><p>${s.teaser}</p></div>${context}${locations}</div><aside class="fact-panel"><div><span>Primary speaker</span><strong>${s.speaker}</strong></div><div><span>Era</span><strong>${s.era}</strong></div><div><span>Places</span><strong>${s.place}</strong></div><div><span>People mentioned</span><strong>${s.people}</strong></div></aside></section><section class="section wrap"><div class="section-head"><div><div class="eyebrow">Keep listening</div><h2>Related stories</h2></div></div><div class="story-grid compact">${related.map(storyCard).join('')}</div></section>`;
};
