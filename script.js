const getComputerChoice = (compChoice) => {
    const choiceArray = ['rock', 'paper', 'scissors'];
    const randomComputerChoice = (Math.floor(Math.random() * choiceArray.length));
    return compChoice = randomComputerChoice;
}

const getPlayerChoice = (playerChoice) => {
    prompt('Rock, Paper, or Scissors?')
}

const playRound = (getPlayerChoice, getComputerChoice) => {
    for (rock = 0; paper = 1; scissors = 2) {
        if (paper === paper) {
            console.log('Draw');
        } else if (rock === rock) {
            console.log('Draw');
        } else if (scissors === scissors) {
            console.log('Draw');
        } else if (paper > rock) {
            console.log('You win! Paper beats Rock.');
        } else if (scissors > paper) {
            console.log('You Win! Scissors beats Paper.');
        } else if (rock < scissors) {
            console.log('You Win! Rock beats Scissors.')
        }
    }

    return getComputerChoice, getPlayerChoice;
}

console.log(playRound);