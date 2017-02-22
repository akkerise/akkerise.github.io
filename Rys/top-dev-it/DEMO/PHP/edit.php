<html>
<body>
<?php
$id = $_GET['code'];

include ('connect.php');
$result = mysql_query("SELECT * FROM Person WHERE Id=$id",$conn);
if ($row = mysql_fetch_array($result))
{
?>
<form action="editprocess.php" method="post">

  <table align="center" width="39%" border="0">
    <tr>
      <td align="center" colspan="3"><strong>Edit Person </strong></td>
    </tr>
    <tr>
      <td width="25%">Id</td>
      <td colspan="2"><input name="txtId" type="text" id="txtId" size="10" readonly value="<?php echo $row[0]?>" /></td>
    </tr>
    <tr>
      <td>Firstname:</td>
      <td colspan="2"><input type="text" name="txtFirstname" value="<?php echo $row[1]?>"  /></td>
    </tr>
    <tr>
      <td>Lastname:</td>
      <td colspan="2"><input type="text" name="txtLastname" value="<?php echo $row[2]?>" /></td>
    </tr>
    <tr>
      <td>Age:</td>
      <td colspan="2"><input type="text" name="txtAge" value="<?php echo $row[3]?>" /></td>
    </tr>
    <tr>
      <td>Address:</td>
      <td colspan="2"><input name="txtAddress" type="text" id="txtAddress" size="50" value="<?php echo $row[4]?>" /></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td width="32%"><input name="btnOK" type="submit" id="btnOK" value="Update" /> </td>
      <td width="43%"><input name="btnRest" type="reset" id="btnRest" value="Reset" /></td>
    </tr>
  </table>
  <p>&nbsp;</p>
  <p><br>
    <br>
    <br>
  </p>
</form>
<?php
}
?>
</body>
</html>
