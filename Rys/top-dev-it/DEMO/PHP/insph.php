<?php
$conn = mysql_connect("127.0.0.1", "root", "vertrigo") 
	or die("Could not connect: " . mysql_error());
$db = mysql_select_db("mydb",$conn) 
	or die("Could not select database");
$sql = "insert into feedback(visitor, address, comment, date) values(" . 
	"'" . $_POST["visitor"] . "'," .
	"'" . $_POST["email"] . "'," .
	"'" . $_POST["comment"] . "'," .
	"'" . date("Y") . "/" . date("m") . "/" . date("d") . "')";
$result = mysql_query($sql,$conn) 
	or die("Could not insert into database"); 
echo $sql . " success!";
echo "Many thanks!";
?> 
