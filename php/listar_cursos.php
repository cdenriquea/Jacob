<?php
	
	include 'conectar.php';

	//generamos la consulta
	$sql = "SELECT c.CodiCurs,c.Categoria,c.NombCurs,c.img,c.Informacion,i.Progreso,i.Evaluacion FROM cursos AS c INNER JOIN insccurs AS i ON (i.CodiCurs = c.CodiCurs) WHERE i.CodiEstu =".$_POST['valorBusqueda']." AND i.estado = 1;";
	mysqli_set_charset($conn, "utf8"); 

	if(!$result = mysqli_query($conn, $sql)) die();
	
	$numRows = mysqli_num_rows($result);

	if($numRows == 0){
		echo '[{"message":"false"}]';
	}else{
		$paises = array(); 

		while($row = mysqli_fetch_array($result)) 
		{ 
			$message="OK";
		    $id=$row['CodiCurs'];
		    $nombre=$row['NombCurs'];
			$categoria = $row['Categoria'];
			$img=$row['img'];
			$info=$row['Informacion'];
			$progre=$row['Progreso'];
			$Evaluacion=$row['Evaluacion'];
			
		    

		    $paises[] = array('id'=> $id, 'nombre'=> $nombre, 'categoria' => $categoria,'img'=> $img, 'info'=> $info, 'progre'=> $progre,'Evaluacion'=> $Evaluacion);

		}
		    
		$close = mysqli_close($conn) 
		or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
		  
		$json_string = json_encode($paises);
		echo $json_string;
	}

	






?>