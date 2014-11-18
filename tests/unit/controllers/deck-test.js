import {
  moduleFor,
  test
} from 'ember-qunit';
import Deck from 'webatrice/models/deck';

moduleFor('controller:deck', 'DeckController', {
  // Specify the other units that are required for this test.
  needs: ['controller:sets']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});

// test.skip('it can succcessfully classify a deck as standard', function () {
//   var controller = this.subject();
//   controller.set('model', Deck.create({
//     cards: [{printings: ['Magic 2015 Core Set']}, {printings: ['Dragon\'s Maze', 'fake set']}, {printings: ['Return to Ravnica']}, 
//       {printings: ['Gatecrash']}, {printings: ['Theros']}, {printings: ['Magic 2014 Core Set']}, {printings: ['Born of the Gods']},
//       {printings: ['Journey into Nyx']}]
//   }));

//   equal(controller.get('classification'), 'Standard');

//   controller.set('model', Deck.create({}));
//   equal(controller.get('classification'), '');

//   controller.set('model', Deck.create({
//     sideboard: [{printings: ['Magic 2014 Core Set']}, {printings: ['non standard set']}]
//   }));
//   equal(controller.get('classification'), 'Non-Standard');
// });