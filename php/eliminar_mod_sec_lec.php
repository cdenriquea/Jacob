<?php

include 'conectar.php';
mysqli_set_charset($conn, "utf8");
switch ($_POST['Tipo']) {
    case "NombSeccion":
        $sqlCount = "SELECT * FROM " . $_POST['Categoria'] . "  WHERE NombLeccion='" . $_POST['Lec'] . "' AND NombModulo = '" . $_POST['Mod'] . "' AND CodiMate = " . $_POST['Codigo'] . ";";
        break;
    case "NombLeccion":
        $sqlCount = "SELECT * FROM " . $_POST['Categoria'] . "  WHERE NombLeccion ='" . $_POST['Nombre'] . "' AND NombModulo = '" . $_POST['Mod'] . "' AND CodiMate = " . $_POST['Codigo'] . ";";
        break;
    case "NombModulo":
        $sqlCount = "SELECT * FROM " . $_POST['Categoria'] . "  WHERE NombModulo='" . $_POST['Nombre'] . "' AND CodiMate = " . $_POST['Codigo'] . ";";
        break;
}

if (!$resultC = mysqli_query($conn, $sqlCount)) die();

$numRowsC = mysqli_num_rows($resultC);
$limit = $numRowsC - 1;

if ($numRowsC == 1) {
    switch ($_POST['Tipo']) {
        case "NombSeccion":
            $sqldelete = "UPDATE " . $_POST['Categoria'] . " SET NombSeccion ='NULL', Contenido='NULL'  WHERE NombSeccion = '" . $_POST['Nombre'] . "' AND NombLeccion = '" . $_POST['Lec'] . "' AND NombModulo = '" . $_POST['Mod'] . "' AND CodiMate = " . $_POST['Codigo'] . "; ";
            break;
        case "NombLeccion":
            $sqldelete = "UPDATE " . $_POST['Categoria'] . " SET NombLeccion='NULL', NombSeccion ='NULL', Contenido='NULL'  WHERE " . $_POST['Tipo'] . " = '" . $_POST['Nombre'] . "' AND NombModulo = '" . $_POST['Mod'] . "' AND CodiMate = " . $_POST['Codigo'] . "; ";
            break;
        case "NombModulo":
            $sqldelete = "DELETE FROM " . $_POST['Categoria'] . " WHERE NombModulo ='" . $_POST['Nombre'] . "' AND CodiMate = " . $_POST['Codigo'] . ";";
            break;
    }

    if (mysqli_query($conn, $sqldelete)) {
        if (mysqli_affected_rows($conn) > 0) {
            echo "Records were deleted succesfully by first case.";
        } else {
            echo "ERROR: Could not able to execute by first case $sqldelete. " . mysqli_error($conn);
        }

        mysqli_close($conn);
    }
} else {
    switch ($_POST['Tipo']) {
        case "NombSeccion":
            $sqldelete = "DELETE FROM " . $_POST['Categoria'] . " WHERE NombSeccion ='" . $_POST['Nombre'] . "' AND NombLeccion = '" . $_POST['Lec'] . "' AND NombModulo = '" . $_POST['Mod'] . "' AND CodiMate = " . $_POST['Codigo'] . " ;";
            if (mysqli_query($conn, $sqldelete)) {
                if (mysqli_affected_rows($conn) > 0) {
                    echo "Records were deleted succesfully by second case NombSeccion.";
                } else {
                    echo "ERROR: Could not able to execute by second case NombSeccion $sqldelete. " . mysqli_error($conn);
                }
                mysqli_close($conn);
            }
            break;
        case "NombLeccion":
            $sqldelete = "DELETE FROM " . $_POST['Categoria'] . "   WHERE NombLeccion ='" . $_POST['Nombre'] . "' AND NombModulo = '" . $_POST['Mod'] . "' AND CodiMate = " . $_POST['Codigo'] . " ORDER BY (Puesto) DESC limit $limit;";
            $sqlupdate = "UPDATE " . $_POST['Categoria'] . " SET NombLeccion='NULL', NombSeccion ='NULL', Contenido='NULL'  WHERE " . $_POST['Tipo'] . " = '" . $_POST['Nombre'] . "' AND NombModulo = '" . $_POST['Mod'] . "' AND CodiMate = " . $_POST['Codigo'] . "; ";
            if (mysqli_query($conn, $sqldelete) && mysqli_query($conn, $sqlupdate)) {
                if (mysqli_affected_rows($conn) > 0) {
                    echo "Records were deleted succesfully by second case NombLeccion.";
                } else {
                    echo "ERROR: Could not able to execute by second case NombLeccion $sqldelete. " . mysqli_error($conn);
                }
                mysqli_close($conn);
            }
            break;
        case "NombModulo":
            $sqldelete = "DELETE FROM " . $_POST['Categoria'] . " WHERE NombModulo ='" . $_POST['Nombre'] . "' AND CodiMate = " . $_POST['Codigo'] . ";";
            if (mysqli_query($conn, $sqldelete)) {
                if (mysqli_affected_rows($conn) > 0) {
                    echo "Records were deleted succesfully by second case NombModulo.";
                } else {
                    echo "ERROR: Could not able to execute by second case NombModulo $sqldelete. " . mysqli_error($conn);
                }
                mysqli_close($conn);
            }
            break;
    }
}
