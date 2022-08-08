// This is a number that i try to guess it
let guessNumber = Math.floor(Math.random()*20)+1

// Select Check Button
const checkBtn  =document.querySelector(".check")

let guessElment = document.querySelector('.guess')

// Select Mssage Guessing
const msgGuess  =document.querySelector(".msgGuess")

let score = 20 ;

let numberElement = document.querySelector(".number") ;

let checkNumber = Number(numberElement.value) ;

let scoreElement = document.querySelector(".score")

let highScore = 0;

let highScoreElement = document.querySelector(".highScore") ;

let againBtn = document.querySelector(".again")
// When Again Button click
const guessMessage = function(message) {
    msgGuess.textContent = message ; 
}

const scoreMessage = function(message) {
    scoreElement.textContent = message ;
}

againBtn.addEventListener("click",  function () {
    document.querySelector("body").style.backgroundColor = "#222";
    // msgGuess.textContent = "Start Guessing";
    guessMessage("Start Guessing")
    score = 20 
    // scoreElement.textContent = score ;
    scoreMessage(score)
    guessElment.textContent = "?"
    numberElement.value =""
    guessNumber = Math.floor(Math.random()*20)+1

})


// When Check Button click


checkBtn.addEventListener("click" , function(){
    // check number 
    let checkNumber = Number(document.querySelector(".number").value) ;

    if(!checkNumber) {
        // msgGuess.textContent = "⛔ No Number !"

        guessMessage("⛔ No Number !")
    }else if (checkNumber === guessNumber) {
        if(score > highScore) {
            highScore = score ;
        }
        guessElment.textContent  = guessNumber
        // msgGuess.textContent = "🎉 correct Number"
        guessMessage('🎉 correct Number')
        document.querySelector('body').style.backgroundColor = "#60b347";
        highScoreElement.textContent = highScore ;
    }else if(checkNumber !==  guessNumber) {
        if(score > 1) {
            // msgGuess.textContent = `${checkNumber > guessNumber ? "📈 Too High" : "📉 Too Low"}`;
            guessMessage(`${checkNumber > guessNumber ? "📈 Too High" : "📉 Too Low"}`)
            score--;
            // scoreElement.textContent = score ;
            scoreMessage(score)
        }else{
            // msgGuess.textContent = "💥 You Lost";
            guessMessage("💥 You Lost")
            score = 0 ;
            // scoreElement.textContent = score ;
            scoreMessage(score)
            document.querySelector("body").style.backgroundColor = "#f00"
        }
    }
    // else if (checkNumber > guessNumber){
    //     if(score > 1) {
    //         msgGuess.textContent = "📈 Too High";
    //         score--;
    //         scoreElement.textContent = score ;
    //     }else{
    //         msgGuess.textContent = "💥 You Lost";
    //         score = 0 ;
    //         scoreElement.textContent = score ;
    //         document.querySelector("body").style.backgroundColor = "#f00"
    //     }
    // }else if(checkNumber < guessNumber) {
    //     if(score > 1) {
    //         msgGuess.textContent = "📉 Too Low";
    //         score--;
    //         scoreElement.textContent = score ;
    //     }else{
    //         msgGuess.textContent = "💥 You Lost";
    //         score = 0 ;
    //         scoreElement.textContent = score ;
    //         document.querySelector("body").style.backgroundColor = "#f00"
    //     }
        
    // }
})
