<?php
	include 'conectar.php';
	
	$query = "SELECT u.TipoDocu,u.NumeDocu,u.Nom1Usua,u.DireUsua,u.Pais,u.Departamento,u.Municipio,u.TeleUsua,u.EmaiUsua,u.FotoUsua,u.TipoUsua,u.Password,u.GeneUsua,u.EdadUsua,u.FechDigi FROM usuarios WHERE u.CodiUsua ='".$_POST['NumeDocu']."';";

	mysqli_set_charset($conn, "utf8"); //formato de datos utf8

	if(!$result = mysqli_query($conn, $query)) die();

	$numRows = mysqli_num_rows($result);
	
	if($numRows == 0){
		echo '[{"message":"false"}]';
	}else{
		$datos = array(); 

		while($row = mysqli_fetch_array($result)) 
		{ 
			$message="OK";
		    $NomUsua=$row['CodiCurs'];
		    $TeleUsua=$row['NombCurs'];
			$EmaiUsua=$row['img'];
			$Password=$row['Informacion'];
			$NumeDocu=$row['Progreso'];
			$Edad=$row['Evaluacion'];
			$Edad=$row['Evaluacion'];
			$Edad=$row['Evaluacion'];
			$Edad=$row['Evaluacion'];
			
		    

		    $datos[] = array('id'=> $id, 'nombre'=> $nombre, 'img'=> $img, 'info'=> $info, 'progre'=> $progre,'Evaluacion'=> $Evaluacion);

		}
		    
		$close = mysqli_close($conn) 
		or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
		  
		$json_string = json_encode($datos);
		echo $json_string;
	}



?>