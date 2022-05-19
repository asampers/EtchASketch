const container = document.querySelector('#container');
const clear = document.querySelector('.clear');
const gridSize = document.querySelector('.gridSize');

function createGrid(x) {
    for (let rows = 0; rows < x; rows++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
    for (let columns = 0; columns < x; columns++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
        cell.style.width = '100%';
        let height = 400/x;
        cell.style.height = `${height}px`;
       }};
       const grid = document.querySelectorAll('.cell');
       grid.forEach(cell => {
           cell.addEventListener('mouseover', function(e) {
               e.currentTarget.style.background = 'black';
       }); 
    });
};

window.onload = (function() {
    createGrid(16);
});

function clearGrid() {
    let grid = document.querySelectorAll('.cell');
    let i;
    for (i=0; i < grid.length; i++) {
        grid[i].style.background = 'white';
    }
};

clear.addEventListener('click', function() {
    clearGrid();
})

let sizeSelection;
function changeGridSize() {
    sizeSelection = prompt('What size would you like? Enter a number between 1-100.: 30');
    if (sizeSelection < 1 || sizeSelection > 100 || sizeSelection == NaN || sizeSelection == undefined) {
        alert('Please try again with a number between 1-100.');
        changeGridSize();
    } else {
        container.textContent = '';
        createGrid(sizeSelection);
    } 
}

gridSize.addEventListener('click', function() {
    changeGridSize();
})

