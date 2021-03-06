<?php session_start();
//var_dump($_SESSION);


//function check($str)
//{
//    echo "<pre>";
//    var_dump($str);
//    echo "<pre>";
//}
//
//$host_name = "localhost"; //địa chỉ máy chủ cơ sở dữ liệu
//$user_name = "root"; //tài khoản truy xuất vào máy chủ cơ sở dữ liệu
//$pass_word = ""; //password
//$db_name = "account"; //tên cơ sở dữ liệu vừa tạo trên mySQL
//
//
//$conn = new PDO("mysql:host=$host_name;dbname=$db_name", $user_name, $pass_word) or die("$db->errorInfo()[2]");
//// PDO là 1 class dc khởi tạo sẵn để kết nối CSDL
//
//$sql = "SELECT * FROM techmaster WHERE nick_name = 'nghiangungoc' "; //đặt $sql vào 1 string
//
//$stmt = $conn->query($sql); //$conn: connect để kết nối query, đưa $sql vào sẵn sàng để chạy
//
//$stmt->execute(); //đặt $stmt để chạy query
//
//$result = $stmt->fetch(PDO::FETCH_ASSOC); // fetchAll: chọn tất cả dữ liệu từ bảng; fetch: chỉ chọn 1
//check($result);
//die(); //có die thì nó chỉ hiển thị dữ liệu ra thôi, ko có die thì hiển thị cả dữ liệu lẫn form


//Các câu lệnh cơ bản
//select ... from tên bảng //


?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Form</title>
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet"
              integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1"
              crossorigin="anonymous">
        <link href="assets/css/style.css" rel="stylesheet" type="text/css">
        <script src="https://code.jquery.com/jquery-2.2.4.js"
                integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>
        <script src="assets/js/script.js" type="text/javascript"></script>
    </head>
    <body>

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
            <form action="checklogin.php" method="post">
                <div class="note_error">
                    <?php isset($_SESSION['error_username']) ? print_r($_SESSION['error_username']) : "error"; ?>
                    <?php isset($_SESSION['error_password']) ? print_r($_SESSION['error_password']) : "error"; ?>
                </div>
                <div class="input-container">
                    <input type="text" id="Username" name="username" required="required"
                           value="<?php isset($_SESSION['username']) ? print_r($_SESSION['username']) : "error"; ?>"/>
                    <label for="Username">Username</label>
                    <div class="bar"></div>
                    <div
                        class="error"><?php isset($_SESSION['error_validate_user']) ? print_r($_SESSION['error_validate_user']) : "error"; ?>
                    </div>
                </div>
                <div class="input-container">
                    <input type="password" id="Password" name="password" required="required"
                           value="<?php isset($_SESSION['password']) ? print_r($_SESSION['password']) : "error"; ?>"/>
                    <label for="Password">Password</label>
                    <div class="bar">

                    </div>
                    <div class="error"><?php isset($_SESSION['error_validate_pass']) ? print_r($_SESSION['error_validate_pass']) : "error"; ?>
                    </div>
                </div>
                <div class="button-container">
                    <button><span>Go</span></button>
                </div>
                <div class="footer"><a href="#">Forgot your password?</a></div>
            </form>
        </div>
    </div>
    </body>
    </html>
<?php session_destroy();
?>