const computerSelection = document.getElementById('computer-selection');
const userSelection = document.getElementById('user-selection');
const result = document.getElementById('result');

const selections = document.querySelectorAll('button.buttonchoice')

let userChoice
let computerGameSelection
let gameActualResult

/**
 * selections.forEach is an event listener waiting for click. 
 * At every button click it will display button id into user-selection span
 * 
 * It fires computerChoice()
*/

selections.forEach(selection => selection.addEventListener('click', (c) => {
        userChoice = c.target.id;
        userSelection.innerHTML = userChoice;
        computerChoice();
        displayResult();

    })
)

/**
 * We use Math method to generate randon number, multiply it by 3
 * and make use MathFloor to keep it an integer
 */

function computerChoice() {
    const computerNumberChoice = Math.floor(Math.random()*selections.length);
    console.log(computerNumberChoice);

    if (computerNumberChoice === 0) {
        computerGameSelection = 'paper'
    }

    if (computerNumberChoice === 1) {
        computerGameSelection = 'rock'
    }

    if (computerNumberChoice === 2) {
        computerGameSelection = 'scissors'
    }

    computerSelection.innerHTML = computerGameSelection;

}

function displayResult() {

    if (computerGameSelection === userChoice){
        gameActualResult = "It is a Draw"
    }
    if (computerGameSelection === "rock" && userChoice === "paper"){
        gameActualResult = "User Won!"
    }
    if (computerGameSelection === "rock" && userChoice === "scissors"){
        gameActualResult = "User Lost!"
    }
    if (computerGameSelection === "paper" && userChoice === "rock"){
        gameActualResult = "User Lost!"
    }
    if (computerGameSelection === "paper" && userChoice === "scissors"){
        gameActualResult = "User Won!"
    }
    if (computerGameSelection === "scissors" && userChoice === "rock"){
        gameActualResult = "User Won!"
    }
    if (computerGameSelection === "scissors" && userChoice === "paper"){
        gameActualResult = "User Lost!"
    }
    result.innerHTML = gameActualResult;

}
