var cards = ['queen', 'queen', 'king', 'king'];
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

	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

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


