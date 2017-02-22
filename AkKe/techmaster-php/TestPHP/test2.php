

//<?php
//    $str = "1321 j 4 o 1 i 4139481 dkfkjdskgjkrs sdfgjdsgj dsfjkgds j";
//    $arr = [123 ,456 , 789];
//
//    echo strlen($str);
//    echo "<br>";                            // ==> return 50 ký tự
//    echo str_word_count($str);              // ==> return 7  chữ
//    echo "<br>";
//    echo strip_tags("<b>Thanh E</b>");      // ==> (return Thanh E) ; trả về nội dung của chuỗi không kèm theo thẻ tag element (nếu có)
//    echo "<br>";
//    echo substr($str, 2, 10);               // ==> return 21 j 4 o 1
//    echo "<br>";
//    echo strstr($str,"41");
//?>

<?php
/**
 * Created by PhpStorm.
 * User: luongpham
 * Date: 7/18/16
 * Time: 2:37 PM
 */

//string function

$str = "123dsd23423432";

$str_2 = "bla bla bla bla";


echo "</br>";
// đầu tiên là hàm "echo" in ra màn hình
echo $str_2;

echo "</br>";
// hàm explode: Chuyển chuỗi thành 1 mảng
echo  var_dump(explode(" ",str_2));
// var_dump trả về kiểu dữ liệu của phần tử chỉ định
$str_3 = explode(" ",str_2);


echo "</br>";
// hàm implode: nối chuỗi bằng ký tự viết ở khoảng phía trước
$str_4 = implode(" ", $str_3);
echo $str_4;


echo "</br>";
//strlen : đếm độ dài chuỗi
echo strlen(($str_2));

echo "</br>";
//str_word_count : đếm chữ trong chuỗi "không tính số"
echo  str_word_count($str_2);

echo "</br>";
// Đảo ngược chuỗi
echo strrev("Hello world!"); // outputs !dlrow olleH

echo "</br>";
//strpos(): chỉ ra vị trí của từ trong chuỗi
echo strpos($str_3, "rat");

//echo str_replace("world", "Dolly", "Hello world!"); // outputs Hello Dolly!

/* CONSTANT */
    // case-sensitive constant name
    define("GREETING", "Welcome to W3Schools.com!");
    echo GREETING;  // output Welcome to W3Schools.com!
    echo "</br>";
    define("GREETING", "Welcome to W3Schools.com!", true);
    echo greeting;  // output Welcome to W3Schools.com!
    echo "</br>";
    function myTest() {
        echo GREETING;
    }

    myTest();       // output Welcome to W3Schools.com!
/* END CONSTANT */

echo "</br>";
//htmlentities() hiển thị html, tagname thẻ ký tự đặc biệt ra giá trị
echo "<b>Luong</b>";
echo htmlentities("<b>Luong</b>");


echo "</br>";

//html_entity_decode: ngược lại hàm htmlentities
echo html_entity_decode();


//  PHÉP LŨY THỪA TRONG PHP : $x ** $y

echo "</br>";

//strig_tags(): chỉ hiện thị nội dung thẻ ko hiện thị giá trị thẻ

echo strip_tags("<b>Luong</b>");

//VD sẽ chỉ hiện thị Luong mà ko in đậm của thẻ <b> nữa


echo "</br>";
//substr: cắt chuỗi từ vị trí nào, giống slice() trong javascript, nhận giá trị là số
echo substr($str, 2, 4);

echo "</br>";
//strstr: cắt chuỗi giống như trên nhưng nhận giá trị là chữ
echo strstr($str_2,"bl");        // mặc định là false nên nó sẽ bắt đầu cắt từ vị trí đó đến cuối
echo strstr($str_2,"bl", true);  // cắt từ đấu đến vị trí đây
echo strstr($str_2,"bl", false); // cắt từ vị trí ấy đến cuối

echo "</br>";
//(UpperCase)ucfirst: viết hoa ký tự đầu tiên   (LowerCase)lcfirst: viết thường ký tụ đầu tiên
echo "</br>";
echo ucfirst($str_2). "và" . $str_2;
echo "</br>";
echo lcfirst($str). "và" . $str;




echo "</br>";
//ucwords() viết hoa chữ đầu tiên của mỗi chữ trong chuỗi
echo ucwords($str_2). "và" .$str_2;    // ==> "quai la the nay" ===> return "Quai La The Nay"



echo "</br>";
//trim() bỏ dấu cách hai bên của chuỗi ; ===> " quaiasldka "    ===> return "quaiasldka"
// ltrim(): bên trái    // ===> " quaiasldka "  return "quaiasldka "
// rtrim(): bên phải    // ===> " quaiasldka "  return " quaiasldka"


echo "</br>";
//json_encode(): biến dữ liệu code sang kiểu json;  json_decode(): ngược lại
//json là chuẩn định dạng, trung gian giao tiếp giữa các ngôn ngữ lập trình







echo "</br>";
//md5(str): mã hóa string, sha(): cũng cậy
