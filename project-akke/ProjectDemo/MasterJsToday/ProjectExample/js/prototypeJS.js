var oneVariables;


function onLoadFunction(){
	oneVariables = twoVariables.split("").reverse();
	var twoVariables = document.getElementById("inputTxt").value;

	oneVariables = twoVariables;
}

function onClickFunction(){
	onLoadFunction();
	document.getElementById("h1Changed").innerHTML = oneVariables;
}
var player1 = new prototypeFunction("Thanh","26","Male",50,"Dong Da");

function prototypeFunction(name , age , gender , strength , address){
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.strength = strength;
	this.address = address;
}

var reverseStr = "";

function reverseFunction() {
	onLoadFunction();
	for (var i = 0; i < oneVariables.length; i++) {
			document.getElementById("h1Changed").innerHTML = oneVariables[i] + "";
		}
}
