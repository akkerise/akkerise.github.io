<?php session_start();


$host_name = "localhost";
$db_name = "test-sinhvien";
$pass_word = "";
$user_name = "root";

// Regex
$pattern = "/^[a-zA-Z0-9]{6,32}$/";
$pattern_password = "";
//$pattern_email = "\A(?=[a-z0-9@.!#$%&'*+/=?^_`{|}~-]{6,254}\z)
// (?=[a-z0-9.!#$%&'*+/=?^_`{|}~-]{1,64}@)
// [a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*
//@ (?:(?=[a-z0-9-]{1,63}\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+
//  (?=[a-z0-9-]{1,63}\z)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\z";




if (isset($_POST['username']) && isset($_POST['password'])) {
    $_SESSION['username'] = $_POST['username'];
    $_SESSION['password'] = $_POST['password'];
    $_SESSION['email'] = $_POST['email'];
    $flag = 1;
    // Kiểm tra xem username người dùng nhập vào có tồn tại không phù hợp với regex hay không ?
    if (!preg_match($pattern, $_POST['username'], $match)) {
        $flag = 0;

        $_SESSION['error_validate_user'] = "Username Error Regex";
//        header('Location: register.php');

    }

    // Kiểm tra xem password người dùng nhập vào có tồn tại không phù hợp với regex hay không ?
    if (!preg_match($pattern, $_POST['password'], $match)) {
        $flag = 0;
        echo "2";
        $_SESSION['error_validate_pass'] = "Password Error Regex";
//        header("Location: register.php");
    }
    // Kiểm tra xem email người dùng nhập vào có tồn tại không phù hợp với regex hay không ?
    if (!preg_match($pattern, $_POST['email'], $match)) {
        $flag = 0;
        $_SESSION['error_validate_email'] = "Email Error Regex";
//        header("Location: register.php");

    }

    if ($flag == 1) {


        try {
            $conn = new PDO("mysql:host=$host_name;db_name=$db_name", $user_name, $pass_word) or die($conn->errorInfo()[2]);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $stmt = $conn->prepare("SELECT techmaster FROM  WHERE username= ? ");
            $stmt->bindValue(1,"nguyenthanh");
            $stmt->execute();


            if($stmt->rowCount()){
                echo "co nhe";
            }
//            $result = $stmt->fetch(PDO::FETCH_ASSOC);
//            if (isset($result)) {
//                $_SESSION['error'] = "User đã tồn tại";
//                header('Location: register.php');
//                exit();
//            }

//
            $stmt = $conn->prepare("INSERT INTO techmaster(username,password) VALUES(?,?)");
            $stmt->bindParam(1, $_POST['username'], PDO::PARAM_STR);
            $stmt->bindParam(2, $_POST['password'], PDO::PARAM_STR);
            $stmt->execute();
        } catch (PDOException $e) {
            echo $e->getMessage();
        }


        var_dump($stmt);
    }



}



?>