var cards = ["fool", "magician", "high_priestess", "empress", "emperor", "hierophant", "lovers", "chariot", "strength", "hermit", "wheel_of_fortune", "justice", "hanged_man", "death", "temperance", "devil", "tower", "star", "moon", "sun", "judgement", "world", "ace_wands", "two_wands", "three_wands", "four_wands", "five_wands", "six_wands", "seven_wands", "eight_wands", "nine_wands", "ten_wands", "page_wands", "knight_wands", "queen_wands", "king_wands", "ace_cups", "two_cups", "three_cups", "four_cups", "five_cups", "six_cups", "seven_cups", "eight_cups", "nine_cups", "ten_cups", "page_cups", "knight_cups", "queen_cups", "king_cups", "ace_swords", "two_swords", "three_swords", "four_swords", "five_swords", "six_swords", "seven_swords", "eight_swords", "nine_swords", "ten_swords", "page_swords", "knight_swords", "queen_swords", "king_swords", "ace_pentacles", "two_pentacles", "three_pentacles", "four_pentacles", "five_pentacles", "six_pentacles", "seven_pentacles", "eight_pentacles", "nine_pentacles", "ten_pentacles", "page_pentacles", "knight_pentacles", "queen_pentacles", "king_pentacles"];

var makeCard = function(index) {
	var div = document.createElement("DIV");
	div.innerHTML = "<img class='cards' src='cards/"+cards[index]+".jpg'/><p>"+parseName(cards[index])+"</p>";
	$(div).fadeIn('slow');
	$('#restart').fadeIn('slow');
	div.style.display = "inline-block";
	div.style.marginRight = "15px";
	document.getElementById('cards').appendChild(div);
}

var draw = function(numCards, tf){
	document.getElementById('start').style.display = 'none';
	
	if(tf) {
		for(var j = 0; j < 78; j++) {
			makeCard(j);
		}
	}
	else {
		var hand = new Array(numCards);
		for(var i = 0; i < numCards; i++) {
			var rand = Math.floor(78 * Math.random());
			var cond = true;
			//Checks for duplicates
			for(var x = 0; x < hand.length; x++) {
				if(rand == hand[x]) {
					rand = Math.floor(78 * Math.random());
					cond = true;
					x = 0;
				}
			}
			hand[i] = rand;
			makeCard(rand);	
		}
	}
	
	document.getElementById('restart').style.display = "block";
}

var parseName = function(cardName) {

	var newName = cardName;
	if(cardName.indexOf("wands") != -1 || cardName.indexOf("swords") != -1 || cardName.indexOf("cups") != -1 || cardName.indexOf("pentacles")!= -1) {
		newName = newName.replace("_", " of ");
	}
	else if(cardName.indexOf("_") != -1){
		newName = newName.replace("_", " ");
		newName = newName.replace("_", " ");
	}
	
	return  newName;
}

