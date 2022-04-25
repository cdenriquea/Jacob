<?php
//¿Esta es la Pregunta?</p>Respuesta 1A</p>Respuesta 1B</p>Respuesta 1C</p>Respuesta 1D</p>¿Esta es la Pregunta?</p>Respuesta 2A</p>Respuesta 2B</p>Respuesta 2C</p>Respuesta 2D</p>¿Esta es la Pregunta?</p>Respuesta 3A</p>Respuesta 3B</p>Respuesta 3C</p>Respuesta3D</p>¿Esta es la Pregunta?</p>Respuesta 4A</p>Respuesta 4B</p>Respuesta 4C</p>Respuesta4D</p>¿Esta es la Pregunta?</p>Respuesta 5A</p>Respuesta 5B</p>Respuesta 5C</p>Respuesta 5D</p>¿Esta es la Pregunta?</p>Respuesta 6A</p>Respuesta 6B</p>Respuesta 6C</p>Respuesta 6D</p>¿Esta es la Pregunta?</p>Respuesta 7A</p>Respuesta 7B</p>Respuesta 7C</p>Respuesta7D
include 'conectar.php';




$sqlUpdate = "UPDATE " . $_POST['Categoria'] . " SET Contenido = '" . $_POST['Contenido_Evaluacion'] . "' WHERE CodiMate = " . $_POST['Codigo'] . " AND Orden = " . $_POST['Id'] . ";";



if (mysqli_query($conn, $sqlUpdate) === TRUE) {
    if (mysqli_affected_rows($conn) > 0) {
        echo '[{"message":"true"}]';
    } else {
        echo '[{"message":"false2"}]';
    }
}

$conn->close();
