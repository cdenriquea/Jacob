<?php

include 'conectar.php';

//generamos la consulta
$sql = "SELECT * FROM nivelacion WHERE CodiEstu = " . $_POST['CodiEstu'] . " AND Materia = '" . $_POST['Materia'] . "' ;";
mysqli_set_charset($conn, "utf8");

if (!$result = mysqli_query($conn, $sql)) die();

$numRows = mysqli_num_rows($result);

if ($numRows == 0) {
    echo '[{"message":"false"}]';
} else {
    $minicursos = array();
    while ($row = mysqli_fetch_array($result)) {
        $message = "OK";
        $minicursos[] = array('CodiEstu' => $row['CodiEstu'], 'MateriaPrev' => $row['MateriaPrev'], 'Tema' => $row['Tema'], 'Progreso' => $row['Progreso']);
    }
    $close = mysqli_close($conn)
        or die("Ha sucedido un error inesperado en la desconexion de la base de datos");

    $json_string = json_encode($minicursos);
    echo $json_string;
}
