function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    const mode = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = getRandomInt(3);
    return mode[randomNumber];
}

function compareChoices(playerSelection, computerSelection){
    if (playerSelection === computerSelection)  {
        playedSameKindComment(playerSelection);
        return;
    }

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

    if (order[computerSelection]>order[playerSelection]){
        updateAndDisplayScore(0,1);
        xBeatsYcomment(computerSelection, playerSelection);
    }else{
        updateAndDisplayScore(1,0);
        xBeatsYcomment(playerSelection, computerSelection);
    }
}

function playOneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    switch (playerSelection) {
        case "rock":
            compareChoices(playerSelection, computerSelection);
            break;
        case "paper":
            compareChoices(playerSelection, computerSelection);
            break;
        case "scissors":
            compareChoices(playerSelection, computerSelection);
            break;
        default:
            break;
    }
}

let updateAndDisplayScore = function (playerwin=0, computerwin=0, gameover=false){
    if (gameover) {playerScore=computerScore=0};
    playerScore += playerwin;
    computerScore += computerwin;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
};

let xBeatsYcomment = function (x, y){
    result.textContent = `${x} beats ${y}`;
};

let playedSameKindComment = function(kind){
    result.textContent = `you both played ${kind}`;
};

let prepareNewGame = function(){

}

let playerScore=0;
let computerScore=0;
const playerScoreDisplay = document.querySelector("#playerscore");
const computerScoreDisplay = document.querySelector("#computerscore");
const playerButtons = document.querySelectorAll(".player button");
const result = document.querySelector("#result");
const computerButtons = document.querySelectorAll(".computer button");

// computerButtons.forEach(bt => console.log(bt.dataset.computerselection));
// console.log([...computerButtons].filter(btn => btn.dataset.computerselection==='Rock')[0]);
// console.log(computerButtons[0]);
// console.log(...computerButtons);
// console.log(Array.from(computerButtons)[0]);
updateAndDisplayScore();



let computerButton;
// let restartButton;
// let playground;

const playground = document.querySelector('.playground');
const container = document.querySelector('.container');
const restartButton = document.createElement('button');
const indicator = document.querySelector('.indicator');


playerButtons.forEach(button => button.addEventListener('click', () => {
    let computerSelection = computerPlay();
    computerButton = [...computerButtons].filter(btn => btn.dataset.computerselection===`${computerSelection}`)[0];
    button.classList.add('press');
    computerButton.classList.add('press');
    playOneRound(button.dataset.playerselection, computerSelection);
    if(computerScore >= 5){
        restartWindow();
        updateAndDisplayScore(0,0,true);
        result.textContent = "Computer Wins the Game!";
    } else if(playerScore >= 5) {
        restartWindow();
        updateAndDisplayScore(0,0,true);
        result.textContent = "You Win the Game!";
    }
}));

playerButtons.forEach(button => button.addEventListener('transitionend', (e) => {
    if (e.propertyName !== 'transform') return;
    button.classList.remove('press');
}));

computerButtons.forEach(button => button.addEventListener('transitionend', (e) => {
        if (e.propertyName !== 'transform') return;
        button.classList.remove('press');
}));

let restartWindow = function(){
   
    restartButton.textContent = "Restart Game";
    playground.remove();
    container.appendChild(restartButton);
    indicator.classList.add('off');

};

restartButton.addEventListener('click', ()=> {
    container.appendChild(playground);
    restartButton.remove();
    indicator.classList.remove('off');
    result.textContent = "";

});

