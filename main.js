'use strict'
//GENERATING A NUMBER BETWEEN 1-20//
var secretNumber = Math.trunc(Math.random() *20) +1;
var score = 20;
var highscore = 0;
// console.log (secretNumber);

//queryselector//
// (document.querySelector(".number").textContent) = secretNumber;

//console.log;(questionMark)

//adding event listener on the click button//d
(document.querySelector(".check").addEventListener("click", function() {
    // prompt ("write your Name")

//getting user input in the input field
var userInput = document.querySelector(".guess").value;

//control structure
if(userInput==secretNumber){
    document.querySelector(".message").textContent="You got it right!!!😃";
    //change the body to green
    document.querySelector("body").style.backgroundColor = "green"
    highscore= score;
    document.querySelector(".highscore").textContent= score;

}
else if (userInput>secretNumber){
    document.querySelector(".message").textContent="Too high!Try again😆";
    document.querySelector(".score").textContent= score --
}
else if (userInput<secretNumber){
    document.querySelector(".message").textContent="Too Low!Try again😆";
    document.querySelector(".score").textContent= score --
}
else {
    document.querySelector(".message").textContent="You got it wrong!😆";
}
}))


(document.querySelector(".again").addEventListener("click", function() {
    var secretNumber = Math.trunc(Math.random() *20) +1;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector("body").style.color = "white";
    // document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".guess").value='';
    document.querySelector(".message").textContent ="start guessing...";
    document.querySelector(".score").textContent =20;
    document.querySelector(".highscore").textContent =0;

    }
))
