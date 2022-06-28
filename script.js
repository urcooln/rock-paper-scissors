

let computerScore = 0;
let playerScore = 0;


function game(){


    for(let i = 0; i < 5; i++)
    {

        playerSelection = playerRoll();
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Computers Score: " + computerScore);
        console.log("Your Score: " + playerScore);

    }
    if(playerScore > computerScore)
    {
         console.log("You Win!");
    }
    else{
        console.log("You Lose!");
    }

}


/*computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play. Tip: use the 
console to 
make sure this is returning the expected output before moving to the next step!*/

//computerPlay will randomly generate a number from 0 to 2, 0 = rock
//1 = paper, 2 = scissors, when it hits a number it will display its text format.
//it will also return the number format.
function computerPlay(){
    let computerRoll = Math.floor(Math.random() * 3);
    if(computerRoll === 0){
        console.log("Computer Plays Rock!");
        return computerRoll;
    }
    if (computerRoll === 1) {
        console.log("Computer Plays Paper!");
        return computerRoll;
        
    } 
    if(computerRoll === 2) {
        console.log("Computer Plays Scissors!");
        return computerRoll;
    }

}
//playerRoll will ask for user input on their roll. It'll be Rock, Paper or Scissors. It shouldn't be case sensitive.
//it should convert to the number version of the game as computerRoll.
//The function show the selection and return back the number form.


function playerRoll(){
    let roll = prompt("It's Rock, Paper, Scissors. What will you choose?");
    roll.toLowerCase();
    let numRoll;
    if(roll === 'rock'){
        numRoll = 0;
        console.log("You Choose Rock!");
        return numRoll;
    }
    if (roll === 'paper') {
        numRoll = 1;
        console.log("You Choose Paper!");
        return numRoll;
    } 
    if(roll === 'scissors'){
        numRoll = 2;
        console.log("You Choose Scissors!");
        return numRoll;
    }
    
}
//This function will compare the outcomes of each selection
//and decide wether you win lose or draw.


function playRound(playerSelection, computerSelection){
  

  

    //if player plays rock
    if(playerSelection === 0 && computerSelection === 0){
        console.log("It's a draw!");
    }
    if(playerSelection === 0 && computerSelection === 1){
        computerScore = computerScore+1;
        console.log("You lose! Paper beats Rock!");
        
    }
    if(playerSelection === 0 && computerSelection === 2){
        playerScore = playerScore + 1;
        console.log("You win! Rock beats Scissors!");
    }
    //if player plays paper
    if(playerSelection === 1 && computerSelection === 0){
        playerScore = playerScore+1;
        console.log("You win! Paper beats Rock!");
    }
    if(playerSelection === 1 && computerSelection === 1){
        console.log("It's a draw!");
    }
    if(playerSelection === 1 && computerSelection === 2){
        computerScore = computerScore+1;
        console.log("You lose! Scissors beats Paper!");
    }
    //if player plays scissors
    if(playerSelection === 2 && computerSelection ===0){
        computerScore = computerScore+1;
        console.log("You lose! Rock beats Scissors!");
    }
    if(playerSelection === 2 && computerSelection ===1){
        playerScore = playerScore+1;
        console.log("You win! Scissors beats Paper!");
    }
    if(playerSelection === 2 && computerSelection ===2){
        console.log("It's a draw!");
    }
}



game();
