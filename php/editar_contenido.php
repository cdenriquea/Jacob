<?php
	include 'conectar.php';
    
    $sqlUpdate = "UPDATE " . $_POST['Categoria'] . " SET Contenido = '".$_POST['Contenido']."' WHERE Orden='".$_POST['idContenido']."' AND CodiMate = ".$_POST['Codigo'].";";

    if (mysqli_query($conn, $sqlUpdate)) {
        if(mysqli_affected_rows($conn)>0){
            echo '[{"message":"true"}]';
        }else{
            echo '[{"message":"false"}]';
        }
    }

	$conn->close();



?>