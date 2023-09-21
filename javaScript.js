
alert(checkResult(playerSelection(),getComputerChoice()));



function checkResult(userSelection, computerSelection){
    let userSelectionToLowerCase = userSelection.toLowerCase();
    let result = "";
    if(userSelectionToLowerCase === computerSelection){result = "equal!";}
    else if(userSelectionToLowerCase === "rock"){
        if(computerSelection === "paper"){result = "you lose!"}
        else result = "you win!";
    }
    else if( userSelectionToLowerCase === "paper"){
        if(computerSelection === "scissors"){result = "you lose!"}
        else result = "you win!";
    }
    else if(userSelectionToLowerCase === "scissors"){
        if(computerSelection==="rock"){result = "you lose!"}
        else result = " you win!"
    }
     else result = "spell not correct!";
     return result; 
    
}



function playerSelection(){
    let result = prompt("inter your choice:");
    return result;
}




function getComputerChoice(){
    let result;
    let random = Math.random() * 100;
    if (random < 33.3333){result = "rock";}
    else if(33.3333<=random && random <=66.6666){result = "paper";}
    else {result = "scissors";}
    return result;
}

