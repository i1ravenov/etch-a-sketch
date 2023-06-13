

const sizeSlider = document.querySelector("#size-slider");
console.log(sizeSlider);
const d = +sizeSlider.value;
const container = document.querySelector(".container");
console.log(container);
const CONTAINER_WIDTH = document.querySelector(".container").offsetWidth;

console.log(CONTAINER_WIDTH);
const BLOCK_WIDTH = Math.floor(CONTAINER_WIDTH / d);

for (let i = 0; i < d; i++) {
	for (let j = 0; j < d; j++) {
		const div = document.createElement('div');
		div.classList.add('block');
		div.style.width = BLOCK_WIDTH + "px";
		div.style.height = BLOCK_WIDTH + "px";
		container.appendChild(div);
	}
}
