let gridSize = 5;

const grid = document.getElementById('grid');

gridCreation(gridSize, gridSize);

function gridCreation(rows, columns){
  //setting the property names and values to use in css
  grid.style.setProperty('--grid-row', rows);
  grid.style.setProperty('--grid-col', columns);
  
  for (let index = 0; index < (rows * columns); index++) {
    let cell = document.createElement('div');
    cell.innerText = (index + 1);
    grid.appendChild(cell).classList.toggle('grid-element');
    
  }  
}