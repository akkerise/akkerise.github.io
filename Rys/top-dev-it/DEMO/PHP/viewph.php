<?php
$conn = mysql_connect("127.0.0.1","root","vertrigo") 
	or die("Could not connect: " . mysql_error());
	
$db = mysql_select_db("mydb",$conn) 
	or die("Could not select database");
	
$result = mysql_query("select * from feedback", $conn) 
	or die("Could not execute query"); 
	
echo "<TABLE BORDER=1>";
echo "<TR><TH> no </TH> <TH> visitor </TH> <TH> address </TH><TH> comment </TH> <TH> date </TH> </TR>";

while ($row = mysql_fetch_array($result)) {
	echo "<TR>"; 
	echo "<TD> " . $row["id"]. " </TD>";
	echo "<TD> " . $row["visitor"]. " </TD>";
	echo "<TD> " . $row["address"] . " </TD>";
	echo "<TD> <p>" . $row["comment"] . "</p></TD>";
	echo "<TD> " . $row["date"] . " </TD>";
	echo "</TR>";
}

echo "</TABLE>";
?>
