<?php 

include 'conectar.php';

//generamos la consulta
$sql = "SELECT * FROM categorias";
mysqli_set_charset($conn, "utf8"); 

if(!$result = mysqli_query($conn, $sql)) die();

$programas = array(); 

while($row = mysqli_fetch_array($result)) 
{ 
    $Nombre=$row['Nombre'];
    $Codigo=$row['Codigo'];
    

    $categorias[] = array('Nombre'=> $Nombre, 'Codigo'=> $Codigo);

}
    
$close = mysqli_close($conn) 
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
  
$json_string = json_encode($categorias);
echo $json_string;
    

?>