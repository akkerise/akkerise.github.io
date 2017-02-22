<?php session_start();?>
    <?php
    if (isset($_SESSION['username'])){
        header("Location: success.php");
    }
//    var_dump($_SESSION);

    //    đầu vào validate
    $pattern = "/[a-zA-Z0-9]{6,32}/";
    //    dữ liệu
    $user = array(
        'username' => 'hungmaix',
        'password' => 'hungmaix',
    );


//    if (isset($_POST['username']) && isset($_POST['password'])) {
//        $_SESSION['username'] = $_POST['username'];
//        $_SESSION['password'] = $_POST['password'];
//        $flag = 1;
//        // regex
//
//        if (!preg_match($pattern, $_SESSION['username'], $match)) {
//            $flag = 0;
//            $_SESSION['error_validate_user']= "username không hợp lệ";
//            header("Location: login.php");
//        }
//        if (!preg_match($pattern,$_SESSION['password'], $match2)) {
//            $flag = 0;
//            $_SESSION['error_validate_pass']="password không hợp lệ";
//            header("Location: login.php");
//        }
//
//
////        kiem tra chính xác
//
//        if ($flag == 1) {
//            if ($_SESSION['username'] != $user["username"]){
//                $flag=0;
//                $_SESSION['error_username']="Nhap sai username";
//                header("Location: login.php");
//                exit();
//            }
//            if ($_SESSION['password']!=$user["password"]) {
//                $flag = 0;
//                $_SESSION['error_password'] = "Nhap sai password";
//                header("Location: login.php");
//                exit();
//            }
//                echo "be dau r";
//                $_SESSION['username']=$_POST['username'];
//                header('location: success.php');
//                session_cache_expire(30);
//        }
//    }
    if (isset($_POST['username']) && isset($_POST['password'])){
        $_SESSION['username'] = $_POST['username'];
        $_SESSION['username'] = $_POST['password'];
        $flag = 1;

        // Kiểm tra xem nếu SESSION['username']  không thỏa mãn điều kiện
        if (!preg_match($pattern, $_SESSION['username'] , $match)){
//            var_dump($match);
            $_SESSION['error_username'] = " Failed username !";
            header("Location: login.php");
            $flag = 0;
            exit();
        }
        if (!preg_match($pattern, $_SESSION['username'] , $match)){
            $_SESSION['error_password'] = " Failed password !";
            header("Location: login.php");
//            var_dump($match);
            $flag = 0;
            exit();
        }

        if ($flag == 1){
            if ($_SESSION['username'] != $user['username']){

            }
        }
    }
    ?>


