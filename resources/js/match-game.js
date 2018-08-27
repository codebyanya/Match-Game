var MatchGame = {};


$(document).ready(function() {
  var $game = $('#game');
  var values = MatchGame.generateCardValues();
  MatchGame.renderCards(values, $game);
});


MatchGame.generateCardValues = function () {

var InitialCardValues =[];
for (var i = 0; i <= 8; i++) {
  InitialCardValues.push(i);
  InitialCardValues.push(i);
}


var cardValues = [];

while (InitialCardValues.length > 0 ) {
var randomIndex = [Math.floor(Math.random() * InitialCardValues.length)];
var randomValue = InitialCardValues.splice(randomIndex, 1)[0];
cardValues.push(randomValue);
}

return cardValues;
};
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
