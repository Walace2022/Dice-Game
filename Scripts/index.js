diceGame();

function diceGame(){
    var roll1 = Math.floor(Math.random()*6) + 1;
    var roll2 = Math.floor(Math.random()*6) + 1;

    whoWins(roll1,roll2);

    changeDices(roll1,roll2);   
}

function whoWins(x,y){
    if(x===y){
        document.querySelector("h1").innerHTML = "It's a Tie.";
    }else if(x>y){
        document.querySelector("h1").innerHTML = "Player 1 Wins.";
    }else{
        document.querySelector("h1").innerHTML = "Player 2 Wins.";
    }
}

function changeDices(x,y){
    var imgs = document.querySelectorAll(".dice-game img");

    imgs[0].setAttribute("src","images/dice" + x + ".png");   
    imgs[1].setAttribute("src","images/dice" + y + ".png");  
}
