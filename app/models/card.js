import Ember from 'ember';

/* for ref: single card format

{"Air Elemental":
  {"layout":"normal",
  "name":"Air Elemental",
  "manaCost":"{3}{U}{U}",
  "cmc":5,
  "colors":["Blue"],
  "type":"Creature — Elemental",
  "types":["Creature"],
  "subtypes":["Elemental"],
  "text":"Flying",
  "power":"4",
  "toughness":"4","
  imageName":"air elemental",
  "foreignNames":[{"language":"Chinese Simplified","name":"大气元素"},
      {"language":"Chinese Traditional","name":"大氣元素"},
      {"language":"French","name":"Élémental d'air"},
      {"language":"German","name":"Luftelementar"},{
      "language":"Italian","name":"Elementale dell'Aria"},
      {"language":"Japanese","name":"大気の精霊"},
      {"language":"Korean","name":"공기의 정령"},
      {"language":"Portuguese (Brazil)","name":"Elemental do Ar"},
      {"language":"Russian","name":"Элементаль воздуха"},
      {"language":"Spanish","name":"Elemental de aire"}],
  "printings":["Limited Edition Alpha",
      "Limited Edition Beta","Unlimited Edition","Revised Edition",
      "Fourth Edition","Fifth Edition","Portal Second Age",
      "Classic Sixth Edition","Starter 1999","Battle Royale Box Set",
      "Beatdown Box Set","Seventh Edition","Eighth Edition",
      "Ninth Edition","Tenth Edition","Duel Decks: Jace vs. Chandra",
      "Magic 2010","Duels of the Planeswalkers","Masters Edition IV"],
  "legalities":{"Modern":"Legal","Legacy":"Legal","Vintage":"Legal",
      "Freeform":"Legal","Prismatic":"Legal","Tribal Wars Legacy":"Legal",
      "Singleton 100":"Legal","Commander":"Legal"}}




*/
export default Ember.Object.extend({
  legal: function(){
    var legalities = this.get('legalities');
    var ret = 'isStandard';
    if(legalities.Modern==='Legal'){
      ret = 'isModern';
    } else if(legalities.Legacy==='Legal'){
      ret = 'isLegacy';
    } else if(legalities.Vintage==='Legal'){
      ret = 'isVintage';
    }
    return ret;
  }.property('legalities'),
  recentSet: function () {
    var printings = this.get('printings');

    return printings[printings.length -1];    
  }.property('printings'),

  imageUrl: function () {
    return 'http://mtgimage.com/card/' + this.get('name') + '.jpg';
  }.property('name'),

  manaCostFormatted: function () {
    if (!this.get('manaCost')) {
      return '';
    }
    return this.get('manaCost').split('{').join('').split('}').join('');
  }.property('manaCost'),

  powerToughnessFormatted: function () {
    var power = this.get('power'),
        toughness = this.get('toughness');

    return !power && !toughness ? '' : power + '/' + toughness;
  }.property('power', 'toughness'),

  mainType: function () {
    var types = this.get('types');
    if(typeof(types)==="undefined"){
      return '';
    } else if(types.length===0){
      return '';
    }
    return this.get('types')[0];
  }.property('types')
});