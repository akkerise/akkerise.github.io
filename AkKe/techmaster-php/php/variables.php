<?php
/**
 * Created by PhpStorm.
 * User: nguyenthanh
 * Date: 7/20/16
 * Time: 15:54
 */


    /* KIỂM TRA KIỂU DỮ LIỆU CỦA BIẾN */
    $var = "123dss";

    echo "boolva : ";
    var_dump(boolval($var));
    echo "<br>";

    //    is_integer
    echo "is_intege : ";
    var_dump(is_integer($var));
    echo "<br>";


    //    is_float
    echo "is_floa : ";
    var_dump(is_float($var));
    echo "<br>";


    //    is_long
    echo "is_long : ";
    var_dump(is_long($var));
    echo "<br>";


    //    is_scalar
    echo "is_scalar : ";
    var_dump(is_scalar($var));
    echo "<br>";


    //    is_numeric
    echo "is_numeric : ";
    var_dump(is_numeric($var));
    echo "<br>";


    //    is_null
    echo "is_null : ";
    var_dump(is_null($var));
    echo "<br>";


    //    is_object
    echo "is_object : ";
    var_dump(is_object($var));
    echo "<br>";


    //    is_string
    echo "is_string : ";
    var_dump(is_string($var));
    echo "<br>";


    /* KIỂM TRA XEM CÓ TỒN TẠI */

    if(isset($dkmvar)){
        echo "Found";
    }else
        echo "Not Found";
    echo "<br>";


    /* Hàm usort() */
    // function checkout() là hàm xác định số đứng sau có giá trị lớn hơn hay nhỏ hơn khi thao tác mảng
    function checkout($a , $b){
        if($a == $b) return 0;
        return ($a<$b)?-1:1;
    }
    /* Hàm usort() giống hàm sort() thường dùng để sắp xếp các phần tử trong mảng*/
    $ar = array(4,3,2,5,7);
    usort($ar , "checkout");
    $arrLength = count($ar);
    for ($x=0; $x < $arrLength ; $x++){
        echo $ar[$x];
        echo "<br>";
    }
    echo "<br>";
    // Hàm kiểm tra xem biến có rỗng hay không empty()
    /*
     * cố rỗng hay là không?
    Những thằng trả về true

    "" (chuỗi rỗng trả về true(1) khi thỏa mãn các điều kiện dưới )
    0 (0 as an integer)
    0.0 (0 as a float)
    "0" (0 as a string)
    NULL
    FALSE
    array() (mảng rỗng)
    $var; (biến khai báo những không có giá trị)
    */
    $testvar = empty($var);
    var_dump(gettype($testvar));         // output ==> 1 (true)
    echo "<br>";
    echo "<br>";

    $gettypevar = gettype($var);
    var_dump($gettypevar);               // output ==> string
    echo "<br>";
    echo "<br>";

    settype($var,"integer");        // lưu ý không được gán kết quả settype() sang biến khác vì nó sẽ không chấp nhận
    var_dump(gettype($var));             // output ==> Type of $var is "string" but when used setype() so type of $var update "numeric"
echo "<br>";
echo "<br>";

    // HÀM unset()
    /* hủy biến, Thường dùng để xóa session hay cookie.
    Nếu unset được gọi trong 1 function thì nó chỉ xóa biến trông function đó mà thôi.
    Muốn xỏa hẳn cần dùng unset($GLOBALS[$var]) */

    class Test
    {
        var $sValue = 'abc';

        function testing($objTest)
        {
            $objTest->sValue = '123';
        }
    }

    $obj = new Test();

    call_user_func(array($obj, 'testing'), $obj);

    var_dump($obj);

