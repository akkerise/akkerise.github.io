<?php
    define("DB_HOST", "localhost");
    define("DB_USERNAME", "root");
    define("DB_PASSWORD", "");
	define("DB_DBNAME", "database.db");
    class Database{
        public $conn;
        public $stmt;
        public function __construct()
        {
            try{
                $this->conn = new PDO("mysql:host=".DB_HOST.";dbname=" . DB_DBNAME , DB_USERNAME,DB_PASSWORD);
                $this->conn->exec("SET CHARACTER SET utf8");
                $this->conn->setAttribute(PDO::ERRMODE_EXCEPTION ,PDO::ERRMODE_WARNING);
            }catch (PDOException $e){
                echo $e->getMessage();
            }
        }

    }
?>