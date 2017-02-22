<html>
<body>

<?php

require('connect.php');
$result = mysql_query("SELECT * FROM Person",$conn); 

echo "<TABLE BORDER=1>";
echo "<TR><TH> LASTNAME </TH> <TH> FIRSTNAME </TH> 
	<TH> ADDRESS </TH> <TH> AGE </TH> </TR>";
	while ($row = mysql_fetch_array($result)) {
	echo "<TR>"; 
	echo "<TD> " . $row["Lastname"]. " </TD>";
	echo "<TD> " . $row["Firstname"]. " </TD>";
	echo "<TD> " . $row["Address"] . " </TD>";
	echo "<TD> " . $row["Age"] . " </TD>";
	echo "</TR>";
}

echo "</TABLE>";
?>

</body>
</html>
