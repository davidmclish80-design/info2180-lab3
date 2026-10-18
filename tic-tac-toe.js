//GAME STATE ARRAY
let gameState = Array(9).fill("");

// gameState[8]="working"
// console.log(gameState);
// console.log(gameState.length);

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
      value.textContent = currentPlayer;
      value.classList.add(currentPlayer);
      updateState(currentPlayer, index);
      //console.log(gameState);
      togglePlayer();
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



//FUNCTIONS
function togglePlayer(){
  currentPlayer = currentPlayer==='X' ? 'O':'X';
}

function updateState(value, index){
  gameState[index] = value;
  Win();
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
  ]

  if(!gameover){
    winPatterns.forEach(value => {
      let a = gameState[value[0]];
      let b = gameState[value[1]];
      let c = gameState[value[2]];

      if(a && a===b && b===c){
        let message = document.getElementById("status");
        //console.log(message);
        message.classList.add("you-won");
        message.innerHTML=`Congratulations! ${a} is the Winner`;
        
        console.log(`${a}=a ${b}=b ${c}=c`);
        gameover=1;
      }
    });
  }
}


