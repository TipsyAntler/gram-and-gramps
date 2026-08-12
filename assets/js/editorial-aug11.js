(() => {
  const story=(id,patch)=>{const s=window.STORIES&&STORIES.find(x=>x.id===id);if(s)Object.assign(s,patch)};
  const feature=(id,patch)=>{if(!window.STORY_FEATURES)return;STORY_FEATURES[id]=Object.assign({},STORY_FEATURES[id]||{},patch)};

  story(6,{title:'Mimicking Accents in Line'});
  story(7,{era:'Later years',teaser:'Flights, buses, and the recurring experience of Gram causing a minor panic.'});
  story(9,{place:'Washington',teaser:'A surprisingly funny emergency-squad visit involving Mamom and Gramps.'});
  story(11,{teaser:'Cake shopping turns into some back and forth banter.'});
  story(12,{teaser:'Hoboken politics reaches the front door.'});
  story(15,{teaser:'Gramps misses the first signal leaving San Francisco.'});
  story(16,{teaser:'A teenage job, a produce store, and a scammer.'});
  story(18,{teaser:'The full story of how Gramps decided he was going to marry Gram and then made it happen.'});
  story(20,{title:'Papa on the Docks & Mafia Run-Ins'});
  story(22,{title:'The Lost Music Collection',teaser:'78s, Dick Todd, Frank Sinatra, and the music album Gram eventually threw away.'});
  story(23,{title:'Slapstick Accidents',teaser:'A comedic run of Gramps’ home-repair disasters and accidents.'});
  story(25,{title:"Getting Stopped for Being Cute & for Gramps' Navy Vet Hat"});
  story(26,{people:'Dr. Peluso; Mrs. Peluso; Dr. Peluso’s nephews; Isabel; Sam'});

  feature(5,{image:'https://drive.google.com/thumbnail?id=1_7T6gl65_XMXoGxYPbGLBOzKPiK3e8Ey&sz=w2200',focus:'50% 40%',mobileFocus:'50% 34%'});
  feature(6,{image:'https://drive.google.com/thumbnail?id=1uDkWC1lfMEfI4SRvEZ7ov0Cl_iW1Wmvt&sz=w1800',quote:'“If somebody spoke to me with a dialect, I don’t know why, I would just answer them with their dialect.”',quoteBy:'Marietta',focus:'50% 30%',mobileFocus:'50% 20%'});
  feature(7,{quote:'“I seem to get in trouble all the time.”',quoteBy:'Marietta'});
  feature(8,{quote:'“I’m taking Stevens to court.”',quoteBy:'Marietta'});
  feature(9,{image:'https://drive.google.com/thumbnail?id=1MJA2WRjSsl3waaRebiGanG0dg9UdJVm9&sz=w1800',quote:'“And they just cracked up. It was a sight to see.”',quoteBy:'Marietta',focus:'29% 66%',mobileFocus:'28% 66%'});
  feature(10,{image:'https://drive.google.com/thumbnail?id=1MRC4sQ7sUo91FAmOM54jIxCXMwRdP4ZP&sz=w1800',quote:'“One more word out of you, and brother, you’re on that floor.”',quoteBy:'Marietta',focus:'50% 30%',mobileFocus:'50% 24%'});
  feature(11,{quote:'“That’s why we’re married 71 years. He knows better.”',quoteBy:'Marietta'});
  feature(12,{quote:'“Now get up and get the hell out of my house.”',quoteBy:'Marietta'});
  feature(14,{quote:'“I didn’t go in because I wanted to be a hero.”',quoteBy:'Sam',focus:'50% 8%',mobileFocus:'50% 5%'});
  feature(15,{image:'https://drive.google.com/thumbnail?id=13TANxv7nL-WSxXDFlerqsGfqhA2laCxA&sz=w1800',quote:'“I never got the message. I wanted to die.”',quoteBy:'Sam',focus:'50% 18%',mobileFocus:'50% 12%'});
  feature(16,{image:'https://drive.google.com/thumbnail?id=1OJq8HZqSkb7Uhd9aTO3VoW_RvdJac4Rl&sz=w1800',quote:'“Yeah, but I got scammed.”',quoteBy:'Sam',focus:'50% 14%',mobileFocus:'50% 10%'});
  feature(17,{quote:'“This is the year 2018. They have never come back.”',quoteBy:'Sam'});
  feature(20,{locations:[{label:'Hoboken Waterfront',query:'Hoboken Waterfront, Hoboken, NJ',note:'A geographic anchor for the docks and longshoreman world behind the story.'}]});
  feature(21,{quote:'“So I lost my hat. And I loved my hat.”',quoteBy:'Sam',locations:[
    {label:'Downtown Vancouver',query:'Granville Street and Georgia Street, Vancouver, BC',note:'A useful downtown anchor for the street celebrations that filled central Vancouver on V-J Day.'},
    {label:'New Westminster waterfront',query:'New Westminster Quay, New Westminster, BC',note:'The Fraser River waterfront in the city where Gramps says his ship had pulled in before liberty in Vancouver.'}
  ]});
  feature(22,{quote:'“If it laid there, it meant I wanted it. She threw it away.”',quoteBy:'Sam'});
  feature(23,{quote:'“I do that on purpose so you don’t ask me to do anything.”',quoteBy:'Gramps, according to Gram'});
  feature(24,{quote:'“I took the plums and I threw them at him.”',quoteBy:'Marietta',focus:'50% 70%',mobileFocus:'50% 72%'});
  feature(25,{quote:'“You look so stupid in it. I don’t want you to wear it. But this hat I don’t want you to take off.”',quoteBy:'Marietta',locations:[{label:'Their Burger King',query:'Burger King, 309 NJ-31, Washington, NJ 07882',note:'A true regular stop for Sam and Marietta — the staff knew them, knew their special order, and treated them like family.'}]});
  feature(26,{locations:[{label:'Dr. Peluso’s office',query:'533 Adams Street, Hoboken, NJ',note:'The Hoboken address tied to the dental-office stories.'}]});

  if(window.STORY_FEATURES){
    delete STORY_FEATURES[14].context;delete STORY_FEATURES[14].contextTitle;
    delete STORY_FEATURES[18].context;delete STORY_FEATURES[18].contextTitle;
    delete STORY_FEATURES[21].context;delete STORY_FEATURES[21].contextTitle;
    delete STORY_FEATURES[26].context;delete STORY_FEATURES[26].contextTitle;
    STORY_FEATURES[16].locations=[{label:'Saints Peter & Paul Church',query:'Saints Peter and Paul Church, Hoboken, NJ',note:'Gramps uses Saints Peter & Paul to place the teenage produce-store story in Hoboken.'}];
    STORY_FEATURES[18].locations=[
      {label:'Gay Blades',query:'239 West 52nd Street, New York, NY',note:'The West 52nd Street roller rink Gramps remembers from the courtship years.'},
      {label:'Journal Square, Jersey City',query:'Journal Square, Jersey City, NJ',note:'The China Clipper restaurant Gramps remembers in the courtship story was in the Journal Square area.'}
    ];
    Object.values(STORY_FEATURES).forEach(f=>{if(f)f.photoNote=null});
  }

  if(window.STORY_CULTURE){
    delete STORY_CULTURE[13];
    delete STORY_CULTURE[18];
  }

  if(window.STORY_RESEARCH){
    delete STORY_RESEARCH[8];
    delete STORY_RESEARCH[10];
    delete STORY_RESEARCH[13];
    delete STORY_RESEARCH[16];
    delete STORY_RESEARCH[17];
    delete STORY_RESEARCH[18];
    delete STORY_RESEARCH[25];
    delete STORY_RESEARCH[26];
    STORY_RESEARCH[5]={cards:[{kicker:'Who was Tony Pro?',title:'Anthony “Tony Pro” Provenzano',body:'Tony Provenzano was a major North Jersey Teamsters figure who rose through Local 560 and became nationally known for organized-crime connections and federal prosecutions.',link:'https://time.com/archive/6812606/labor-tony-pro-takes-a-tumble/',linkLabel:'TIME · 1963 ↗'}]};
    STORY_RESEARCH[12]={cards:[{kicker:'Hoboken politics',title:'Gallo and DeSapio',body:'Thomas A. Gallo and Fred M. DeSapio were both figures in Hoboken’s political world, and appeared on the same 1951 municipal ticket.',link:'https://law.justia.com/cases/new-jersey/appellate-division-published/1952/19-n-j-super-469-0.html',linkLabel:'1952 New Jersey court record ↗'}]};
    STORY_RESEARCH[14]={cards:[
      {kicker:'Sam’s ship',title:'SS Alcoa Pegasus',body:'Built in 1943, Alcoa Pegasus was a 418-foot C1-B break-bulk cargo ship — essentially brand new when Sam served aboard during the war.',link:'https://vesselhistory.marad.dot.gov/ShipHistory/Detail/6598',linkLabel:'MARAD vessel history ↗'},
      {kicker:'Sam’s ship',title:'SS West Cusseta',body:'West Cusseta was an older Design 1013 cargo ship built in Los Angeles in 1921. She remained in service through the end of World War II and was scrapped in 1947.',link:'https://www.shipscribe.com/mckellar/pix/1013.html',linkLabel:'Ship history & design ↗'}
    ]};
    STORY_RESEARCH[15]={cards:[{kicker:'The message he missed',title:'Permission for target practice',body:'The signal Sam missed was routine: after the ship passed the Golden Gate, the station was telling them they could conduct target practice. He says it was the same message every time they left San Francisco — which is how he later knew exactly what he had missed.'}]};
    STORY_RESEARCH[19]={cards:[{kicker:'Iconic Moment Captured',title:'Let me get the other phone',body:'At 4:45 of this story, the phone rings (with unfortunate news that leads to its own amusing exchange) and as Gramps takes the phone we captured his legendary “Let me get the other phone” on tape for eternity.'}]};
    STORY_RESEARCH[21]={cards:[
      {kicker:'The story had a second life',title:'Find Sam’s Hat',body:'Nearly 70 years after the hat vanished in Vancouver, Mike launched “Find Sam’s Hat,” a Facebook/social campaign to see whether the original Navy Dixie cup could somehow find its way home. It became one of Gramps’ favorite things to tell people about.',link:'https://www.facebook.com/FindSamsHat',linkLabel:'Visit Find Sam’s Hat ↗'},
      {kicker:'CBC British Columbia · August 2014',title:'The search made the news',body:'CBC Vancouver interviewed Mike by Skype and aired the story on Friday, August 22, 2014.',image:'https://drive.google.com/thumbnail?id=16F8N17c2tItKFdlNH5DNrvHKI6sXWNhq&sz=w1400',youtube:'https://www.youtube.com/embed/hOqtkNwJhFI'},
      {kicker:'The Province · Vancouver',title:'“Sailor grabbed during 1945 victory celebration in Vancouver”',body:'The Vancouver newspaper The Province also picked up the hunt, a nice surviving breadcrumb from the moment this family story briefly became Vancouver news.',link:'https://web.archive.org/web/20140809032330/http://www.theprovince.com/news/Sailor+grabbed+during+1945+victory+celebration+Vancouver/10094780/story.html',linkLabel:'Read the archived Province article ↗'}
    ]};
    STORY_RESEARCH[22]={cards:[
      {kicker:'The Record',title:'Dick Todd — “Along the Santa Fe Trail”',body:'Discography records place Dick Todd’s recording of “Along the Santa Fe Trail” on November 14, 1940.',youtube:'https://www.youtube.com/embed/b_qYRHhHkmI?start=3'},
      {kicker:'The Chairman of the Board',title:'Sinatra and Hoboken',body:'Shockingly this is the only time Frank Sinatra is mentioned in the recording. Sinatra was born at 415 Monroe Street, and his parents later lived at 909 Hudson Street. By 1942 — when teenage Sam was crossing by ferry to New York for the Paramount and Strand — Sinatra’s solo career was exploding in Manhattan. Sam remembers waiting backstage for performers and says he once got Sinatra’s autograph and photograph. Hoboken’s huge Sinatra Day celebration came on October 30, 1947, just months after Sam and Marietta married.',link:'https://hobokenmuseum.org/explore-hoboken/historic-highlights/frank-sinatra-the-voice/',linkLabel:'Hoboken Historical Museum ↗'}
    ]};
    STORY_RESEARCH[25]={cards:[{kicker:'A regular stop',title:'Their Burger King',body:'The Washington Burger King was one of Gram and Gramps’ regular spots. The staff knew them, knew their special order, and over the years treated them like family — from anniversary decorations to a COVID-era birthday drive-by.'}]};
  }

  if(window.STORY_FILTER_META){
    if(STORY_FILTER_META[6]) Object.assign(STORY_FILTER_META[6],{when:['Later Years']});
    if(STORY_FILTER_META[7]) Object.assign(STORY_FILTER_META[7],{when:['Later Years']});
    if(STORY_FILTER_META[9]) Object.assign(STORY_FILTER_META[9],{locations:['Washington']});
  }

  // Canonical speaker labels for site metadata and quote attribution.
  // Narrative/history copy keeps proper names where those names are the subject.
  if(window.STORIES){
    STORIES.forEach(s=>{
      if(!s||!s.speaker)return;
      s.speaker=s.speaker
        .replace(/Mike Tridente/g,'Mike')
        .replace(/Mike T\b/g,'Mike')
        .replace(/Marietta/g,'Gram')
        .replace(/\bSam\b/g,'Gramps');
    });
  }
  if(window.STORY_FEATURES){
    Object.values(STORY_FEATURES).forEach(f=>{
      if(!f||!f.quoteBy)return;
      f.quoteBy=f.quoteBy
        .replace(/^Mike Tridente$/,'Mike')
        .replace(/^Mike T$/,'Mike')
        .replace(/^Marietta$/,'Gram')
        .replace(/^Sam$/,'Gramps');
    });
  }
})();
