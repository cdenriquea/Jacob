<?php
include 'conectar.php';

$sqlInsertUsua = "UPDATE inscmat SET estado=1 WHERE estado = -1  AND  CodiEstu = " . $_POST['Dato'] . ";";

//echo $sqlInsertDeta;				
if (mysqli_query($conn, $sqlInsertUsua)) {
    if (mysqli_affected_rows($conn) > 0) {
        echo '[{"message":"true"}]';
    } else {
        echo '[{"message":"false"}]';
    }
}
