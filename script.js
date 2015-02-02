var show = function(id, id2){
	document.getElementById('knowledge').style.display = "none";
	$(document.getElementById('kn')).removeClass('active');
	document.getElementById('portfolio').style.display = "none";
	$(document.getElementById('pr')).removeClass('active');
	document.getElementById('education-experience').style.display = "none";
	$(document.getElementById('ed')).removeClass('active');
	document.getElementById('contact').style.display = "none";
	$(document.getElementById('cn')).removeClass('active');
	document.getElementById('about').style.display = "none";
	$(document.getElementById('ab')).removeClass('active');
	
	
	document.getElementById(id).style.display = "block";
	$(document.getElementById(id2)).addClass('active');
	
}	