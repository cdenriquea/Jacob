<?php
	
	include 'conectar.php';

	//generamos la consulta
	$sql = "SELECT c.Codigo,c.Nombre,c.Descripcion,c.img,c.Modulos,i.Progreso,i.Evaluacion,i.Programa,i.Semestre,i.estado FROM materias AS c INNER JOIN inscmat AS i ON (i.CodiCurs = c.Codigo)  WHERE i.CodiEstu =".$_POST['valorBusqueda']." ;";
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
		    $id=$row['Codigo'];
		    $programa = $row['Programa'];
		    $semestre = $row['Semestre'];
		    $nombre=$row['Nombre'];
			$img=$row['img'];
			$info=$row['Descripcion'];
			$progre=$row['Progreso'];
		    $estado = $row['estado'];
			$Evaluacion=$row['Evaluacion'];
			$Modulos= $row['Modulos'];
		
			
		    

		    $paises[] = array('id'=> $id, 'programa' => $programa, 'semestre' => $semestre, 'estado' => $estado, 'nombre'=> $nombre, 'img'=> $img, 'info'=> $info, 'progre'=> $progre,'Evaluacion'=> $Evaluacion, 'Modulos' => $Modulos);

		}
		    
		$close = mysqli_close($conn) 
		or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
		  
		$json_string = json_encode($paises);
		echo $json_string;
	}
