<?php

include 'conectar.php';

//generamos la consulta
$sql = "SELECT c.CodBanc,c.Materia,c.Tema,c.Subtema,c.Enunciado,c.Explicacion,c.Opciones,c.Respuesta,c.Tiempo FROM banco_preguntas  AS c WHERE c.Materia ='" . $_POST['Materia'] . "' AND c.Tema='" . $_POST['Tema'] . "' AND c.Subtema='" . $_POST['Subtema'] . "';";
mysqli_set_charset($conn, "utf8");

if (!$result = mysqli_query($conn, $sql)) die();

$numRows = mysqli_num_rows($result);

if ($numRows == 0) {
	echo '[{"message":"false"}]';
} else {
	$paises = array();

	while ($row = mysqli_fetch_array($result)) {

		$paises[] = array('codigo' => $row['CodBanc'], 'materia' => $row['Materia'], 'tema' => $row['Tema'], 'subtema' => $row['Subtema'], 'enunciado' => $row['Enunciado'], 'explicacion' => $row['Explicacion'], 'opciones' => $row['Opciones'], 'respuesta' => $row['Respuesta'], 'tiempo' => $row['Tiempo']);
	}

	$close = mysqli_close($conn)
		or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

	$json_string = json_encode($paises);
	echo $json_string;
}
