'use strict';

const scoreDigit = document.querySelector(".score-digit");
const gameRule = document.querySelector(".game-rule");
const overLay = document.querySelector(".overlay");
const closeX = document.querySelector(".close-x");
const rule = document.querySelector(".rule");
const xter = document.querySelectorAll(".xter");
const pad = document.querySelector(".pad");
const picks = document.querySelector(".picks");
const pickOne = document.querySelector(".pickOne");
const pickTwo = document.querySelector(".pickTwo");
const houseImage = document.getElementById("houseImage");
const myImage = document.getElementById("myImage");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const winnerBoard = document.querySelector(".winBoard");
const winnerBoard2 = document.querySelector(".winBoard");
const xterImage = document.querySelector(".xter-image");
const boardDisplay = document.querySelector(".boardDisplay");
const PlayAgain = document.getElementById("playAgain");
const score = document.querySelector(".score-digit");
const body = document.querySelector("body");



const xterObj = {
    "rock": "images/icon-rock.svg",
    "paper": "images/icon-paper.svg",
    "scissors": "images/icon-scissors.svg"

}
const image = ["rock", "paper", "scissors"];



const x = closeX.addEventListener("click", () => {
    overLay.classList.add("hidden");
    gameRule.classList.add("hidden");
})

const instru = rule.addEventListener("click", () => {
    overLay.classList.remove("hidden");
    gameRule.classList.remove("hidden");
})

for (let i = 0; i < xter.length; i++) {

    const start = () => {
        xter[i].addEventListener("click", () => {
            picks.classList.remove("hidden");
            pad.classList.add("hidden");
            const post = xter[i]
            // console.log(xter[i].classList);
            if (post.classList.contains("paper")) {
                pickOne.classList.remove("scissors");
                pickOne.classList.remove("rock");
                pickOne.classList.add("paper");
                myImage.src = xterObj["paper"];
            }

            else if (post.classList.contains("rock")) {
                pickOne.classList.remove("paper");
                pickOne.classList.remove("scissors");
                pickOne.classList.add("rock");
                myImage.src = xterObj["rock"];
            }

            else if (post.classList.contains("scissors")) {
                pickOne.classList.remove("paper");
                pickOne.classList.remove("rock");
                pickOne.classList.add("scissors");
                myImage.src = xterObj["scissors"];
            }

            pickOne.classList.add("marg");

            two();
            showBoard();
            again();
            restart();


        });

    }
    start();
}



function two() {
    const randImage = Math.floor(Math.random() * 3);
    const ran = image[randImage];
    houseImage.src = xterObj[ran];

    if (ran === "rock") {
        console.log(pickTwo.classList)
        pickTwo.classList.remove("paper");
        pickTwo.classList.remove("scissors");
        pickTwo.classList.add("rock");
    }

    else if (ran === "paper") {
        console.log(pickTwo.classList)
        pickTwo.classList.remove("scissors");
        pickTwo.classList.remove("rock");
        pickTwo.classList.add("paper");
    }

    else if (ran === "scissors") {
        console.log(pickTwo.classList)
        pickTwo.classList.remove("rock");
        pickTwo.classList.remove("paper");
        pickTwo.classList.add("scissors");

    }


};

const showBoard = () => {
    winnerBoard.classList.remove("hidden");
    
    picks.classList.add("widthIncrease");
    restart();
    if (myImage.getAttribute("src") === houseImage.getAttribute("src")) {
        boardDisplay.textContent = "IT'S A DRAW"
    }

    if (myImage.getAttribute("src") === xterObj["paper"] && houseImage.getAttribute("src") === xterObj["rock"] || myImage.getAttribute("src") === xterObj["scissors"] && houseImage.getAttribute("src") === xterObj["paper"] || myImage.getAttribute("src") === xterObj["rock"] && houseImage.getAttribute("src") === xterObj["scissors"]) {

        boardDisplay.textContent = "YOU WIN"
        scoreAdd();

    }

    else if (myImage.getAttribute("src") === xterObj["rock"] && houseImage.getAttribute("src") === xterObj["paper"] || myImage.getAttribute("src") === xterObj["paper"] && houseImage.getAttribute("src") === xterObj["scissors"] || myImage.getAttribute("src") === xterObj["scissors"] && houseImage.getAttribute("src") === xterObj["rock"]) {

        boardDisplay.textContent = "YOU LOSE"
        scoreRemove();
    }

}

const again = () => {
    PlayAgain.addEventListener("click", () => {
        picks.classList.add("hidden");
        pad.classList.remove("hidden");
    })
}

const scoreAdd = () => {
    score.textContent++;
}

const scoreRemove = () => {
    score.textContent--;
}

const restart = () => {
    if (score.textContent === "10") {
        // picks.classList.add("hidden");
        // pad.classList.remove("hidden");
        scoreUpdate();
        over();


    }
    else if (score.textContent === "15") {
        // picks.classList.add("hidden");
        // pad.classList.remove("hidden");
        scoreUpdate();
        over();



    }
}

const scoreUpdate = () => {
    score.textContent = "12";
}

const over = () => {
    picks.classList.add("hidden")
    pad.classList.remove("hidden");
    gameRule.classList.remove("hidden");
}



