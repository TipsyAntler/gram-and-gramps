storyImage=function(s){
  const f=window.STORY_FEATURES&&window.STORY_FEATURES[s.id];
  if(f&&f.image)return f.image;
  if([14,15,17,18,21,22].includes(s.id))return ARCHIVE_IMAGES.hero;
  if([11,23,24,25].includes(s.id))return ARCHIVE_IMAGES.later;
  if([0,2,6,7,9].includes(s.id))return ARCHIVE_IMAGES.twins;
  return ARCHIVE_IMAGES.wedding;
};
renderStoryPage=function(){
  const root=$('#storyPage');if(!root)return;
  const id=Number(new URLSearchParams(location.search).get('id')??1),s=STORIES.find(x=>x.id===id)||STORIES[1],f=(window.STORY_FEATURES&&window.STORY_FEATURES[s.id])||{};
  document.title=`${s.title} — Gram & Gramps`;
  const related=STORIES.filter(x=>x.id!==s.id&&(x.group===s.group||x.era===s.era)).slice(0,3);
  const quote=f.quote?`<figure class="story-quote"><blockquote>${f.quote}</blockquote><figcaption>${f.quoteBy||s.speaker}</figcaption></figure>`:'';
  const context=f.context?`<section class="archive-note"><div class="eyebrow">Archive note</div><h3>${f.contextTitle||'A little more context'}</h3><p>${f.context}</p></section>`:'';
  const photoNote=f.photoNote?`<div class="photo-note">${f.photoNote}</div>`:'';
  root.innerHTML=`<section class="story-hero"><img src="${storyImage(s)}" alt=""><div class="story-hero-overlay"></div><div class="story-hero-copy wrap"><div class="eyebrow light">${padId(s.id)} · ${s.group} · ${duration(s.start,s.end)}</div><h1>${s.title}</h1><p>${s.teaser}</p></div>${photoNote}</section><section class="section wrap story-layout"><div class="story-main"><div class="audio-box"><div><div class="eyebrow">Original recording · December 26, 2018</div><h2>Hear it in their voices</h2></div>${audioMarkup(s)}</div>${quote}<div class="prose"><h2>About this story</h2><p>${s.teaser}</p></div>${context}</div><aside class="fact-panel"><div><span>Primary speaker</span><strong>${s.speaker}</strong></div><div><span>Era</span><strong>${s.era}</strong></div><div><span>Places</span><strong>${s.place}</strong></div><div><span>People mentioned</span><strong>${s.people}</strong></div></aside></section><section class="section wrap"><div class="section-head"><div><div class="eyebrow">Keep listening</div><h2>Related stories</h2></div></div><div class="story-grid compact">${related.map(storyCard).join('')}</div></section>`;
};
