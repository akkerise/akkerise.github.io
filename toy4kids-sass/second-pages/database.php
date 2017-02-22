<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_DBNAME', 'testmvc');

class Database
{
    public $conn;
    public $stmt;

    public function __construct()
    {
        try {
            $this->conn = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_DBNAME, DB_USER, DB_PASS) or die('Chet roi nhe !');
            $this->conn->exec("SET CHARACTER SET utf8");
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
        } catch (PDOException $e) {
            die("deo hieu " . $e->getMessage());
        }
    }
}

?>
