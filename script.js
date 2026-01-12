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
if(guess==randomnumber){
    displayguess(`you guessed it correct`)
    endgame()
}
else if(guess<randomnumber){
    displaymessage(`number is too low`)
}
else if(guess>randomnumber){
    displaymessage(`number is too high`)
}
}

function displayguess(guess){
userInput.value='';
guessslot.innerHTML+=`${guess} `
numGuess++;
remaining.innerHTML=`${11-numGuess}`

}

function displaymessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endgame(){
    userInput=''
    userInput.setAttribute('disable','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newgame"></h2>`;
    startover.appendChild(p)
    playgame=false;
    newgame()
}
function newgame(){
    const newGameButton=document.querySelector('#newgame')
    newGameButton.addEventListener('click',function(e){
         randomnumber=parseInt(Math.random() * 100 + 1);  
         prevGuess=[];
         numGuess=1;
         guessslot.innerHTML=''
         remaining.innerHTML=`${10-numGuess}`
         userInput.removeAttribute('disable')
         startover.removeChild(p)
        playgame=true
    })
}
