/*var cards = ['queen', 'queen', 'king', 'king'];*/

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-diamonds.png"
	},

];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]){ 
		// cards are equal
		alert("You found a match!");
		//console.log("You found a match!");	
	} else { 
		// cards are not equal
		alert("Sorry, try again.");
		//console.log("Sorry, try again.");
	}
}

var flipCard = function() {

	var cardId = this.getAttribute('data-id');

	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log("Card image: " + cards[cardId].cardImage);
	console.log("Card suit: " + cards[cardId].suit);

	// then a user clicks a card we want to display the image for the face
	// use the setAttribute method to update the scr attribute of the image
	this.setAttribute('src', cards[cardId].cardImage);

	if(cardsInPlay.length === 2) {
		checkForMatch();
	}
}

var createBoard = function() {

	for (var i = 0; i < cards.length; i++) {
		// create new img for DOM
		var cardElement = document.createElement('img');
		// set src attribute
		cardElement.setAttribute('src', 'images/back.png');
		// set data attribute that is not tied to style
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		//console.log("loop " + i);
		//document.getElementsByTagName('div')[0].appendChild(cardElement);
		document.getElementById('game-board').appendChild(cardElement);
		}
};

/*flipCard(0);
flipCard(2);*/

createBoard();


