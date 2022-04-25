<?php
	
	include 'conectar.php';

	//generamos la consulta
	$sql = "SELECT c.Codigo,c.Nombre,c.Semestre,c.Programa,c.Modulos FROM materias AS c WHERE c.Estado = 1";
	mysqli_set_charset($conn, "utf8"); 

	if(!$result = mysqli_query($conn, $sql)) die();
	
	$numRows = mysqli_num_rows($result);

	if($numRows == 0){
		echo '[{"message":"false"}]';
	}else{
		$materias = array(); 

		while($row = mysqli_fetch_array($result)) 
		{ 
			$message="OK";
		    $Codigo=$row['Codigo'];
		    $Nombre=$row['Nombre'];
			$Semestre=$row['Semestre'];
			$Programa=$row['Programa'];
			$Modulos=$row['Modulos'];
					    
		    $materias[] = array('Codigo'=> $Codigo, 'Nombre'=> $Nombre, 'Semestre'=> $Semestre, 'Programa'=> $Programa, 'Modulos' => $Modulos);

		}
		    
		$close = mysqli_close($conn) 
		or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
		  
		$json_string = json_encode($materias);
		echo $json_string;
	}

	






?>