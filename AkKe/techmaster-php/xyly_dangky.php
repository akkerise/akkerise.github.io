<?php
session_start(); //bắt đầu vs câu lệnh này để tạo được các biến lưu trữ session để bê qua trang khác dùng
$db = new PDO("mysql:host=localhost;dbname=nhapky", "root", "");  //khởi tạo truy cập database trên phpmyadmin
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING); //khởi tạo nếu lỗi thì dùng cái try catch + PDOException

if ($_SERVER['REQUEST_METHOD'] == 'POST') {//khi nhấn nút đăng ký - submit
    $loi = array();  //tạo mảng rỗng này để mai sau cứ có lỗi gì thì nhét 1 ptu lỗi vào đây


//    loại bỏ các khoảng trắng ở đầu và cuối input rồi ms validate
    $_POST['username'] = trim($_POST['username']);
    $_POST['pass'] = trim($_POST['pass']);
    $_POST['repeat_pass'] = trim($_POST['repeat_pass']);
    $_POST['email'] = trim($_POST['email']);


//    validate username
    if (!preg_match("/^[a-z0-9]{6,32}$/", $_POST['username'])) {  //check định dạng của username sau đó ở dưới chia nhỏ ra để tạo lỗi chính sác
        $loi[] = 'username';  // cứ có lỗi thì nhét thêm 1 ptu vào mảng lỗi
        if (strlen($_POST['username']) < 6 || strlen($_POST['username']) > 32) {  //check độ dài của ng dùng nhập vào có đúng ko
            $_SESSION['sess_username'] = $_POST['username'];   //tạo biến này để lấy giá trị ng dung nhập vào để bê sang trang khác
                                                                //nếu họ có nhập sai thì vẫn phải giữ lại giá trị họ nhập để ddwox fai nhập lại
            $_SESSION['wrong_user_length'] = "Username ko được ít hơn 6 hoặc dài hơn 32 kí tự"; //tạo biến này để bê qua trang khác và echo n ra để nta biết lỗi
        }
        if (!preg_match("/^[a-z0-9]$/", $_POST['username'])) {  //check xem có kí tự đặc biệt k
            $_SESSION['sess_username'] = $_POST['username'];
            $_SESSION['wrong_user_pattern'] = "Username sai định dạng, ko được có kí tự đặc biệt";
        }
    } else { // nếu mà username đúng định dạng r thì mới ktra xem đã tồn tại hay chưa

        $sql = "SELECT username FROM nguoidung1 WHERE username = '$_POST[username]'"; //khởi tạo lấy ra dữ liệu username trong bảng nguoidung1
        $stmt = $db->query($sql); //chạy biến này để database tìm nó trong database
        $stmt->execute(); //execute để thực thi truy xuất và lấy ra, trên là tìm thôi, thằng này sẽ chạy và lấy ra
        $exist_username = $stmt->rowCount();  //đặt 1 biến bằng số dòng các kết quả lấy ra
        //  $stmt->rowCount() là nếu mà có giá trị nào từ dữ liệu vừa truy xuất, thì n sẽ nhét vào 1 cái bảng, mỗi giá trị là 1 dòng
        //ý nghĩa là: nếu thằng $_POST['username'] ng dùng nhập vào mà có tồn tại trong bảng nguoidung1 thì có nghĩa là nick đấy đã có người đăng kí rồi



        if ($exist_username > 0) { //như trên thì là: nếu mà ng dùng nhập thằng $_POST['username']  mà có tồn tại trong bảng đấy r
//            thì cái biến mình gán cho $stmt->rowCount() phải có giá trị =>>>> cái thằng này sẽ >0 =>> đã có người dùng này r

            $loi[] = 'username'; //nhét lỗi vào trong mảng lỗi
            $_SESSION['sess_username'] = $_POST['username'];
            $_SESSION['exist_user'] = "nick name nay da ton tai";
        } else { //nếu nó ko lơn hơn ko, thì có nghĩa là = 0 thì có nghĩa là chưa có thằng nào sử dụng nick này
            $_SESSION['sess_username'] = $_POST['username']; //vẫn fai tạo biến này để giữ lại cái mà người dùng đã nhập
//                                                            để phòng khi những trường khác nta nhập sai thì vẫn có thể giữ lại giá trị nta nhập vào
            $_SESSION['temp'] = "ok duoc r";
        }
    }
//    validate email
    if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {  //hàm này để check định dạng email
        $loi[] = 'email'; //nhét lỗi vào mảng lỗi
        if (strlen($_POST['email']) < 6 || strlen($_POST['email']) > 32) {
            $_SESSION['sess_email'] = $_POST['email'];
            $_SESSION['wrong_email_length'] = 'Email ko được ít hơn 6 hoặc dài hơn 32 kí tự';
        }
        if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $_SESSION['sess_email'] = $_POST['email'];
            $_SESSION['wrong_email_pattern'] = "Email sai định dạng, ko được có kí tự đặc biệt";
        }
    } else { //nếu đúng định dang email rồi thì .....
        $sql = "SELECT email FROM nguoidung1 WHERE email = '$_POST[email]'";
        $stmt = $db->query($sql);
        $stmt->execute(); //3 dòng này là lấy ra tất cả email nào mà trùng với email người dùng nhập vào
        $exist_email = $stmt->rowCount(); //
        if ($exist_email > 0) { //nếu email đã tồn tại
            $loi[] = 'email'; // gán lỗi
            $_SESSION['sess_email'] = $_POST['email'];
            $_SESSION['exist_email'] = "Email nay da duoc su dung";
        } else { //nếu email này chưa tồn tại
            $_SESSION['sess_email'] = $_POST['email'];
            $_SESSION['temp'] = "ok email chuan r";
        }
    }
//    validate pass
    if (!preg_match("/^[a-z0-9]{6,32}$/", $_POST['pass'])) { //ktra định dang pass sai
        $loi[] = 'pass'; //nhét lỗi
        if (strlen($_POST['pass']) < 6 || strlen($_POST['pass']) > 32) {
            $_SESSION['sess_pass'] = $_POST['pass'];
            $_SESSION['wrong_pass_length'] = "Password ko được ít hơn 6 hoặc dài hơn 32 kí tự";
        }
        if (!preg_match("/^[a-z0-9]$/", $_POST['pass'])) {
            $_SESSION['sess_pass'] = $_POST['pass'];
            $_SESSION['wrong_pass_pattern'] = "Password sai định dạng, ko được có kí tự đặc biệt";
        }
    }else{//nếu đúng định dạng r
        $_SESSION['sess_pass'] = $_POST['pass'];
        $_SESSION['ok_pass'] = "Password ok r";
    }
//      validate repeat_pass
    if ($_POST['repeat_pass'] != $_POST['pass']){ // nếu pass nhập lại ko đúng pass
        $loi[] = 'repeat_pass'; //nhét lỗi
        $_SESSION['sess_repeat_pass'] = $POST['repeat_pass'];
        $_SESSION['wrong_repeat_pass'] = "nhap lai mat khau sai";
     }else{//còn nếu mà 2 pas nhập lại giống nhau thì ..
        $_SESSION['sess_repeat_pass'] = $POST['repeat_pass'];
        $_SESSION['ok_repeat_pass'] = "pass nhap lai chuan r";
    }
// validate tỉnh thành phố




    //bỏ qua cho đến hết image, vì chưa làm song ------------------------------------------------------------
//validate giới tính
    if ($_POST['gioitinh'] != 0 || $_POST['gioitinh'] != 1) {
        $loi[] = 'gioitinh';
        $_SESSION['wrong_gioitinh'] = "Chưa chọn giới tính";
    } else {
        $_SESSION['ok_gioitinh'] = "checked";
    }
//    validate img
    if ($_FILES['logo']['name'] == '') {
        $loi[] = 'logo';
        $_SESSION['wrong_img_name'] = 'chưa chọn ảnh';
    } else {
        $logo_size = $_FILES['logo']['size'];
        $logo_type = $_FILES['logo']['type'];

        if ($logo_size > 102400) {
            $loi[] = 'logo';
            $_SESSION['wrong_img_size'] = 'Kích thước ảnh ko dc lớn hơn 100mb';
        }
        if ($logo_type != 'image/jpg' && $logo_type != 'image/jpge' && $logo_type != 'image/png' && $logo_type != 'image/gif') {
            $loi[] = 'logo';
            $_SESSION['wrong_img_type'] = 'chỉ hỗ trợ ảnh png,jpg,jpge và gif';
        }
    }

//    nếu mà ko có lỗi gì cả thì ....  //cái này để test thôi ko quan tâm
//    var_dump($loi); //cái này để test thôi ko quan tâm
//    die(); //cái này để test thôi ko quan tâm


    // ------------------------------------------------------------ tiếp tục làm phần dưới đây
    if (empty($loi)) { //tất cả các lỗi trên, cứ có lỗi là sẽ nhét 1 biến lỗi vào trong MẢNG $loi - > có lỗi thì mảng lỗi không thể rỗng
//        ->>>> nếu mà không có lỗi thì mảng lỗi sẽ rỗng ->>> nếu mảng lỗi rỗng thì có nghĩa là ko có lỗi gì cả ->> mới cho nó tạo nick và nhét thông tin vào database
        $username = $_POST['username']; // gán mấy biến cho giá trị người dùng nhập vào để sử dụng cho tiện
        $email = $_POST['email'];
        $pass = $_POST['pass'];

//        $tp = $_POST['tp'];
//        $gioitinh = $_POST['gioitinh'];
//        $logo_name = $_FILES['logo']['name'];
//        move_uploaded_file($_FILES['logo']['tmp_name'], "images/$logo_name");
//        $sql = "insert into nguoidung1(username,email,pass,ID_tp,gioitinh,logo) VALUES('$username','$email','$pass',$tp,$gioitinh,'$logo_name')";
//        $sql = "insert into nguoidung1(username,pass) VALUES('$username','$pass')";
//        $count = $db->exec($sql) or die($db->errorInfo()[2]);
//        $count->execute();


//        cái try catch này học rồi nên chác ko giải thích nhiều
        try { // mấy dòng dưới đây là để INSERT dữ liệu vào bảng TỪNG GIÁ TRỊ 1, Nếu nhiều thì phải dùng cách khác,
//            nhưng đây là từng thằng đăng kí nên nhét dữ liệu vào ít nên có thể dùng cách này

            $sql = "INSERT INTO nguoidung1(username, pass,email) VALUES (?,?,?)";
            $stmt = $db->prepare($sql);
            $stmt->bindValue(1, $username);
            $stmt->bindValue(2, $pass);
            $stmt->bindValue(3, $email);
            $stmt->execute();
            header("Location:http://localhost/phpmyadmin/"); // cái này là sau khi nhét dữ liệu song n sẽ trả về trang nào
        } catch (PDOException $e) {
            echo $e->getMessage(); // hàm này để hiển thị lỗi ra
        }

//        if ($count > 0) {
//            header('Location:fapfap.php');
//        }
    } else { // vì if trên là check xem mảng $loi có rỗng hay không, nên else ở đây dc hiểu là nếu mà mảng $loi không rỗng thì ....
        header('Location:dangky.php'); //hướng nó quay trở lại trang đang kí để nó tiếp tục sửa lỗi của nó cho đến khi không còn lỗi thì thôi
    }
    $_SESSION['vardumploi'] = var_dump($loi); // cái này chỉ để kiểm tra xem mảng $loi có rỗng hay ko thôi, về sau bỏ đi
}
?>















