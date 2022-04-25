<?php
	session_start();

	$sesion = "[";
	$sesion = $sesion.'{"id":"'.$_SESSION['user_session2'].'", ';
	$sesion = $sesion.'"name":"'.$_SESSION['user_name'].'", ';
	$sesion = $sesion.'"usu_tipo":"'.$_SESSION['user_tipo'].'", ';
    $sesion = $sesion.'"usu_programa":"'.$_SESSION['user_programa'].'", ';
    $sesion = $sesion.'"usu_semestre":"'.$_SESSION['user_semestre'].'", ';
	$sesion = $sesion.'"emai_usua":"'.$_SESSION['user_emai'].'"} ';
	$sesion = $sesion."]";

	echo $sesion;
?>