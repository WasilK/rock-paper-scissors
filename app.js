function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "rock";
  if (choice === 1) return "paper";
  return "scissors";
}

function playRound(humanChoice, compChoice) {
  if (
    (humanChoice === "rock" && compChoice === "paper") ||
    (humanChoice === "paper" && compChoice === "scissors") ||
    (humanChoice === "scissors" && compChoice === "rock")
  ) {
    return "computer";
  } else if (humanChoice === compChoice) {
    return "tie";
  } else {
    return "human";
  }
}

let humanScore = 0;
let compScore = 0;
let gameOver = false;

const buttons = document.querySelectorAll(".buttons button");
const resultDiv = document.querySelector(".result");
const scoreDiv = document.querySelector(".score");
const resetBtn = document.querySelector("#reset");

scoreDiv.textContent = "Player: 0 | Computer: 0";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (gameOver) return;

    const humanChoice = e.target.textContent.toLowerCase();
    const compChoice = getComputerChoice();
    const result = playRound(humanChoice, compChoice);

    if (result === "human") {
      humanScore++;
      resultDiv.textContent = `You win this round! ${humanChoice} beats ${compChoice}`;
    } else if (result === "computer") {
      compScore++;
      resultDiv.textContent = `Computer wins this round! ${compChoice} beats ${humanChoice}`;
    } else {
      resultDiv.textContent = `It's a tie! Both chose ${humanChoice}`;
    }

    scoreDiv.textContent = `Player: ${humanScore} | Computer: ${compScore}`;

    if (humanScore === 5 || compScore === 5) {
      gameOver = true;
      if (humanScore === 5) {
        resultDiv.textContent = "🎉 You Won The Game!";
      } else {
        resultDiv.textContent = "💻 Computer Won The Game!";
      }
    }
  });
});

resetBtn.addEventListener("click", () => {
  humanScore = 0;
  compScore = 0;
  gameOver = false;
  scoreDiv.textContent = "Player: 0 | Computer: 0";
  resultDiv.textContent = "";
});
