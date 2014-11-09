module.exports = function(app) {
  var express = require('express');
  var setRouter = express.Router();
  setRouter.get('/', function(req, res) {
    res.send({"sets": [{"name":"Limited Edition Alpha","code":"LEA","releaseDate":"1993-08-05"},{"name":"Limited Edition Beta","code":"LEB","releaseDate":"1993-10-01"},{"name":"Arabian Nights","code":"ARN","releaseDate":"1993-12-01"},{"name":"Unlimited Edition","code":"2ED","releaseDate":"1993-12-01"},{"name":"Dragon Con","code":"pDRC","releaseDate":"1994-01-01"},{"name":"Antiquities","code":"ATQ","releaseDate":"1994-03-01"},{"name":"Revised Edition","code":"3ED","releaseDate":"1994-04-01"},{"name":"Legends","code":"LEG","releaseDate":"1994-06-01"},{"name":"The Dark","code":"DRK","releaseDate":"1994-08-01"},{"name":"Media Inserts","code":"pMEI","releaseDate":"1995-01-01"},{"name":"Fallen Empires","code":"FEM","releaseDate":"1994-11-01"},{"name":"Legend Membership","code":"pLGM","releaseDate":"1995-01-01"},{"name":"Fourth Edition","code":"4ED","releaseDate":"1995-04-01"},{"name":"Ice Age","code":"ICE","releaseDate":"1995-06-01"},{"name":"Chronicles","code":"CHR","releaseDate":"1995-07-01"},{"name":"Homelands","code":"HML","releaseDate":"1995-10-01"},{"name":"Alliances","code":"ALL","releaseDate":"1996-06-10"},{"name":"Rivals Quick Start Set","code":"RQS","releaseDate":"1996-07-01"},{"name":"Arena League","code":"pARL","releaseDate":"1996-08-02"},{"name":"Celebration","code":"pCEL","releaseDate":"1996-08-14"},{"name":"Mirage","code":"MIR","releaseDate":"1996-10-08"},{"name":"Multiverse Gift Box","code":"MGB","releaseDate":"1996-11-01"},{"name":"Introductory Two-Player Set","code":"ITP","releaseDate":"1996-12-31"},{"name":"Visions","code":"VIS","releaseDate":"1997-02-03"},{"name":"Fifth Edition","code":"5ED","releaseDate":"1997-03-24"},{"name":"Portal Demo Game","code":"pPOD","releaseDate":"1997-05-01"},{"name":"Portal","code":"POR","releaseDate":"1997-05-01"},{"name":"Vanguard","code":"VAN","releaseDate":"1997-05-01"},{"name":"Weatherlight","code":"WTH","releaseDate":"1997-06-09"},{"name":"Prerelease Events","code":"pPRE","releaseDate":"1997-10-04"},{"name":"Tempest","code":"TMP","releaseDate":"1997-10-14"},{"name":"Stronghold","code":"STH","releaseDate":"1998-03-02"},{"name":"Portal Second Age","code":"PO2","releaseDate":"1998-06-01"},{"name":"Judge Gift Program","code":"pJGP","releaseDate":"1998-06-01"},{"name":"Exodus","code":"EXO","releaseDate":"1998-06-15"},{"name":"Unglued","code":"UGL","releaseDate":"1998-08-11"},{"name":"Asia Pacific Land Program","code":"pALP","releaseDate":"1998-09-01"},{"name":"Urza's Saga","code":"USG","releaseDate":"1998-10-12"},{"name":"Anthologies","code":"ATH","releaseDate":"1998-11-01"},{"name":"Urza's Legacy","code":"ULG","releaseDate":"1999-02-15"},{"name":"Classic Sixth Edition","code":"6ED","releaseDate":"1999-04-21"},{"name":"Portal Three Kingdoms","code":"PTK","releaseDate":"1999-05-01"},{"name":"Urza's Destiny","code":"UDS","releaseDate":"1999-06-07"},{"name":"Starter 1999","code":"S99","releaseDate":"1999-07-01"},{"name":"Guru","code":"pGRU","releaseDate":"1999-07-12"},{"name":"Worlds","code":"pWOR","releaseDate":"1999-08-04"},{"name":"Wizards of the Coast Online Store","code":"pWOS","releaseDate":"1999-09-04"},{"name":"Mercadian Masques","code":"MMQ","releaseDate":"1999-10-04"},{"name":"Battle Royale Box Set","code":"BRB","releaseDate":"1999-11-12"},{"name":"Super Series","code":"pSUS","releaseDate":"1999-12-01"},{"name":"Friday Night Magic","code":"pFNM","releaseDate":"2000-02-01"},{"name":"European Land Program","code":"pELP","releaseDate":"2000-02-05"},{"name":"Nemesis","code":"NMS","releaseDate":"2000-02-14"},{"name":"Starter 2000","code":"S00","releaseDate":"2000-04-01"},{"name":"Prophecy","code":"PCY","releaseDate":"2000-06-05"},{"name":"Beatdown Box Set","code":"BTD","releaseDate":"2000-10-01"},{"name":"Invasion","code":"INV","releaseDate":"2000-10-02"},{"name":"Planeshift","code":"PLS","releaseDate":"2001-02-05"},{"name":"Seventh Edition","code":"7ED","releaseDate":"2001-04-11"},{"name":"Magic Player Rewards","code":"pMPR","releaseDate":"2001-05-01"},{"name":"Apocalypse","code":"APC","releaseDate":"2001-06-04"},{"name":"Odyssey","code":"ODY","releaseDate":"2001-10-01"},{"name":"Deckmasters","code":"DKM","releaseDate":"2001-12-01"},{"name":"Torment","code":"TOR","releaseDate":"2002-02-04"},{"name":"Judgment","code":"JUD","releaseDate":"2002-05-27"},{"name":"Onslaught","code":"ONS","releaseDate":"2002-10-07"},{"name":"Legions","code":"LGN","releaseDate":"2003-02-03"},{"name":"Scourge","code":"SCG","releaseDate":"2003-05-26"},{"name":"Release Events","code":"pREL","releaseDate":"2003-07-26"},{"name":"Eighth Edition","code":"8ED","releaseDate":"2003-07-28"},{"name":"Eighth Edition Box Set","code":"8BS","releaseDate":"2003-07-28"},{"name":"Mirrodin","code":"MRD","releaseDate":"2003-10-02"},{"name":"Darksteel","code":"DST","releaseDate":"2004-02-06"},{"name":"Fifth Dawn","code":"5DN","releaseDate":"2004-06-04"},{"name":"Champions of Kamigawa","code":"CHK","releaseDate":"2004-10-01"},{"name":"Unhinged","code":"UNH","releaseDate":"2004-11-20"},{"name":"Betrayers of Kamigawa","code":"BOK","releaseDate":"2005-02-04"},{"name":"Saviors of Kamigawa","code":"SOK","releaseDate":"2005-06-03"},{"name":"Ninth Edition","code":"9ED","releaseDate":"2005-07-29"},{"name":"Ninth Edition Box Set","code":"9BS","releaseDate":"2005-07-29"},{"name":"Ravnica: City of Guilds","code":"RAV","releaseDate":"2005-10-07"},{"name":"Two-Headed Giant Tournament","code":"p2HG","releaseDate":"2005-12-09"},{"name":"WPN and Gateway","code":"pWPN","releaseDate":"2006-01-01"},{"name":"Guildpact","code":"GPT","releaseDate":"2006-02-03"},{"name":"Champs and States","code":"pCMP","releaseDate":"2006-03-18"},{"name":"Dissension","code":"DIS","releaseDate":"2006-05-05"},{"name":"Coldsnap","code":"CSP","releaseDate":"2006-07-21"},{"name":"Coldsnap Theme Decks","code":"CST","releaseDate":"2006-07-21"},{"name":"Time Spiral","code":"TSP","releaseDate":"2006-10-06"},{"name":"Time Spiral \"Timeshifted\"","code":"TSB","releaseDate":"2006-10-06"},{"name":"Happy Holidays","code":"pHHO","releaseDate":"2006-12-31"},{"name":"Planar Chaos","code":"PLC","releaseDate":"2007-02-02"},{"name":"Pro Tour","code":"pPRO","releaseDate":"2007-02-09"},{"name":"Grand Prix","code":"pGPX","releaseDate":"2007-02-24"},{"name":"Future Sight","code":"FUT","releaseDate":"2007-05-04"},{"name":"Tenth Edition","code":"10E","releaseDate":"2007-07-13"},{"name":"Magic Game Day","code":"pMGD","releaseDate":"2007-07-14"},{"name":"Masters Edition","code":"MED","releaseDate":"2007-09-10"},{"name":"Lorwyn","code":"LRW","releaseDate":"2007-10-12"},{"name":"Duel Decks: Elves vs. Goblins","code":"EVG","releaseDate":"2007-11-16"},{"name":"Launch Parties","code":"pLPA","releaseDate":"2008-02-01"},{"name":"Morningtide","code":"MOR","releaseDate":"2008-02-01"},{"name":"15th Anniversary","code":"p15A","releaseDate":"2008-04-01"},{"name":"Shadowmoor","code":"SHM","releaseDate":"2008-05-02"},{"name":"Summer of Magic","code":"pSUM","releaseDate":"2007-07-21"},{"name":"Eventide","code":"EVE","releaseDate":"2008-07-25"},{"name":"From the Vault: Dragons","code":"DRB","releaseDate":"2008-08-29"},{"name":"Masters Edition II","code":"ME2","releaseDate":"2008-09-22"},{"name":"Shards of Alara","code":"ALA","releaseDate":"2008-10-03"},{"name":"Duel Decks: Jace vs. Chandra","code":"DD2","releaseDate":"2008-11-07"},{"name":"Conflux","code":"CON","releaseDate":"2009-02-06"},{"name":"Duel Decks: Divine vs. Demonic","code":"DDC","releaseDate":"2009-04-10"},{"name":"Alara Reborn","code":"ARB","releaseDate":"2009-04-30"},{"name":"Magic 2010","code":"M10","releaseDate":"2009-07-17"},{"name":"From the Vault: Exiled","code":"V09","releaseDate":"2009-08-28"},{"name":"Planechase","code":"HOP","releaseDate":"2009-09-04"},{"name":"Masters Edition III","code":"ME3","releaseDate":"2009-09-07"},{"name":"Zendikar","code":"ZEN","releaseDate":"2009-10-02"},{"name":"Duel Decks: Garruk vs. Liliana","code":"DDD","releaseDate":"2009-10-30"},{"name":"Premium Deck Series: Slivers","code":"H09","releaseDate":"2009-11-20"},{"name":"Worldwake","code":"WWK","releaseDate":"2010-02-05"},{"name":"Duel Decks: Phyrexia vs. the Coalition","code":"DDE","releaseDate":"2010-03-19"},{"name":"Rise of the Eldrazi","code":"ROE","releaseDate":"2010-04-23"},{"name":"Duels of the Planeswalkers","code":"DPA","releaseDate":"2010-06-04"},{"name":"Archenemy","code":"ARC","releaseDate":"2010-06-18"},{"name":"Magic 2011","code":"M11","releaseDate":"2010-07-16"},{"name":"From the Vault: Relics","code":"V10","releaseDate":"2010-08-27"},{"name":"Duel Decks: Elspeth vs. Tezzeret","code":"DDF","releaseDate":"2010-09-03"},{"name":"Scars of Mirrodin","code":"SOM","releaseDate":"2010-10-01"},{"name":"Premium Deck Series: Fire and Lightning","code":"PD2","releaseDate":"2010-11-19"},{"name":"Masters Edition IV","code":"ME4","releaseDate":"2011-01-10"},{"name":"Mirrodin Besieged","code":"MBS","releaseDate":"2011-02-04"},{"name":"Duel Decks: Knights vs. Dragons","code":"DDG","releaseDate":"2011-04-01"},{"name":"New Phyrexia","code":"NPH","releaseDate":"2011-05-13"},{"name":"Magic: The Gathering-Commander","code":"CMD","releaseDate":"2011-06-17"},{"name":"Magic 2012","code":"M12","releaseDate":"2011-07-15"},{"name":"From the Vault: Legends","code":"V11","releaseDate":"2011-08-26"},{"name":"Duel Decks: Ajani vs. Nicol Bolas","code":"DDH","releaseDate":"2011-09-02"},{"name":"Innistrad","code":"ISD","releaseDate":"2011-09-30"},{"name":"Premium Deck Series: Graveborn","code":"PD3","releaseDate":"2011-11-18"},{"name":"Dark Ascension","code":"DKA","releaseDate":"2012-02-03"},{"name":"Duel Decks: Venser vs. Koth","code":"DDI","releaseDate":"2012-03-30"},{"name":"Avacyn Restored","code":"AVR","releaseDate":"2012-05-04"},{"name":"Planechase 2012 Edition","code":"PC2","releaseDate":"2012-06-01"},{"name":"Magic 2013","code":"M13","releaseDate":"2012-07-13"},{"name":"From the Vault: Realms","code":"V12","releaseDate":"2012-08-31"},{"name":"Duel Decks: Izzet vs. Golgari","code":"DDJ","releaseDate":"2012-09-07"},{"name":"Return to Ravnica","code":"RTR","releaseDate":"2012-10-05"},{"name":"Commander's Arsenal","code":"CM1","releaseDate":"2012-11-02"},{"name":"Gatecrash","code":"GTC","releaseDate":"2013-02-01"},{"name":"Duel Decks: Sorin vs. Tibalt","code":"DDK","releaseDate":"2013-03-15"},{"name":"World Magic Cup Qualifiers","code":"pWCQ","releaseDate":"2013-04-06"},{"name":"Dragon's Maze","code":"DGM","releaseDate":"2013-05-03"},{"name":"Modern Masters","code":"MMA","releaseDate":"2013-06-07"},{"name":"Magic 2014 Core Set","code":"M14","releaseDate":"2013-07-19"},{"name":"From the Vault: Twenty","code":"V13","releaseDate":"2013-08-23"},{"name":"Duel Decks: Heroes vs. Monsters","code":"DDL","releaseDate":"2013-09-06"},{"name":"Theros","code":"THS","releaseDate":"2013-09-27"},{"name":"Commander 2013 Edition","code":"C13","releaseDate":"2013-11-01"},{"name":"Born of the Gods","code":"BNG","releaseDate":"2014-02-07"},{"name":"Duel Decks: Jace vs. Vraska","code":"DDM","releaseDate":"2014-03-14"},{"name":"Journey into Nyx","code":"JOU","releaseDate":"2014-05-02"},{"name":"Modern Event Deck 2014","code":"MD1","releaseDate":"2014-05-30"},{"name":"Magic: The Gathering—Conspiracy","code":"CNS","releaseDate":"2014-06-06"},{"name":"Vintage Masters","code":"VMA","releaseDate":"2014-06-16"},{"name":"Magic 2015 Core Set","code":"M15","releaseDate":"2014-07-18"},{"name":"From the Vault: Annihilation (2014)","code":"V14","releaseDate":"2014-08-22"},{"name":"Duel Decks: Speed vs. Cunning","code":"DDN","releaseDate":"2014-09-05"},{"name":"Khans of Tarkir","code":"KTK","releaseDate":"2014-09-26"},{"name":"Commander 2014","code":"C14","releaseDate":"2014-11-07"}]});
  });
  app.use('/api/sets', setRouter);
};
