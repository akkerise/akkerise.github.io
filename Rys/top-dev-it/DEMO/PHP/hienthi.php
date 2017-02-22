<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Hien thi</title>
</head>

<body>
<?php
include ('connect.php');
$result = mysql_query("SELECT * FROM Person",$conn);
?>
<table width="100%" border="0">
  <tr>
    <td width="10%">ID</td>
    <td width="26%">Firstname</td>
    <td width="23%">Lastname</td>
    <td width="30%">Age</td>
    <td width="11%">Address</td>
  </tr>
<?php  while ($row = mysql_fetch_array($result))
{
  echo "<tr>";
  echo "<td>".$row[Id]."</td>";
  echo "<td>".$row[1]."</td>";
  echo "<td>".$row[2]."</td>";
  echo "<td>".$row[3]."</td>";
  echo "<td>".$row[4]."</td>";
  echo "</tr>";
}
 ?> 
</table>
</body>
</html>