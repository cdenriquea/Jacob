<?php 

include 'conectar.php';

//generamos la consulta
$sql = "SELECT * FROM pais";
mysqli_set_charset($conn, "utf8"); 

if(!$result = mysqli_query($conn, $sql)) die();

$paises = array(); 

while($row = mysqli_fetch_array($result)) 
{ 
    $id=$row['cod_pai'];
    $nombre=$row['nom_pai'];
    $codigo=$row['codigo'];
    

    $paises[] = array('id'=> $id, 'nombre'=> $nombre, 'codigo'=> $codigo);

}
    
$close = mysqli_close($conn) 
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
  
$json_string = json_encode($paises);
echo $json_string;
    

?>