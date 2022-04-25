<?php
	
	include 'conectar.php';

	//generamos la consulta
	$sql = "SELECT i.CodiInsc,c.NombCurs,u.NumeDocu,u.Nom1Usua FROM insccurs AS i
			INNER JOIN cursos AS c ON (i.CodiCurs = c.CodiCurs)
			INNER JOIN usuarios AS u ON (i.CodiEstu = u.CodiUsua)
			WHERE i.estado = 0;";
	mysqli_set_charset($conn, "utf8"); 

	if(!$result = mysqli_query($conn, $sql)) die();
	
	$numRows = mysqli_num_rows($result);

	if($numRows == 0){
		echo '[{"message":"false"}]';
	}else{
		$paises = array(); 

		while($row = mysqli_fetch_array($result)) 
		{ 
			$CodiInsc=$row['CodiInsc'];
		    $NombCurs=$row['NombCurs'];
		    $NumeDocu=$row['NumeDocu'];
		    $Nom1Usua=$row['Nom1Usua'];
		    

		    $paises[] = array('CodiInsc'=> $CodiInsc, 'NombCurs'=> $NombCurs, 'NumeDocu'=> $NumeDocu, 'Nom1Usua'=> $Nom1Usua);

		}
		    
		$close = mysqli_close($conn) 
		or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
		  
		$json_string = json_encode($paises);
		echo $json_string;
	}

	






?>