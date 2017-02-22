<?php
	/**
	*
	*/
define("DB_HOST","localhost");
define("DB_DBNAME","mvc-project");
define("DB_USERNAME","root");
define("DB_PASSWORD","");
	class database
	{
		public $conn;
		public $stmt;

		function __construct()
		{
			try {
//				$this->conn = new PDO("mysql:host=" . DB_HOST . ";dbname=". DB_DBNAME , DB_USERNAME , DB_PASSWORD);
//				$this->conn->exec("SET CHARACTER SET utf8");
//				$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
//                $this->conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

			}catch(PDOException $e){
				die($e->getMessage());
			}
		}

        // Hàm lấy tất cả giá trí theo bảng
		public function getAll($table){
            $sql = "SELECT * FROM " . $table;
            try{
                $this->stmt = $this->conn->prepare($sql);
                $result = $this->stmt->fetchAll(PDO::FETCH_ASSOC);
                return $result;
            }catch (PDOException $e){
                die($e->getMessage());
            }
        }

        // Hàm lấy cột theo ID
        public function getItemById($table,$id){
            $sql = "SELECT * FROM " . $table . " WHERE id = ?";

            try{
                $this->stmt = $this->conn->prepare($sql);
                $this->stmt->bindValue(1,$id,PDO::PARAM_INT);
                $this->stmt->execute();
            }catch (PDOException $e){
                echo $e->getMessage();
            }
            $result = $this->stmt->fetchAll(PDO::FETCH_ASSOC);
            return $result;
        }

        public function insertUser($user_name ,$user_pass , $user_email){
            $sql = "INSERT INTO " . $this->table . "(user_name . user_pass , user_email) VALUES (? , ? , ?)";
            try{
                $this->stmt = $this->conn->prepare($sql);
                // bindParam
                $this->stmt->bindParam(1,$user_name,PDO::PARAM_STR);
                $this->stmt->bindParam(2,$user_pass,PDO::PARAM_STR);
                $this->stmt->bindParam(3,$user_email,PDO::PARAM_STR);
                $this->stmt->execute();
            }catch (PDOException $e){
                die($e->getMessage());
            }
        }

        public function deleteById($table,$id){
            $sql = "DELETE FROM " . $table . " WHERE id = ?";
            try {
                $this->stmt = $this->conn->prepare($sql);
                $this->stmt->bindValue(1,$id,PDO::PARAM_INT);
                $this->stmt->execute();
            }catch (PDOException $e){
                echo "<pre>"; var_dump($e->getMessage()); echo "</pre>"; exit;
            }
            if($this->getItemById($table,$id) != false){
                return false;
            }else{
                return true;
            }
        }
        public function updateUser($id,$user_name,$user_pass,$user_email){

        }
	}

 ?>