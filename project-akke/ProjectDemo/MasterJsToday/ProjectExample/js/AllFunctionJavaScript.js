var firstVariables = [0,1,2,-3,4,5,6];
var secondVariables = ["a" , "b" , "s" , "d" , "s"];
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
	

	/*
	// Chú ý : Chức năng khá giống với thuộc tính concat() nên cần tìm hiểu để phần biệt rõ !
	var combinedArrays = firstVariables.push(secondVariables);
	document.getElementById("pChanged").innerHTML = combinedArrays;*/


	/*
    // Thuộc tính splice(vị trí khóa key để thêm phần tử vào mảng, xóa phần tử trong mảng từ vị trí thứ 0 (giá trị 4 thì sẽ xóa key [0],[1],[2],[3]) , giá trị thêm hoặc thay thế , giá trị thêm hoặc thay thế... )
	firstVariables.splice(0,6,"a","b","c");
	document.getElementById("pChanged").innerHTML = firstVariables;
    */


    /*
    // Thuộc tính toString() sẽ chuyển tất cả các phần tử trong 1 mảng thành các ký tự dạng chuỗi
    ** Chú ý : nên đọc lại để hiểu rõ hơn về phương thức của thuộc tính này
    document.getElementById.("pChanged").innerHTML = firstVariables.toString();
    */


    /*
    // Thuộc tính lastIndexOf(x) giúp chúng ta xác định đây là phần tử thứ mấy trong mảng . Trong đó x là giá trị của phần tử cần xác định !
    ** Giá trị mặc định khi sai là -1 ,
    ** Trong mảng mà có 2 phần tử giá trị như nhau nằm ở vị trí khóa key khác nhau thì thuộc tính lastIndexOf(x) sẽ tự động lấy giá trị sau cùng và trả về khóa key tương ứng !  
    
    document.getElementById("pChanged").innerHTML = firstVariables.lastIndexOf(-3);
    document.getElementById("pChanged").innerHTML = thirdVariables.lastIndexOf("t"); // -1
    */
    

    
	/*
	// Thuộc tính unshift(x) sẽ thêm những phần tử con x vào đầu của mảng và giữ chúng ở đấy rồi trả về tổng số phần tử mới có trong mảng !
	document.getElementById("pChanged").innerHTML = firstVariables.unshift("456", 78); 
	// return : 9 */
	/*
	// Thuộc tính unshift(x) được gán cho 1 biến trước khi dùng lệnh liệt kê ra màn hình sẽ trả về 1 mảng mới chứa những phần tử được thêm vào đầu của mảng cũ !
	firstVariables.unshift("456" ,78);
    document.getElementById("pChanged").innerHTML = firstVariables;
    // return : 456,78,0,1,2,-3,4,5,6 */
    


    /*
		var myNumber = 19564.556
 
		console.log("Lấy giá trị tuyệt đối của myNumber: " + Math.abs(myNumber));
		console.log("Làm tròn lên số myNumber: " + Math.ceil(myNumber));
		console.log("Làm tròn xuống số myNumber: " + Math.floor(myNumber));
		console.log("Trả về logarit của myNumber: " + Math.log(myNumber));
		console.log("Trả về căn bậc hai của myNumber: " + Math.sqrt(myNumber));
    */
}