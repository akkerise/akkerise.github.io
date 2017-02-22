var oneVariables;
function onLoadFunction(){
	var twoVariables = document.getElementById("inputTxt").value;
	oneVariables = twoVariables.split("").reverse();
}
function reverseFunction() {
	onLoadFunction();
		for (var i = 0; i < oneVariables.length ; i++) {
			document.getElementById("h1Changed").innerHTML = oneVariables;
		}	
}