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

var flipCard = function(cardId) {
/*	var cardOne = cards[cardId];
	cardsInPlay.push(0);
	console.log("User flipped " + cardOne);
	var cardTwo = cards[1];
	cardsInPlay.push(cardTwo);
	console.log("User flipped " + cardTwo);*/

	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log("Card image: " + cards[cardId].cardImage);
	console.log("Card suit: " + cards[cardId].suit);

	if(cardsInPlay.length === 2) {
		/*if (cardsInPlay[0] === cardsInPlay[1]){ 
		// cards are equal
		alert("You found a match!");
		}
		else { 
		// cards are not equal
		alert("Sorry, try again.");
		}*/
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);


