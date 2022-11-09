let computerinput = document.getElementById("span_comp");
let userinput = document.getElementById("span_user");
let result = document.getElementById("result");
let choices = document.querySelectorAll("button");
let yo;
let helo;
let res;
choices.forEach((element) =>
	element.addEventListener("click", () => {
		yo = element.id;
		userinput.innerHTML = yo;
		generateComputerInput();
		resulto();
	})
);

function generateComputerInput() {
	const number = Math.floor(Math.random() * 3);
	if (number == 1) {
		helo = "paper";
	} else if (number == 2) {
		helo = "rock";
	} else {
		helo = "scissors";
	}

	computerinput.innerHTML = helo;
}

function resulto() {
	if (yo === helo) res = "it's a draw";
	if (yo === "scissors" && helo === "paper") res = "user won";
	if (yo === "paper" && helo == "scissors") res = "computer won";
	if (yo === "paper" && helo === "rock") res = "user won ";
	if (yo === "rock" && helo === "paper") res = "computer won ";
	if (yo === "scissors" && helo === "paper") res = "user won";
	if (yo === "rock" && helo === "scissors") res = "computer won";

	result.innerHTML = res; 
}
