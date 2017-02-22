<?php

$conn = mysql_connect("127.0.0.1", "root", "vertrigo") 
	or die("Could not connect: " . mysql_error());
$db = mysql_select_db("mydb",$conn) 
	or die("Could not select database");
?>