const choiceArray = ['rock', 'paper', 'scissors'];


const getComputerChoice = (compChoice) => {
    const randomComputerChoice = (Math.floor(Math.random() * choiceArray.length));
    return compChoice = randomComputerChoice;
}

const getPlayerChoice = (playerChoice) => {
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        return playerChoice;
    } else {
        console.log('Please make a valid choice of rock, paper, or scissors')
    }
}

const playRound = (getPlayerChoice, getComputerChoice) => {
    return getComputerChoice, getPlayerChoice;
}

