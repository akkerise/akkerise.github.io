// Tính bình phương
function tinhBinhPhuong(n){
    return n*n;
}

// Tính bình phương của 3a+2b-c
function tinhBinhPhuong3So(a,b,c){
    return (3*a + 2*b -c) * (3*a + 2*b -c);
}

// Cắt chuỗi 10 ký tự đầu tiên của chuỗi 100 ký tự
function cat10KyTuCuaChuoi(){
    let str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ';
    return str.slice(-10,-1);
}

// Biến chuỗi thành viết hoa từ đầu tiên
let str = 'welcome to Tech';
function stringUpper(str){
    str = str.toLowerCase();
    // slice(start,end); // tham số truyền vào là số âm thì sẽ cắt từ cuối dãy trở về trước
    // slice(-10) // lấy từ cuối trở về vị trí âm số -10
    // slice(-10,-1) // lấy từ cuối trở về vị trí âm -1
    strUpper = str.slice(0,1).toUpperCase(); // cắt phần tử đầu tiên của chuỗi được cho vào hàm
    // substring(start,end); giống hàm slice() nhưng tham số phải luôn lớn hơn 0
    // substr(start,length);
    // replace(str_find,str_replace);
    // str.concat('fucn' , 'feck')
    // charAt(); Xem ký tự của 1 vị trí nào đó trong chuỗi
    // charCodeAt(); Xem ký tự của 1 vị trí nào đó trong chuỗi mã ASCII
    // split(); Chuyển đổi chuỗi sang mảng
    // pop(); xóa vị trí cuối cùng của chuỗi
    // push(); đẩy thêm 1 giá trị vào vị trí cuối cùng của chuỗi hoặc dãy
    // shift(); xóa phần tử đầu tiên của chuỗi
    // unshift(); đẩy thêm 1 giá trị vào vị trí đầu tiên của chuỗi
    strLower = str.substring(1); // lấy chuỗi còn lại từ phần tử đầu tiên trở đi
   	return strUpper + strLower;
   	// return str.slice(-10);
}

function findLowerNumberInArr(){
	let arr = [3,6,4,5,7];
	lowerNumber = arr.sort().slice(0,1);
	return lowerNumber;
}

function sortNameInArr(){
	let arr = ['Nam' , 'Thanh' , 'Wel' , 'Duong'];
	return arr.sort();
}

var teacher = {
	name: 'Kim',
	age: 25,
	say: function(){
		
	}
}
var student = {
	name: 'Thanh',
	age: 26,
	say: function(){}
}
var parent = {
	name: 'Thu',
	age: 60,
	say: function(){}
}
var aboutMe = function(){
	return console.log('Tôi tên là : ' + this.name + ' . Năm nay tôi: ' + this.age + ' tuổi');
}
teacher.say = aboutMe;
student.say = aboutMe;
parent.say = aboutMe;
teacher.say();
student.say();
parent.say();