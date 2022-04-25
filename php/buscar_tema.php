<?php 

include 'conectar.php';

//generamos la consulta
$sql = "SELECT * FROM temas_materias WHERE Materia = '".$_POST['Materia']."';";
mysqli_set_charset($conn, "utf8"); //formato de datos utf8

if(!$result = mysqli_query($conn, $sql)) die();

$temas = array(); //creamos un array

while($row = mysqli_fetch_array($result)) 
{ 
    $Codigo=$row['CodiMate'];
    $Materia=$row['Materia'];
    $Modulo=$row['NombModulo'];
  
    

    $temas[] = array('Codigo'=> $Codigo, 'Materia'=> $Materia, 'Modulo'=> $Modulo);

}
    
//desconectamos la base de datos
$close = mysqli_close($conn) 
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
  

//Creamos el JSON
$json_string = json_encode($temas);
echo $json_string;


?>