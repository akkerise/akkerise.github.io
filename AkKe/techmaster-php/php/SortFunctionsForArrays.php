<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Sort Functions For Arrays</title>
</head>
<body>
<?php
	$numbers =  array(4,4,5,6,6,7);
	$arr = array("Fix"=>"60" ,"Cetch"=>"89" , "Erm"=>"20");
//    sort($numbers); 	// Sắp xếp giá trị trong mảng tăng dần.
	 rsort($numbers); // Sắp xếp giá trị trong mảng giảm dần.



	$arrValues = count($numbers);
	for ($x = 0 ; $x < $arrValues ; $x++){
	echo $numbers[$x] . " ";
}

	echo "<br>";

//	asort($arr); 	/* Sắp xếp dựa trên value theo thứ tự nhỏ nhất đến lớn nhất 	*/
//	arsort($arr); 	/* NGƯỢC LẠI VỚI asort() */
//	ksort($arr); 	/* Sắp xếp dựa trên key theo thứ tự nhỏ nhất đến lớn nhất		*/
//	krsort($arr); 	/* NGƯỢC LẠI VỚI ksort() */

	foreach ($arr as $x => $x_value){
		echo "Key is : " . $x . " . Value is : " . $x_value . "<br>";
	}


?>
</body>
</html>