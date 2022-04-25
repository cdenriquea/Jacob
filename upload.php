<?php

/* Getting file name */
$filename1 ="CONTENIDO.pdf";
$filename2 = "LIBRO GUIA.pdf";
$filename3 = "ARCHIVO.pdf";
$filename4 = "CALENDARIO.pdf";
$filename5 = $_FILES["fotoDoc"]["name"];
$filename6 = "IMAGEN.jpg";


/* Locacion */
$categoria = $_POST['Categoria'];
$folder1 = $_POST['Folder1'];
$folder2 = $_POST['Folder2'];

if (!file_exists("docs/".$categoria."/".$folder1)) {
    mkdir("docs/".$categoria."/".$folder1, 0700, true);
}

if (!file_exists("docs/".$categoria."/".$folder1."/".$folder2)) {
   mkdir("docs/".$categoria."/".$folder1."/".$folder2, 0700, true);
}

$location = "docs/".$categoria."/".$folder1."/".$folder2."/";

$locationPh = "fotos/";

$response = array();

/*Cambiar tamaño de imagen*/

   $maxDimW = 720;
   $maxDimH = 900;
   list($width, $height, $type, $attr) = getimagesize($_FILES['Imagen']['tmp_name']);
   if ($width > $maxDimW || $height > $maxDimH
   ) {
      $target_filename = $_FILES['Imagen']['tmp_name'];
      $fn = $_FILES['Imagen']['tmp_name'];
      $size = getimagesize($fn);
      $ratio = $size[0] / $size[1]; // width/height
      //if ($ratio > 1) {
         //$width = $maxDimW;
         //$height = $maxDimH / $ratio;
      //} else {
         //$width = $maxDimW * $ratio;
         //$height = $maxDimH;
      //}
      $width = $maxDimW;
      $height = $maxDimH;
      $src = imagecreatefromstring(file_get_contents($fn));
      $dst = imagecreatetruecolor($width, $height);
      imagecopyresampled($dst, $src, 0, 0, 0, 0, $width, $height, $size[0], $size[1]);

      imagejpeg($dst, $target_filename); // adjust format as needed


   }


/* Subir Archivos*/
if(move_uploaded_file($_FILES['Contenido']['tmp_name'],$location.$filename1)){
   $response1['name'] = $filename1; 
} else{
   $response1['name'] = "File not uploaded.";
}

if(move_uploaded_file($_FILES['LibroGuia']['tmp_name'],$location.$filename2)){
   $response2['name'] = $filename2; 
} else{
   $response2['name'] = "File not uploaded.";
}

if(move_uploaded_file($_FILES['Archivo']['tmp_name'],$location.$filename3)){
   $response3['name'] = $filename3; 
} else{
   $response3['name'] = "File not uploaded.";
}

if(move_uploaded_file($_FILES['Calendario']['tmp_name'],$location.$filename4)){
   $response4['name'] = $filename4; 
} else{
   $response4['name'] = "File not uploaded.";
}

if(move_uploaded_file($_FILES['fotoDoc']['tmp_name'],$locationPh.$filename5)){
   $response5['name'] = $filename5; 
} else{
   $response5['name'] = "File not uploaded.";
}

if (move_uploaded_file($_FILES['Imagen']['tmp_name'], $location . $filename6)) {
   $response6['name'] = $filename6;
} else {
   $response6['name'] = "File not uploaded.";
}

$array = [
   "name1" => $filename1,
   "name2" => $filename2,
   "name3" => $filename3,
   "name4" =>  $filename4,
   "name5" =>  $filename5,
   "name6" =>  $filename6,
   
];

echo json_encode($array);
exit;

?>