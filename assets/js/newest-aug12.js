(function(){
  const feature=(id,patch)=>{if(!window.STORY_FEATURES)return;window.STORY_FEATURES[id]=Object.assign({},window.STORY_FEATURES[id]||{},patch)};

  // 000 — "The Clan June 1972.jpg" from the family archive.
  feature(0,{image:'https://drive.google.com/thumbnail?id=1RTaE6kDeHiXuD9E8oQZlSqEf34MDPpWi&sz=w2200',focus:'50% 42%',mobileFocus:'50% 38%'});

  feature(2,{image:'https://commons.wikimedia.org/wiki/Special:FilePath/1979%20New%20Jersey%20license%20plate.jpg',focus:'50% 50%',mobileFocus:'50% 50%'});
  feature(5,{image:'https://commons.wikimedia.org/wiki/Special:FilePath/Provenzano%2C%20Anthony%20-%20Born-%20%28BLANK%29%2C%20Naturalized-%20%28BLANK%29%20-%20DPLA%20-%20e07572c01b19d89c0089c54332babacd.jpg',focus:'50% 42%',mobileFocus:'50% 42%'});
  feature(8,{image:'https://commons.wikimedia.org/wiki/Special:FilePath/Postcard%20SS%20Stevens%20and%20Stevens%20Center.jpg',focus:'50% 45%',mobileFocus:'50% 45%'});
  feature(15,{image:'https://commons.wikimedia.org/wiki/Special:FilePath/StateLibQld%201%20127051%20Alcoa%20Pegasus%20%28ship%29.jpg',focus:'50% 50%',mobileFocus:'50% 50%'});

  // 013 — Sam on horseback during the 1952 California trip.
  feature(13,{image:'https://drive.google.com/thumbnail?id=15SANJvwMArHtcW8Nn_gx7cDA_pdIKy-v&sz=w2200',focus:'50% 45%',mobileFocus:'50% 38%'});

  // 016 — use Sam's 1942 high-school graduation portrait.
  feature(16,{image:'https://drive.google.com/thumbnail?id=1T4IS4-px45gqs892SbXxOr5KlLfFpCgm&sz=w2000',focus:'50% 28%',mobileFocus:'50% 22%'});

  // 019 — move the 1932 First Communion image here.
  feature(19,{image:'https://drive.google.com/thumbnail?id=1c4fS4jBRjPwQsQDhCHp2Z-Pfv075R8vO&sz=w2000',focus:'50% 26%',mobileFocus:'50% 20%'});

  // 025 — also use the former 013 First Communion image, per latest note.
  feature(25,{image:'https://drive.google.com/thumbnail?id=1c4fS4jBRjPwQsQDhCHp2Z-Pfv075R8vO&sz=w2000',focus:'50% 26%',mobileFocus:'50% 20%'});

  feature(24,{locations:[{
    label:'St. Mary’s Hospital',
    query:'308 Willow Avenue, Hoboken, NJ 07030',
    note:'Conrad was born here in Hoboken in 1948.'
  }]});
  if(window.STORY_FEATURES&&window.STORY_FEATURES[24]){
    delete window.STORY_FEATURES[24].context;
    delete window.STORY_FEATURES[24].contextTitle;
  }
})();
