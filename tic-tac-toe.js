
//LOADS THE SQUARE BY ADDING square CLASS TO THE DIVS CONTAINED IN #board div element
document.addEventListener("DOMContentLoaded", () => {
  let boardObject = document.getElementById("board");
  boardObject.querySelectorAll("div").forEach(value => value.classList.add("square"))
});

