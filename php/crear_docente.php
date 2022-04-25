<?php
	include 'conectar.php';
	
	$query = "SELECT * FROM usuarios WHERE NumeDocu='".$_POST['NumeDocu']."' OR EmaiUsua='".$_POST['EmaiUsua']."';";

	mysqli_set_charset($conn, "utf8"); //formato de datos utf8

	if(!$result = mysqli_query($conn, $query)) die();

	$numRows = mysqli_num_rows($result);

	if($numRows == 0){
		$sqlInsertUsua = "INSERT INTO usuarios (CodiUsua,TipoDocu,NumeDocu,Nom1Usua,TeleUsua,EmaiUsua,FotoUsua,TipoUsua,Password,GeneUsua,EdadUsua,Profesion,Especializacion,Maestria,Doctorado,Perfil,Sede,FechDigi) VALUES (NULL,'1',".$_POST['NumeDocu'].",'".$_POST['NombUsua']."',".$_POST['TeleUsua'].",'".$_POST['EmaiUsua']."','".$_POST['Foto']."',3,(select md5 ('".$_POST['password']."')),'0',".$_POST['EdadUsua'].",'".$_POST['Profesion']."','".$_POST['Especializacion']."','".$_POST['Maestria']."','".$_POST['Doctorado']."','".$_POST['Perfil']."','".$_POST['Sede']."',CURDATE());";

		//echo $sqlInsertDeta;				
		if (mysqli_query($conn, $sqlInsertUsua)) {
			if(mysqli_affected_rows($conn)>0){
				echo '[{"message":"true"}]';
			}else{
				echo '[{"message":"false"}]';
			}
		}
	}else{
		echo "false2";
	}


?>