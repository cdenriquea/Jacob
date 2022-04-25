<?php
	include 'conectar.php';
	
	$query = "SELECT * FROM materias WHERE Nombre='".$_POST['Nombre']."';";

	mysqli_set_charset($conn, "utf8"); //formato de datos utf8

	if(!$result = mysqli_query($conn, $query)) die();

	$numRows = mysqli_num_rows($result);

	if($numRows == 0){
       
    $OBJETIVOS = $_POST['Objetivos']."</p>".$_POST['Fundamentos'];
    $DOCENTE = $_POST['Nomb_Docente']."</p>".$_POST['Bienvenida'];
    $HORARIO = $_POST['Horario'];

		$sqlInsertMate = "INSERT INTO materias (Nombre,Programa,Semestre,Categoria,Creditos,Prerequisito,Descripcion,MateriaPrev,TemaPrev,Sede,Jornada,Fecha,img) VALUES ('".$_POST['Nombre']."','".$_POST['Programa']."',".$_POST['Semestre'].",'".$_POST['Categoria']."','".$_POST['Creditos']."','".$_POST['Prerequisito']."','".$_POST['Descripcion']."','".$_POST['MateriaPrev']."','".$_POST['TemaPrev']."','".$_POST['Sede']."','".$_POST['Jornada']."',CURDATE(),'imagen.jpg');";
    mysqli_query($conn, $sqlInsertMate);
    $Id = mysqli_insert_id($conn);

    if($Id != 0){
        $sqlInsert = "INSERT INTO temas_materias (Puesto,CodiMate,Materia,Seccion,NombModulo,NombLeccion,NombSeccion,Contenido) VALUES (1,'{$Id}','" . $_POST['Nombre'] . "','Objetivos','INTRODUCCION','Bienvenid@','Objetivos','{$OBJETIVOS}');";
        $sqlInsert .= "INSERT INTO temas_materias (Puesto,CodiMate,Materia,Seccion,NombModulo,NombLeccion,NombSeccion,Contenido) VALUES (2,'{$Id}','" . $_POST['Nombre'] . "','Equipo','INTRODUCCION','Bienvenid@','Conoce a tu docente','{$DOCENTE}');";
        $sqlInsert .= "INSERT INTO temas_materias (Puesto,CodiMate,Materia,Seccion,NombModulo,NombLeccion,NombSeccion,Contenido) VALUES (3,'{$Id}','" . $_POST['Nombre'] . "','Horario','INTRODUCCION','Bienvenid@','Horario y Cronograma','{$HORARIO}')";
    }


    if ($conn->multi_query($sqlInsert) === TRUE) {
            echo '[{"message":"true"}]';
          } else {
            echo "Error: " . $sqlInsert . "<br>" . $conn->error;
            echo '[{"message":"false"}]';
          }
          
     
	}else{
		echo '[{"message":"false2"}]';
	}

	$conn->close();
