<?php
	include 'conectar.php';
	
	$query = "SELECT * FROM usuarios WHERE NumeDocu='".$_POST['NumeDocu']."' OR EmaiUsua='".$_POST['EmaiUsua']."';";

	mysqli_set_charset($conn, "utf8"); //formato de datos utf8

	if(!$result = mysqli_query($conn, $query)) die();

	$numRows = mysqli_num_rows($result);

	if($numRows == 0){
		$sqlInsertUsua = "INSERT INTO usuarios (CodiUsua,TipoDocu,NumeDocu,Nom1Usua,DireUsua,Pais,Departamento,Municipio,TeleUsua,EmaiUsua,FotoUsua,TipoUsua,Password,GeneUsua,EdadUsua,FechDigi) VALUES (NULL,'1',".$_POST['NumeDocu'].",'".$_POST['NombUsua']."','".$_POST['DireUsua']."','".$_POST['Pais']."','".$_POST['Depart']."','".$_POST['Munici']."',".$_POST['TeleUsua'].",'".$_POST['EmaiUsua']."','1',2,(select md5 ('".$_POST['password']."')),'0',".$_POST['EdadUsua'].",CURDATE());";

		//echo $sqlInsertDeta;				
		if (mysqli_query($conn, $sqlInsertUsua)) {
			if(mysqli_affected_rows($conn)>0){
				echo '[{"message":"true"}]';
			}else{
				echo '[{"message":"false"}]';
			}
		}
	}else{
		echo "false2";
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