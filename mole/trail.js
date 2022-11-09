let count = 0;
function tem() {
	count++;
	console.log(count);
	if (count == 10) m();
}

function m() {
	clearInterval(time);
}


	let time = setInterval(tem, 1000);


