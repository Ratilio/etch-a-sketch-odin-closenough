//HTML button to run Javascript function 'onclick'
// ----------------------------------------------
let color = '#000000';

//Create the divs using JavaScript.
//put grid squares inside “container” div
function createGrid(size) {
  let container = document.querySelector(".container");
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => div.remove());//removes everything for later create again
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.classList.add("cell");
    container.style.backgroundColor = "#ffffff";
    //Set up “hover” effect so the div's change color using JavaScript
    square.addEventListener("mouseover", colorSquare);
    //Just inside the element, after its last child
    container.insertAdjacentElement("beforeend", square);
  }
}
//create first board
createGrid(16);

//add input asking for new grid, set limit between 2px - 100px
function changeGridSize(input) {
  if(input >= 2 && input <= 100) createGrid(input);
  if(input < 2) window.alert("I need SQUARES!! Plural!! More than 1");
  if(input > 100) window.alert("Too much squares! I can't handle that much");
};

// random color
function colorSquare() {
  if(color === "random"){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
  }
  else{
    this.style.backgroundColor = color;
  }
}//using random for sl appears a lot of black, maybe change later to restrict some values

function changeColor(choice) {
  color = choice;//assigns color
}

function cleanGrid() {
  let container = document.querySelector(".container");
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "#ffffff"));//#e0e0e0
}