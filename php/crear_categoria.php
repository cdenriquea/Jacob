<?php
include 'conectar.php';

$query = "SELECT * FROM categorias WHERE Nombre='" . $_POST['Nombre'] . "';";

mysqli_set_charset($conn, "utf8"); //formato de datos utf8

if (!$result = mysqli_query($conn, $query)) die();

$numRows = mysqli_num_rows($result);

if ($numRows == 0) {
	$sqlInsertProg = "INSERT INTO categorias (Nombre) VALUES ('" . $_POST['Nombre'] . "');";

	//echo $sqlInsertDeta;				
	if (mysqli_query($conn, $sqlInsertProg)) {
		if (mysqli_affected_rows($conn) > 0) {
			echo '[{"message":"true"}]';
		} else {
			echo '[{"message":"false"}]';
		}
	}
} else {
	echo '[{"message":"false2"}]';
}
