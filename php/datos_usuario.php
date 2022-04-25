<?php
	
	include 'conectar.php';

	//generamos la consulta
	$sql = "SELECT * FROM usuarios WHERE CodiUsua = " . $_POST['valorBusqueda'] . ";";
	mysqli_set_charset($conn, "utf8"); 

	if(!$result = mysqli_query($conn, $sql)) die();
	
	$numRows = mysqli_num_rows($result);

	if($numRows == 0){
		echo '[{"message":"false"}]';
	}else{
        $Docentes = array(); 
		while($row = mysqli_fetch_array($result)) 
		{ 
			$message="OK";    
		    $Docentes[] = array('Nom1Usua'=> $row['Nom1Usua'], 'NumeDocu' => $row['NumeDocu'], 'TeleUsua' => $row['TeleUsua'], 'DireUsua' => $row['DireUsua'], 'EdadUsua' => $row['EdadUsua'], 'Semestre' => $row['Semestre'],'Programa' => $row['Programa'], 'FotoUsua' => $row['FotoUsua'],'EmaiUsua' => $row['EmaiUsua'], 'TipoUsua' => $row['TipoUsua']);

		}
		$close = mysqli_close($conn) 
		or die("Ha sucedido un error inesperado en la desconexion de la base de datos");
		  
		$json_string = json_encode($Docentes);
		echo $json_string;
	}
