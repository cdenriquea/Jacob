<?php
	
	include 'conectar.php';

	//generamos la consulta
	$sql = "SELECT c.Producto,c.Modelo,c.Informacion,c.Imagen,c.Precio FROM tienda AS c WHERE c.Disponible = 1";
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
		    $Producto=$row['Producto'];
		    $Modelo=$row['Modelo'];
			$Informacion=$row['Informacion'];
			$Imagen=$row['Imagen'];
			$Precio=$row['Precio'];
	

		    $paises[] = array('Producto'=> $Producto, 'Modelo'=> $Modelo, 'Informacion'=> $Informacion, 'Imagen'=> $Imagen, 'Precio'=> $Precio);

		}
		    
		$close = mysqli_close($conn) 
		or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
		  
		$json_string = json_encode($paises);
		echo $json_string;
	}

	






?>