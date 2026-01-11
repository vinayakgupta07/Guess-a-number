const randomnumber=parseInt(Math.random() * 100 + 1);

const submit=document.querySelector("#subt")
const userInput=document.querySelector("#guessField")
const guessslot=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
const lowOrHi=document.querySelector(".lowOrHi")
const startover=document.querySelector(".resultParas")

const p=document.createElement("p")
let prevGuess=[]
let numGuess=1
let playgame=true;

if(playgame){
    submit.addEventListener("click", function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
   if(isNaN(guess)){
    alert("give a valid number")
   }
   else if(guess<1){
     alert("give a valid number")
   }
   else if(guess>100){
     alert("give a valid number")
   }
   else{
    prevGuess.push(guess)
    if(numGuess===11){
        displayguess(guess)
        displaymessage(`Game Over.Random number was ${randomnumber}`)
        endgame()
    }
    else{
        displayguess(guess)
        checkguess(guess)
    }
   }
}

function checkguess(guess){

}

function displayguess(guess){


}

function displaymessage(message){}
function endgame(message){}
function newgame(message){}
