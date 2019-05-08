let playerSelection, computerSelection;
let playerPoint = 0;    
let computerPoint = 0;
let gameFinished = false;

let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let message = document.querySelector("#message");
let reset = document.querySelector("#reset");

function computerPlay() {
    return ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
}

function playRound() {
    if (playerSelection == computerSelection) {
        message.textContent = `Tie! ${playerSelection} matches ${computerSelection}.`;
        playerPoint += 0.5;
        computerPoint += 0.5;
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors"
    || playerSelection == "Paper" && computerSelection == "Rock"
    || playerSelection == "Scissors" && computerSelection == "Paper") {
        message.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        playerPoint++;
    } else {
        message.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        computerPoint++;
    }
    tally();
}

function tally() {
    playerScore.textContent = playerPoint.toString();
    computerScore.textContent = computerPoint.toString();
    if (computerPoint >= 5 || playerPoint >= 5) {
        gameFinished = true;
        message.textContent += " " + calculateGameWinner();}
}

function calculateGameWinner() {
    return (playerPoint >= 5 && playerPoint > computerPoint) ? `You won the game ${playerPoint} to ${computerPoint}!`
         : (computerPoint >= 5 && computerPoint > playerPoint) ? `You lost the game ${computerPoint} to ${playerPoint}!`
         : `You tied the game ${playerPoint} to ${computerPoint}!`;
}

rockBtn.addEventListener('click', (e) => {
    if (!gameFinished) {
      playerSelection = "Rock";
      computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);
    }
    else {
      message.textContent = "The current game is finished. Press the reset button to start a new game.";
    }
  });

  paperBtn.addEventListener('click', (e) => {
    if (!gameFinished) {
      playerSelection = "Paper";
      computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);
    }
    else {
      message.textContent = "The current game is finished. Press the reset button to start a new game.";
    }
  });

  scissorsBtn.addEventListener('click', (e) => {
    if (!gameFinished) {
      playerSelection = "Scissors";
      computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);
    }
    else {
      message.textContent = "The current game is finished. Press the reset button to start a new game.";
    }
  });

  reset.addEventListener('click', (e) => {
    gameFinished = false;
    message.textContent = "Select a choice to start a new game!";
    playerPoint = 0;
    computerPoint = 0;
    playerScore.textContent = "0";
    computerScore.textContent = "0";
  })