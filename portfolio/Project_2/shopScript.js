	var nf1213cart = [];
	if(localStorage.nf1213cart) {
		nf1213cart = JSON.parse(localStorage.nf1213cart);
	}
	function popup() {
		alert("Your cart: "+i+" items\n"+nf1213cart+"\n\nUnable to checkout items. Contact Support.");
	}
				
	var itemsDiv = document.getElementById("items");
	var items = itemsDiv.getElementsByTagName("li");
				
	function addBuyButtons() {
		for(var i = 0; i < items.length; i++) {
			var inner = items[i].innerHTML;
			items[i].innerHTML = inner + "<br><div id='buyButton' onClick='addToCart("+i+")'></div>";
		}
	}
	var i = 0;
	i = Number(localStorage.getItem("nf1213i"));
	var cartNum = 0;
	cartNum = Number(localStorage.getItem("nf1213cartNum"));

	function addToCart(item) {
		nf1213cart[i] = items[item].innerText;
		localStorage.nf1213cart = JSON.stringify(nf1213cart);
		i++;
		cartNum++;
		localStorage.setItem("nf1213i", i);
		localStorage.setItem("nf1213cartNum", cartNum);
		if(cartNum <= 5 )
		{
			cartNumbers();
		}
		console.log(cart);
	}
	
	function cartNumbers() { 
		if(cartNum > 0 && cartNum <=5) {
			document.getElementById("cartImg").src = "images/cart"+cartNum+".png";
		}
		else if(cartNum > 5) {
			document.getElementById("cartImg").src = "images/cart"+5+".png";
		}
	}
	
	function empty() {
		i = 0;
		cartNum = 0;
		document.getElementById("cartImg").src = "images/cart.png";
		nf1213cart.length = 0;
		localStorage.setItem("nf1213i", i);
		localStorage.setItem("nf1213cartNum", cartNum);
		localStorage.nf1213cart = JSON.stringify(nf1213cart);
	}
	
	function filterCategories() {
		var ropClothes = document.getElementsByClassName("ROP");
		for(var i = 0; i < ropClothes.length; i++) {
			if(document.forms['categories'].redOrangePink.checked) {
				ropClothes[i].style.display = "inline-table";
			}
			else {
				ropClothes[i].style.display = "none";
			}
		}
		
		var ygbClothes = document.getElementsByClassName("YGB");
		for(var i = 0; i < ygbClothes.length; i++) {
			if(document.forms['categories'].yellowGreenBlue.checked) {
				ygbClothes[i].style.display = "inline-table";
			}
			else {
				ygbClothes[i].style.display = "none";
			}
		}
		
		var bbmClothes = document.getElementsByClassName("BBM");
		for(var i = 0; i < bbmClothes.length; i++) {
			if(document.forms['categories'].blackBrownOther.checked) {
				bbmClothes[i].style.display = "inline-table";
			}
			else {
				bbmClothes[i].style.display = "none";
			}
		}
		
		if(document.forms['categories'].blackBrownOther.checked == false &&
		document.forms['categories'].redOrangePink.checked == false &&
		document.forms['categories'].yellowGreenBlue.checked == false) {
			for(var i = 0; i < bbmClothes.length; i++) {
				bbmClothes[i].style.display = "inline-table";
			}
			for(var i = 0; i < ygbClothes.length; i++) {
				ygbClothes[i].style.display = "inline-table";
			}
			
			for(var i = 0; i < ropClothes.length; i++) {
				ropClothes[i].style.display = "inline-table";
			}
		}
	}
	addBuyButtons();
	cartNumbers();