const cardArray = [
	{
		name: "fries",
		img: "images/fries.png",
	},
	{
		name: "cheeseburger",
		img: "images/cheeseburger.png",
	},
	{
		name: "ice-cream",
		img: "images/ice-cream.png",
	},
	{
		name: "pizza",
		img: "images/pizza.png",
	},
	{
		name: "milkshake",
		img: "images/milkshake.png",
	},
	{
		name: "hotdog",
		img: "images/hotdog.png",
	},
	{
		name: "fries",
		img: "images/fries.png",
	},
	{
		name: "cheeseburger",
		img: "images/cheeseburger.png",
	},
	{
		name: "ice-cream",
		img: "images/ice-cream.png",
	},
	{
		name: "pizza",
		img: "images/pizza.png",
	},
	{
		name: "milkshake",
		img: "images/milkshake.png",
	},
	{
		name: "hotdog",
		img: "images/hotdog.png",
	},
];
let points = 0;
let result = document.getElementById("result")
cardArray.sort(()=> 0.5 - Math.random());
console.log(cardArray)

let gridDisplay = document.querySelector("#grid")
function createBoard() {
	for(let i= 0 ; i <cardArray.length ; i ++){
		let card = document.createElement('img')
		card.setAttribute('src' , 'images/blank.png');
		card.setAttribute('id',i  );
		card.addEventListener('click',flipCard)
		gridDisplay.append(card)
	}
}
function flipCard() {
let id = this.getAttribute('id')
console.log(id)
this.setAttribute('src', cardArray[id].img)
cardId.push(id);
cardName.push(cardArray[id].name)
if(cardName.length ==2 ){
      setTimeout(check , 500)
}
}
function check()
{
	card = document.querySelectorAll('img');
	cardOne = cardName[0]
	cardTwo = cardName[1]
	if(cardOne == cardTwo ){
		alert("You found a match!!")
		card[cardId[0]].removeEventListener('click', flipCard);
		card[cardId[1]].removeEventListener('click', flipCard);
		card[cardId[0]].setAttribute('src', 'images/white.png')
		card[cardId[1]].setAttribute('src', 'images/white.png')
		points++;
	}
	else if(cardId[0] == cardId[1]){
		alert("you pressed the same picture");
card[cardId[0]].setAttribute("src", "images/blank.png");


	}
	else {card[cardId[0]].setAttribute("src", "images/blank.png");
	card[cardId[1]].setAttribute("src", "images/blank.png");


	}
 cardId = [];
	cardName = [];
result.innerHTML = points;
if(points ==6 ){
	result.innerHTML = 'Hurry ! , You\'ve won ' ;
}
}



createBoard()
let cardId = []
let cardName = []