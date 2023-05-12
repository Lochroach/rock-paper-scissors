const getComputerChoice = (choice) => {
    const choiceArray = ['rock', 'paper', 'scissors'];
    const randomComputerChoice = (Math.floor(Math.random() * choiceArray.length));
    return choice;
}

const getPlayerChoice = () => {
    prompt('Rock, Paper, or Scissors?')
}

const playRound = () => {
    
}

getComputerChoice();