


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

