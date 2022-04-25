<?php
	include 'conectar.php';
	
	$query = "SELECT * FROM ".$_POST['Categoria']." WHERE NombModulo='".$_POST['Modulo']."' AND CodiMate = ".$_POST['Codigo'].";";

	mysqli_set_charset($conn, "utf8"); //formato de datos utf8

	if(!$result = mysqli_query($conn, $query)) die();

	$numRows = mysqli_num_rows($result);
if($numRows == 0){
     if($_POST['Tipo'] == 'edit'){
         $sqlInsert = "UPDATE ".$_POST['Categoria']." SET NombModulo='".$_POST['Modulo']."' WHERE NombModulo='".$_POST['modAux']."' AND CodiMate = ".$_POST['Codigo'].";";
     }
    else{
         $sqlInsert = "INSERT INTO ".$_POST['Categoria']." (Puesto,CodiMate,Materia,Seccion,NombModulo,NombLeccion,NombSeccion,Contenido) VALUES ('".$_POST['Puesto']."','".$_POST['Codigo']."','".$_POST['Nombre']."','Teoría','".$_POST['Modulo']."','NULL','NULL','NULL');";
    }  

   
    if (mysqli_query($conn, $sqlInsert)=== TRUE) {
        if(mysqli_affected_rows($conn)>0){
            echo '[{"message":"true"}]';
        }else{
            echo "Error: " . $sqlInsert . "<br>" . $conn->error;
            echo '[{"message":"false"}]';
        }
    }
}else{
    //echo "Error: " . $sqlInsert . "<br>" . $conn->error;
    echo '[{"message":"false2"}]';
}

	$conn->close();
