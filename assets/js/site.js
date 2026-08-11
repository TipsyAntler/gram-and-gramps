const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
function toSeconds(t){return t.split(':').map(Number).reduce((a,n)=>a*60+n,0)}
function duration(a,b){let s=Math.max(0,toSeconds(b)-toSeconds(a)),m=Math.floor(s/60),sec=s%60;return `${m}:${String(sec).padStart(2,'0')}`}
function storyLength(s){return Math.max(0,toSeconds(s.end)-toSeconds(s.start))}
function padId(id){return String(id).padStart(3,'0')}
function patchStory(id,patch){const s=window.STORIES&&STORIES.find(x=>x.id===id);if(s)Object.assign(s,patch)}
function patchFeature(id,patch){if(!window.STORY_FEATURES)return;window.STORY_FEATURES[id]=Object.assign({},window.STORY_FEATURES[id]||{},patch)}
function applyEditorialOverrides(){
  if(window.STORIES){
    patchStory(0,{speaker:'Mike Tridente; Marietta; Sam',people:'Christine Fahey; Mike Fahey',place:'Washington, NJ',teaser:'Mike introduces the storytelling to Christine through a birthday voicemail before the group gets situated around the kitchen table.'});
    patchStory(1,{people:'Aunt Betty; Dr. Peluso; Sam'});
    patchStory(2,{people:'Linda; Christine Fahey; Sam',place:'Parking Lot',era:'Late 1970s–early 1980s',teaser:'A theme emerges: don’t get on Gram’s bad side.'});
    patchStory(3,{people:'Sam',era:'Early marriage years',teaser:'Even children weren’t safe from the consequence of crossing Gram.'});
    patchStory(4,{people:'Dr. Peluso; Nunpop'});
    patchStory(5,{people:'Tony Provenzano; Dr. Peluso',teaser:'Gram has words for an armed mob boss at Dr. Peluso’s office.'});
    patchStory(6,{people:'Sam'});
    patchStory(7,{people:'Sam; Patty Tosillo; Nancy; Gert; Janie'});
    patchStory(8,{people:'Mr. Frisco; Mr. Nast; Sam; Mamom'});
    patchStory(9,{people:'Mamom; Sam'});
    patchStory(10,{people:'Joe Introne; Charlotte; Sam'});
    patchStory(11,{people:'Jackie'});
    patchStory(13,{people:'Sergio (grandfather); Uncle Mario/Morris'});
    patchStory(14,{people:'Mama; Papa'});
    patchStory(15,{people:''});
    patchStory(16,{people:'Uncle Johnny'});
    patchStory(17,{people:'Mama; Marietta'});
    patchStory(18,{people:'Marietta; Petey; Viola; Dr. Peluso'});
    patchStory(19,{people:'Mama; Papa; Mary Ruppel; Bill Supple; Ryan'});
    patchStory(22,{people:'Marietta; Frank Sinatra; Dick Todd'});
    patchStory(24,{people:'Conrad; Nunpop; Mamom'});
    patchStory(25,{people:'Conrad; Uncle Tommy; Louis'});
    patchStory(26,{people:'Dr. Peluso; Mrs. Peluso; Jack; Pete; Isabel; Sam'});
  }
  if(window.STORY_FEATURES){
    patchFeature(0,{image:'https://drive.google.com/thumbnail?id=14Wk3Zcef-C4dFqHHMarJJRtq_4FomnuA&sz=w2000',quote:'“Anybody want a Jell-O with Cool Whip?”',quoteBy:'Marietta',focus:'50% 34%',mobileFocus:'55% 28%',photoNote:null});
    patchFeature(1,{quote:'“And I read in Good Housekeeping … if anybody tries to attack you, have a long nail file in your bag, and you get him right here.”',quoteBy:'Marietta',locations:[{label:'Church Square Park',query:'Church Square Park, 400 Garden Street, Hoboken, NJ 07030',note:'Gram’s detective story unfolds around the park across from Our Lady of Grace.'},{label:'Dr. Peluso’s office',query:'533 Adams Street, Hoboken, NJ',note:'Research points to 533 Adams Street as Dr. Charles Peluso’s dental office, a location that recurs throughout Gram’s stories.'}],focus:'50% 22%',mobileFocus:'50% 18%',photoNote:null});
    delete STORY_FEATURES[1].context;delete STORY_FEATURES[1].contextTitle;
    patchFeature(2,{image:'https://drive.google.com/thumbnail?id=1ctedBuV8scC5WjQkI0hQoP-IlXuPz4km&sz=w1800',focus:'50% 34%',mobileFocus:'48% 26%',photoNote:null});
    patchFeature(3,{image:'https://drive.google.com/thumbnail?id=1_7T6gl65_XMXoGxYPbGLBOzKPiK3e8Ey&sz=w2200',focus:'50% 34%',mobileFocus:'47% 28%',photoNote:null});
    patchFeature(4,{focus:'50% 20%',mobileFocus:'50% 16%',photoNote:null});
    patchFeature(5,{focus:'50% 20%',mobileFocus:'50% 16%',photoNote:null});
    patchFeature(18,{contextTitle:'1942'});
    patchFeature(21,{contextTitle:'V-J Day in Vancouver'});
    patchFeature(26,{contextTitle:'The Dr. Peluso stories'});
    Object.values(STORY_FEATURES).forEach(f=>{if(f)f.photoNote=null});
  }
  if(window.STORY_RESEARCH){
    delete STORY_RESEARCH[1];
    delete STORY_RESEARCH[4];
    STORY_RESEARCH[5]={cards:[{kicker:'Who was Tony Pro?',title:'Anthony “Tony Pro” Provenzano',body:'Tony Provenzano was a major North Jersey Teamsters figure who rose through Local 560 and became nationally known for organized-crime connections and federal prosecutions.'}]};
  }
  if(window.STORY_CULTURE){
    STORY_CULTURE[4]=[{title:'Capuzzelle',body:'Capuzzelle are lamb heads, a traditional southern Italian preparation. In this family story, the meal gets an unforgettable second life: after Nunpop was finished eating, Gram used the head to practice pulling teeth.',source:'https://cucina.corriere.it/cucinaintro/puglia-e-basilicata/7/introduzione_627f53da-221f-11df-8195-00144f02aabe.shtml',sourceLabel:'Food context: Puglia & Basilicata ↗'}];
  }
  if(window.STORY_FILTER_META){
    Object.assign(STORY_FILTER_META[0],{locations:['Washington, NJ']});
    Object.assign(STORY_FILTER_META[2],{locations:['Parking Lot'],when:['Late 1970s / Early 1980s'],chrono:1980});
    Object.assign(STORY_FILTER_META[3],{when:['Early Marriage / 1940s–50s'],chrono:1950});
  }
}
applyEditorialOverrides();
function storyImage(s){const f=window.STORY_FEATURES&&window.STORY_FEATURES[s.id];if(f&&f.image)return f.image;if([14,15,17,18,21,22].includes(s.id))return ARCHIVE_IMAGES.hero;if([11,23,24,25].includes(s.id))return ARCHIVE_IMAGES.later;if([0,2,6,7,9].includes(s.id))return ARCHIVE_IMAGES.twins;return ARCHIVE_IMAGES.wedding}
function storyFocusStyle(s){const f=window.STORY_FEATURES&&window.STORY_FEATURES[s.id]||{},focus=f.focus||'50% 24%',mobile=f.mobileFocus||focus;return `--story-focus:${focus};--story-focus-mobile:${mobile};`}
function audioMarkup(s){if(s.audioPreview){const backup=s.audioUrl?`<a class="audio-backup" href="${s.audioUrl}" target="_blank" rel="noopener">Open this recording in Google Drive ↗</a>`:'';return `<div class="drive-audio-player"><iframe src="${s.audioPreview}" title="Audio player for ${s.title}" loading="lazy" allow="autoplay"></iframe>${backup}</div>`}if(s.audioUrl)return `<a class="button primary" href="${s.audioUrl}" target="_blank" rel="noopener">▶ Listen to this story</a>`;return `<span class="audio-pending">Audio ready to connect</span>`}
function storyCard(s){return `<article class="story-card" data-group="${s.group}"><a class="story-thumb" href="story.html?id=${s.id}" aria-label="${s.title}"><img src="${storyImage(s)}" style="${storyFocusStyle(s)}" alt="" loading="lazy"><span class="story-number">${padId(s.id)}</span></a><div class="story-card-body"><div class="eyebrow">${s.group} · ${duration(s.start,s.end)}</div><h3><a href="story.html?id=${s.id}">${s.title}</a></h3><p>${s.teaser}</p><div class="card-meta"><strong>Primary Speaker:</strong> ${s.speaker}</div></div></article>`}
function renderStories(t,stories=window.STORIES){if(t)t.innerHTML=stories.map(storyCard).join('')}
function initStoryFilters(){
  const grid=$('#storiesGrid');if(!grid)return;
  const meta=window.STORY_FILTER_META||{},search=$('#storySearch'),clear=$('#clearStoryFilters'),summary=$('#filterSummary'),sortSelect=$('#storySort'),selects=$$('.facet-select');let speaker='All';
  const facetDefaults={topics:'Any topic',locations:'Anywhere',people:'Anyone',when:'Any time'};
  selects.forEach(select=>{const key=select.dataset.facet,counts={};STORIES.forEach(s=>((meta[s.id]&&meta[s.id][key])||[]).forEach(value=>counts[value]=(counts[value]||0)+1));const values=Object.keys(counts).sort((a,b)=>a.localeCompare(b));select.innerHTML=`<option value="">${facetDefaults[key]||'Any'}</option>`+values.map(value=>`<option value="${value}">${value} (${counts[value]})</option>`).join('')});
  const params=new URLSearchParams(location.search),requestedSpeaker=params.get('speaker');
  if(['Gram','Gramps','Together'].includes(requestedSpeaker)){speaker=requestedSpeaker;$$('.filter-chip').forEach(b=>b.classList.toggle('active',b.dataset.filter===speaker))}
  const facetParams={topics:'topic',locations:'location',people:'person',when:'when'};
  selects.forEach(select=>{const requested=params.get(facetParams[select.dataset.facet]);if(requested&&[...select.options].some(o=>o.value===requested))select.value=requested});
  if(search&&params.get('search'))search.value=params.get('search');if(sortSelect&&params.get('sort')&&[...sortSelect.options].some(o=>o.value===params.get('sort')))sortSelect.value=params.get('sort');
  function activeFilters(){return speaker!=='All'||(search&&search.value.trim())||selects.some(s=>s.value)}
  function sortedStories(stories){const mode=sortSelect?sortSelect.value:'recording',ordered=[...stories];if(mode==='chronological')return ordered.sort((a,b)=>((meta[a.id]&&meta[a.id].chrono)??9999)-((meta[b.id]&&meta[b.id].chrono)??9999)||a.id-b.id);if(mode==='shortest')return ordered.sort((a,b)=>storyLength(a)-storyLength(b)||a.id-b.id);if(mode==='longest')return ordered.sort((a,b)=>storyLength(b)-storyLength(a)||a.id-b.id);if(mode==='title')return ordered.sort((a,b)=>a.title.localeCompare(b.title));return ordered.sort((a,b)=>a.id-b.id)}
  function applyFilters(){const q=(search?search.value:'').trim().toLowerCase(),facetValues=Object.fromEntries(selects.map(s=>[s.dataset.facet,s.value]));const filtered=STORIES.filter(s=>{if(speaker!=='All'&&s.group!==speaker)return false;const m=meta[s.id]||{};for(const [key,value] of Object.entries(facetValues))if(value&&!((m[key]||[]).includes(value)))return false;if(q){const searchable=[s.title,s.teaser,s.speaker,s.people,s.place,s.era,...Object.values(m).flat()].join(' ').toLowerCase();if(!searchable.includes(q))return false}return true});const ordered=sortedStories(filtered);if(ordered.length)renderStories(grid,ordered);else grid.innerHTML='<div class="filter-empty"><strong>No stories found.</strong>Try widening one of the filters or clearing the search.</div>';if(summary)summary.textContent=`${ordered.length} ${ordered.length===1?'story':'stories'}`;if(clear)clear.hidden=!activeFilters()}
  $$('.filter-chip').forEach(btn=>btn.addEventListener('click',()=>{$$('.filter-chip').forEach(b=>b.classList.remove('active'));btn.classList.add('active');speaker=btn.dataset.filter;applyFilters()}));
  selects.forEach(select=>select.addEventListener('change',applyFilters));if(sortSelect)sortSelect.addEventListener('change',applyFilters);if(search)search.addEventListener('input',applyFilters);if(clear)clear.addEventListener('click',()=>{speaker='All';$$('.filter-chip').forEach(b=>b.classList.toggle('active',b.dataset.filter==='All'));selects.forEach(s=>s.value='');if(search)search.value='';applyFilters()});applyFilters();
}
function renderFeatured(){const t=$('#featuredStories');if(t)renderStories(t,[1,18,21,5,17,10].map(id=>STORIES.find(s=>s.id===id)))}
function renderStoryPage(){const root=$('#storyPage');if(!root)return;const id=Number(new URLSearchParams(location.search).get('id')??1),s=STORIES.find(x=>x.id===id)||STORIES[1];document.title=`${s.title} — Gram & Gramps`;root.innerHTML=`<section class="story-hero"><img src="${storyImage(s)}" style="${storyFocusStyle(s)}" alt=""><div class="story-hero-overlay"></div><div class="story-hero-copy wrap"><div class="eyebrow light">${padId(s.id)} · ${s.group} · ${duration(s.start,s.end)}</div><h1>${s.title}</h1><p>${s.teaser}</p></div></section>`}
function normalizeNav(){const n=$('.site-nav');if(!n)return;const explore=n.querySelector('a[href="stories.html"]'),complete=n.querySelector('a[href="listen.html"]');if(complete)complete.textContent='The Complete Recording';if(explore&&complete)n.insertBefore(explore,complete)}
function initMenu(){const b=$('.menu-toggle'),n=$('.site-nav');if(b&&n)b.addEventListener('click',()=>n.classList.toggle('open'))}
document.addEventListener('DOMContentLoaded',()=>{normalizeNav();initMenu();renderFeatured();initStoryFilters();renderStoryPage()});
