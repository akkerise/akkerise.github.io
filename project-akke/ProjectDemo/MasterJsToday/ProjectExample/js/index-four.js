/*var teacher = {
	firstname: "Thanh",
	lastname: "Nguyen",
	age: 28,
	say: function(){
		aboutMe(this.firstname,this.lastname,this.age);
	}
}

var aboutMe = function(firstName , lastName , myAge){
	document.getElementById("pChanged").innerHTML = "Ten toi la " + firstName + " " + lastName + " . Tuoi cua toi la: " + myAge;
}*/


var prototypeFunction(name , age , address){
	this.iName = name;
	this.iAge = age;
	this.iAddress = address;
	this.iproperty = function(){
		return "Tên tôi là : " + name;
	}
}
var myFather = new prototypeFunction("Thanh",28, "Dong Da - Vinh Yen - Vinh Phuc");

function onClickFunction(){

document.getElementById("pChanged").innerHTML = "My father is : " + myFather.name;

}