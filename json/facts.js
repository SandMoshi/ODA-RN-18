const facts = [
    [1,"OD","The band’s Twitter ID’s are @Harry_Styles, @NiallOfficial, @zaynmalik, @Real_Liam_Payne and Louis_Tomlinson.",0],
    [2,"HA","Harry came up with the band name One Direction.",0],
    [3,"LI","Liam is an avid fan of boxing.",0],
    [4,"NI","Niall says he’s only read one book – the American classic ‘To Kill A Mockingbird’.",0],
    [5,"LI","Liam once confessed to owning a pair of pink hair straighteners. Nice!",0],
    [6,"HA","Harry says he would happily date a fan! When asked he said: “Yeah definitely, because if you like someone, you like someone. If they’re a fan it shouldn’t make any difference.”",0],
    [7,"ZA","Zayn has three sisters but no brothers. They’re called Doniya, Waliyha and Safaa.",0],
    [8,"LI","Liam and Niall both share the same middle name – James.",0],
    [9,"HA","While on the road, Harry likes to bring a candle from home to help him relax.",0],
    [10,"HA","Harry suffers from somniloquy, otherwise known as sleep talking.",0],
    [11,"HA","Harry Styles was born on 1st February 1994 making him the youngest member of 1D. His star sign is Aquarius.",0],
    [12,"LO","Louis Tomlinson was born on 24th December 1991. He’s a Capricorn and the oldest member of One Direction.",0],
    [13,"LI","Liam Payne was born on 29th August 1993. His star sign in Virgo.",0],
    [14,"NI","Niall Horan was born on 13th September 1993. Just like Liam, he’s a Virgo.",0],
    [15,"ZA","Zayn Malik was born on 12th January 1993. He’s a Capricorn just like Louis.",0],
    [16,"LO","If Louis had a superpower, he would fly.",0],
    [17,"LI","Liam’s favourite colour is purple.",0],
    [18,"LI","Liam’s favourite film is the Toy Story trilogy.",0],
    [19,"LI","Liam once cried while watching Marley & Me. Bless him.",0],
    [20,"NI","Niall is left-handed.",0],
    [21,"NI","Niall was brought up in Mullingar in Ireland.",0],
    [22,"HA","Harry’s musical heroes are The Beatles and he’s also a huge Coldplay fan.",0],
    [23,"HA","Harry was brought up in the village of Holmes Chapel in Cheshire.",0],
    [24,"LO","Louis was brought up in Doncaster, South Yorkshire. Other famous people who hail from there include Jeremy Clarkson and Brian Blessed.",0],
    [25,"LO","Louis’s favourite band is The Fray.",0],
    [26,"LI","Liam spent his childhood in Wolverhampton, the birthplace of Led Zeppelin legend Robert Plant and Slade’s Noddy Holder.",0],
    [27,"LI","Liam’s celebrity crush is Leona Lewis and his man crush is stand-up comedian Michael McIntyre",0],
    [28,"LI","Liam has a very unusual phobia – SPOONS! He admits it’s “very strange” and would like to invent an ‘anti-spoons’ app for mobile phones.",0],
    [29,"NI","Niall’s ideal woman is Cheryl Cole and his man crush is Michael Buble.",0],
    [30,"NI","Niall’s favourite movie of all time is Grease.",0],
    [31,"ZA","Zayn’s favourite band of all time is *NSYNC.",0],
    [32,"NI","Niall sang Ne-Yo’s ‘So Sick’ in the X Factor first round and received glowing praise from Louis Walsh. A big Oasis fan, he covered ‘Champagne Supernova’ at bootcamp.",0],
    [33,"LI","Liam sang Justin Timberlake’s ‘Cry Me A River’ in his 2010 X Factor audition and received a standing ovation. At bootcamp he covered Oasis’ ‘Stop Crying Your Heart Out.’",0],
    [34,"LO","Louis auditioned to X Factor with Plain White T’s ‘Hey There Delilah’ and got a clean sweep of yes’s from the judges.",0],
    [35,"OD","One Direction are the brand ambassadors for the computer game Pokémon Black and White and have appeared on TV adverts and performed at events.",0],
    [36,"OD","It was guest judge, former Pussycat Doll Nicole Scherzinger, who suggested that Harry, Niall, Zayn, Liam and Louis should be put together as a group at X Factor bootcamp.",0],
    [37,"OD","The ‘One Direction 2012 Calendar’ is the best selling calendar of all time on Amazon.co.uk ahead of Cheryl Cole and JLS’s official 2011 calendars.",0],
    [38,"HA","Harry’s favourite song of all time is ‘Free Falling’ by John Mayer.",0],
    [39,"ZA","Zayn, Louis and Harry all support Manchester United. Liam is a West Bromich Albion fan while Niall follows Derby County.",0],
    [40,"HA","Harry makes a brief cameo appearance in Ed Sheeran’s first ‘Drunk’ video.  It was filmed backstage at London’s Shepherd’s Bush Empire.",0],
    [41,"OD","Harry and Louis are the only two members of One Direction who have passed their driving test.",0],
    [42,"OD","One Direction have a bizarre pre-gig ritual of eating Haribo sweets together. Louis explained to The Sun: ",0],
    [43,"OD","1D would really love to collaborate with Bruno Mars. They told teen.com: “(He has) great songs, great stage presence, an unbelievable performer. His vocal is absolutely flawless.”",0],
    [44,"OD","When One Direction announced their debut UK tour, it sold out within 12 minutes of release!",0],
    [45,"HA","Harry used to be in a band called ‘White Eskimo’.",0],
    [46,"LO","Louis got suspended from school and had to retake year 12.",0],
    [47,"LI","Liam recommends listening to Pharrell, Kanye, Jay-Z, and Kendrick Lamar",0],
    [48,"HA","David Hasselhoff is one of Harry's biggest heroes",0],
    [49,"HA","Before becoming famous, Harry wanted to become a physiotherapist.",0],
    [50,"LO","When he was younger, Louis wanted to work on a farm.",0],
    [51,"NI","Niall loves to bake and makes the best cupcakes ever (according to his dad!).",0],
    [52,"LI","Liam's dream job is to be a firefighter",0],
    [53,"ZA","Zayn's last name means 'king' or 'chieftain' in Arabic",0],
    [54,"HA","Harry’s favourite TV show is Family Guy and his favourite movie is Love Actually - however, he tells everyone it’s Fight Club to seem more manly!",0],
    [55,"HA","While on The X Factor, Harry had a big crush on judge Cheryl Cole and X Factor host Caroline Flack. He’s joked that his man crush is Louis Tomlinson!",0],
    [56,"LO","Bizarrely, Louis says he likes girls who eat carrots!",0],
    [57,"LI","Liam also took part the 2008 series of The X Factor making it through to Simon’s house in Barbados where he was cruelly eliminated.",0],
    [58,"LI","Liam only has one kidney after getting one removed as a kid. He’s completely teetotal and never touches a drop of alcohol, as he explains: “It’s just a choice to be on the safe side.”",0],
    [59,"OD","On their 53:14min long debut album ‘Up All Night’, Harry gets 7:18min worth of solos, Liam has 7:08min, Zayn has 5:38min, Louis has 1:29min and Niall has 1:24min.",0],
    [60,"OD","When asked what they couldn't live without, Liam, Zayn and Louis all said their phones. Niall went for music and Harry opted for family.",0],
    [61,"ZA","In 2015, Zayn claimed the favorite thing in his wardrobe was his Dr. Martens boots",0],
    [62,"HA","Harry once bought £3,000 worth of pizzas for the homeless and hungry of LA.",0],
    [63,"LO","Louis once flashed his bum to his principal and got suspended for three days.",0],
    [64,"LO","Louis signed for Doncaster Rovers as a non-contract football player in August 2013, making his debut in February 2014.",0]
  ];

  export default  facts;