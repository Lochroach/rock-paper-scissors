const choiceArray = ['rock', 'paper', 'scissors'];


const getComputerChoice = (choice) => {
    const randomComputerChoice = (Math.floor(Math.random() * choiceArray.length));
    return choice = randomComputerChoice;
}

const getPlayerChoice = (choice) => {
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } else {
        console.log('Please make a valid choice of rock, paper, or scissors')
    }
}

const playRound = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        console.log('Draw');
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        console.log('You Lose! Paper beats Rock.');
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You Lose! Scissors beat Paper.');
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You Lose! Rock beats Scissors.');
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You Win! Scissors beats Paper.');
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        console.log('You Win! Paper beats Rock.');
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You Win! Rock beats Scissors');
    } else {
        console.log('Could not determine winner with current argument, please try again with valid input.')
    }
    return computerChoice, playerChoice;
}

console.log(playRound('rock', 'rock'));