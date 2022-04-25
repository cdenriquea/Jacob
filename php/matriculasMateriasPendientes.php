<?php
	
	include 'conectar.php';

	//generamos la consulta
	$sql = "SELECT i.CodiEstu,i.estado,c.Nombre,c.Programa,c.Semestre,u.NumeDocu,u.Nom1Usua FROM inscmat AS i
			INNER JOIN materias AS c ON (i.CodiCurs = c.Codigo)
			INNER JOIN usuarios AS u ON (i.CodiEstu = u.CodiUsua)
			WHERE i.estado = -1;";
	mysqli_set_charset($conn, "utf8"); 

	if(!$result = mysqli_query($conn, $sql)) die();
	
	$numRows = mysqli_num_rows($result);

	if($numRows == 0){
		echo '[{"message":"false"}]';
	}else{
		$paises = array(); 

		while($row = mysqli_fetch_array($result)) 
		{ 
			$CodiEstu=$row['CodiEstu'];
		    $NombMat=$row['Nombre'];
		    $NumeDocu=$row['NumeDocu'];
		    $NomUsua=$row['Nom1Usua'];
            $Semestre = $row['Semestre'];
            $Programa = $row['Programa'];
            $Estado = $row['estado'];
		    

		    $paises[] = array('CodiEstu'=> $CodiEstu, 'NombMat'=> $NombMat, 'Semestre' => $Semestre,'Programa' => $Programa, 'Estado' => $Estado, 'NumeDocu'=> $NumeDocu, 'NomUsua'=> $NomUsua);

		}
		    
		$close = mysqli_close($conn) 
		or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
		  
		$json_string = json_encode($paises);
		echo $json_string;
	}
