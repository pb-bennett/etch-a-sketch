'use strict';

const gridContainer = document.getElementById('grid-container');

const cell = document.createElement('div');

// cell.innerHTML = 'Text';
// gridContainer.appendChild(cell);

for (let i = 1; i < 17; i++) {
  for (let j = 1; j < 17; j++) {
    const cell = document.createElement('div');
    cell.innerHTML = i.toString() + ' ' + j.toString();
    cell.className = 'cell';
    cell.dataset.cell = `${i}--${j}`;
    cell.style.border = '2px black solid';
    gridContainer.appendChild(cell);
  }
}

// let i = 2;
// let j = 3;
// console.log(i.toString() + j.toString());
