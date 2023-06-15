function $(selector) {
	return document.querySelector(selector);
}

const value = $("#value");
const sizeSlider = $("#size-slider");
value.textContent = sizeSlider.value;
const DEFAULT_COLOR = 'black';
const BG_COLOR = 'aqua';
let color = DEFAULT_COLOR;

const resetButton = $("#reset");
const eraseButton = $("#erase");
const chooseButton = $("#choose");
const colorInput = $('#picker');
const rainbow = $("#rainbow");

colorInput.addEventListener('change', (e) => { color = e.target.value });
resetButton.addEventListener('click', (e) => {
	setGrid(sizeSlider.value);
	color = DEFAULT_COLOR;
});
eraseButton.addEventListener('click', (e) => { color = BG_COLOR });
chooseButton.addEventListener('click', (e) => { color = colorInput.value });
rainbow.addEventListener('click', (e) => color = 'rainbow');

setGrid(sizeSlider.value);
sizeSlider.addEventListener("input", (e) => {
	let d = +e.target.value;
	value.textContent = d;
	setGrid(d);
});


function setGrid(dim) {
	const container = $(".container");
	const CONTAINER_WIDTH = container.clientHeight;
	const BLOCK_WIDTH = Math.floor(CONTAINER_WIDTH / dim);
	container.innerHTML = "";
	for (let i = 0; i < dim; i++) {
		for (let j = 0; j < dim; j++) {
			const div = document.createElement('div');
			div.classList.add('block');
			div.style.width = BLOCK_WIDTH + "px";
			div.style.height = BLOCK_WIDTH + "px";
			div.addEventListener('mouseover', (e) => {
				if (color === 'rainbow') {
					e.target.style['background-color'] = randomColor();
				} else {
					e.target.style['background-color'] = color;
				}
			});
			container.appendChild(div);
		}
	}
}

function randomColor() {
	const r = randomHue();
	const g = randomHue();
	const b = randomHue();
	return `rgb(${r},${g},${b})`;
}

function randomHue() {
	return Math.floor(Math.random() * 256);
}