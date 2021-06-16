function getRandomColor() {
	return Math.floor(Math.random() * 255);
}
const container = document.querySelector('.container');
const range = document.querySelector('.range');
let val = range.value;
let color = false;
const textColor = document.querySelector('.color-mode');
// Generates div.grid inside container
function makeGrid(rowNum, columnNum) {
	deleteContainer();

	for (i = 0; i < rowNum; i++) {
		let rows = document.createElement('div');
		container.appendChild(rows).className = 'rows';
		for (j = 0; j < columnNum; j++) {
			let columns = document.createElement('div');
			rows.appendChild(columns).className = 'columns';
		}
	}
}

makeGrid(val, val);

// grid mouse hover makes grid element node background black

function onHover() {
	const grid = document.querySelectorAll('.columns');

	for (i = 0; i < grid.length; i++) {
		grid[i].addEventListener('mouseover', (e) => {
			if (color == false) {
				e.target.style.background = 'black';
			} else {
				e.target.style.background = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
			}
		});
	}
}

onHover();

// reset button to set all grid background color to original state
const resetButton = document.querySelector('.reset');
function resetBoard() {
	const grid = document.querySelectorAll('.columns');
	for (i = 0; i < grid.length; i++) {
		grid[i].style.background = 'white';
	}
}
resetButton.addEventListener('click', resetBoard);

// make range for pixel columns

range.addEventListener('change', () => {
	val = document.querySelector('.range').value;
	// console.log(val);
	makeGrid(val, val);
	onHover();
	changeNums();
});

// delete grid function for input range change

function deleteContainer() {
	container.innerHTML = '';
}

// display number of pixels next to range
function changeNums() {
	const nums = document.querySelector('.nums');
	nums.textContent = `${val} x ${val}`;
}

changeNums();

const toggleBtn = document.querySelector('.colorSwitch');
console.log(toggleBtn);

function toggleColor() {
	toggleBtn.addEventListener('click', () => {
		console.log('dd');
		color = !color;
		onHover();
		resetBoard();
		textColorFunc();
	});
}

toggleColor();

// function to make grid background initially white
function initWhite() {
	container.style.background = 'white';
}
initWhite();

// function to make switch color indicator
function textColorFunc() {
	if (color == true) {
		textColor.textContent = 'ON';
		textColor.style.color = 'rgb(245, 87, 87)';
	} else {
		textColor.textContent = 'OFF';
		textColor.style.color = 'black';
	}
}
