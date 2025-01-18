const playerSubmit = document.getElementById("submit");
const playerInput = document.getElementById("prediction");
const playerScore = document.getElementById("score");
const playerRestartButton = document.getElementById("restart-button");
const playerHeart1 = document.getElementById("heart1");
const playerHeart2 = document.getElementById("heart2");
const playerHeart3 = document.getElementById("heart3");

let score = 0
let wrong = 0
const array_words = ["B","L","I","N","K"]
let userinput;
playerSubmit.onclick = function(){
    userinput = playerInput.value;

    if(array_words.includes(userinput.toUpperCase())){
        score = score+20;
        playerScore.textContent = score; 
    }
    else{
        wrong = wrong +1;
        if (wrong === 1){
            playerHeart1.classList.add("hidden");
        } else if (wrong === 2) {
            playerHeart2.classList.add("hidden")
        }else if (wrong === 3){
            playerHeart3.classList.add("hidden")
            alert("You Lost The Game!")
            
        }    
    }
}





