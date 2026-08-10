const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
function toSeconds(t){return t.split(':').map(Number).reduce((a,n)=>a*60+n,0)}
function duration(a,b){let s=Math.max(0,toSeconds(b)-toSeconds(a)),m=Math.floor(s/60),sec=s%60;return `${m}:${String(sec).padStart(2,'0')}`}
function storyLength(s){return Math.max(0,toSeconds(s.end)-toSeconds(s.start))}
function padId(id){return String(id).padStart(3,'0')}
function storyImage(s){if([14,15,17,18,21,22].includes(s.id))return ARCHIVE_IMAGES.hero;if([11,23,24,25].includes(s.id))return ARCHIVE_IMAGES.later;if([0,2,6,7,9].includes(s.id))return ARCHIVE_IMAGES.twins;return ARCHIVE_IMAGES.wedding}
function audioMarkup(s){if(s.audioPreview){const backup=s.audioUrl?`<a class="audio-backup" href="${s.audioUrl}" target="_blank" rel="noopener">Open this recording in Google Drive ↗</a>`:'';return `<div class="drive-audio-player"><iframe src="${s.audioPreview}" title="Audio player for ${s.title}" loading="lazy" allow="autoplay"></iframe>${backup}</div>`}if(s.audioUrl)return `<a class="button primary" href="${s.audioUrl}" target="_blank" rel="noopener">▶ Listen to this story</a>`;return `<span class="audio-pending">Audio ready to connect</span>`}
function storyCard(s){return `<article class="story-card" data-group="${s.group}"><a class="story-thumb" href="story.html?id=${s.id}" aria-label="${s.title}"><img src="${storyImage(s)}" alt="" loading="lazy"><span class="story-number">${padId(s.id)}</span></a><div class="story-card-body"><div class="eyebrow">${s.group} · ${duration(s.start,s.end)}</div><h3><a href="story.html?id=${s.id}">${s.title}</a></h3><p>${s.teaser}</p><div class="card-meta">${s.speaker}</div></div></article>`}
function renderStories(t,stories=window.STORIES){if(t)t.innerHTML=stories.map(storyCard).join('')}
function initStoryFilters(){
  const grid=$('#storiesGrid');
  if(!grid)return;
  const meta=window.STORY_FILTER_META||{};
  const search=$('#storySearch');
  const clear=$('#clearStoryFilters');
  const summary=$('#filterSummary');
  const sortSelect=$('#storySort');
  const selects=$$('.facet-select');
  let speaker='All';

  const facetDefaults={topics:'Any topic',locations:'Anywhere',people:'Anyone',when:'Any time'};
  selects.forEach(select=>{
    const key=select.dataset.facet;
    const counts={};
    STORIES.forEach(s=>((meta[s.id]&&meta[s.id][key])||[]).forEach(value=>counts[value]=(counts[value]||0)+1));
    const values=Object.keys(counts).sort((a,b)=>a.localeCompare(b));
    select.innerHTML=`<option value="">${facetDefaults[key]||'Any'}</option>`+values.map(value=>`<option value="${value}">${value} (${counts[value]})</option>`).join('');
  });

  function activeFilters(){return speaker!=='All'||(search&&search.value.trim())||selects.some(s=>s.value)}
  function sortedStories(stories){
    const mode=sortSelect?sortSelect.value:'recording';
    const ordered=[...stories];
    if(mode==='chronological')return ordered.sort((a,b)=>((meta[a.id]&&meta[a.id].chrono)??9999)-((meta[b.id]&&meta[b.id].chrono)??9999)||a.id-b.id);
    if(mode==='shortest')return ordered.sort((a,b)=>storyLength(a)-storyLength(b)||a.id-b.id);
    if(mode==='longest')return ordered.sort((a,b)=>storyLength(b)-storyLength(a)||a.id-b.id);
    if(mode==='title')return ordered.sort((a,b)=>a.title.localeCompare(b.title));
    return ordered.sort((a,b)=>a.id-b.id);
  }
  function applyFilters(){
    const q=(search?search.value:'').trim().toLowerCase();
    const facetValues=Object.fromEntries(selects.map(s=>[s.dataset.facet,s.value]));
    const filtered=STORIES.filter(s=>{
      if(speaker!=='All'&&s.group!==speaker)return false;
      const m=meta[s.id]||{};
      for(const [key,value] of Object.entries(facetValues))if(value&&!((m[key]||[]).includes(value)))return false;
      if(q){
        const searchable=[s.title,s.teaser,s.speaker,s.people,s.place,s.era,...Object.values(m).flat()].join(' ').toLowerCase();
        if(!searchable.includes(q))return false;
      }
      return true;
    });
    const ordered=sortedStories(filtered);
    if(ordered.length)renderStories(grid,ordered);else grid.innerHTML='<div class="filter-empty"><strong>No stories found.</strong>Try widening one of the filters or clearing the search.</div>';
    if(summary)summary.textContent=`${ordered.length} ${ordered.length===1?'story':'stories'}`;
    if(clear)clear.hidden=!activeFilters();
  }

  $$('.filter-chip').forEach(btn=>btn.addEventListener('click',()=>{
    $$('.filter-chip').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    speaker=btn.dataset.filter;
    applyFilters();
  }));
  selects.forEach(select=>select.addEventListener('change',applyFilters));
  if(sortSelect)sortSelect.addEventListener('change',applyFilters);
  if(search)search.addEventListener('input',applyFilters);
  if(clear)clear.addEventListener('click',()=>{
    speaker='All';
    $$('.filter-chip').forEach(b=>b.classList.toggle('active',b.dataset.filter==='All'));
    selects.forEach(s=>s.value='');
    if(search)search.value='';
    applyFilters();
  });
  applyFilters();
}
function renderFeatured(){const t=$('#featuredStories');if(t)renderStories(t,[1,18,21,22,23,26].map(id=>STORIES.find(s=>s.id===id)))}
function renderStoryPage(){const root=$('#storyPage');if(!root)return;const id=Number(new URLSearchParams(location.search).get('id')??1),s=STORIES.find(x=>x.id===id)||STORIES[1];document.title=`${s.title} — Gram & Gramps`;const related=STORIES.filter(x=>x.id!==s.id&&(x.group===s.group||x.era===s.era)).slice(0,3);root.innerHTML=`<section class="story-hero"><img src="${storyImage(s)}" alt=""><div class="story-hero-overlay"></div><div class="story-hero-copy wrap"><div class="eyebrow light">${padId(s.id)} · ${s.group} · ${duration(s.start,s.end)}</div><h1>${s.title}</h1><p>${s.teaser}</p></div></section><section class="section wrap story-layout"><div class="story-main"><div class="audio-box"><div><div class="eyebrow">Original recording · December 26, 2018</div><h2>Hear it in their voices</h2></div>${audioMarkup(s)}</div><div class="prose"><h2>About this story</h2><p>${s.teaser}</p><p class="note">This first site pass keeps the archive light: original audio, a short setup, and the people/places that help locate the memory. Full transcripts and historical annotations can be layered in story by story.</p></div></div><aside class="fact-panel"><div><span>Primary speaker</span><strong>${s.speaker}</strong></div><div><span>Era</span><strong>${s.era}</strong></div><div><span>Places</span><strong>${s.place}</strong></div><div><span>People mentioned</span><strong>${s.people}</strong></div></aside></section><section class="section wrap"><div class="section-head"><div><div class="eyebrow">Keep listening</div><h2>Related stories</h2></div></div><div class="story-grid compact">${related.map(storyCard).join('')}</div></section>`}
function initMenu(){const b=$('.menu-toggle'),n=$('.site-nav');if(b&&n)b.addEventListener('click',()=>n.classList.toggle('open'))}
document.addEventListener('DOMContentLoaded',()=>{initMenu();renderFeatured();initStoryFilters();renderStoryPage()});
