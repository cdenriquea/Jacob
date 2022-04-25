<?php

include 'conectar.php';

//generamos la consulta
$sql = "SELECT c.Codigo,c.Nombre,c.Semestre,c.Programa,c.Creditos,c.Prerequisito FROM materias AS c WHERE c.Programa = '" . $_POST['valorBusqueda'] . "' ;";
mysqli_set_charset($conn, "utf8");

if (!$result = mysqli_query($conn, $sql)) die();

$numRows = mysqli_num_rows($result);

if ($numRows == 0) {
    echo '[{"message":"false"}]';
} else {
    $materias = array();

    while ($row = mysqli_fetch_array($result)) {
        $message = "OK";
        $Codigo = $row['Codigo'];
        $Nombre = $row['Nombre'];
        $Semestre = $row['Semestre'];
        $Creditos = $row['Creditos'];
        $Prerequisito = $row['Prerequisito'];
        $Programa = $row['Programa'];

        $materias[] = array('Codigo' => $Codigo, 'Nombre' => $Nombre, 'Semestre' => $Semestre, 'Creditos' => $Creditos, 'Prerequisito' => $Prerequisito, 'Programa' => $Programa);
    }

    $close = mysqli_close($conn)
        or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

    $json_string = json_encode($materias);
    echo $json_string;
}
