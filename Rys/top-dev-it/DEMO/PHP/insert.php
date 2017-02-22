<?php
$con = mysql_connect("localhost","root","vertrigo");

if (!$con)
{
	die('Could not connect: ' . mysql_error());
}
mysql_select_db("mydb", $con);

$sql="INSERT INTO Person(FirstName, LastName, Age, Address) VALUES ('$_POST[txtFirstname]','$_POST[txtLastname]',$_POST[txtAge], '$_POST[txtAddress]')";
echo $sql;
if (!mysql_query($sql,$con))
{
	die('Error: ' . mysql_error());
}
echo "1 person added";

mysql_close($con)
?>
