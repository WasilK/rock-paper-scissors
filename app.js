function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter your choice", "");
  return choice.toLowerCase();
}

let compScore = 0;
let humanScore = 0;

function playRound(humanChoice, compChoice) {
  if (
    (humanChoice == "rock" && compChoice == "paper") ||
    (humanChoice == "paper" && compChoice == "scissors") ||
    (humanChoice == "scissors" && compChoice == "rock")
  ) {
    return "computer";
  } else if (humanChoice == compChoice) {
    return "tie";
  } else {
    return "human";
  }
}

function playGame() {
  let i = 0;
  while (i < 5) {
    let humanChoice = getHumanChoice();
    let compChoice = getComputerChoice();
    let result = playRound(humanChoice, compChoice);
    if (result === "computer") compScore++;
    if (result === "human") humanScore++;
    i++;
  }
  if (compScore > humanScore) {
    console.log(`You lose! your score was ${humanScore}`);
  } else {
    console.log(`You win! ${humanScore}`);
  }
}
playGame();
