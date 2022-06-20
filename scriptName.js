// Declare global variables for choices and wins count

let playerWinsCount = 0;
let computerWinsCount = 0;
let choice;

// Create random counter from 0 to 2;

function computerPlay() {
    choice = Math.floor(Math.random() * 3)

    // Random counter accepts actual value

    if (choice === 0) {
        choice = 'rock'
    } else if (choice === 1) {
        choice = 'paper'
    } else if (choice === 2) {
        choice = 'scissors'
    }

    return choice
}

// Declare variables for AI / Human choices

let playerSelection = prompt('Please enter rock, paper or scissors to play').toLowerCase();
let computerSelection = computerPlay().toLowerCase();


// Function for each round being played
// Function accepts playerSelection and computerSelection parameters



function playRound(playerSelection, computerSelection) {

    // If statement for winning conditions for player

    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {

        playerWinsCount++

        return `You won! ${playerSelection} beats ${computerSelection} in a mighty duel!`
    }

    // If statement for losing conditions for player

    if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')) {

        computerWinsCount++

        return `You lost, computer wins! ${computerSelection} beats ${playerSelection} in a mighty duel!`
    }

    // If statement for tie conditions between player and computer

    if ((computerSelection === 'rock' && playerSelection === 'rock') ||
        (computerSelection === 'paper' && playerSelection === 'paper') ||
        (computerSelection === 'scissors' && playerSelection === 'scissors')) {

        return `Tie game!`
    }
}

// Function loops 5 times 
// Function prints computer wins and player wins
// Function prompts for an accurate validation 

function game(playRound) {
    for (let i = 0; i <= 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Computer wins: ${computerWinsCount}`);
        console.log(`Player wins: ${playerWinsCount}`)

        playerSelection = prompt('Please enter rock, paper or scissors to play')
        computerPlay(choice)
    }

}
game(playRound)






