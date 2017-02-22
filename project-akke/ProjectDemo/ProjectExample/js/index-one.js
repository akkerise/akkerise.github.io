var firstVariables = [0,1,2,-3,4,5,6];
var secondVariables = ["a" , "b" , "s" , "d"];
var thirdVariables = ["What","Sorry"];
function firstFunction(){
	/*
	// Thuộc tính length của function có tác dụng đếm số phần tử trong 1 mảng :
	document.getElementById("pChanged").innerHTML = firstVariables.length;
	*/

	/*
	// Thuộc tính reverse() liệt kê đảo ngược các phần tử có trong mảng :
	document.getElementById("pChanged").innerHTML = secondVariables.reverse();
	*/
	
	
	/*
	// Thuộc tính concat() liệt kê các phần tử trong mảng được chỉ định làm mốc và các thành phần trong mảng ở trong .concat() được liệt kê nối tiếp.
	var combinedArrays = firstVariables.concat(secondVariables,thirdVariables);
	document.getElementById("pChanged").innerHTML = combinedArrays;*/
	

	/*
	// Thuộc tính join() gán các phần tử của mảng trong join() vào các khóa của mảng được chỉ định 
	var joinedArrays = firstVariables.join(thirdVariables);
	document.getElementById("pChanged").innerHTML = joinedArrays;*/
	

	/*// Thuộc tính sort() sắp xếp lại các phần tử từ nhỏ đến lớn và trả về 1 mảng mới .
	document.getElementById("pChanged").innerHTML = firstVariables.sort();*/

	/*
	**Chú ý: tại sao ở trên thuộc tính sort() được quy định là sẽ trả về 1 mảng mới và các phần tử được sắp xếp từ nhỏ đến lớn
	-	Tại sao mảng này lại được kê khai thành 1 mảng mới với các thứ tự phần tử được sắp xếp từ lớn đến nhỏ ?
	-	Thuộc tính này giống thuộc tính mảng.reverse()
	document.getElementById("pChanged").innerHTML = firstVariables.sort(function(a,b){
		return b-a 	
	})*/
	

	/*var combinedArrays = firstVariables.push(secondVariables);
	document.getElementById("pChanged").innerHTML = combinedArrays;*/


	// Thuộc tính splice(vị trí khóa key để thêm phần tử vào mảng, xóa phần tử trong mảng từ vị trí thứ 0 (giá trị 4 thì sẽ xóa key [0],[1],[2],[3]) , giá trị thêm hoặc thay thế , giá trị thêm hoặc thay thế... )
	firstVariables.splice(0,6,"a","b","c");
	document.getElementById("pChanged").innerHTML = firstVariables;
}	
