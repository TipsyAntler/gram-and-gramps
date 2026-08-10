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
function cultureMarkup(storyId){
  const notes=window.STORY_CULTURE&&window.STORY_CULTURE[storyId];
  if(!notes||!notes.length)return '';
  const cards=notes.map(item=>{
    const source=item.source?`<a class="culture-source" href="${item.source}" target="_blank" rel="noopener">${item.sourceLabel||'Read the cultural context ↗'}</a>`:'';
    return `<article class="culture-card"><div class="culture-mark" aria-hidden="true">IT</div><div class="culture-card-copy"><div class="eyebrow">${item.kicker||'Italian thread'}</div><h3>${item.title}</h3>${item.spoken?`<p class="culture-spoken"><strong>In their words:</strong> ${item.spoken}</p>`:''}<p>${item.body}</p>${source}</div></article>`;
  }).join('');
  return `<section class="culture-section"><div class="section-head mini"><div><div class="eyebrow">Family &amp; culture</div><h2>The Italian threads inside the story.</h2><p>Small words, customs and references that carry more family history than they first seem to.</p></div></div><div class="culture-grid">${cards}</div></section>`;
}
function moreMarkup(storyId){
  const r=window.STORY_RESEARCH&&window.STORY_RESEARCH[storyId];
  if(!r||!r.cards||!r.cards.length)return '';
  const cards=r.cards.map(item=>{
    const media=item.image?`<div class="index-card-media"><img src="${item.image}" alt="Archive image connected to this story."></div>`:'';
    const youtube=item.youtube?`<div class="video-wrap"><iframe src="${item.youtube}" title="Find Sam's Hat television segment" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`:'';
    const spotify=item.spotify?`<div class="spotify-wrap"><iframe src="${item.spotify}" title="Spotify player" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></div>`:'';
    const link=item.link?`<a class="index-card-link" href="${item.link}" target="_blank" rel="noopener">${item.linkLabel||'Open source ↗'}</a>`:'';
    return `<article class="index-card"><div class="index-card-kicker">${item.kicker||'From the files'}</div><h3>${item.title}</h3><p>${item.body}</p>${media}${youtube}${spotify}${link}</article>`;
  }).join('');
  return `<section class="more-section"><div class="section-head mini"><div><div class="eyebrow">From Gramps' desk</div><h2>More to the story.</h2></div></div><div class="more-grid">${cards}</div></section>`;
}
renderStoryPage=function(){
  const root=$('#storyPage');if(!root)return;
  const id=Number(new URLSearchParams(location.search).get('id')??1),s=STORIES.find(x=>x.id===id)||STORIES[1],f=(window.STORY_FEATURES&&window.STORY_FEATURES[s.id])||{};
  document.title=`${s.title} — Gram & Gramps`;
  const related=STORIES.filter(x=>x.id!==s.id&&(x.group===s.group||x.era===s.era)).slice(0,3);
  const quote=f.quote?`<figure class="story-quote"><blockquote>${f.quote}</blockquote><figcaption>${f.quoteBy||s.speaker}</figcaption></figure>`:'';
  const context=f.context?`<section class="archive-note"><div class="eyebrow">From the files</div><h3>${f.contextTitle||'A little more context'}</h3><p>${f.context}</p></section>`:'';
  const photoNote=f.photoNote?`<div class="photo-note">${f.photoNote}</div>`:'';
  const culture=cultureMarkup(s.id);
  const locations=locationMarkup(f);
  const more=moreMarkup(s.id);
  root.innerHTML=`<section class="story-hero"><img src="${storyImage(s)}" alt=""><div class="story-hero-overlay"></div><div class="story-hero-copy wrap"><div class="eyebrow light">${padId(s.id)} · ${s.group} · ${duration(s.start,s.end)}</div><h1>${s.title}</h1><p>${s.teaser}</p></div>${photoNote}</section><section class="section wrap story-layout"><div class="story-main"><div class="audio-box"><div><div class="eyebrow">Original recording · December 26, 2018</div><h2>Hear it in their voices</h2></div>${audioMarkup(s)}</div>${quote}<div class="prose"><h2>About this story</h2><p>${s.teaser}</p></div>${culture}${context}${more}${locations}</div><aside class="fact-panel"><div><span>Primary speaker</span><strong>${s.speaker}</strong></div><div><span>Era</span><strong>${s.era}</strong></div><div><span>Places</span><strong>${s.place}</strong></div><div><span>People mentioned</span><strong>${s.people}</strong></div></aside></section><section class="section wrap"><div class="section-head"><div><div class="eyebrow">Keep listening</div><h2>Related stories</h2></div></div><div class="story-grid compact">${related.map(storyCard).join('')}</div></section>`;
};
