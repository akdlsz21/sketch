const container = document.querySelector('.container');

// Generates div.grid inside container
function makeGrid(size) {
	for (i = 0; i < size; i++) {
		let grid = document.createElement('div');
		container.appendChild(grid).className = 'grid';
	}
}

makeGrid(256);

// grid mouse hover makes grid element node background black

const grid = document.getElementsByClassName('grid');

for (i = 0; i < grid.length; i++) {
	//aEL callback function takes objects as parameter. more on this later
	grid[i].addEventListener('mouseover', (tar) => {
		console.log(tar);
		tar.target.style.background = 'black'; // Needs to be this way, don't know why
	});
}

// reset button to set all grid background color to original state
const resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', () => {
	for (i = 0; i < grid.length; i++) {
		grid[i].style.background = 'white';
	}
});
