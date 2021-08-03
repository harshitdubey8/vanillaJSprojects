let firstCard = 10;
let secondCard = 4;
let blackJack = false;
let isAlive = true;

let sum = firstCard + secondCard;
// let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector(".sum-el");
let cardEl = document.querySelector(".cards-el");

function startGame() {
  renderGame();
}

function renderGame() {
  sumEl.textContent = "sum: " + sum;
  cardEl.textContent = "cards:" + firstCard + "," + secondCard;
  if (sum < 21) {
    messageEl.textContent = "do you want to draw a new card";
  } else if (sum == 21) {
    messageEl.textContent = "whooo ! you've got blackJack";
    blackJack = true;
  } else {
    messageEl.textContent = "you are out this game";
    isAlive = false;
  }

  //   console.log(message);
}

function newCard() {
  let card = 7;

  sum += card;

  renderGame();
}
