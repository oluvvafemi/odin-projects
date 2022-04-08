function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    const mode = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = getRandomInt(3);
    return mode[randomNumber];
}

function playOneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection)  return "It's a draw";
    switch (playerSelection) {
        case "rock":
            let rock_comparison = {
                "paper":3,
                "rock":2,
                "scissors":1
            };
            return (
                (rock_comparison[computerSelection]>rock_comparison[playerSelection]) ?
                `You Lose! ${computerSelection} beats ${playerSelection}` : 
                `You Win! ${playerSelection} beats ${computerSelection}`
            );
        case "paper":
            let paper_comparison = {
                "scissors":3,
                "paper":2,
                "rock":1
            };
            return (
                (paper_comparison[computerSelection]>paper_comparison[playerSelection]) ?
                `You Lose! ${computerSelection} beats ${playerSelection}` : 
                `You Win! ${playerSelection} beats ${computerSelection}`
            );
        case "scissors":
            let scissors_comparison = {
                "rock":3,
                "scissors":2,
                "paper":1
            };
            return (
                (scissors_comparison[computerSelection]>scissors_comparison[playerSelection]) ?
                `You Lose! ${computerSelection} beats ${playerSelection}` : 
                `You Win! ${playerSelection} beats ${computerSelection}`
            );
        default:
            return "Invalid Input";
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playOneRound(playerSelection, computerSelection));