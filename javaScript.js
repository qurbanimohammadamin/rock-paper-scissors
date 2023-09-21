playGame();

function playGame(){
    let result = 0;
  
    for (let i = 0; i<5; i++){
        let checkR = checkResult(playerSelection(),getComputerChoice());
        if(checkR == 1){
            ++result;
        }
        else if(checkR == -1){
            i--;
        }
    }

    if (result >= 3){
        alert("you win!");
    }
    else 
        alert("you lose!");
}








//this function check the result of game and return 1 for win, 0 for lose and -1 for equal
function checkResult(userSelection, computerSelection){
    let userSelectionToLowerCase = userSelection.toLowerCase();
    let result = -1;
    if(userSelectionToLowerCase === computerSelection){result = -1;}
    else if(userSelectionToLowerCase === "rock"){
        if(computerSelection === "paper"){result = 0;}
        else result = 1;
    }
    else if( userSelectionToLowerCase === "paper"){
        if(computerSelection === "scissors"){result =0;}
        else result = 1;
    }
    else if(userSelectionToLowerCase === "scissors"){
        if(computerSelection==="rock"){result = 0;}
        else result = 1;
    }
     else result = -1;
     return result; 
    
}




//this function get the computer choice(rock, paper, scissors) randomly
function getComputerChoice(){
    let result;
    let random = Math.random() * 100;
    if (random < 33.3333){result = "rock";}
    else if(33.3333<=random && random <=66.6666){result = "paper";}
    else {result = "scissors";}
    return result;
}




//this function get the player choice(rock, paper, scissors) by a prompt
function playerSelection(){
    let result = prompt("inter your choice:");
    return result;
}

