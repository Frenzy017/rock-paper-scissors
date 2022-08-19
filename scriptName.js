let result = document.querySelector("h5");
let allBtns = document.querySelectorAll(".actionBtn");
let games = document.querySelector("h1");

// variables for accumulation

let playerWinsCount = 0;
let computerWinsCount = 0;
let botChoice;
let playerChoice;

allBtns.forEach((button) =>
  button.addEventListener("click", () => {
    playerChoice = button.textContent;
    computerPlay();
    result.textContent = playRound();

    games.textContent = ` ${playerWinsCount}:${computerWinsCount}`;
  })
);

function computerPlay() {
  botChoice = Math.floor(Math.random() * 3);

  // AI Choice

  if (botChoice === 0) {
    botChoice = "rock";
  } else if (botChoice === 1) {
    botChoice = "paper";
  } else if (botChoice === 2) {
    botChoice = "scissors";
  }
}

function playRound() {
  // Winning conditions for player

  if (
    (playerChoice === "rock" && botChoice === "scissors") ||
    (playerChoice === "paper" && botChoice === "rock") ||
    (playerChoice === "scissors" && botChoice === "paper")
  ) {
    playerWinsCount++;

    return `You won! ${playerChoice} beats ${botChoice} in a mighty duel!`;
  }

  // Losing conditions for player

  if (
    (botChoice === "rock" && playerChoice === "scissors") ||
    (botChoice === "paper" && playerChoice === "rock") ||
    (botChoice === "scissors" && playerChoice === "paper")
  ) {
    computerWinsCount++;

    return `You lost, computer wins! ${botChoice} beats ${playerChoice} in a mighty duel!`;
  }

  // Tie conditions for player and AI

  if (
    (botChoice === "rock" && playerChoice === "rock") ||
    (botChoice === "paper" && playerChoice === "paper") ||
    (botChoice === "scissors" && playerChoice === "scissors")
  ) {
    return `Tie game!`;
  }
}
