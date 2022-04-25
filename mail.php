
<?
   //Reseteamos variables a 0.
   $nombres = $apellidos = $email = $asunto = $mensaje = $para = $headers = $msjCorreo = NULL;

   if (isset($_POST['submit'])) {
      //Obtenemos valores input formulario
      $nombres = $_POST['nombres'];
      $apellidos = $_POST['apellidos'];
      $email = $_POST['email'];
      $asunto = $_POST['nombres'].' '.$_POST['apellidos'].' : '. $_POST['asunto'];   
      $mensaje = $_POST['mensaje'];
      $para = 'contacto@axiomaedu.com';

      //Creamos cabecera.
     $headers .= "Reply-To: $email \r\n";
     $headers .= "Return-Path: $email \r\n";
     $headers .= "From:_mainaccount@axiomaedu.com\r\n";
     $headers .= "Organization: Contacto \r\n";
     $headers .= "MIME-Version: 1.0\r\n";
     $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
     $headers .= "X-Priority: 3\r\n";
     $headers .= "X-Mailer: PHP". phpversion() ."\r\n";
      
    

      //Componemos cuerpo correo.
      $msjCorreo  = "Nombre: " . $nombres .' '. $apellidos;
      $msjCorreo .= "\r\n";
      $msjCorreo .= "Email: " . $email;
      $msjCorreo .= "\r\n";
      $msjCorreo .= "Asunto: " . $_POST['asunto'];
      $msjCorreo .= "\r\n";
      $msjCorreo .= "Mensaje: " . $mensaje;
      $msjCorreo .= "\r\n";

    if (mail($para, $asunto, $msjCorreo, $headers)) {
         echo "<script language='javascript'>
            alert('Mensaje enviado, muchas gracias.');
         </script>";
         echo '<script>window.location = "index.html" </script>';
    } else {
         echo "<script language='javascript'>
            alert('fallado');
         </script>";
    }
  }
?>

