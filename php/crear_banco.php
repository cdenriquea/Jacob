<?php
	include 'conectar.php';
	
	$query = "SELECT * FROM banco_preguntas WHERE Enunciado='".$_POST['Enunciado']."';";

	mysqli_set_charset($conn, "utf8"); //formato de datos utf8

	if(!$result = mysqli_query($conn, $query)) die();

	$numRows = mysqli_num_rows($result);

	if($numRows == 0){
		$sqlInsertProg = "INSERT INTO banco_preguntas (Materia,Tema,Subtema,Enunciado,Explicacion,Opciones,Respuesta,Tiempo) VALUES ('".$_POST['Materia']."','".$_POST['Tema']."','".$_POST['Subtema']."','".$_POST['Enunciado']."','".$_POST['Explicacion']."','".$_POST['Opciones']."','".$_POST['Respuesta']."',".$_POST['Tiempo'].");";

		//echo $sqlInsertDeta;				
		if (mysqli_query($conn, $sqlInsertProg)) {
			if(mysqli_affected_rows($conn)>0){
				echo '[{"message":"true"}]';
			}else{
				echo '[{"message":"false"}]';
			}
		}
	}else{
		echo '[{"message":"false2"}]';
	}


?>