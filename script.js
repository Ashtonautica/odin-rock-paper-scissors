function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3);
    switch (choiceNumber) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    let formattedPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (formattedPlayerSelection == computerSelection) {
        return `A draw! Both sides chose ${formattedPlayerSelection}`;
    }
    if (formattedPlayerSelection == "Rock") {
        if (computerSelection == "Paper") {
            return "You lose! Paper beats Rock"
        }
        else if (computerSelection == "Scissors") {
            return "You win! Rock beats Scissors"
        }
    }
    if (formattedPlayerSelection == "Paper") {
        if (computerSelection == "Rock") {
            return "You win! Paper beats Rock"
        }
        else if (computerSelection == "Scissors") {
            return "You lose! Scissors beats Paper"
        }
    }
    if (formattedPlayerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            return "You lose! Rock beats Scissors"
        }
        else if (computerSelection == "Paper") {
            return "You win! Scissors beats Paper"
        }
    }
}