//GAME STATE ARRAY
let gameState = Array(9).fill("");

// gameState[8]="working"
// console.log(gameState);
// console.log(gameState.length);

currentPlayer = "X";


//LOADS THE SQUARE BY ADDING square CLASS TO THE DIVS CONTAINED IN #board div element
document.addEventListener("DOMContentLoaded", () => {
  let boardObject = document.getElementById("board");
  boardObject.querySelectorAll("div").forEach(value => value.classList.add("square"));
});

//ADDS X OR O BASED ON THE CURRENTPLAYER VARIABLE; UPDATES GAMESTATE ARRAY.
document.addEventListener("DOMContentLoaded", () => {
  let boardObject = document.getElementById("board");
  boardObject.querySelectorAll(".square").forEach((value, index) => {
    value.addEventListener("click", () => {
      value.textContent = currentPlayer;
      value.classList.add(currentPlayer);
      updateState(currentPlayer, index);
      //console.log(gameState);
      togglePlayer();
    });
  });
});


//FUNCTIONS
function togglePlayer(){
  currentPlayer = currentPlayer==='X' ? 'O':'X';
}

function updateState(value, index){
  gameState[index] = value;
}


