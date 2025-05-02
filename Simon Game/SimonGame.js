let gameSeq = [];
let userSeq = [];

const highScore = 0;

//random color glowing //

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");



// game started function //
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelup();
    }
});

/*second step*/

// button flash function defination //
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 400);

}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 200);

}


function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level:${level}`;    
     
    // random btn choose //
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randColor);
    // console.log(randIdx);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

//check user and random color value //

function checkAns(idx) {
    // console.log("current level", level);
   
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
           setTimeout( levelup(),1000);
        }
    
    } else
    
    {
        h2.innerHTML = `GAME OVER ! <b> your score was <b> ${level} </b> <br>Press any button to start`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        reset();
    }
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}



// event listner for button//
function btnPress() {
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1); 
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}


