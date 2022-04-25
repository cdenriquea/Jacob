<?php
	include 'conectar.php';
	
	$query = "SELECT * FROM programas WHERE Nombre='".$_POST['Nombre']."';";

	mysqli_set_charset($conn, "utf8"); //formato de datos utf8

	if(!$result = mysqli_query($conn, $query)) die();

	$numRows = mysqli_num_rows($result);

	if($numRows == 0){
		$sqlInsertProg = "INSERT INTO programas (Nombre,Tipo,Modalidad,NumSemestres) VALUES ('".$_POST['Nombre']."','".$_POST['Tipo']."','".$_POST['Modalidad']."',".$_POST['NumSemestres'].");";

		//echo $sqlInsertDeta;				
		if (mysqli_query($conn, $sqlInsertProg)) {
			if(mysqli_affected_rows($conn)>0){
				echo '[{"message":"true"}]';
			}else{
				echo '[{"message":"false"}]';
			}
		}
	}else{
		echo '[{"message":"false2"}]';
	}


?>