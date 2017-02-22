/*document.getElementById("circle").onclick = function(){

	document.getElementById("circle").style.display="none";

}*/

var score = 0;
var numberArray = [0, 1, 2, -3, 4, 5, 6];
var stringArray = ["a", "b", "z", "d"];
var awesomeArray = ["Mamoth Interactive", 123];
var playerName0 = "Mamoth Interactive",
    playerName1 = "Bimmy";

function myAwesomeFunction() {
    passVariable(playerName0,playerName1);

    //var temVariable = 130;
    //document.getElementById("pChanged").innerHTML = passVariable(stringArray);
    //anotherFunction();

}

function anotherFunction() {

    /*
    numberArray.push(88, 11, 123456);
    mảng.push() : thêm những phần tử mới vào khóa key tiếp theo của mảng đã được chỉ định !
    */
    document.getElementById("pChanged").innerHTML = stringArray.length;
}

function resetTheApp() {
    score = 0;
    playerName = "Mamoth Interactive";
    document.getElementById("h1Changed").innerHTML = "This is JavaScript";
    document.getElementById("pChanged").innerHTML = "Changed this text please!"
}

function secondFunction(){
}
/*
function passVariable(variableToPass1, variableToPass2){
	document.getElementById("h1Changed").innerHTML = "Variable Passed 1 : " + variableToPass1  +  " -   Variable Passed 2 : " + variableToPass2;
}
// Đây là dạng hàm khai báo chính giá trị của nó , hay còn gọi là hàm Variable Scope
*/
