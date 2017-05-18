function testDOM(){
	document.getElementById("h1Content").innerHTML = "What the fuck";
	console.log(h1Content.value);
	var element = document.querySelectorAll('div#testDOM div#testChild');
	return console.log(element.innerHTML);
}