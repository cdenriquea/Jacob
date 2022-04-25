<?php

$Programas = array();

$categoria = "Administración de Empresas";
$curso = "Curso Nuevo";
$dir = 'C:/xampp/htdocs/Jacob/docs/Cursos'."/". $categoria."/".$categoria;
if ($handle = opendir($dir)) {
	while (false !== ($entry = readdir($handle))) {
		if ($entry != "." && $entry != "..") {
			$Programas[] = $entry;
		}
	}
	closedir($handle);
}


$json = json_encode($Programas);
echo $json;
