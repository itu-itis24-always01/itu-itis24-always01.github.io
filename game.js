const playerSubmit = document.getElementById("submit");
const playerInput = document.getElementById("prediction");
const playerScore = document.getElementById("score");
const playerRestartButton = document.getElementById("restart-button");
const playerHeart1 = document.getElementById("heart1");
const playerHeart2 = document.getElementById("heart2");
const playerHeart3 = document.getElementById("heart3");
const playerBox1 = document.getElementById("box1");
const playerBox2 = document.getElementById("box2");
const playerBox3 = document.getElementById("box3");
const playerBox4 = document.getElementById("box4");
const playerBox5 = document.getElementById("box5");
const imageB = document.getElementById("IMGB");
const imageL = document.getElementById("IMGL");
const imageI = document.getElementById("IMGI");
const imageN = document.getElementById("IMGN");
const imageK = document.getElementById("IMGK");

let score = 0;
let wrong = 0;
const array_words = ["B", "L", "I", "N", "K"];
let userinput = "";


playerSubmit.onclick = function () {
    userinput = playerInput.value.toUpperCase()
    if(userinput>3 && userinput !=="BLINK"){
        alert("You Lost The Game!")
        playerHeart1.classList.add("hidden");
        playerHeart2.classList.add("hidden");
        playerHeart3.classList.add("hidden");

    }

    if (array_words.includes(userinput)){
        score = score+20;
        playerScore.textContent = score;
        if(userinput === "B"){
            imageB.style.visibility = "visible";
            playerBox1.style.visibility = "hidden";
        }else if(userinput === "L"){
            imageL.style.visibility = "visible";
            playerBox2.style.visibility = "hidden";
        }else if(userinput === "I"){
            imageI.style.visibility = "visible";
            playerBox3.style.visibility = "hidden";
        }else if(userinput === "N"){
            imageN.style.visibility = "visible";
            playerBox4.style.visibility = "hidden";
        }else if(userinput === "K"){
            imageK.style.visibility = "visible";
            playerBox5.style.visibility = "hidden";
        }


    }else if(userinput === "BLINK"){
        score = 100;
        playerScore.textContent = score;

        imageB.style.visibility =  "visible";
        playerBox1.style.visibility = "hidden";
        imageL.style.visibility ="visible";
        playerBox2.style.visibility = "hidden";
        imageI.style.visibility = "visible";
        playerBox3.style.visibility ="hidden";
        imageN.style.visibility =  "visible";
        playerBox4.style.visibility = "hidden";
        imageK.style.visibility = "visible";
        playerBox5.style.visibility ="hidden";
        if(score ===100){
            alert("Congratulations You Won The Game!")
        }
    }else{
        wrong = wrong+1;
        if (wrong === 1){
            playerHeart1.classList.add("hidden");
        }else if(wrong === 2){
            playerHeart2.classList.add("hidden");
        }else if(wrong ===3){
            playerHeart3.classList.add("hidden");
            alert("You Lost The Game!");
        }
    }
    playerInput.value = ""
};

playerRestartButton.classList.add("hidden");
playerInput.addEventListener("input", function () {
    userinput = playerInput.value;
    if (userinput.length > 0) {
        playerRestartButton.classList.remove("hidden");
    }
});

playerRestartButton.onclick = function (){
    score = 0;
    playerScore.textContent= 0;
    playerHeart1.classList.remove("hidden");
    playerHeart2.classList.remove("hidden");
    playerHeart3.classList.remove("hidden");
    playerRestartButton.classList.add("hidden");

    imageB.style.visibility = "hidden"
    imageL.style.visibility = "hidden"
    imageI.style.visibility = "hidden"
    imageN.style.visibility = "hidden"
    imageK.style.visibility = "hidden"

    playerBox1.style.visibility = "visible";
    playerBox2.style.visibility = "visible";
    playerBox3.style.visibility = "visible";
    playerBox4.style.visibility = "visible";
    playerBox5.style.visibility = "visible";

    playerInput.value="";
}














