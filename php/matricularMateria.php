<?php
	include 'conectar.php';
	
		$sqlInsertUsua = "UPDATE inscmat SET estado=-1 WHERE CodiCurs = ".$_POST['valorBusqueda']. "  AND  CodiEstu = " . $_POST['Usua'] . ";";

		//echo $sqlInsertDeta;				
		if (mysqli_query($conn, $sqlInsertUsua)) {
			if(mysqli_affected_rows($conn)>0){
				echo '[{"message":"true"}]';
			}else{
				echo '[{"message":"false"}]';
			}
		}
