<?php
include 'conectar.php';

$sqlprogre = "UPDATE inscmat SET estado=" . $_POST['estado'] . " WHERE CodiCurs = " . $_POST['idMaterias'] . "  AND  CodiEstu = " . $_POST['idUsua'] . " AND Semestre = " . $_POST['Semestre'] . "; ";
//echo $sqlInsertDeta;				
if (mysqli_query($conn, $sqlprogre)) {
    if (mysqli_affected_rows($conn) > 0) {
        echo '[{"message":"true"}]';
    } else {
        echo '[{"message":"false"}]';
    }
}
