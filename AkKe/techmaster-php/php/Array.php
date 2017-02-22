<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test PHP</title>
</head>
<body>
<?php


/* Đây là cách khai báo và sử dụng foreach với array
    $color = array("red", "green", "blue", "yellow");
    $grey = ["red","blue","fix","fetch"];
    foreach ($color as $value) {
        echo "$value <br>";
    }
    foreach ($grey as $value){
        echo "$value <br>";
    }
*/
function somePeople($fName, $fAge)
{
    echo "My name is : $fName . I $fAge years old ! <br>";
}

/*
 * Cách sử dụng giống như ở trên chỉ khác nó đã mặc định biến truyền vào là $minheight = 50.
 * Nhưng nếu ta sử dụng như setHeight(400) thì kết quả in ra màn hình sẽ thay đổi theo giá trị truyền vào !
    function setHeight($minheight = 50) {
        echo "The height is : $minheight <br>";
    }
*/

somePeople("Thanh", 26);
somePeople("Nguyen", 50);
somePeople("Tasfs", 32);
somePeople("Tea", 340);

echo "<br>";
echo "<br>";
echo "<br>";

/* Mảng 1 chiều - Array Indexed */
$color = array("red", "green", "blue", "yellow"); /* Mảng 1 chiều - Array Indexed */
$arrlength = count($color); // Tương tự giống phương thức của bên JavaScript dạng "arr.length" like same "count($arr)" (Get The Length of an Array - The count() Function)
for ($x = 0; $x < $arrlength; $x++) {
    echo $color[$x];
    echo "<br>";
}

echo "<br>";
echo "<br>";
echo "<br>";

/* Mảng kết hợp - Associative Arrays */
$age = array("Thanh" => "26", "John" => "70", "Fed" => "60", "Fok" => "30"); /* Mảng kết hợp - Associative Arrays */

echo $age["Thanh"] . "<br>";
echo $age["John"] . "<br>";
echo $age["Fed"] . "<br>";
echo $age["Fok"] . "<br>";

echo "<br>";
echo "<br>";
echo "<br>";
/* Mảng đa chiều - Associative Arrays */
$cars = array(
    array("Fed", 22, 40),
    array("Fod", 43, 65),
    array("Fid", 23, 35),
    array("Feen", 45, 78)
);
echo $cars[0][0] . " and " . $cars[0][1] . "years old ." . " ... I sleeped with " . $cars[0][2] . "girls !";
// echo $cars[1[0].": In stock: ".$cars[1][1].", sold: ".$cars[1][2].".<br>";
echo "<br>";
echo "<br>";
echo "<br>";

/* Khai báo mảng đa chiều bằng 2 vòng lặp for */
for ($row = 0; $row < 4; $row++) {
    echo "<p><b>Row is : $row </b></p>";
    echo "<ul>";
    for ($col = 0; $col < 3; $col++) {
        echo "<li>" . $cars[$row][$col] . "</li>";
    }
    echo "<ul>";
}


/* XỬ LÝ MẢNG */

$arrOne = array(1, 2, 3, 5, 6 , 2 , 5 , 3 , 2 , 5 , 6);
$arrTwo = array("WIFE" => "fear vcl",1, 2, 5, 7, 3, "what", "where");
$arrThree = array('one1' => 'mot1', 'two' => 'hai');
$arrFour =  array('one2' => 'mot2', '2' => '102');
$arrFive = array(1,2,4,7,8,);
$arrSix = array(99,100,101,102,103);

// array_diff() ==? So sánh 2 mảng với nhau
$sosanh2mang = array_diff($arrTwo, $arrOne);     // array_diff(mảng bị đem so sánh , mảng nguyên mẫu) ==> output ra những giá trị mà mảng so sánh không giống mảng nguyên mẫu
var_dump($sosanh2mang);
echo "<br>";
print_r($sosanh2mang);
echo "<br>";
echo "<br>";
echo "<br>";

// array_change_key_case()  thường dùng cho mảng 2 chiều

$fixKey_UPPER = array_change_key_case($arrOne,CASE_UPPER);
var_dump($fixKey_UPPER);
echo "<br>";
$fixKey_lower = array_change_key_case($arrTwo); // <=> array_change_key_case($arrTwo, CASE_LOWER); . Mặc định không để giá trị thì hàm tự chuyển key value của array thành LOWER
var_dump($fixKey_lower);


echo "<br>";
echo "<br>";
echo "<br>";

// array_diff_key()
var_dump(array_diff_key($arrThree,$arrFour));   // array_diff_key(mảng bị đem so sánh , mảng nguyên mẫu) ==> output ra những giá trị mà mảng so sánh không giống mảng nguyên mẫu


echo "<br>";
echo "<br>";
echo "<br>";

// array_count_values()

    var_dump(array_count_values($arrOne));      // array_count_values => đếm và gộp số phần tử trùng lặp trong mảng
    echo "<br>";
    // array_dump(array_count_values($arrTwo));
    echo "<br>";

echo "<br>";
echo "<br>";
echo "<br>";

//  array_combine()

$arr_combine1 = array_combine($arrFive,$arrSix);     // array_combine($keys ,$value) . Gộp hai mảng 1 chiều thành một mảng 2 chiều
$arr_combine2 = array_combine($arrThree,$arrFour);   // array_combine($keys ,$value) . Gộp hai mảng 2 chiều thành một mảng 2 chiều mới
var_dump($arr_combine1);
echo "<br>";
var_dump($arr_combine2);
?>
</body>
</html>