function getComputerChoice() {
  let choice = "";
  switch (Math.floor(Math.random() * 3) + 1) {
    case 1:
      choice = "cryo";
      break;
    case 2:
      choice = "hydro";
      break;
    case 3:
      choice = "pyro";
      break;
  }
  return choice;
}

let computerScore = 0;
let playerScore = 0;
const resultP = document.createElement("p");

function playRound(e) {
  let matchResult = "";
  const computerSelection = getComputerChoice();
  const playerSelection = e.target.id;
  if (playerSelection == computerSelection) {
    matchResult = "It's a tie!";
  } else if (playerSelection == "cryo" && computerSelection == "pyro") {
    matchResult = `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection == "pyro" && computerSelection == "hydro") {
    matchResult = `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection == "hydro" && computerSelection == "cryo") {
    matchResult = `You lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    matchResult = `You win! ${playerSelection} beats ${computerSelection}`;
  }

  const domContainer = document.querySelector("#dom-container");
  resultP.textContent = matchResult;
  domContainer.appendChild(resultP);
}

const elements = Array.from(document.querySelectorAll(".element"));
elements.forEach((element) => element.addEventListener("click", playRound));
