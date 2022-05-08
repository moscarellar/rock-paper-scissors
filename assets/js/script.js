const computerSelection = document.getElementById('computer-selection');
const userSelection = document.getElementById('user-selection');
const result = document.getElementById('result');

const selections = document.querySelectorAll('button.buttonchoice')

let userChoice
let computerGameSelection
let gameActualResult

/**
 * selections.forEach is an event listener waiting for click. 
 * userChoice will target the id of button, and return that value to userChoice.
 * userChoice value is used inside userChoiceOption to determine which function 
 * will be executed
 */

selections.forEach(selection => selection.addEventListener('click', (event) => {
    userChoice = event.target.id;
    userSelection.innerHTML = userChoice;
    userChoiceOption();
    computerChoice();
    displayResult();
}))


function userChoiceOption() {

    if (userChoice === "paper") {
        displayUserPaper();
    }

    if (userChoice === "scissors") {
        displayUserScissor();
    }

    if (userChoice === "rock") {
        displayUserRock();
    }

}
/**
 * functions to display images after selection for user
 */

function displayUserRock() {
    document.getElementById("user-selection-image").src = "assets/images/rockhand.png";
}

function displayUserPaper() {
    document.getElementById("user-selection-image").src = "assets/images/paperhand.png";
}

function displayUserScissor() {
    document.getElementById("user-selection-image").src = "assets/images/scissorshand.png";
}


/**
 * We use Math method to generate randon number, multiply it by 3
 * and make use MathFloor to keep it an integer
 */

function computerChoice() {
    const computerNumberChoice = Math.floor(Math.random() * selections.length);
    console.log(computerNumberChoice);

    if (computerNumberChoice === 0) {
        computerGameSelection = 'paper'
        displayComputerPaper()
    }

    if (computerNumberChoice === 1) {
        computerGameSelection = 'rock'
        displayComputerRock()
    }

    if (computerNumberChoice === 2) {
        computerGameSelection = 'scissors'
        displayComputerScissor()
    }

    computerSelection.innerHTML = computerGameSelection;

}


/**
 * functions to display images after selection for computer
 */

 function displayComputerRock() {
    document.getElementById("computer-selection-image").src = "assets/images/rockhand.png";
}

function displayComputerPaper() {
    document.getElementById("computer-selection-image").src = "assets/images/paperhand.png";
}

function displayComputerScissor() {
    document.getElementById("computer-selection-image").src = "assets/images/scissorshand.png";
}



function displayResult() {

    if (computerGameSelection === userChoice) {
        gameActualResult = "It is a Draw";
        draw();


    }
    if (computerGameSelection === "rock" && userChoice === "paper") {
        gameActualResult = "User Won!";
        userWins();

    }
    if (computerGameSelection === "rock" && userChoice === "scissors") {
        gameActualResult = "User Lost!";
        userLost();

    }
    if (computerGameSelection === "paper" && userChoice === "rock") {
        gameActualResult = "User Lost!";
        userLost();

    }
    if (computerGameSelection === "paper" && userChoice === "scissors") {
        gameActualResult = "User Won!";
        userWins();
    }
    if (computerGameSelection === "scissors" && userChoice === "rock") {
        gameActualResult = "User Won!";
        userWins();

    }
    if (computerGameSelection === "scissors" && userChoice === "paper") {
        gameActualResult = "User Lost!";
        userLost();

    }
    result.innerHTML = gameActualResult;

}



/**
 * Function for winner score
 * increments 1 each time the user wins
 */
function userWins() {
    let score = parseInt(document.getElementById('win-score').innerText);
    document.getElementById('win-score').innerText = ++score
}


/**
 * Function for computer score
 * increments 1 each time the user lost
 */

function userLost() {
    let score = parseInt(document.getElementById('lost-score').innerText);
    document.getElementById('lost-score').innerText = ++score;
}

/**
 * Function for draw score
 * increments 1 each time there is a draw
 */

function draw() {
    let score = parseInt(document.getElementById('draw-score').innerText);
    document.getElementById('draw-score').innerText = ++score;
}


/**
 * event listener exclusively for resetButton
 *This is a way to demonstrate as well that I understand arrow functions,
 * simple functions, and to demonstrate I understand how to manipulate the DOM
 * with the query selector and specific ID as well.
 */

 let resetButton = document.getElementById('resetbutton');
 resetButton.addEventListener("click", resetGame);

/**
 * Function to reload game
 * and bring scores back to zero
 */

function resetGame() {
    location.reload();
}