const getComputerChoice = (choice) => {
    const choiceArray = ['rock', 'paper', 'scissors'];
    const randomComputerChoice = (Math.floor(Math.random() * choiceArray.length));
    return choice = randomComputerChoice;
}

const getPlayerChoice = () => {
    prompt('Rock, Paper, or Scissors?')
}

const playRound = () => {
    
}

console.log(getComputerChoice());

