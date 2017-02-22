<?php
$host_name = "localhost";
$db_name = "sinhvien";
$pass_word = "";
$user_name = "root";
$conn = new PDO("mysql:host=$host_name;db_name=$db_name", $user_name, $pass_word) or die($conn->errorInfo()[2]); //  Kết nối CSDL
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
//$stmt = $conn->prepare("INSERT INTO sinhvien.techmaster (username,password,namecc) VALUES (?,?,?)");  // Đặt lỗ để cho dữ liệu vào
$stmt = $conn->prepare("UPDATE techmaster SET username='Doe' WHERE id=6");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

$stmt->execute();
//$username = "Fuck";
//$password = "You";
//$name = "dasdkasl";
//try {
//    $stmt->bindParam(1, $username, PDO::PARAM_STR);
//
//    $stmt->bindParam(2, $password, PDO::PARAM_STR);
//
//    $stmt->bindParam(3, $name, PDO::PARAM_STR);
//
//
//    $stmt->execute();
//
//} catch (PDOException $sdsd) {
//    $sdsd->getMessage();
//}

//$sql = "SELECT * FROM techmaster";
//$stmt = $conn->prepare($sql);
?>