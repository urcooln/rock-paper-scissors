//Global Variables to keep track of scores.
let computerScore = 0;
let playerScore = 0;

//Displaying Player Roll on HTML
const test = document.querySelector('#test');

const container = document.createElement('container');
container.classList.add('container');

const content = document.createElement('div');
content.classList.add('content');
container.appendChild(content);

//DISPLAYING COMPUTERS ROLL
const computerRollText = document.createElement('div');
computerRollText.classList.add('computerRollText');
container.appendChild(computerRollText);

//DISPLAY OUTCOME
const outcome = document.createElement('div');
outcome.classList.add('outcome');
container.appendChild(outcome);

//DISPLAY COMPUTERS SCORE
const showCompScore = document.createElement('div');
showCompScore.classList.add('showCompScore');
container.appendChild(showCompScore);

//DISPLAY PLAYER SCORE
const showPlayerScore = document.createElement('div');
showPlayerScore.classList.add('showPlayerScore');
container.appendChild(showPlayerScore);

//DISPLAY WINNER
const displayWinner = document.createElement('div');
displayWinner.classList.add('displayWinner');
container.appendChild(displayWinner);

//REFRESH BUTTON AFTER GAME
const refreshButton = document.createElement('button');
refreshButton.classList.add('refreshButton');
refreshButton.textContent = "RESTART GAME";
refreshButton.addEventListener('click', () => {
    location.reload();
})



//computerPlay will randomly generate a number from 0 to 2, 0 = rock
//1 = paper, 2 = scissors, when it hits a number it will display it in text format.
//it will also return the number format.

function computerPlay(){
    let computerRoll = Math.floor(Math.random() * 3);
    if(computerRoll === 0){
        computerRollText.textContent = "Computer Plays Rock!"
        return computerRoll;
    }
    if (computerRoll === 1){
        computerRollText.textContent = "Computer Plays Paper!"
        return computerRoll;
    } 
    if(computerRoll === 2){
        computerRollText.textContent = "Computer Plays Scissors!"
        return computerRoll;
    }

}

//playerRoll will ask for user input on their roll. It'll be Rock, Paper or Scissors. It shouldn't be case sensitive.
//it should convert to the number version of the game as computerRoll.
//The function show the selection and return back the number form.

function playerRoll(roll){
    //let roll = prompt("It's Rock, Paper, Scissors. What will you choose?");
        let numRoll;

        if(roll === 'rock'){
            numRoll = 0;
            content.textContent = "You Choose Rock!"
            return numRoll;
        }
        if (roll === 'paper'){
            numRoll = 1;
            content.textContent = "You Choose Paper!"
            return numRoll;
        } 
        if(roll === 'scissors'){
            numRoll = 2;
            content.textContent = "You Choose Scissors!"
            return numRoll;
        }
    }
function score()
{
    showCompScore.textContent = "Computers Score: " + computerScore;
    showPlayerScore.textContent = "Your Score: " + playerScore;
}
//DISPLAY IF YOU WIN OR LOSE AND RESET THE SCORE AND RESETS THE PAGE.
function decision(){
    if(playerScore == 5){
        container.replaceChildren(displayWinner);
        displayWinner.textContent = "YOU WIN!!";
        container.appendChild(refreshButton);
    }
    if(computerScore == 5){
        container.replaceChildren(displayWinner);
        displayWinner.textContent = "YOU LOSE!!";
        container.appendChild(refreshButton);
    }
}
//This function will compare the outcomes of each selection
//and decide wether you win lose or draw.
//This will also display the outcome and the winner will gain score.
rock.addEventListener('click', () => {
    test.appendChild(container);
    playRound(playerRoll('rock'),computerPlay());
    decision();
    score();

});
paper.addEventListener('click', () => {
    test.appendChild(container);
    playRound(playerRoll('paper'),computerPlay());
    decision();
    score();
});
scissors.addEventListener('click', () => {
    test.appendChild(container);
    playRound(playerRoll('scissors'),computerPlay());
    decision();
    score();
});



  

function playRound(playerSelection, computerSelection){

    //IF PLAYER PLAYS ROCK
    if(playerSelection === 0 && computerSelection === 0){
        outcome.textContent = "It's a Draw!";
    }
    if(playerSelection === 0 && computerSelection === 1){
        computerScore = computerScore+1;
        outcome.textContent = "You lose! Paper beats Rock!";
    }
    if(playerSelection === 0 && computerSelection === 2){
        playerScore = playerScore + 1;
        outcome.textContent = "You win! Rock beats Scissors!";
    }
    //IF PLAYER PLAYS PAPER
    if(playerSelection === 1 && computerSelection === 0){
        playerScore = playerScore+1;
        outcome.textContent = "You win! Paper beats Rock!";
    }
    if(playerSelection === 1 && computerSelection === 1){
        outcome.textContent = "It's a draw!";
    }
    if(playerSelection === 1 && computerSelection === 2){
        computerScore = computerScore+1;
        outcome.textContent = "You lose! Scissors beats Paper!";
    }
    //IF PLAYER PLAYS SCISSORS
    if(playerSelection === 2 && computerSelection ===0){
        computerScore = computerScore+1;
        outcome.textContent = "You lose! Rock beats Scissors!";
    }
    if(playerSelection === 2 && computerSelection ===1){
        playerScore = playerScore+1;
        outcome.textContent = "You win! Scissors beats Paper!";
    }
    if(playerSelection === 2 && computerSelection ===2){
        outcome.textContent = "It's a draw!";
    }
}