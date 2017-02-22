<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test</title>
</head>
<body>
<?php
//    $arr1 = ['KEY' => 'abs',
//            'abc'  => '123',
//            'def'  => '456'];
//    $arr2 = ['say' => 'fix',
//            'abc'  => '123',
//            'def'  => '456'];
//    $arr3 = array_change_key_case($arr2,CASE_UPPER);
//    var_dump(array_change_key_case($arr1));             // mặc định là đưa key về dạng lower
//    echo "<br>";
//    var_dump($arr3);                                    // in hoa key
//    $arr4 = array_diff_key($arr1,$arr2);                //array_diff_key(biến cần so sánh , biến nguyên mẫu)
//    echo "<br>";
//    var_dump($arr4);
//    echo "<br>";
//    echo array_count_values($arr2);

//    $arr6 = [1,23,5,6,7,"nam","string","thanh"];
//    function check_event($x){
//        if(is_numeric($x)){
//            return true;
//        }else{
//            return false;
//        }
//    }
//    var_dump(array_filter($arr6 , "check_event"));
//    echo "<br>";
//    var_dump(array_push($arr6,"Them phan tu vao vi tri cuoi cung cua mang"));
//    echo "<br>";
//    var_dump(array_shift($arr6));
//    echo "<br>";
//    var_dump(array_unshift($arr6, "Them phan tu vao vi tri dau tien cua mang"));

    $subject = "sadasdsf9889 dgdsjgh1451";
    $pattern = "/[a-zA-Z]{6,32}/";
    if (preg_match_all($pattern,$subject,$match)){
            echo "Found";
        }else{
            echo "Not found";
        }
    echo "<br>";
    var_dump($match);

?>
</body>
</html>