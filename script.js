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
        return 0;
    }
    if (formattedPlayerSelection == "Rock") {
        if (computerSelection == "Paper") {
            return -1;
        }
        else if (computerSelection == "Scissors") {
            return 1;
        }
    }
    if (formattedPlayerSelection == "Paper") {
        if (computerSelection == "Rock") {
            return 1;
        }
        else if (computerSelection == "Scissors") {
            return -1;
        }
    }
    if (formattedPlayerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            return -1;
        }
        else if (computerSelection == "Paper") {
            return 1;
        }
    }
}

function game() {
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = getComputerChoice();
        console.log(`Your opponent chose ${computerSelection}`);
        let result = playRound(playerSelection, computerSelection);
        playerScore += result;
        switch (result) {
            case -1:
                console.log("You lost the round.");
                break;
            case 0:
                console.log("This round was a draw.");
                break;
            case 1:
                console.log("You won the round.")
                break;
        }
        console.log(`Your score is ${playerScore}`);
    }
    if (playerScore < 0) {
        console.log("You lost the game.")
    }
    else if (playerScore > 0) {
        console.log("You won the game.")
    }
    else {
        console.log("The game is tied.")
    }
}

game();