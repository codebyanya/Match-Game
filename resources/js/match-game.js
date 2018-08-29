/*traversing DOM*/
let cards = document.querySelectorAll("li");
cards = [...cards];

let activeCard = "";
const activeCards = [];

const startTime = new Date().getTime();
const gameLength = cards.length / 2;
let gameResult = 0;

const cardColors = ["orange", "orange", "pink", "pink", "red", "red", "green", "green", "blue", "blue", "yellow", "yellow", "violet", "violet", "lightgreen", "lightgreen"];
const cardNumbers =["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8"];


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

/* Flips over a given card and checks to see if two cards are flipped over.
Updates styles on flipped cards depending whether they are a match or not.*/

const clickCard = function () {

    activeCard = this;
    if (activeCard == activeCards[0]) return;
    activeCard.classList.remove("hiddencard");

    if (activeCards.length === 0) {
        activeCards[0] = activeCard; /*1st click*/
        return;
    }


    else {
        cards.forEach(card => card.removeEventListener("click", clickCard))
        activeCards[1] = activeCard; /*2nd click*/
