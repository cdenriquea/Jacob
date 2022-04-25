<?php
include 'conectar.php';

$sqleditbanq = "UPDATE banco_preguntas SET Tema='". $_POST['Tema'] . "', Subtema='" . $_POST['Subtema'] . "', Enunciado='" . $_POST['Enunciado'] . "',  Explicacion='" . $_POST['Explicacion'] . "', Opciones='" . $_POST['Opciones'] . "',  Enunciado='" . $_POST['Enunciado'] . "',  Tiempo=" . $_POST['Tiempo'] . ", Respuesta='" . $_POST['Respuesta'] . "' WHERE CodBanc = " . $_POST['Codigo'] . "; ";


//echo $sqlInsertDeta;				
if (mysqli_query($conn, $sqleditbanq)) {
    if (mysqli_affected_rows($conn) > 0) {
        echo '[{"message":"true"}]';
    } else {
        echo '[{"message":"false"}]';
    }
}
