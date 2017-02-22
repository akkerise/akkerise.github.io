var score = 1;

var playerName = "Nguyen Thanh";

var firstArr = ["Toi" , "thanh" , "cong"];
var numberArr = [0,1,2,3,4,5,6];

function one() {
    passVariable(playerName, score);
}

function two() {
    document.getElementById("h1Changed").innerHTML = "This is JavaScript";
}

function passVariable(variableToPass1, variableToPass2) {
    document.getElementById("h1Changed").innerHTML = "Variable Passed 1 : " + variableToPass1 + " - Variable Passed 2: " + variableToPass2;
}

function resetApp(){
	document.getElementById("h1Changed").innerHTML = "This is JavaScript";
}

function reverseApp(){
	document.getElementById("pChanged").innerHTML = firstArr.reverse();
}

function anotherFunction(){
	var combinedArr = numberArr.concat(firstArr,playerName);
	/* Định dạng thuộc tính concat() nối các mảng array với nhau
	trong () là các chuỗi hoặc các biến được nối tiếp vào mảng ưu tiên :
	VD : numberArr.concat(firstArr,playerName)
	- numberArr là mảng ưu tiên.
	- firstArr là mảng phụ được chỉ định để nối tiếp vào mảng ưu tiên.
	- playerName được coi là biến được nối vào sau mảng firstArr
	*) Lưu ý : Cũng có thể dùng 1 mảng khác để thay nối tiếp thay cho biến playerName
	*/
	var joinedArr = numberArr.join(playerName);
	/* Định dạng thuộc tính join sẽ thêm biến hoặc mảng vào mỗi khóa key của mảng được coi là chủ đích */
	document.getElementById("pChanged").innerHTML = joinedArr;
	

}

