<?php
include 'conectar.php';

$query = "SELECT * FROM " . $_POST['Categoria'] . " WHERE NombSeccion='" . $_POST['Seccion'] . "'  AND NombLeccion='" . $_POST['Leccion'] . "' AND  NombModulo='" . $_POST['Modulo'] . "'AND  CodiMate = " . $_POST['Codigo'] . ";";

$NombLec = "SELECT NombSeccion FROM " . $_POST['Categoria'] . " WHERE NombModulo='" . $_POST['Modulo'] . "' AND NombLeccion='" . $_POST['Leccion'] . "';";


mysqli_set_charset($conn, "utf8"); //formato de datos utf8

if (!$result = mysqli_query($conn, $query)) die();

$numRows = mysqli_num_rows($result);
$statement = mysqli_query($conn, $NombLec);

$prevSec = mysqli_fetch_row($statement);
if ($numRows == 0) {

    if ($_POST['Tipo'] == 'create') {
        if ($prevSec[0] == 'NULL') {
            $sqlInsert = "UPDATE " . $_POST['Categoria'] . " SET NombSeccion='" . $_POST['Seccion'] . "', Seccion='" . $_POST['TSeccion'] . "',Contenido ='" . $_POST['Default'] . "'  WHERE NombLeccion='" . $_POST['Leccion'] . "' AND NombSeccion LIKE 'NULL';";
        } else {
            $sqlUpdate = "UPDATE " . $_POST['Categoria'] . " SET Puesto = Puesto + 1 WHERE Puesto >= '" . $_POST['Puesto'] . "' AND CodiMate = " . $_POST['Codigo'] . ";";
            mysqli_query($conn, $sqlUpdate);

            $sqlInsert = "INSERT INTO " . $_POST['Categoria'] . " (Puesto,CodiMate,Materia,Seccion,NombModulo,NombLeccion,NombSeccion,Contenido,Creador,idCreador) VALUES ('" . $_POST['Puesto'] . "','" . $_POST['Codigo'] . "','" . $_POST['Nombre'] . "','" . $_POST['TSeccion'] . "','" . $_POST['Modulo'] . "','" . $_POST['Leccion'] . "','" . $_POST['Seccion'] . "','" . $_POST['Default'] . "','" . $_POST['tipoCreador'] . "','" . $_POST['idCreador'] . "');";
        }
    } else {
        if ($_POST['Default'] != 'Mantener') {
            $sqlInsert = "UPDATE " . $_POST['Categoria'] . " SET NombSeccion='" . $_POST['Seccion'] . "', Seccion='" . $_POST['TSeccion'] . "',Contenido ='" . $_POST['Default'] . "'  WHERE Orden='" . $_POST['Orden'] . "' AND CodiMate = " . $_POST['Codigo'] . ";";
        } else {
            $sqlInsert = "UPDATE " . $_POST['Categoria'] . " SET NombSeccion='" . $_POST['Seccion'] . "'  WHERE Orden='" . $_POST['Orden'] . "' AND CodiMate = " . $_POST['Codigo'] . ";";
        }
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
