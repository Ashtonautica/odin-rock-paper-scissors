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
    let computerScore = 0;
    let resultsLog = document.querySelector("#resultsLog");
    let scoreboard = document.querySelector("#scoreboard");
    function updateScoreboard() {
        scoreboard.textContent = `${playerScore} : ${computerScore}`;
    };
    updateScoreboard();

    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", event => {
            let playerSelection = event.target.id;
            let computerSelection = getComputerChoice();
            let result = playRound(playerSelection, computerSelection);
    
            let resultMessage = `Your opponent chose ${computerSelection}. `;
            switch (result) {
                case -1:
                    resultMessage += "You lost the round. ";
                    computerScore += 1;
                    break;
                case 0:
                    resultMessage += "This round was a draw. ";
                    break;
                case 1:
                    resultMessage += "You won the round. ";
                    playerScore += 1
                    break;
            }
    
            if (playerScore == 5 || computerScore == 5) {
                if (playerScore == 5) {
                    resultMessage += "You won the game!"
                }
                else {
                    resultMessage += "Your opponent won the game."
                }
                playerScore = 0;
                computerScore = 0;
            }
            updateScoreboard();
            resultsLog.textContent = resultMessage;
        });
    })
}

game();