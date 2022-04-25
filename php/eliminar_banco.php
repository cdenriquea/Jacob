<?php
include 'conectar.php';

$sql = "DELETE FROM banco_preguntas WHERE CodBanc = ".$_POST['Codigo'].";";
if (mysqli_query($conn, $sql)) {
    echo '[{"message":"true"}]';
} else {
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
    echo '[{"message":"false"}]';
}

// Close connection
mysqli_close($conn);

