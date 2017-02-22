<?php

/**
 * Created by PhpStorm.
 * User: nguyenthanh
 * Date: 8/12/16
 * Time: 15:01
 */
class search_model extends base_model
{
    private $table = 'posts';

    public function searchTitleName($title)
    {
//        $sql = "SELECT * FROM " . $this->table . " WHERE :title = ? ";
//        try {
//            $this->stmt = $this->conn->prepare($sql);
//            $this->stmt->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
//            $this->stmt->bindValue(":title", $title, PDO::PARAM_STR);
//            $this->stmt->execute();
//            return $this->stmt->fetchAll();
//        } catch (PDOException $e) {
//            echo "<pre>";
//            var_dump(die($e->getMessage()));
//            echo "</pre>";
//            exit();
//        }
        $sql = "SELECT posts.title FROM " . $this->table . " WHERE :title = ?";
        try {
            $this->stmt = $this->conn->prepare();
            $this->stmt->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
            $this->stmt->bindValue(":title",$title,PDO::PARAM_STR);
            $this->stmt->execute();
            } catch (PDOException $e) {
            echo "<pre>";
            var_dump(die($e->getMessage()));
            echo "</pre>";
            exit();
        }
        return $this->stmt->fetchAll();
    }


}