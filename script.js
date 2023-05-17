const choiceArray = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const getComputerChoice = (choice) => {
    const randomComputerChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return choice = randomComputerChoice;
}

const getPlayerChoice = (choice) => {
    if (choice.toLowerCase() === 'rock'.toLowerCase() || choice.toLowerCase() === 'paper'.toLowerCase() || choice.toLowerCase() === 'scissors'.toLowerCase()) {
        return choice;
    } else {
        console.log('Please make a valid choice of rock, paper, or scissors')
    }
}

const playRound = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        console.log('Draw');
    } else if (playerChoice.toLowerCase() === 'rock'.toLowerCase() && computerChoice === 'paper') {
        console.log('You Lose! Paper beats Rock.');
    } else if (playerChoice.toLowerCase() === 'paper'.toLowerCase() && computerChoice === 'scissors') {
        console.log('You Lose! Scissors beat Paper.');
    } else if (playerChoice.toLowerCase() === 'scissors'.toLowerCase() && computerChoice === 'rock') {
        console.log('You Lose! Rock beats Scissors.');
    } else if (playerChoice.toLowerCase() === 'scissors'.toLowerCase() && computerChoice === 'paper') {
        console.log('You Win! Scissors beats Paper.');
    } else if (playerChoice.toLowerCase() === 'paper'.toLowerCase() && computerChoice === 'rock') {
        console.log('You Win! Paper beats Rock.');
    } else if (playerChoice.toLowerCase() === 'rock'.toLowerCase() && computerChoice === 'scissors') {
        console.log('You Win! Rock beats Scissors');
    } else {
        console.log('Could not determine winner with current argument, please try again with valid input.')
    }
    return computerChoice, playerChoice;
}

const playGame = (playerScore, computerScore) => {
    for (let i = 1; i <= 5; i++) {
    const playerInput = prompt('Rock, Paper, or Scissors?');
    playRound(getPlayerChoice(playerInput), getComputerChoice());
    }
    return playerScore, computerScore;
}

playGame();