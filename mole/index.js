const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const time = document.querySelector("#time");
const score = document.querySelector("#Score");

let result = 0;
let hit = 0;
function randomSquares() {
	squares.forEach((square) => {
		square.classList.remove("mole");
	});
	let randomPosition = squares[Math.floor(Math.random() * 9)];
	randomPosition.classList.add("mole");
	hit = randomPosition.id;
	simple();
}
let scor = 0;
function simple() {
	squares.forEach((temp) => {
		temp.addEventListener("click", () => {
			if (hit == temp.id) {
				scor++;
				score.innerHTML = scor;
				hit = null;
			}
		});
	});
}
let yo;

yo = setInterval(randomSquares, 600);

let timeInterva = setInterval(() => {
	tim--;
	time.textContent = tim;
	if (tim == 0) {
		clearInterval(yo);
		clearInterval(timeInterva);
		alert("TIME OVER! Your score is " + scor);
	}
}, 1000);
let tim = 45;
