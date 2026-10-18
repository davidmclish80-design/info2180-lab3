//GAME STATE ARRAY
let gameState = Array(9).fill("");

let currentPlayer = "X";
let gameover = 0;


//LOADS THE SQUARE BY ADDING square CLASS TO THE DIVS CONTAINED IN #board div element
document.addEventListener("DOMContentLoaded", () => {
  let boardObject = document.getElementById("board");
  boardObject.querySelectorAll("div").forEach(value => value.classList.add("square"));
});

//ADDS X OR O BASED ON THE CURRENTPLAYER VARIABLE; UPDATES GAMESTATE ARRAY.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".square").forEach((value, index) => {
    value.addEventListener("click", () => {
      if(!value.textContent && !gameover){
        value.textContent = currentPlayer;
        value.classList.add(currentPlayer);
        updateState(currentPlayer, index);
        Win();
        togglePlayer();
      }
    });
  });
});

//HOVER OVER SQUARE HIGHLIGHTS IMPLEMENTED
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".square").forEach(value => {
    value.addEventListener("mouseenter", () => {
      value.classList.add("hover");
    });
    value.addEventListener("mouseleave", () => {
      value.classList.remove("hover");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".btn").addEventListener("click", () => {
    resetSquares();
    resetStatus();
  });
});


//FUNCTIONS
function togglePlayer(){
  currentPlayer = currentPlayer==='X' ? 'O':'X';
}

function updateState(value, index){
  gameState[index] = value;
}

//This function is used to determine if there is a winner
function Win() {
  winPatterns=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
  ];

  winPatterns.forEach(value => {
    let a = gameState[value[0]];
    let b = gameState[value[1]];
    let c = gameState[value[2]];

    if(a && a===b && b===c){
      let message = document.getElementById("status");
      //console.log(message);
      message.classList.add("you-won");
      message.textContent = `Congratulations! ${a} is the Winner`;
      
      console.log(`${a}=a ${b}=b ${c}=c`);
      gameover=1;
    }
  });
}


function resetSquares(){
  document.querySelectorAll(".square").forEach((value, index) => {
    value.textContent = "";
    updateState("", index);
    currentPlayer="X";    
    value.classList.remove("X", "O");
  });
}

function resetStatus(){
  let status = document.getElementById("status");
  status.classList.remove("you-won");
  status.textContent = "Move your mouse over a square and click to play an X or an O.";
  gameover=0;
}
