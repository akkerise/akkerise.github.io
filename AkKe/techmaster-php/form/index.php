<?php session_start();

$host_name = 'localhost'; //
$user_name = 'root';
$pass_word = '';
$db_name = 'sinhvien';

$conn = new PDO("mysql:host=$host_name;dbname=$db_name",$user_name,$pass_word) or die("CMNR");

$sql = "SELECT * FROM techmaster";

$stmt = $conn->query($sql);

$stmt->execute();

$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

var_dump($result);

//echo "<pre>";
//    var_dump($result);
//echo "</pre>";

function check($arr){
    echo "<pre>";
    var_dump($arr);
    echo "</pre>";
}
//check($result[0]['username']);

// Viết function truyền username vs pasword search SQL



die();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Form</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet"
          integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossorigin="anonymous">
    <link href="assets/css/style.css" rel="stylesheet" type="text/css">
    <script src="https://code.jquery.com/jquery-2.2.4.js"
            integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>
    <script src="assets/js/script.js" type="text/javascript"></script>
</head>
<body>
<?php

//session_start();
//$user = array(
//    "user" => "nguyenthanh",
//    "pass" => "thisispass"
//);
//$pattern = '/^[a-zA-Z0-9]{6,32}$/';
//$pattern_email = '/[a-z][a-z0-9._]{2,31}@[a-z0-9-]{3,}(.[a-z]{2,4}){1,2}$/';
//if (isset($_POST['username']) && isset($_POST['password'])) {
//    if (preg_match($pattern, $_POST['username']) && preg_match($pattern, $_POST['password'])) {
//        if ($_POST['password']) {
//            echo "ĐĂNG KÝ THÀNH CÔNG !";
//            echo "<br>";
//            echo "TÀI KHOẢN : " . $_POST['username'];
//            echo "<br>";
//            echo "MẬT KHẨU : " . md5($_POST['password']);
//            echo "<br>";
//            $_SESSION['username'] = $_POST['username'];
//            $_SESSION['password'] = $_POST['password'];
//            if (isset($_SESSION['username']) && isset($_SESSION['password'])){
//                var_dump($_SESSION['username']);
//                echo "<br>";
//                var_dump($_SESSION['password']);
//            }
//        } else {
//            echo "BẠN CẦN NHẬP MẬT KHẨU CHO ĐÚNG !";
//        }
//    }
//} else {
//    echo "BẠN ÉO ĐƯỢC ĐĂNG KÝ VÌ CHÓ TÍNH NHÉ !";
//}

?>
<!-- Mixins-->
<!-- Pen Title-->
<div class="pen-title">
    <h1>Material Login Form</h1><span>Bài tập của Nghĩa <i class='fa fa-code'></i> by <a
            href='https://github.com/nghiatv'>Nghĩa Thân</a></span>
</div>
<div class="rerun"><a href="">Rerun Pen</a></div>
<div class="container">
    <div class="card"></div>
    <div class="card">
        <form action="" method="POST">
            <div class="input-container">
                <input type="text" id="Username" name="username" required="required" value=""/>
                <label for="Username">Username</label>
                <div class="bar"></div>
                <div class="error"></div>
            </div>
            <div class="input-container">
                <input type="password" id="Password" name="password" required="required" value=""/>
                <label for="Password">Password</label>
                <div class="bar"></div>
                <div class="error"></div>
            </div>
            <div class="button-container">
                <button><span>Go</span></button>
            </div>
            <div class="footer"><a href="#">Forgot your password?</a></div>
        </form>
    </div>

    <?php
    // $user = $_POST['username'];
    // $pass = $_POST['password'];

    // if(isset($_POST['username']) && isset($_POST['password'])) {
    //     if (preg_match($pattern,$_POST['username']) && preg_match($pattern,$_POST['password'])) {
    //         echo "Bạn đã đăng nhập thành công !";
    //     }else{
    //         echo "Bạn đã nhập sai rồi . Mời bạn quay lại !";
    //     }
    // }else{
    //     echo "Người dùng chưa nhập . Mời nhập vào username và password";
    // }


    ?>
    <!--    <div class="card">-->
    <!--        <div class="toggle"></div>-->
    <!--        <h1 class="title">Register-->
    <!--            <div class="close"></div>-->
    <!--        </h1>-->
    <!--        <form action="result.php" method="POST">-->
    <!--            <div class="input-container">-->
    <!--                <input type="text" name="username" id="Username" required="required"/>-->
    <!--                <label for="Username">Username</label>-->
    <!--                <div class="bar"></div>-->
    <!--                <div class="error"></div>-->
    <!--            </div>-->
    <!--            <div class="input-container">-->
    <!--                <input type="password" name="password" id="Password" required="required"/>-->
    <!--                <label for="Password">Password</label>-->
    <!--                <div class="bar"></div>-->
    <!--                <div class="error"></div>-->
    <!--            </div>-->
    <!--            <div class="input-container">-->
    <!--                <input type="password" name="resetpassword" id="Repeat Password" required="required"/>-->
    <!--                <label for="Repeat Password">Repeat Password</label>-->
    <!--                <div class="bar"></div>-->
    <!--            </div>-->
    <!--            <div class="input-container">-->
    <!--                <input type="email" name="email" id="Email" required="required"/>-->
    <!--                <label for="Email">Email</label>-->
    <!--                <div class="bar"></div>-->
    <!--            </div>-->
    <!--            <div class="button-container">-->
    <!--                <button><span>Next</span></button>-->
    <!--            </div>-->
    <!--        </form>-->
    <!--    </div>-->

</div>
</body>
</html>
