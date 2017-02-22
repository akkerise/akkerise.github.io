var txtVariables = 0;
function onLoadFunction(){
	var txtVariablesTemp = parseInt(document.getElementById("txtInput").value);
	txtVariables = txtVariablesTemp;
}
function awesomeFunction(){
	onLoadFunction();
	if (txtVariables == 5) {
		document.getElementById("h1Changed").innerHTML = txtVariables;
	} else if (txtVariables == 10){
		document.getElementById("h1Changed").innerHTML = "Elseif statement worked 1 !";
	}
	else{
		document.getElementById("h1Changed").innerHTML = "Sorry No Equals";
	}
}
/*function intCheck(eventCheck){
	eventCheck = (eventCheck) ? eventCheck : window.event;
	var code = (eventCheck.wich) ? eventCheck.which : eventCheck.keyCode;

	if (code > 30 && (code <48 || code > 57)) {
		return false;
	}
		return true;
}*/


