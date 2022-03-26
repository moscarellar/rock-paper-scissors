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
    userChoiceImage();
    computerChoice();
    displayResult();


}))

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


function userChoiceImage() {

    if (userChoice = "paper") {
        displayUserPaper();
    }

    if (userChoice = "scissors") {
        displayUserScissor()
    }

    if (userChoice = "rock") {
        displayUserRock()
    }


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