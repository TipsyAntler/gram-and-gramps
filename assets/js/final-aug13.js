(()=>{
  if(!window.STORY_RESEARCH)return;
  const R=window.STORY_RESEARCH;

  // 010 — remove the extra Stevens context card.
  delete R[10];

  // 015 — keep the Golden Gate context, remove the duplicate "message he missed" card.
  R[15]={cards:[{
    kicker:'Passing under a new icon',
    title:'The Golden Gate was still brand new',
    body:'The Golden Gate Bridge opened in 1937. When Gramps was sailing beneath it during World War II trying not to miss a signal, the bridge was less than a decade old — and still held the record for the world’s longest suspension-bridge span.',
    link:'https://www.goldengate.org/bridge/history-research/statistics-data/faqs/',
    linkLabel:'Golden Gate Bridge ↗'
  }]};

  // 017 — approved Milne Bay wording.
  R[17]={cards:[{
    kicker:'Wartime geography',
    title:'Milne Bay had already made history',
    body:"The grass-skirt scam happens at a place with a much bigger wartime story behind it. In 1942, prior to Gramps' arrival Milne Bay was the site of the first major defeat of Japanese land forces in the Pacific War.",
    link:'https://placesofpride.awm.gov.au/stories/123016/264589',
    linkLabel:'Australian War Memorial ↗'
  }]};

  // 020 — keep the On the Waterfront connection because it overlaps directly with places in their stories.
  const existing20=R[20]&&Array.isArray(R[20].cards)?R[20].cards:[];
  const base20=existing20.filter(card=>card.kicker!=='The real Hoboken waterfront');
  R[20]={cards:[...base20,{
    kicker:'The real Hoboken waterfront',
    title:'Their Hoboken is literally in On the Waterfront',
    body:'The dockside Hoboken Gramps describes was the same working waterfront that inspired and became the setting for On the Waterfront. Even better, the movie overlaps directly with places that show up elsewhere in Gram and Gramps’ stories:',
    bullets:[
      'Saints Peter & Paul at Hudson and Fourth — the church Gramps uses to place Story 016 — had interior scenes filmed there.',
      'Church Square Park — the anchor for Gram’s Detective Story — appears in the film as well.',
      'Marlon Brando exits the famous “I coulda been a contender” car scene onto Hoboken’s River Street, putting one of the movie’s most famous moments back in the same riverfront geography as Papa’s dock stories.'
    ],
    link:'https://hobokenmuseum.org/explore-hoboken/historic-highlights/on-the-waterfront/on-the-waterfront-locations/',
    linkLabel:'Hoboken Historical Museum ↗'
  }]};

  // 024 — remove the extra St. Mary’s history card; keep the map supplied by STORY_FEATURES.
  R[24]={cards:[]};

  // 025 — remove the Burger King context and keep only the approved Postmaster context.
  R[25]={cards:[{
    kicker:'From the ranks to Postmaster',
    title:'A 40-year climb through the Postal Service',
    body:'Gramps started with the Postal Service as a substitute clerk in 1946 and worked his way through supervisory roles before becoming Hoboken Postmaster in 1977, the first Hoboken postmaster promoted from the ranks.'
  }]};

  // 022 — deepen the Sinatra/Hoboken connection with a few concise facts tied back to their world.
  const cards22=R[22]&&Array.isArray(R[22].cards)?R[22].cards:[];
  const sinatra=cards22.find(card=>card.title==='Sinatra and Hoboken');
  if(sinatra){
    sinatra.body='Frank Sinatra only comes up once in the recording, but he was woven through the same small Hoboken world Gram and Gramps knew.';
    sinatra.bullets=[
      'Sinatra was born at 415 Monroe Street. His mother Dolly was a Democratic ward leader, while his father Marty boxed under the name “Marty O’Brien” so he could fight in Hoboken’s Irish-only gyms before later becoming a firefighter and tavern owner.',
      'Before fame, Sinatra earned $40 a week singing at the Union Club at 600 Hudson Street — just a block north of the original Stevens Administration Building at Fifth and Hudson, on the same small stretch of town that later became such a big part of Gram’s working life.',
      'In 1935 he joined the Hoboken Four, who appeared on Major Bowes’ nationally broadcast amateur hour and were voted the program’s most popular act.',
      'Hoboken’s main post office at 89 River Street — the office Gramps later led as Hoboken Postmaster — was renamed the Frank Sinatra Post Office Building in 2002.'
    ];
  }
})();