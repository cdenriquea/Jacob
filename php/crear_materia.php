<?php
	include 'conectar.php';
	
	$query = "SELECT * FROM materias WHERE Nombre='".$_POST['Nombre']."';";

	mysqli_set_charset($conn, "utf8"); //formato de datos utf8

	if(!$result = mysqli_query($conn, $query)) die();

	$numRows = mysqli_num_rows($result);

	if($numRows == 0){
		$sqlInsertMate = "INSERT INTO materias (Nombre,Programa,Semestre,Categoria,Creditos,Prerequisito,Descripcion,MateriaPrev,TemaPrev,Fundamentos,Objetivos,Nomb_Docente,Bienvenida,Sede,Jornada,Horario,Fecha) VALUES ('".$_POST['Nombre']."','".$_POST['Programa']."',".$_POST['Semestre'].",'".$_POST['Categoria']."','".$_POST['Creditos']."','".$_POST['Prerequisito']."','".$_POST['Descripcion']."','".$_POST['MateriaPrev']."','".$_POST['TemaPrev']."','".$_POST['Fundamentos']."','".$_POST['Objetivos']."','".$_POST['Nomb_Docente']."','".$_POST['Bienvenida']."','".$_POST['Sede']."','".$_POST['Jornada']."','".$_POST['Horario']."',CURDATE());";
        



		//echo $sqlInsertDeta;				
		if (mysqli_query($conn, $sqlInsertMate)) {
			if(mysqli_affected_rows($conn)>0){
				echo '[{"message":"true"}]';
			}else{
				echo '[{"message":"false"}]';
			}
		}
	}else{
		echo '[{"message":"false2"}]';
	}

	

	/*
	$query2 = "insert into barrio(nom_bar,cod_sec) values('".$_POST['nom_bar']."',".$_POST['cod_sec'].")";

	$resultado = pg_query($conexion, $query) or die("Error en la Consulta SQL");

	$numReg = pg_num_rows($resultado);

 	$mensaje="";

	if($numReg==0){
		$resultado2 = pg_query($conexion, $query2) or die("Error en la Consulta SQL");		
		if($resultado2){
			$mensaje = "true";
		}else{
			$mensaje = "false2";	
		}
	}else{
		$mensaje = "false";
	}

	echo $mensaje;

	pg_close($conexion);*/


?>