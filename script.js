let gridSize = 16;

const grid = document.getElementById('grid');

gridCreation(gridSize, gridSize);

function gridCreation(rows, columns){
  grid.style.setProperty('--grid-size', rows);
  grid.style.setProperty('--grid-size', columns);
  for (let index = 0; index < (rows * columns); index++) {
    let cell = document.createElement('div');
    cell.innerText = (index + 1);
    grid.appendChild(cell).classList.toggle('grid-element');
    
  }


  /*
  for (let i = 0; i < gridSize; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.toggle('grid-element');
    grid.appendChild(gridElement);
    
  }*/
  
}