// Bài 1 tính giai thừa
function tinhGiaiThua(n){
	if (n==0 || n==1) {
		return 1;
	}
	return n*tinhGiaiThua(n-1);
}

function tinhGiaiThuaForDown(n){
	if (n==0 || n==1) { return 1;}
	let giaithua = 1;
	for (var i = 1; i <= n; i++) {
		giaithua = giaithua*i;
	}
	return giaithua;
}

function tinhGiaiThuaForUp(n){
	if (n==0 || n==1) { return 1; }
	let giaithua = 1;
	for (var i = n; i >= 1; i--) {
		giaithua = giaithua*i;
	}
	return giaithua;
}

// console.log(tinhGiaiThuaForUp(5));

// Bài 2 : Viết hàm đảo ngược chuỗi
function lamDaoNguocChuoi(str = "hello"){
	return str.split("").reverse().join("");
}
// console.log(lamDaoNguocChuoi());

// Bài 3 : Duplicate chuỗi 10 lần và ngăn cách nhau bởi dấu "-"
function duplicate(str = '123'){
	str = str.split();
	for (var i = 0; i < 9; i++) {
		// str.unshift('123');
		str.push('123');
	}
	return str.join("-");
}
// console.log(duplicate());

// Bài 4 : Viết và sắp xếp lại mảng tên + stt
function sortNameInArr(arr = ['Nam' , 'Anh' , 'Wha' , 'Gem' , 'Not' ,'Ga']){
	arr.sort();
	let newArr = [];
	for (var i = 1; i < arr.length+1; i++) {
		newArr.push(i + '.' + arr[i-1]);
	}
	return document.write(newArr.join("<br>"));
}

// Bài 5 : Tăng gấp đôi giá trị có trong mảng
function gap2LanGiaTriTrongMang(arr = [1,3,4]){
	let newArr = [];
	for (var i = 0; i <= arr.length-1; i++) {
		newArr.push(arr[i] * 2);
	}
	return newArr;
}

// Bài 6 :
function newArrPercentFor2(arr = [1,3,6,7,8,4,2]){
	let newArr = [];
	for (var i = 0; i < arr.length; i++) {
		newArr.push(arr[i]%2);
	}
}
