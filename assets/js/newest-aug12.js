(function(){
  const feature=(id,patch)=>{if(!window.STORY_FEATURES)return;window.STORY_FEATURES[id]=Object.assign({},window.STORY_FEATURES[id]||{},patch)};

  feature(0,{image:'https://drive.google.com/thumbnail?id=1RTaE6kDeHiXuD9E8oQZlSqEf34MDPpWi&sz=w2200',focus:'50% 42%',mobileFocus:'50% 38%'});

  feature(2,{image:'https://i.pinimg.com/originals/13/21/a8/1321a8989b14a9a8a764e9db9f547ef2.jpg',focus:'63% 57%',mobileFocus:'68% 58%'});

  // 003 — family archive image with the sign behind Gram.
  feature(3,{
    image:'https://drive.google.com/thumbnail?id=1EEmMR9z6LDnW1ny6_JyGzMT3Hzgqqswx&sz=w2400',
    thumbFocus:'50% 42%',mobileThumbFocus:'50% 40%',
    heroFocus:'50% 43%',mobileHeroFocus:'50% 40%'
  });

  feature(5,{image:'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/03/1200/675/Anthony-Provenzano.jpg?tl=1&ve=1',focus:'50% 38%',mobileFocus:'50% 32%'});

  feature(6,{
    image:'https://drive.google.com/thumbnail?id=18tyb34bGgdbzcU9YrBax2IH4_cjRlJuV&sz=w2400',
    thumbFocus:'41% 38%',mobileThumbFocus:'39% 36%',
    heroFocus:'39% 42%',mobileHeroFocus:'38% 38%'
  });

  feature(8,{image:'https://commons.wikimedia.org/wiki/Special:FilePath/Postcard%20SS%20Stevens%20and%20Stevens%20Center.jpg',focus:'50% 45%',mobileFocus:'50% 45%'});

  // 012 — period Hoboken Good Government campaign flyer featuring Fred M. DeSapio.
  feature(12,{
    image:'https://drive.google.com/thumbnail?id=1uJZWlCGiz6P3UBxyNYmPKTbSgF1UtP8r&sz=w2400',
    thumbFocus:'50% 43%',mobileThumbFocus:'50% 42%',
    heroFocus:'50% 42%',mobileHeroFocus:'50% 42%'
  });

  feature(15,{image:'https://commons.wikimedia.org/wiki/Special:FilePath/StateLibQld%201%20127051%20Alcoa%20Pegasus%20%28ship%29.jpg',focus:'50% 50%',mobileFocus:'50% 50%'});

  feature(13,{
    image:'https://drive.google.com/thumbnail?id=15SANJvwMArHtcW8Nn_gx7cDA_pdIKy-v&sz=w2400',
    thumbFocus:'50% 20%',mobileThumbFocus:'50% 17%',
    heroFocus:'50% 19%',mobileHeroFocus:'50% 16%'
  });

  feature(16,{image:'https://drive.google.com/thumbnail?id=1T4IS4-px45gqs892SbXxOr5KlLfFpCgm&sz=w2000',focus:'50% 28%',mobileFocus:'50% 22%'});
  feature(19,{image:'https://drive.google.com/thumbnail?id=1c4fS4jBRjPwQsQDhCHp2Z-Pfv075R8vO&sz=w2000',focus:'50% 26%',mobileFocus:'50% 20%'});

  // 022 — bring Gramps up into the center of the desktop hero instead of leaving him at the bottom.
  feature(22,{heroFocus:'50% 72%'});

  feature(25,{image:'https://drive.google.com/thumbnail?id=18yJRO_SRwNMJFvU-C-p-bqXyyz1njoGb&sz=w2200',focus:'50% 42%',mobileFocus:'50% 38%'});

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