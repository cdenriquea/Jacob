<?php
	include 'conectar.php';
	
	$query = "SELECT * FROM nivelacion WHERE CodiEstu=".$_POST['CodiEstu']." AND Materia='".$_POST['Materia']. "' AND MateriaPrev='" . $_POST['MateriaPrev'] . "' AND Tema='" . $_POST['Tema'] . "';";

	mysqli_set_charset($conn, "utf8"); //formato de datos utf8

	if(!$result = mysqli_query($conn, $query)) die();

	$numRows = mysqli_num_rows($result);

	if($numRows == 0){
		$sqlInsertNiv = "INSERT INTO nivelacion (CodiEstu,Materia,MateriaPrev,Tema,Progreso) VALUES (" . $_POST['CodiEstu'] . ",'" . $_POST['Materia'] . "','" . $_POST['MateriaPrev'] . "','".$_POST['Tema']."','".$_POST['Progreso']."');";

		//echo $sqlInsertDeta;				
		if (mysqli_query($conn, $sqlInsertNiv)) {
			if(mysqli_affected_rows($conn)>0){
				echo '[{"message":"true"}]';
			}else{
				echo '[{"message":"false"}]';
			}
        error_reporting(E_ALL);
		}
	}else{
		echo "false2";
	}


