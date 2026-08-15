(()=>{
  if(!window.STORIES)return;
  const story=(id,patch)=>{const s=window.STORIES.find(x=>x.id===id);if(s)Object.assign(s,patch)};
  const feature=(id,patch)=>{if(!window.STORY_FEATURES)return;window.STORY_FEATURES[id]=Object.assign({},window.STORY_FEATURES[id]||{},patch)};
  const addLocation=(id,loc)=>{
    if(!window.STORY_FEATURES)return;
    const f=window.STORY_FEATURES[id]=Object.assign({},window.STORY_FEATURES[id]||{});
    const locations=Array.isArray(f.locations)?[...f.locations]:[];
    if(!locations.some(x=>x.label===loc.label))locations.push(loc);
    f.locations=locations;
  };

  // Keep the re-cut 005 / 006 boundary.
  const s5=window.STORIES.find(s=>s.id===5);
  const s6=window.STORIES.find(s=>s.id===6);
  if(s5)s5.end='0:15:38';
  if(s6)s6.start='0:15:38';

  // Match People Mentioned metadata to the site's canonical speaker names.
  window.STORIES.forEach(s=>{
    if(!s||!s.people)return;
    s.people=s.people
      .replace(/Mike Tridente/g,'Mike')
      .replace(/Mike T\b/g,'Mike')
      .replace(/Marietta/g,'Gram')
      .replace(/\bSam\b/g,'Gramps');
  });

  // Story metadata / copy changes from the final story-by-story review.
  story(7,{era:'Family travel years'});
  story(19,{title:'Gramps Childhood: First Jobs & Street Games'});
  story(24,{teaser:'Gram and Gramps remember the day Dad was born.'});
  story(25,{teaser:'Being stopped for looking cute, free meals thanks to Gramps’ Veteran Hat, and one more wartime family story.'});

  // Pull quote for 002.
  feature(2,{quote:'“I bent it right in half, right in half… So that was that incident.”',quoteBy:'Gram'});

  // Mobile hero crops: small upward nudges to keep faces clear.
  feature(1,{mobileHeroFocus:'50% 18%'});
  feature(17,{mobileHeroFocus:'50% 18%'});
  feature(21,{mobileHeroFocus:'50% 18%'});
  feature(25,{mobileHeroFocus:'50% 32%'});
  feature(26,{mobileHeroFocus:'50% 18%'});

  // 012: use the reliable family-archive hero instead of the flyer asset that was failing to load.
  feature(12,{
    image:'https://drive.google.com/thumbnail?id=1fwe0l1E5rrNf0e9EtvZ5JVRfEtQXPpGa&sz=w1600',
    thumbFocus:'50% 43%',mobileThumbFocus:'50% 42%',
    heroFocus:'50% 42%',mobileHeroFocus:'50% 42%'
  });

  // Dr. Peluso map treatment.
  const peluso={label:'Dr. Charles Peluso’s dental office',query:'533 Adams Street, Hoboken, NJ',note:'Dr. Charles Peluso’s dental office.'};
  [1,4,5,26].forEach(id=>addLocation(id,peluso));
  if(window.STORY_FEATURES&&window.STORY_FEATURES[26]&&Array.isArray(window.STORY_FEATURES[26].locations)){
    window.STORY_FEATURES[26].locations=window.STORY_FEATURES[26].locations.map(loc=>
      loc.query==='533 Adams Street, Hoboken, NJ'?Object.assign({},loc,{label:'Dr. Charles Peluso’s dental office',note:'Dr. Charles Peluso’s dental office.'}):loc
    );
  }

  // Correct wording on the Golden Gate map.
  if(window.STORY_FEATURES&&window.STORY_FEATURES[15]&&Array.isArray(window.STORY_FEATURES[15].locations)){
    window.STORY_FEATURES[15].locations=window.STORY_FEATURES[15].locations.map(loc=>
      loc.label==='Golden Gate Bridge'?Object.assign({},loc,{note:'Gramps places the missed-signal story aboard his ship while leaving San Francisco and passing the Golden Gate.'}):loc
    );
  }

  // Hoboken Main Post Office: meaningful mentions only, not passing references.
  const hobokenPO={
    label:'Hoboken Main Post Office',
    query:'89 River Street, Hoboken, NJ 07030',
    note:'The Hoboken Main Post Office, where Gramps worked from 1946–1986 and served as Postmaster from 1977–1986. It was officially renamed the Frank Sinatra Post Office Building in 2002.'
  };
  [7,22].forEach(id=>addLocation(id,hobokenPO));

  // 022: the Manhattan theaters Gramps names.
  addLocation(22,{
    label:'Paramount Theatre',
    query:'1501 Broadway, New York, NY 10036',
    note:'The Times Square Paramount Theatre Gramps remembers crossing from Hoboken to visit during his teenage years.'
  });
  addLocation(22,{
    label:'Strand Theatre',
    query:'1579 Broadway, New York, NY 10036',
    note:'The Strand Theatre at Broadway and 47th Street, another Manhattan theater Gramps remembers visiting.'
  });

  // 025 Burger King map copy.
  if(window.STORY_FEATURES&&window.STORY_FEATURES[25]&&Array.isArray(window.STORY_FEATURES[25].locations)){
    window.STORY_FEATURES[25].locations=window.STORY_FEATURES[25].locations.map(loc=>
      loc.label==='Their Burger King'?Object.assign({},loc,{note:'Gram and Gramps’ go-to. The staff knew them, knew their special order, and treated them like family.'}):loc
    );
  }

  if(window.STORY_RESEARCH){
    // 014: name the two ship cards consistently.
    const r14=window.STORY_RESEARCH[14];
    if(r14&&Array.isArray(r14.cards))r14.cards.forEach(card=>{
      if(card.title==='SS Alcoa Pegasus'||card.title==='SS West Cusseta')card.kicker='Gramps’ Ship';
    });

    // 022: revised Sinatra framing.
    const r22=window.STORY_RESEARCH[22];
    if(r22&&Array.isArray(r22.cards)){
      const sinatra=r22.cards.find(card=>card.title==='Sinatra and Hoboken');
      if(sinatra)sinatra.body='Frank Sinatra (shockingly) only comes up once in the recording, but he played an oversized role in the small Hoboken world.';
    }

    // 025: postal-career context is not relevant to this story.
    delete window.STORY_RESEARCH[25];
  }
})();
