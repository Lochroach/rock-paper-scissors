const choiceArray = ['rock', 'paper', 'scissors'];


const getComputerChoice = (compChoice) => {
    const randomComputerChoice = (Math.floor(Math.random() * choiceArray.length));
    return compChoice = randomComputerChoice;
}

const getPlayerChoice = (playerChoice) => {
    prompt('Rock, Paper, or Scissors?')
}

const playRound = (getPlayerChoice, getComputerChoice) => {
    return getComputerChoice, getPlayerChoice;
}

