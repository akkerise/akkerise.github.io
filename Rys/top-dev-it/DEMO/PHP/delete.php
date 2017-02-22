<html>
<body>
<?php
$id = $_GET['code'];

include ('connect.php');
$result = mysql_query("DELETE FROM Person WHERE Id=$id",$conn);

if ($result)
{
		echo "<script> alert('Xoa thanh cong') </script>";
		header("Location: view.php");
		
}
?>
</body>
</html>
