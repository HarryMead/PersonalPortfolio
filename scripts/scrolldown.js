function dotsFlash() {
	setTimeout(function(){ document.getElementById("loading-dot1").style.opacity = "1"; }, 0);
	setTimeout(function(){ document.getElementById("loading-dot2").style.opacity = "1"; }, 500);
	setTimeout(function(){ document.getElementById("loading-dot3").style.opacity = "1"; }, 1000);
	setTimeout(function(){ document.getElementById("loading-dot1").style.opacity = "0"; }, 1500);
	setTimeout(function(){ document.getElementById("loading-dot2").style.opacity = "0"; }, 1500);
	setTimeout(function(){ document.getElementById("loading-dot3").style.opacity = "0"; }, 1500);
}

function rotatingLanguage() {
	var languages = document.getElementsByName("my-languages").childNodes;
	console.log(languages);
	for(var i = 0; i < languages.length; i++) {
		console.log("activated");
		console.log(languages[i]);
	}
}

setInterval(dotsFlash, 2000);
rotatingLanguage();