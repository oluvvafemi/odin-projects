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
    let info = '';
    if (order[computerSelection]>order[playerSelection]){
        updateDisplayScore(0,1);
        info = `${computerSelection} beats ${playerSelection}`;
    }else{
        updateDisplayScore(1,0);
        info = `${playerSelection} beats ${computerSelection}`;
    }
    return info;
}

function playOneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection)  return `You both played ${playerSelection}`;
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

function updateDisplayScore(playerwin=0, computerwin=0, gameover=false){
    if (gameover) {playerScore=computerScore=0};
    playerScore += playerwin;
    computerScore += computerwin;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

let playerScore=0,
    computerScore=0;

const playerScoreDisplay = document.querySelector("#playerscore");
const computerScoreDisplay = document.querySelector("#computerscore");
updateDisplayScore();

const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");

buttons.forEach(button => button.addEventListener('click', () => {
    let computerSelection = computerPlay();
    result.textContent = playOneRound(button.dataset.playerselection, computerSelection);
    if(computerScore >= 5){
        updateDisplayScore(0,0,true);
        console.log("Computer Wins the Game!");
    } else if(playerScore >= 5) {
        updateDisplayScore(0,0,true);
        console.log("Player Wins the Game!");
    }
}));
