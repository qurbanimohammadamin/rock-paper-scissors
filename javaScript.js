function getComputerChoice(){
    let result;
    let random = Math.random() * 100;
    if (random < 33.3333){result = "rock";}
    else if(33.3333<=random && random <=66.6666){result = "paper";}
    else {result = "scissors";}
    return result;
}
