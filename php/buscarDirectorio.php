<?php

function getDirContents($dir, &$results = array())
{
	$files = scandir($dir);

	foreach ($files as $key => $value) {
		$path = realpath($dir . DIRECTORY_SEPARATOR . $value);
		if (!is_dir($path)) {
			$results[] = $path;
		} else if ($value != "." && $value != "..") {
			getDirContents($path, $results[$path]);
			$results[] = $path;
		}
	}

	return $results;
}

$files = getDirContents('C:/xampp/htdocs/Jacob/docs/Cursos');

echo json_encode($files);
