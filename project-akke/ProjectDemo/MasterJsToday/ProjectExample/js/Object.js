var firstObject = {
	name: "What the hell ???",
	level: 26,
	str: "I'm Alone.",
	objFunction: function(){
		document.write(this.level + " : " + this.name);
	}
}
var txtInputVariable = "";
function firstOnClick() {
	var obName =  document.write("My name is: " + firstObject.name + " , and age is : " + firstObject.level);
	document.getElementById("pChanged").innerHTML = obName;
}

function onloadFunction(){
	var txtInput = parseInt(document.getElementById("inputTxt").value);
	txtVariables = txtInput;
}



function functionInputTxt(){
	onloadFunction();
	//document.getElementById("pChanged").innerHTML = txtVariables;
	//var numberInt = (Math.floor(Math.random() * 10));

	/*
		Thuộc tính math.ceil() là làm tròn số thực lên 1 đơn vị nếu có phần dư sau dấu phẩy .

		Thuộc tính math.floor() loại bỏ hết các số đằng sau kể từ chữ số ban đầu.
		Vd:
		Math.floor( 45.95); //  45
		Math.floor(-45.95); // -46
	*/
<<<<<<< HEAD
	document.getElementById("h1Changed").innerHTML = screen.width + "x" + screen.height;

	/*
		screen.width - screen.height : là chiều rộng và chiều cao của màn hình hiển thị có sẵn
		screen.pixelDepth - screen.colorDepth : độ chi tiết tính theo pixel và màu hiển thị tính theo bit

		window.innerWidth + window.innerHeight : là chiều rộng và chiều cao tính theo màn hình gõ code có thể thay đổi . 

	*/
	//document.getElementById("pChanged").innerHTML = numberInt;
=======
	/*
		var myNumber = 19564.556

 		console.log("Lấy giá trị tuyệt đối của myNumber: " + Math.abs(myNumber));
 		console.log("Làm tròn số myNumber: " + Math.round(myNumber)); // 1.5 -> 2 , 0.4 -> 0
		console.log("Làm tròn lên số myNumber: " + Math.ceil(myNumber));
		console.log("Làm tròn xuống số myNumber: " + Math.floor(myNumber));
		console.log("Trả về logarit của myNumber: " + Math.log(myNumber));
		console.log("Trả về căn bậc hai của myNumber: " + Math.sqrt(myNumber));
		L
    */
    var someDate = new Date();
    someDate.setFullYear(2018,0,14) // someDate.setFullYear(year,month,day);
	document.getElementById("pChanged").innerHTML = someDate;
>>>>>>> 74173a386d11cfbad65e45adcdf30f49ca72d87e
}
