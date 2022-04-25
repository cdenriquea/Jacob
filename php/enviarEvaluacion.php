<?php
	include 'conectar.php';
	
		$sqlprogre = "UPDATE insccurs SET evaluacion=".$_POST['nota']." WHERE CodiCurs = ".$_POST['idCurso']." AND CodiEstu = ".$_POST['idUsua']."; ";
        mysqli_set_charset($conn, "utf8");
		//echo $sqlInsertDeta;				
		if (mysqli_query($conn, $sqlprogre)) {
			if(mysqli_affected_rows($conn)>0){
				echo '[{"message":"true"}]';
			}else{
				echo '[{"message":"false"}]';
			}
		}




?>