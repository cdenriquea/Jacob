<?php
include 'conectar.php';

$query = "SELECT * FROM " . $_POST['Categoria'] . " WHERE NombLeccion='" . $_POST['Leccion'] . "' AND  NombModulo='" . $_POST['Modulo'] . "' AND CodiMate = " . $_POST['Codigo'] . " ;";

$NombLec = "SELECT NombLeccion FROM " . $_POST['Categoria'] . " WHERE NombModulo='" . $_POST['Modulo'] . "';";



mysqli_set_charset($conn, "utf8"); //formato de datos utf8

if (!$result = mysqli_query($conn, $query)) die();

$numRows = mysqli_num_rows($result);
$statement = mysqli_query($conn, $NombLec);

$prevLec = mysqli_fetch_row($statement);

if ($numRows == 0) {

    if ($_POST['Tipo'] == 'create') {
        if ($prevLec[0] == 'NULL') {
            $sqlInsert = "UPDATE " . $_POST['Categoria'] . " SET NombLeccion='" . $_POST['Leccion'] . "' WHERE NombModulo='" . $_POST['Modulo'] . "' AND NombLeccion LIKE 'NULL';";
        } else {
            $sqlUpdate = "UPDATE " . $_POST['Categoria'] . " SET Puesto = Puesto + 1 WHERE Puesto >= '" . $_POST['Puesto'] . "' AND CodiMate = " . $_POST['Codigo'] . ";";
            mysqli_query($conn, $sqlUpdate);

            $sqlInsert = "INSERT INTO " . $_POST['Categoria'] . " (Puesto,CodiMate,Materia,Seccion,NombModulo,NombLeccion,NombSeccion,Contenido) VALUES ('" . $_POST['Puesto'] . "','" . $_POST['Codigo'] . "','" . $_POST['Nombre'] . "','Teoría','" . $_POST['Modulo'] . "','" . $_POST['Leccion'] . "','NULL','NULL');";
        }
    } else {
        $sqlInsert = "UPDATE " . $_POST['Categoria'] . " SET NombLeccion='" . $_POST['Leccion'] . "' WHERE NombLeccion='" . $_POST['Lecaux'] . "' AND CodiMate = " . $_POST['Codigo'] . ";";
    }



    if (mysqli_query($conn, $sqlInsert)) {
        if (mysqli_affected_rows($conn) > 0) {
            echo '[{"message":"true"}]';
        } else {
            echo '[{"message":"false"}]';
        }
    }
} else {
    echo '[{"message":"false2"}]';
}

$conn->close();
