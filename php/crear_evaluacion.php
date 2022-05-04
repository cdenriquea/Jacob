<?php
//¿Esta es la Pregunta?</p>Respuesta 1A</p>Respuesta 1B</p>Respuesta 1C</p>Respuesta 1D</p>¿Esta es la Pregunta?</p>Respuesta 2A</p>Respuesta 2B</p>Respuesta 2C</p>Respuesta 2D</p>¿Esta es la Pregunta?</p>Respuesta 3A</p>Respuesta 3B</p>Respuesta 3C</p>Respuesta3D</p>¿Esta es la Pregunta?</p>Respuesta 4A</p>Respuesta 4B</p>Respuesta 4C</p>Respuesta4D</p>¿Esta es la Pregunta?</p>Respuesta 5A</p>Respuesta 5B</p>Respuesta 5C</p>Respuesta 5D</p>¿Esta es la Pregunta?</p>Respuesta 6A</p>Respuesta 6B</p>Respuesta 6C</p>Respuesta 6D</p>¿Esta es la Pregunta?</p>Respuesta 7A</p>Respuesta 7B</p>Respuesta 7C</p>Respuesta7D
include 'conectar.php';

$query = "SELECT * FROM " . $_POST['Categoria'] . " WHERE NombModulo='" . $_POST['Modulo'] . "' AND CodiMate = " . $_POST['Codigo'] . ";";

mysqli_set_charset($conn, "utf8"); //formato de datos utf8

if (!$result = mysqli_query($conn, $query)) die();

$numRows = mysqli_num_rows($result);
if ($numRows == 0) {
    if ($_POST['Tipo'] == 'edit') {
        $sqlInsert = "UPDATE " . $_POST['Categoria'] . " SET NombModulo='" . $_POST['Modulo'] . "' WHERE NombModulo='" . $_POST['modAux'] . "' AND CodiMate = " . $_POST['Codigo'] . ";";
    } else {
        $sqlInsert = "INSERT INTO " . $_POST['Categoria'] . " (Puesto,CodiMate,Materia,Seccion,NombModulo,NombLeccion,NombSeccion,Contenido,Creador,idCreador) VALUES ('" . $_POST['Puesto'] . "','" . $_POST['Codigo'] . "','" . $_POST['Nombre'] . "','Evaluacion','" . $_POST['Modulo'] . "','Evaluacion','Examen','','" . $_POST['tipoCreador'] . "','" . $_POST['idCreador'] . "');";
        $sqlInsert2 = "INSERT INTO " . $_POST['Categoria'] . " (Puesto,CodiMate,Materia,Seccion,NombModulo,NombLeccion,NombSeccion,Contenido,Creador,idCreador) VALUES ('" . $_POST['Puesto2'] . "','" . $_POST['Codigo'] . "','" . $_POST['Nombre'] . "','CalificacionE','" . $_POST['Modulo'] . "','Evaluacion', 'Calificacion Examen','Mensaje Despedida</p>B:Explicacion</p>C:Explicacion</p>D:Explicacion</p>B:Explicacion</p>A:Explicacion</p>B:Explicacion</p>D:Explicacion','" . $_POST['tipoCreador'] . "','" . $_POST['idCreador'] . "');";
    }


    if (mysqli_query($conn, $sqlInsert) === TRUE && mysqli_query($conn, $sqlInsert2) === TRUE) {
        if (mysqli_affected_rows($conn) > 0) {
            echo '[{"message":"true"}]';
        } else {
            echo "Error: " . $sqlInsert . "<br>" . $conn->error;
            echo '[{"message":"false"}]';
        }
    }
} else {
    echo "Error: " . $sqlInsert . "<br>" . $conn->error;
    echo '[{"message":"false2"}]';
}

$conn->close();
