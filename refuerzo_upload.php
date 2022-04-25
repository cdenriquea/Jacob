<?php

/* Getting file name */
$filename1 =$_POST['Nombre']."_PDF.pdf";
$filename2 = $_POST['Nombre']."_VIDEO.mp4";


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



$response = array();

/* Subir Archivos*/
if(move_uploaded_file($_FILES['Archivo']['tmp_name'],$location.$filename1)){
   $response1['name'] = $filename1; 
} else{
   $response1['name'] = "File not uploaded.";
}

if(move_uploaded_file($_FILES['Video']['tmp_name'],$location.$filename2)){
   $response2['name'] = $filename2; 
} else{
   $response2['name'] = "File not uploaded.";
}



$array = [
   "name1" => $filename1,
   "name2" => $filename2,
];

echo json_encode($array);
exit;

?>