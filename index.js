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
const computerScoreDOM = document.querySelector('#computerScore');
const playerScoreDOM = document.querySelector('#playerScore');
counter = 0;

function playRound(e) {
    let matchResult = "";
    const computerSelection = getComputerChoice();
    const playerSelection = e.target.id;
    
  if(counter < 5) {
    if (playerSelection == computerSelection) {
      matchResult = "It's a tie!";
    } else if (playerSelection == "cryo" && computerSelection == "pyro") {
      matchResult = `The Abyss Order used ${computerSelection} on the Traveler's ${playerSelection}. The Traveler lost.`;
      computerScore += 1;
    } else if (playerSelection == "pyro" && computerSelection == "hydro") {
      matchResult = `The Abyss Order used ${computerSelection} on the Traveler's ${playerSelection}. The Traveler lost.`;
      computerScore += 1;
    } else if (playerSelection == "hydro" && computerSelection == "cryo") {
      matchResult = `The Abyss Order used ${computerSelection} on the Traveler's ${playerSelection}. The Traveler lost.`;
      computerScore += 1;
    } else {
      matchResult = `The Traveler used ${playerSelection} on the Abyss Order's ${computerSelection}. The Abyss lost.`;
      playerScore += 1;
    }
    computerScoreDOM.textContent = computerScore;
    playerScoreDOM.textContent  = playerScore;
    const domContainer = document.querySelector(".dom-container");
    resultP.textContent = matchResult;
    domContainer.appendChild(resultP);
    counter += 1;
  }
  else {
    if(playerScore < computerScore)
      resultP.textContent = 'Final winner is the Abyss Order!';
    else if(playerScore > computerScore)
      resultP.textContent = 'Final winner is the Traveler!';
    else
    resultP.textContent = "Ooh, it's a tie between the Abyss Order and the Traveler!";
  }
}

const elements = Array.from(document.querySelectorAll(".element"));
elements.forEach((element) => element.addEventListener("click", playRound));
