function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    const mode = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = getRandomInt(3);
    return mode[randomNumber];
}

function compareChoices(playerSelection, computerSelection){
    let relation = {
        "rock": {
            "paper":3,
            "rock":2,
            "scissors":1
        },
        "paper": {
            "scissors":3,
            "paper":2,
            "rock":1
        },
        "scissors": {
            "rock":3,
            "scissors":2,
            "paper":1
        }

    };
    let order = relation[playerSelection];
    return (
        (order[computerSelection]>order[playerSelection]) ?
        `You Lose! ${computerSelection} beats ${playerSelection}` : 
        `You Win! ${playerSelection} beats ${computerSelection}`
    );
}

function playOneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection)  return "It's a draw";
    switch (playerSelection) {
        case "rock":
            return compareChoices(playerSelection, computerSelection);
        case "paper":
            return compareChoices(playerSelection, computerSelection);
        case "scissors":
            return compareChoices(playerSelection, computerSelection);
        default:
            return "Invalid Input";
    }
}

function game() {
    for (let i=0; i<5; i++){
        let playerSelection = prompt("rock, paper or scissors - your choice", '');
        let computerSelection = computerPlay();
        console.log(playOneRound(playerSelection, computerSelection));
    }
}
