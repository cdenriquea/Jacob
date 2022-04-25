<?php 

include 'conectar.php';

//generamos la consulta
$sql = "SELECT * FROM materias WHERE Programa = '".$_POST['Programa']."';";
mysqli_set_charset($conn, "utf8"); //formato de datos utf8

if(!$result = mysqli_query($conn, $sql)) die();

$materias = array(); //creamos un array

while($row = mysqli_fetch_array($result)) 
{ 
    $Codigo=$row['Codigo'];
    $Nombre=$row['Nombre'];
  
    

    $materias[] = array('Codigo'=> $Codigo, 'Nombre'=> $Nombre);

}
    
//desconectamos la base de datos
$close = mysqli_close($conn) 
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
  

//Creamos el JSON
$json_string = json_encode($materias);
echo $json_string;


?>