(function(){
  const feature=(id,patch)=>{if(!window.STORY_FEATURES)return;window.STORY_FEATURES[id]=Object.assign({},window.STORY_FEATURES[id]||{},patch)};
  const story=(id,patch)=>{const s=window.STORIES&&window.STORIES.find(x=>x.id===id);if(s)Object.assign(s,patch)};

  feature(0,{image:'https://drive.google.com/thumbnail?id=1RTaE6kDeHiXuD9E8oQZlSqEf34MDPpWi&sz=w2200',focus:'50% 42%',mobileFocus:'50% 38%'});

  feature(2,{image:'https://i.pinimg.com/originals/13/21/a8/1321a8989b14a9a8a764e9db9f547ef2.jpg',focus:'63% 57%',mobileFocus:'68% 58%'});

  // 003 — family archive image with the sign behind Gram.
  story(3,{teaser:'Even children weren’t safe from the consequences of crossing Gram.'});
  feature(3,{
    image:'https://drive.google.com/thumbnail?id=1EEmMR9z6LDnW1ny6_JyGzMT3Hzgqqswx&sz=w2400',
    thumbFocus:'50% 42%',mobileThumbFocus:'50% 40%',
    heroFocus:'50% 43%',mobileHeroFocus:'60% 34%',
    quote:'“I flung open my door and knocked one guy flat on his ass.”',
    quoteBy:'Gram'
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

  if(window.STORY_RESEARCH){
    const setResearch=(id,cards)=>{window.STORY_RESEARCH[id]={cards};};
    const appendResearch=(id,cards)=>{
      const existing=window.STORY_RESEARCH[id]&&Array.isArray(window.STORY_RESEARCH[id].cards)?window.STORY_RESEARCH[id].cards:[];
      window.STORY_RESEARCH[id]={cards:[...existing,...cards]};
    };

    setResearch(5,[
      {
        kicker:'Who was Tony Pro?',
        title:'Anthony “Tony Pro” Provenzano',
        body:'Tony Provenzano was a powerful North Jersey Teamsters figure who rose through Local 560 and became nationally known for organized-crime ties, labor violence and federal prosecutions. Which makes Gram’s completely matter-of-fact memory of him walking into Dr. Peluso’s dental office feel a little different.',
        link:'https://time.com/archive/6812606/labor-tony-pro-takes-a-tumble/',
        linkLabel:'TIME · 1963 ↗'
      },
      {
        kicker:'The Jimmy Hoffa connection',
        title:'A prime suspect in one of America’s great unsolved mysteries',
        body:'Jimmy Hoffa believed he was headed to a meeting with Provenzano and Detroit mob figure Anthony Giacalone on July 30, 1975 — the day Hoffa disappeared. Contemporary reporting identified Tony Pro as a prime suspect. He was never charged in Hoffa’s disappearance, which remains unsolved. Decades later, Stephen Graham played Provenzano opposite Al Pacino’s Hoffa in Martin Scorsese’s The Irishman.',
        link:'https://time.com/archive/6817209/crime-hoffa-case-closing-in/',
        linkLabel:'TIME · Hoffa case, 1975 ↗'
      }
    ]);

    setResearch(8,[{
      kicker:'Gram at Stevens',
      title:'She was there before women undergraduates were',
      body:'Gram began working full-time at Stevens in 1962 — nine years before the institute admitted its first women undergraduates in 1971. She went on to run the print shop and later became postmistress of the Stevens Tech Post Office, turning what sounds like a string of funny workplace stories into a decades-long chapter of her life.'
    }]);

    setResearch(10,[{
      kicker:'A bigger Stevens story',
      title:'From employee to running the place around her',
      body:'The bosses and coworkers in this story were part of a much longer Stevens career. Gram eventually ran the institute’s print shop and became postmistress of the Stevens Tech Post Office — a reminder that her no-nonsense workplace stories came from someone who built real responsibility there over time.'
    }]);

    appendResearch(12,[
      {
        kicker:'Gram and Hoboken politics',
        title:'She wasn’t just watching politics from the sidelines',
        body:'Gram was active in Hoboken’s Democratic Club and later served as its president. So when she remembers local political figures literally turning up at the family home, this was part of a world she knew firsthand — not just neighborhood gossip.'
      },
      {
        kicker:'Who was Fred DeSapio?',
        title:'Mayor of Hoboken — and part of Sinatra Day',
        body:'Fred M. DeSapio served as mayor of Hoboken and was one of the local political figures behind the city’s enormous Frank Sinatra Day celebration on October 30, 1947. About 20,000 people lined Washington Street for Sinatra’s homecoming — making DeSapio a surprisingly direct bridge between Gram’s front-door political story and one of Hoboken’s most famous cultural moments.',
        link:'https://hobokenmuseum.org/explore-hoboken/historic-highlights/frank-sinatra-the-voice/',
        linkLabel:'Hoboken Historical Museum ↗'
      }
    ]);

    appendResearch(14,[{
      kicker:'The scale of Armed Guard service',
      title:'A dangerous job on merchant ships',
      body:'The U.S. Navy says 144,970 Armed Guard sailors served aboard 6,236 merchant ships during World War II, with 1,810 dead or missing. Gramps’ assignment was part of a large, hazardous wartime mission: Navy crews protecting and communicating aboard merchant vessels moving through combat zones.',
      link:'https://www.history.navy.mil/about-us/leadership/director/directors-corner/h-grams/h-gram-041/h-041-1.html',
      linkLabel:'Naval History & Heritage Command ↗'
    }]);

    appendResearch(15,[{
      kicker:'Passing under a new icon',
      title:'The Golden Gate was still brand new',
      body:'The Golden Gate Bridge opened in 1937. When Gramps was sailing beneath it during World War II trying not to miss a signal, the bridge was less than a decade old — and still held the record for the world’s longest suspension-bridge span.',
      link:'https://www.goldengate.org/bridge/history-research/statistics-data/faqs/',
      linkLabel:'Golden Gate Bridge ↗'
    }]);

    setResearch(17,[{
      kicker:'Wartime geography',
      title:'Milne Bay had already made history',
      body:'The grass-skirt scam happens at a place with a much bigger wartime story behind it. In 1942, Milne Bay was the site of the first major defeat of Japanese land forces in the Pacific War. Gramps arrived later; the connection is geographic, not a claim that he fought in that battle — but it makes the setting of this wonderfully ridiculous family story much more striking.',
      link:'https://placesofpride.awm.gov.au/stories/123016/264589',
      linkLabel:'Australian War Memorial ↗'
    }]);

    appendResearch(20,[{
      kicker:'The real Hoboken waterfront',
      title:'The world behind On the Waterfront',
      body:'The dockside Hoboken Gramps describes was the same working waterfront that inspired and became the setting for On the Waterfront. The Hoboken Historical Museum describes a port shaped by longshore work, hiring bosses and mob-connected power — the real neighborhood world behind the movie atmosphere.',
      link:'https://hobokenmuseum.org/explore-hoboken/historic-highlights/on-the-waterfront/on-the-waterfront-locations/',
      linkLabel:'Hoboken Historical Museum ↗'
    }]);

    setResearch(24,[{
      kicker:'Where Conrad was born',
      title:'St. Mary’s had been serving Hoboken since the Civil War era',
      body:'Conrad was born at St. Mary’s Hospital in Hoboken in 1948. The institution traces its history back to 1863, meaning the hospital had already been part of Hoboken for roughly 85 years by the time Gram and Gramps arrived there as new parents.',
      link:'https://hobokenmuseum.org/unused_content/this-month-in-hoboken-history/',
      linkLabel:'Hoboken Historical Museum ↗'
    }]);

    appendResearch(25,[{
      kicker:'From the ranks to Postmaster',
      title:'A 40-year climb through the Postal Service',
      body:'Gramps started with the Postal Service as a substitute clerk in 1946 and worked his way through supervisory roles before becoming Hoboken Postmaster in 1977. One published obituary describes him as the first Hoboken postmaster promoted from the ranks — a fitting capstone to a career that began just after he came home from the Navy.'
    }]);
  }
})();