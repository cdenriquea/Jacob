<?php

include 'conectar.php';

//generamos la consulta
$sql = "SELECT m.Orden,m.Puesto,m.Seccion,m.NombModulo,m.NombLeccion,m.NombSeccion,m.Contenido,idCreador FROM " . $_POST['Tipo'] . " AS m WHERE m.CodiMate = " . $_POST['idCurso'] . ";";
mysqli_set_charset($conn, "utf8");

if (!$result = mysqli_query($conn, $sql)) die();

$numRows = mysqli_num_rows($result);

if ($numRows == 0) {
	echo '[{"message":"false"}]';
} else {
	$paises = array();

	while ($row = mysqli_fetch_array($result)) {
		$message = "OK";
		$Orden = $row['Orden'];
		$Puesto = $row['Puesto'];
		$Seccion = $row['Seccion'];
		$NombModulo = $row['NombModulo'];
		$NombLeccion = $row['NombLeccion'];
		$NombSeccion = $row['NombSeccion'];
		$Contenido = $row['Contenido'];
		$idCreador = $row['idCreador'];


		$paises[] = array('Orden' => $Orden, 'Puesto' => $Puesto, 'Seccion' => $Seccion, 'NombModulo' => $NombModulo, 'NombLeccion' => $NombLeccion, 'NombSeccion' => $NombSeccion, 'Contenido' => $Contenido, 'idCreador' => $idCreador);
	}

	$close = mysqli_close($conn)
		or die("Ha sucedido un error inesperado en la desconexion de la base de datos");

	$json_string = json_encode($paises);
	echo $json_string;
}
