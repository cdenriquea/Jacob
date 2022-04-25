<?php
include 'conectar.php';

$sqlprogre = "UPDATE nivelacion SET Progreso=" . $_POST['progre'] . " WHERE Tema= '" . $_POST['Tema'] . "' AND MateriaPrev= '" . $_POST['MateriaPrev'] . "' AND  Materia= '" . $_POST['Materia'] . "' AND CodiEstu = " . $_POST['idUsua'] . "; ";



//echo $sqlInsertDeta;				
if (mysqli_query($conn, $sqlprogre)) {
    if (mysqli_affected_rows($conn) > 0) {
        echo '[{"message":"true"}]';
    } else {
        echo '[{"message":"false"}]';
    }
}
