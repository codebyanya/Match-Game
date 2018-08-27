/*traversing DOM*/
let cards = document.querySelectorAll("li");
cards = [...cards];

const startTime = new Date().getTime();

let activeCard = "";
const activeCards = [];

const gameLength = cards.length / 2;
let gameResult = 0;

const cardColors = ["orange", "orange", "pink", "pink", "red", "red", "green", "green", "blue", "blue", "yellow", "yellow", "violet", "violet", "lightgreen", "lightgreen"];


/*
Sets up a new game after HTML document has loaded.
Renders a 4x4 board of cards.
*/

const init = function () {

    setTimeout(function () {
        cards.forEach(card => {
            card.classList.add("hiddencard")
            card.addEventListener("click", clickCard)
        })
    }, 1200)

/*  Generates an array of matching card colors. */
    cards.forEach(card => {
        const position = Math.floor(Math.random() * cardColors.length);
        card.classList.add(cardColors[position]);
        cardColors.splice(position, 1);
    })
};
