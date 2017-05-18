var number = document.getElementsByClassName('number');
var result = document.getElementById('result');
var calculation = document.getElementsByClassName('calculation');
var outcome = document.getElementById('outcome');
var clear = document.getElementById('clear');
var clearOne = document.getElementById('clearOne');
var mPlus = document.getElementById('mPlus');
var mMinus = document.getElementById('mMinus');
var mShow = document.getElementById('mShow');
var mClear = document.getElementById('mClear');
var percent = document.getElementById('percent');
var dot = document.getElementById('dot');
var bp = document.getElementById('bp');
var gt = document.getElementById('gt');
var mGeneral = document.getElementsByClassName('mGeneral');
var trash = document.getElementById('trash');
// Clear
clear.addEventListener('click',function(){
	result.value = "";
});
clearOne.addEventListener('click',function(){
	let str = result.value.slice(0,length-1);
	result.value = str;
})
for (var i = 0; i < number.length; i++) {
	number[i].addEventListener('click',function(){
		result.value += this.value;
	});
}
for (var i = 0; i < calculation.length; i++) {
	calculation[i].addEventListener('click',function(){
		var pa1 = result.value + this.value;
		result.value = "";
		outcome.addEventListener('click',function(){
			var pa2 = pa1 + result.value;
			if (pa2.charAt(0) == "0" || pa2.charAt(0) == 0) {
				pa2 = pa2.substring(1);
				result.value = eval(pa2);
			}
			// console.log(pa2);
			trash.innerHTML = pa2;
			result.value = eval(pa2);
		});
	});
}
var kk = "";
for (var i = 0; i < mGeneral.length; i++) {
	mGeneral[i].addEventListener('click',function(){
		if (this.value == "M+") {
			var dd = result.value;
			if (kk !== "") {
				kk = kk + "+" + result.value;
			}else{
				kk = dd + "+" + result.value;
			}
		}
		if (this.value == "M-") {
			var ee = result.value;
			if (kk !== "") {
				kk = kk + "-" + result.value;
			}else{
				kk = ee + "-" + result.value;
			}
		}
		if (this.value == "MR") {
			if (kk == "") {
				result.value = "";
			}else{
				result.value = eval(kk);
			}
		}
		if (this.value == "MC") {
			kk = "0";
		}
	});
}
dot.addEventListener('click',function () {
	result.value += ".";
});
percent.addEventListener('click',function(){
	result.value = "Not Logic";
});
bp.addEventListener('click',function(){
	var bp = result.value + "*" + result.value;
	result.value = eval(bp);
});
gt.addEventListener('click',function(){
	result.value = giaithua(result.value);
});
function giaithua(n){
		if (n == "0" || n == "1" || n == 1 || n == 0) {
			return 1;
		}else{
			let kq = 1;
			for (var i = 1; i <= n; i++) {
				kq = kq*i;
			}
			return kq;
		}
	}
// mPlus.addEventListener('click',function(){
// 	var dd = result.value;
// 	if (kk !== "") {
// 		kk = kk + "+" + result.value;
// 		console.log(kk);
// 	}else{
// 		kk = dd + "+" + result.value;
// 		console.log(kk);
// 	}
// });
// mMinus.addEventListener('click',function(){
// 	var ee = result.value;
// 	if (kk !== "") {
// 		kk = kk + "-" + result.value;
// 		console.log(kk);
// 	}else{
// 		kk = ee + "-" + result.value;
// 		console.log(kk);
// 	}
// });
// mShow.addEventListener('click',function(){

// });
// mClear.addEventListener('click',function(){
// 	kk = "";
// });
