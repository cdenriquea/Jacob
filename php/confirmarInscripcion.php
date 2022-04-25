<?php
	include 'conectar.php';
	
		$sqlInsertUsua = "UPDATE insccurs SET estado=1 WHERE CodiInsc = ".$_POST['valorBusqueda'].";";

		//echo $sqlInsertDeta;				
		if (mysqli_query($conn, $sqlInsertUsua)) {
			if(mysqli_affected_rows($conn)>0){
				echo '[{"message":"true"}]';
			}else{
				echo '[{"message":"false"}]';
			}
		}




?>