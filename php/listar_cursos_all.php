<?php

include 'conectar.php';

//generamos la consulta
$sql = "SELECT * FROM cursos WHERE estado = 1";
mysqli_set_charset($conn, "utf8");

if (!$result = mysqli_query($conn, $sql)) die();

$numRows = mysqli_num_rows($result);

if ($numRows == 0) {
	echo '[{"message":"false"}]';
} else {
	$paises = array();

	while ($row = mysqli_fetch_array($result)) {
		$message = "OK";
		$id = $row['CodiCurs'];
		$nombre = $row['NombCurs'];
		$categoria = $row['Categoria'];
		$img = $row['img'];
		$desc = $row['Descripcion'];
		$precio = $row['Precio'];
		$info = $row['Informacion'];



		$paises[] = array('id' => $id, 'nombre' => $nombre, 'categoria' => $categoria, 'img' => $img, 'desc' => $desc, 'precio' => $precio, 'info' => $info);
	}

	$close = mysqli_close($conn)
		or die("Ha sucedido un error inesperado en la desconexion de la base de datos");

	$json_string = json_encode($paises);
	echo $json_string;
}
