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

  feature(6,{image:'https://drive.google.com/thumbnail?id=1uDkWC1lfMEfI4SRvEZ7ov0Cl_iW1Wmvt&sz=w1800',quote:'“If somebody spoke to me with a dialect, I don’t know why, I would just answer them with their dialect.”',quoteBy:'Marietta',focus:'50% 30%',mobileFocus:'50% 20%'});
  feature(7,{quote:'“I seem to get in trouble all the time.”',quoteBy:'Marietta'});
  feature(8,{quote:'“I’m taking Stevens to court.”',quoteBy:'Marietta'});
  feature(9,{image:'https://drive.google.com/thumbnail?id=1MJA2WRjSsl3waaRebiGanG0dg9UdJVm9&sz=w1800',quote:'“And they just cracked up. It was a sight to see.”',quoteBy:'Marietta',focus:'29% 66%',mobileFocus:'28% 66%'});
  feature(10,{image:'https://drive.google.com/thumbnail?id=1MRC4sQ7sUo91FAmOM54jIxCXMwRdP4ZP&sz=w1800',quote:'“One more word out of you, and brother, you’re on that floor.”',quoteBy:'Marietta',focus:'50% 30%',mobileFocus:'50% 24%'});
  feature(11,{quote:'“That’s why we’re married 71 years. He knows better.”',quoteBy:'Marietta'});
  feature(12,{quote:'“Now get up and get the hell out of my house.”',quoteBy:'Marietta'});
  feature(14,{quote:'“I didn’t go in because I wanted to be a hero.”',quoteBy:'Sam',focus:'50% 8%',mobileFocus:'50% 5%'});
  feature(15,{image:'https://drive.google.com/thumbnail?id=13TANxv7nL-WSxXDFlerqsGfqhA2laCxA&sz=w1800',quote:'“I never got the message. I wanted to die.”',quoteBy:'Sam',focus:'50% 18%',mobileFocus:'50% 12%'});
  feature(16,{image:'https://drive.google.com/thumbnail?id=1T4IS4-px45gqs892SbXxOr5KlLfFpCgm&sz=w1800',quote:'“Yeah, but I got scammed.”',quoteBy:'Sam',focus:'50% 14%',mobileFocus:'50% 10%'});
  feature(17,{quote:'“This is the year 2018. They have never come back.”',quoteBy:'Sam'});

  if(window.STORY_FEATURES){
    delete STORY_FEATURES[14].context;delete STORY_FEATURES[14].contextTitle;
    delete STORY_FEATURES[18].context;delete STORY_FEATURES[18].contextTitle;
    STORY_FEATURES[16].locations=[{label:'Saints Peter & Paul Church',query:'Saints Peter and Paul Church, Hoboken, NJ',note:'Gramps uses Saints Peter & Paul to place the teenage produce-store story in Hoboken.'}];
    STORY_FEATURES[18].locations=[
      {label:'Gay Blades',query:'239 West 52nd Street, New York, NY',note:'The West 52nd Street skating rink Gramps remembers from the courtship years.'},
      {label:'Journal Square, Jersey City',query:'Journal Square, Jersey City, NJ',note:'The China Clipper restaurant Gramps remembers in the courtship story was in the Journal Square area.'}
    ];
  }

  if(window.STORY_CULTURE) delete STORY_CULTURE[13];

  if(window.STORY_RESEARCH){
    delete STORY_RESEARCH[8];
    delete STORY_RESEARCH[10];
    delete STORY_RESEARCH[13];
    delete STORY_RESEARCH[16];
    delete STORY_RESEARCH[17];
    STORY_RESEARCH[5]={cards:[{kicker:'Who was Tony Pro?',title:'Anthony “Tony Pro” Provenzano',body:'Tony Provenzano was a major North Jersey Teamsters figure who rose through Local 560 and became nationally known for organized-crime connections and federal prosecutions.',link:'https://time.com/archive/6812606/labor-tony-pro-takes-a-tumble/',linkLabel:'TIME · 1963 ↗'}]};
    STORY_RESEARCH[12]={cards:[{kicker:'Hoboken politics',title:'Gallo and DeSapio',body:'Thomas A. Gallo and Fred M. DeSapio were both figures in Hoboken’s political world, and appeared on the same 1951 municipal ticket.',link:'https://law.justia.com/cases/new-jersey/appellate-division-published/1952/19-n-j-super-469-0.html',linkLabel:'1952 New Jersey court record ↗'}]};
    STORY_RESEARCH[14]={cards:[
      {kicker:'Sam’s ship',title:'SS Alcoa Pegasus',body:'Built in 1943, Alcoa Pegasus was a 418-foot C1-B break-bulk cargo ship — essentially brand new when Sam served aboard during the war.',link:'https://vesselhistory.marad.dot.gov/ShipHistory/Detail/6598',linkLabel:'MARAD vessel history ↗'},
      {kicker:'Sam’s ship',title:'SS West Cusseta',body:'West Cusseta was an older Design 1013 cargo ship built in Los Angeles in 1921. She remained in service through the end of World War II and was scrapped in 1947.',link:'https://www.shipscribe.com/mckellar/pix/1013.html',linkLabel:'Ship history & design ↗'}
    ]};
    STORY_RESEARCH[15]={cards:[{kicker:'The message he missed',title:'Permission for target practice',body:'The signal Sam missed was routine: after the ship passed the Golden Gate, the station was telling them they could conduct target practice. He says it was the same message every time they left San Francisco — which is how he later knew exactly what he had missed.'}]};
    STORY_RESEARCH[18]={cards:[{kicker:'One fun wrinkle',title:'Gay Blades',body:'Period material places Gay Blades on West 52nd Street and describes an ice rink, while the family memory says roller skating — exactly the kind of tiny memory-versus-record wrinkle that makes old stories fun to chase.',link:'https://www.newyorker.com/magazine/1940/12/21/birds-on-ice',linkLabel:'The New Yorker · 1940 ↗'}]};
  }

  if(window.STORY_FILTER_META){
    if(STORY_FILTER_META[6]) Object.assign(STORY_FILTER_META[6],{when:['Later Years']});
    if(STORY_FILTER_META[7]) Object.assign(STORY_FILTER_META[7],{when:['Later Years']});
    if(STORY_FILTER_META[9]) Object.assign(STORY_FILTER_META[9],{locations:['Washington']});
  }
})();
