storyImage=function(s){const f=window.STORY_FEATURES&&window.STORY_FEATURES[s.id];if(f&&f.image)return f.image;return ARCHIVE_IMAGES.wedding};
storyFocusStyle=function(s,mode='thumb'){const f=window.STORY_FEATURES&&window.STORY_FEATURES[s.id]||{};const hero=mode==='hero';const focus=(hero?f.heroFocus:f.thumbFocus)||f.focus||'50% 24%';const mobile=(hero?f.mobileHeroFocus:f.mobileThumbFocus)||f.mobileFocus||focus;return `--story-focus:${focus};--story-focus-mobile:${mobile};`};
function speakerDisplay(value){return String(value||'').split(';').map(v=>v.trim()).filter(Boolean).join(' · ')}
function transcriptMarkup(storyId){
  const t=window.STORY_TRANSCRIPTS&&window.STORY_TRANSCRIPTS[storyId];if(!t||!t.lines||!t.lines.length)return '';
  const lines=t.lines.map(([speaker,text])=>`<div class="transcript-line"><div class="transcript-speaker">${speaker}</div><p>${text}</p></div>`).join('');
  return `<section class="transcript-section"><details class="transcript-details"><summary><span><span class="eyebrow">From the recording</span><strong>Read transcript</strong></span><span class="transcript-toggle" aria-hidden="true">+</span></summary><div class="transcript-body">${t.note?`<p class="transcript-note">${t.note}</p>`:''}${lines}</div></details></section>`;
}
function locationMarkup(f){
  if(!f.locations||!f.locations.length)return '';
  const cards=f.locations.map(loc=>{const href=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.query)}`,embed=`https://www.google.com/maps?q=${encodeURIComponent(loc.query)}&output=embed`;return `<article class="location-card"><div class="location-map-wrap"><iframe class="location-map" src="${embed}" title="Map of ${loc.label}" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe></div><div class="location-copy"><div class="eyebrow">On the map</div><h3>${loc.label}</h3><p>${loc.note||''}</p><a class="button map-button" href="${href}" target="_blank" rel="noopener">Open in Google Maps ↗</a></div></article>`}).join('');
  return `<section class="location-section"><div class="section-head mini"><div><div class="eyebrow">Where it happened</div><h2>Put the story on the map.</h2></div></div><div class="location-grid">${cards}</div></section>`;
}
function cultureMarkup(storyId){
  const notes=window.STORY_CULTURE&&window.STORY_CULTURE[storyId];if(!notes||!notes.length)return '';
  const cards=notes.map(item=>{const source=item.source?`<a class="culture-source" href="${item.source}" target="_blank" rel="noopener">${item.sourceLabel||'Read more ↗'}</a>`:'';return `<article class="culture-card"><div class="culture-card-copy">${item.kicker?`<div class="eyebrow">${item.kicker}</div>`:''}<h3>${item.title}</h3>${item.spoken?`<p class="culture-spoken">${item.spoken}</p>`:''}<p>${item.body}</p>${source}</div></article>`}).join('');
  return `<section class="culture-section"><div class="culture-grid">${cards}</div></section>`;
}
function moreMarkup(storyId){
  const r=window.STORY_RESEARCH&&window.STORY_RESEARCH[storyId];if(!r||!r.cards||!r.cards.length)return '';
  const cards=r.cards.map(item=>{const media=item.image?`<div class="index-card-media"><img src="${item.image}" alt="Archive image connected to this story."></div>`:'',youtube=item.youtube?`<div class="video-wrap"><iframe src="${item.youtube}" title="Family-history video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`:'',spotify=item.spotify?`<div class="spotify-wrap"><iframe src="${item.spotify}" title="Spotify player" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></div>`:'',bullets=Array.isArray(item.bullets)&&item.bullets.length?`<ul class="index-card-bullets">${item.bullets.map(point=>`<li>${point}</li>`).join('')}</ul>`:'',link=item.link?`<a class="index-card-link" href="${item.link}" target="_blank" rel="noopener">${item.linkLabel||'Open source ↗'}</a>`:'';return `<article class="index-card"><div class="index-card-kicker">${item.kicker||'More context'}</div><h3>${item.title}</h3><p>${item.body}</p>${bullets}${media}${youtube}${spotify}${link}</article>`});
  if(storyId===21&&r.cards.length>=3){
    return `<section class="more-section"><div class="more-grid more-grid-21"><div class="more-column">${cards[0]}${cards[2]}</div><div class="more-column">${cards[1]}${cards.slice(3).join('')}</div></div></section>`;
  }
  return `<section class="more-section"><div class="more-grid">${cards.join('')}</div></section>`;
}
function sequenceMarkup(s){
  const index=STORIES.findIndex(x=>x.id===s.id),prev=index>0?STORIES[index-1]:null,next=index>=0&&index<STORIES.length-1?STORIES[index+1]:null;
  const prevLink=prev?`<a class="story-sequence-link prev" href="story.html?id=${prev.id}"><span>← Previous Story</span><strong>${padId(prev.id)} · ${prev.title}</strong></a>`:'<span></span>';
  const nextLink=next?`<a class="story-sequence-link next" href="story.html?id=${next.id}"><span>Next Story →</span><strong>${padId(next.id)} · ${next.title}</strong></a>`:'<span></span>';
  return `<nav class="story-sequence" aria-label="Story navigation">${prevLink}${nextLink}</nav>`;
}
renderStoryPage=function(){
  const root=$('#storyPage');if(!root)return;
  const id=Number(new URLSearchParams(location.search).get('id')??1),s=STORIES.find(x=>x.id===id)||STORIES[1],f=(window.STORY_FEATURES&&window.STORY_FEATURES[s.id])||{};
  document.title=`${s.title} — Gram & Gramps`;
  const related=STORIES.filter(x=>x.id!==s.id&&(x.group===s.group||x.era===s.era)).slice(0,3);
  const quote=f.quote?`<figure class="story-quote"><blockquote>${f.quote}</blockquote><figcaption>${f.quoteBy||speakerDisplay(s.speaker)}</figcaption></figure>`:'';
  const context=f.context?`<section class="archive-note"><div class="eyebrow">Context</div><h3>${f.contextTitle||'More context'}</h3><p>${f.context}</p></section>`:'';
  const transcript=transcriptMarkup(s.id),culture=cultureMarkup(s.id),locations=locationMarkup(f),more=moreMarkup(s.id),sequence=sequenceMarkup(s);
  const people=s.people?`<div><span>People mentioned</span><strong>${speakerDisplay(s.people)}</strong></div>`:'';
  root.innerHTML=`<section class="story-hero"><img src="${storyImage(s)}" style="${storyFocusStyle(s,'hero')}" alt=""><div class="story-hero-overlay"></div><div class="story-hero-copy wrap"><div class="story-hero-meta"><div><span>Story</span><strong>${padId(s.id)}</strong></div><div><span>Primary Speaker</span><strong>${speakerDisplay(s.speaker)}</strong></div><div><span>Length</span><strong>${duration(s.start,s.end)}</strong></div></div><h1>${s.title}</h1><p>${s.teaser}</p></div></section><section class="section wrap story-layout"><div class="story-main"><div class="audio-box"><div class="audio-title"><div class="eyebrow audio-eyebrow"><span>Original Recording</span><span>December 26, 2018</span></div><h2><span class="audio-story-number">Story ${padId(s.id)}:</span><span class="audio-story-title">${s.title}</span></h2></div>${audioMarkup(s)}</div>${transcript}${sequence}${quote}${culture}${context}${more}${locations}</div><aside class="fact-panel"><div><span>Era</span><strong>${s.era}</strong></div><div><span>Places</span><strong>${s.place}</strong></div>${people}</aside></section><section class="section wrap"><div class="section-head"><div><div class="eyebrow">Keep listening</div><h2>Related stories</h2></div></div><div class="story-grid compact">${related.map(storyCard).join('')}</div></section>`;
};