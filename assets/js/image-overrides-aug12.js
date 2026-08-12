(() => {
  const feature=(id,patch)=>{if(!window.STORY_FEATURES)return;STORY_FEATURES[id]=Object.assign({},STORY_FEATURES[id]||{},patch)};

  // 000 — use a broader family image rather than the September-birthdays photo.
  feature(0,{image:'https://drive.google.com/thumbnail?id=17tktsRI6-w-8RPbOu8yidn_r0gn-96r0&sz=w2200',focus:'50% 42%',mobileFocus:'50% 38%'});

  // 002 — period-correct New Jersey plate; 1979 falls squarely in the story's late-70s/early-80s window.
  feature(2,{image:'https://commons.wikimedia.org/wiki/Special:FilePath/1979%20New%20Jersey%20license%20plate.jpg',focus:'50% 50%',mobileFocus:'50% 50%'});

  // 005 — Anthony “Tony Pro” Provenzano, from a public-domain U.S. court/DPLA image on Wikimedia Commons.
  feature(5,{image:'https://commons.wikimedia.org/wiki/Special:FilePath/Provenzano%2C%20Anthony%20-%20Born-%20%28BLANK%29%2C%20Naturalized-%20%28BLANK%29%20-%20DPLA%20-%20e07572c01b19d89c0089c54332babacd.jpg',focus:'50% 42%',mobileFocus:'50% 42%'});

  // 008 — Stevens in the era Marietta worked there: circa-1970 postcard with the Stevens Center and SS Stevens.
  feature(8,{image:'https://commons.wikimedia.org/wiki/Special:FilePath/Postcard%20SS%20Stevens%20and%20Stevens%20Center.jpg',focus:'50% 45%',mobileFocus:'50% 45%'});

  // 015 — one of Sam's actual ships. No Golden Gate image has surfaced yet, so exact ship wins over generic SF imagery.
  feature(15,{image:'https://commons.wikimedia.org/wiki/Special:FilePath/StateLibQld%201%20127051%20Alcoa%20Pegasus%20%28ship%29.jpg',focus:'50% 50%',mobileFocus:'50% 50%'});

  // 016 — teenage-era Sam with his sisters, archive file dated 1943.
  feature(16,{image:'https://drive.google.com/thumbnail?id=1QFJezbQ4RarYLODOw4eFEppIJnQeeaXH&sz=w2000',focus:'50% 35%',mobileFocus:'50% 28%'});

  // 024 — keep the newly confirmed birthplace as map-only context.
  feature(24,{locations:[{label:'St. Mary’s Hospital',query:'308 Willow Avenue, Hoboken, NJ',note:'Conrad was born here in Hoboken in 1948.'}]});
  if(window.STORY_FEATURES&&STORY_FEATURES[24]){
    delete STORY_FEATURES[24].context;
    delete STORY_FEATURES[24].contextTitle;
  }
})();
