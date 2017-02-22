<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
<?php

$conn = mysql_connect("127.0.0.1", "root", "vertrigo") 
	or die("Could not connect: " . mysql_error());
$db = mysql_select_db("mydb",$conn) 
	or die("Could not select database");

$result = mysql_query("SELECT * FROM Person",$conn);

?>
<table width="50%" border="1">
  <tr>
    <td>ID</td>
    <td>LastName</td>
    <td>FirstName</td>
    <td>Address</td>
    <td>Age</td>
    <td>Edit</td>
    <td>Delete</td>
  </tr>
  <?php
  while ($row = mysql_fetch_array($result))
  {
  	echo "<tr>";
    echo "<td>".$row['Id']."</td>";
    echo "<td>".$row['Lastname']."</td>";
	echo "<td>".$row['Firstname']."</td>";
    echo "<td>".$row['Address']."</td>";
    echo "<td>".$row['Age']."</td>";
	echo "<td><a href='edit.php?code=".$row['Id']."'>Edit</a></td>";
	echo "<td><a href='delete.php?code=".$row['Id']."'>Delete</a></td>";
  	echo "</tr>";
  } 
  ?>
</table>
</body>
</html>
