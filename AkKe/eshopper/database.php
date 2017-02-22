<?php
    define('DB_HOST' , 'localhost');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', '');
    define('DB_DBNAME' , 'mvc-project');

    try {
        $conn = new PDO('mysql:host=' . DB_HOST . ';dbname='. DB_DBNAME ,DB_USERNAME,DB_PASSWORD);
        $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
    }catch(PDOException $e){
        echo $e->getMessage();
    }
    $page = 1;
    $items_per_page = 12;
    $range = ($page - 1 ) * $items_per_page;
    try{
        $stmt = $conn->prepare("SELECT * FROM products LIMIT ?,?");
        $stmt->bindValue(1,$range,PDO::PARAM_INT);
        $stmt->bindValue(2,$items_per_page,PDO::PARAM_INT);
        $stmt->execute();
    }catch(PDOException $e){
        echo json_encode($e->getMessage());
    }
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
?>