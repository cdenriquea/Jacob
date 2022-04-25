<?php
include 'conectar.php';

$sqlprogre = "UPDATE inscmat SET Progreso=" . $_POST['progre'] . " WHERE CodiCurs = " . $_POST['idCurso'] . " AND CodiEstu = " . $_POST['idUsua'] . "; ";



//echo $sqlInsertDeta;				
if (mysqli_query($conn, $sqlprogre)) {
    if (mysqli_affected_rows($conn) > 0) {
        echo '[{"message":"true"}]';
    } else {
        echo '[{"message":"false"}]';
    }
}
