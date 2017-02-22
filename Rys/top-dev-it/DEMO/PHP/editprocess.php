<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Update</title>
</head>

<body>
<?php

	include ('connect.php');

	$sql = "UPDATE Person SET
     Firstname = '$_POST[txtFirstname]',
	 Lastname  = '$_POST[txtLastname]',
     Age       = '$_POST[txtAge]',
	 Address   = '$_POST[txtAddress]' 
     WHERE Id  = '$_POST[txtId]'";

	$result = mysql_query($sql,$conn) or die(mysql_error());
	if ($result)
		header("Location: view.php");
?>
</body>
</html>