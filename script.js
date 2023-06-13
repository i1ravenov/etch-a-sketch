const value = document.querySelector("#value");
const sizeSlider = document.querySelector("#size-slider");
console.log(sizeSlider);
value.textContent = sizeSlider.value;

setGrid(sizeSlider.value);
sizeSlider.addEventListener("input", (e) => {
	let d = +e.target.value;
	value.textContent = d;
	setGrid(d);
});


function setGrid(dim) {
	const CONTAINER_WIDTH = document.querySelector(".container").clientHeight;
	console.log(CONTAINER_WIDTH);
	const BLOCK_WIDTH = Math.floor(CONTAINER_WIDTH / dim);
	const container = document.querySelector(".container");
	container.innerHTML = "";
	for (let i = 0; i < dim; i++) {
		for (let j = 0; j < dim; j++) {
			const div = document.createElement('div');
			div.classList.add('block');
			div.style.width = BLOCK_WIDTH + "px";
			div.style.height = BLOCK_WIDTH + "px";
			div.addEventListener('mouseover', (e) => {
				e.target.style['background-color'] = 'black';
			});
			container.appendChild(div);
		}
	}
}