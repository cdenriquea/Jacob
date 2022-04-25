<?php 

include 'conectar.php';

//generamos la consulta
$sql = "SELECT * FROM municipios WHERE cod_dep = '".$_POST['id_depa']."';";
mysqli_set_charset($conn, "utf8"); //formato de datos utf8

if(!$result = mysqli_query($conn, $sql)) die();

$paises = array(); //creamos un array

while($row = mysqli_fetch_array($result)) 
{ 
    $id=$row['cod_mun'];
    $nombre=$row['nom_mun'];
    $codigo=$row['cod_dep'];
    

    $paises[] = array('id'=> $id, 'nombre'=> $nombre, 'codigo'=> $codigo);

}
    
//desconectamos la base de datos
$close = mysqli_close($conn) 
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
  

//Creamos el JSON
$json_string = json_encode($paises);
echo $json_string;


?>