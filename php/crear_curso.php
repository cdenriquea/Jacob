<?php
include 'conectar.php';

$query = "SELECT * FROM cursos WHERE NombCurs ='" . $_POST['Nombre'] . "';";

mysqli_set_charset($conn, "utf8"); //formato de datos utf8

if (!$result = mysqli_query($conn, $query)) die();

$numRows = mysqli_num_rows($result);

if ($numRows == 0) {

  $OBJETIVOS = $_POST['Objetivos'] . "</p>" . $_POST['Fundamentos'];
  $DOCENTE = $_POST['Nomb_Docente'] . "</p>" . $_POST['Bienvenida'];

  $sqlInsertCurs = "INSERT INTO cursos (NombCurs,Categoria,Precio,Informacion,Descripcion,Fecha,img) VALUES ('" . $_POST['Nombre'] . "','" . $_POST['Categoria'] . "','" . $_POST['Precio'] . "','" . $_POST['Informacion'] . "','" . $_POST['Descripcion'] . "',CURDATE(),'imagen.jpg');";
  mysqli_query($conn, $sqlInsertCurs);
  $Id = mysqli_insert_id($conn);

  if ($Id != 0) {
    $sqlInsert = "INSERT INTO temas_cursos (Puesto,CodiMate,Materia,Seccion,NombModulo,NombLeccion,NombSeccion,Contenido) VALUES (1,'{$Id}','" . $_POST['Nombre'] . "','Objetivos','INTRODUCCION','Bienvenid@','Objetivos','" . $_POST['Objetivos'] . "');";
    $sqlInsert .= "INSERT INTO temas_cursos (Puesto,CodiMate,Materia,Seccion,NombModulo,NombLeccion,NombSeccion,Contenido) VALUES (2,'{$Id}','" . $_POST['Nombre'] . "','Equipo','INTRODUCCION','Bienvenid@','Conoce a tu docente','" . $_POST['Nomb_Docente'] . "')";
  }


  if ($conn->multi_query($sqlInsert) === TRUE) {
    echo '[{"message":"true"}]';
  } else {
    echo "Error: " . $sqlInsert . "<br>" . $conn->error;
    echo '[{"message":"false"}]';
  }
} else {
  echo '[{"message":"false2"}]';
}

$conn->close();
