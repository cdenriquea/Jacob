<?php

	include 'conectar.php';

	$sql = "SELECT * FROM usuarios WHERE NumeDocu=".$_POST['valorBusqueda']." AND Password = (select md5('".$_POST['valorBusqueda2']."'));";
	$result = mysqli_query($conn, $sql);

	$mensaje = "";

	if (mysqli_num_rows($result) > 0) {
	  // output data of each row

	  session_start();

	  while($row = mysqli_fetch_assoc($result)) {	  	
	  	$_SESSION['user_session2'] = $row['CodiUsua'];	
		$_SESSION['user_name'] = $row['Nom1Usua'];			
		$_SESSION['user_tipo'] = $row['TipoUsua'];		
		$_SESSION['user_emai'] = $row['EmaiUsua'];
		$_SESSION['user_semestre']	= $row['Semestre'];
		$_SESSION['user_programa']	= $row['Programa'];

		//$_SESSION['avatar'] = $row['avatar'];
		
	  	$mensaje .= '[{"login":"true","tipo":"'.$row['TipoUsua'].'"}]';
	  }
	} else {
	  $mensaje .= '[{"login":"false","tipo":""}]';	  
	}

	echo $mensaje;
	
?>