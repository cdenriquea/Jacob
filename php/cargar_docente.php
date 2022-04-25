<?php
	
	include 'conectar.php';

	//generamos la consulta
	$sql = "SELECT * FROM usuarios WHERE TipoUsua = '3' AND Nom1Usua = '".$_POST['NombreDoc']."';";
	mysqli_set_charset($conn, "utf8"); 

	if(!$result = mysqli_query($conn, $sql)) die();
	
	$numRows = mysqli_num_rows($result);

	if($numRows == 0){
		echo '[{"message":"false"}]';
	}else{
		$Docente = array(); 

		while($row = mysqli_fetch_array($result)) 
		{ 
			$message="OK";    
		    $Docente[] = array('EmaiUsua'=> $row['EmaiUsua'],'FotoUsua'=> $row['FotoUsua'], 'Profesion'=> $row['Profesion'],'Especializacion'=> $row['Especializacion'],'Maestria'=> $row['Maestria'], 'Doctorado'=> $row['Doctorado'],'Perfil'=> $row['Perfil'],'Sede'=> $row['Sede']);

		}
		    
		$close = mysqli_close($conn) 
		or die("Ha sucedido un error inesperado en la desconexion de la base de datos");
		  
		$json_string = json_encode($Docente);
		echo $json_string;
	}

	






?>