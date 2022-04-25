<?php

include 'conectar.php';

//generamos la consulta

$materias = implode("','",$_POST['Materia']);
$temas = implode("','",$_POST['Tema']);



$sql = "SELECT Materia,Tema,Subtema,Enunciado,Explicacion,Opciones,Respuesta,Tiempo FROM banco_preguntas WHERE Materia IN ('$materias') AND Tema IN ('$temas')";
mysqli_set_charset($conn, "utf8");

if (!$result = mysqli_query($conn, $sql)) die();

$numRows = mysqli_num_rows($result);



if ($numRows == 0) {
    echo '[{"message":"false"}]';
} else {
    $Docentes = array();
    while ($row = mysqli_fetch_array($result)) {
        $message = "OK";
        $Docentes[] = array('Materia' => $row['Materia'], 'Tema' => $row['Tema'], 'Subtema' => $row['Subtema'], 'Enunciado' => $row['Enunciado'], 'Explicacion' => $row['Explicacion'], 'Opciones' => $row['Opciones'], 'Respuesta' => $row['Respuesta'], 'Tiempo' => $row['Tiempo']);
    }
    $close = mysqli_close($conn)
        or die("Ha sucedido un error inesperado en la desconexion de la base de datos");

    $json_string = json_encode($Docentes);
    echo $json_string;
}
