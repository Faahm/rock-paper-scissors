function getComputerChoice() {
    let choice = '';
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            choice = 'rock';
            break;
        case 2:
            choice = 'paper';
            break;
        case 3:
            choice = 'scissors'
            break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    else if ((playerSelection == 'paper' && computerSelection == 'scissors')) {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    else if ((playerSelection == 'scissors' && computerSelection == 'rock')) {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    else {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
  }

  function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        playRound(playerSelection, computerSelection)
     }
  }

  game();