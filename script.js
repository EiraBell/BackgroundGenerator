var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button");

changeColor();

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
button.addEventListener("click", randomColorBtn);

// convert rgb to hex (start)
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
// convert rgb to hex (end)


function randomColorBtn(){
	color1.value = randomColor();
	color2.value = randomColor();
	changeColor();	
}

function randomColor(){
var r =	Math.floor(Math.random() *256);
var g =	Math.floor(Math.random() *256);
var b =	Math.floor(Math.random() *256);
return rgbToHex(r, g, b);
//return "rgb(" + r + ", " + g + ", " + b +")";
}

function changeColor(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+", "
	+ color2.value 
	+" )";

	css.textContent = body.style.background + ";";
}

