var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
$(document).ready(function() {
  var $game = $('#game');
  var values = MatchGame.generateCardValues();
  MatchGame.renderCards(values, $game);
});
/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {

var InitialCardValues =[];
for (var i = 0; i <= 8; i++) {
  InitialCardValues.push(i);
  InitialCardValues.push(i);
}
};

var cardValues = [];

while (InitialCardValues.length > 0 ) {
var randomIndex = [Math.floor(Math.random() * InitialCardValues.length)];
}

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
