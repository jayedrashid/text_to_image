document.querySelector(".txtToBePrintedAsImage").focus();

function print() {
	var txt = document.querySelector(".txtToBePrintedAsImage").value; 
	
	document.querySelector(".dummydiv").innerText = txt;
	var cw = document.querySelector(".dummydiv").offsetWidth;
	var ch = document.querySelector(".dummydiv").offsetHeight;
	var canvas = document.querySelector(".cnvs"); 
	
	canvas.style.width = cw + 10 + "px";
	canvas.style.height = ch + 10 + "px";
	canvas.width = cw + 10;
	canvas.height = ch + 10;
	
	var context = canvas.getContext("2d"); 
	
	context.font = "15px Verdana";
	context.fillStyle = "transparent";
	context.fillRect(0, 0, cw + 10, ch + 10);
	context.fillStyle = "black";
	context.fillText(txt, 5, 16);
	
	// var dataURL = canvas.toDataURL("image/png"); 
	// document.getElementById("img").src = dataURL;

}

