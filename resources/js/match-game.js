/*traversing DOM*/
let cards = document.querySelectorAll("li");
cards = [...cards];

const startTime = new Date().getTime();

let activeCard = "";
const activeCards = [];

const gameLength = cards.length / 2;
let gameResult = 0;

const cardColors = ["orange", "orange", "pink", "pink", "red", "red", "green", "green", "blue", "blue", "yellow", "yellow", "violet", "violet", "lightgreen", "lightgreen"];
