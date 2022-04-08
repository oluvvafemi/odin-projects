function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function computerPlay() {
    const mode = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = getRandomInt(3);
    return mode[randomNumber];
}