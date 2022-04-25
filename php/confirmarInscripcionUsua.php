<?php
	include 'conectar.php';
	 
		$sqlInsertUsua = "INSERT INTO insccurs(CodiInsc, CodiCurs, CodiEstu, estado) VALUES (NULL,".$_POST['valorBusqueda'].",".$_POST['Usua'].",0);";

		//echo $sqlInsertDeta;				
		if (mysqli_query($conn, $sqlInsertUsua)) {
			if(mysqli_affected_rows($conn)>0){
				echo '[{"message":"true"}]';
			}else{
				echo '[{"message":"false"}]';
			}
		}




?>