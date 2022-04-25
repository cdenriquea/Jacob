<?php
    use PHPMailer\PHPMailer\PHPMailer;

    if (isset($_POST['submit'])) {
        //Obtenemos valores input formulario
        $nombres = $_POST['nombres'];
        $apellidos = $_POST['apellidos'];
        $email = $_POST['email'];
        $asunto = $_POST['asunto'];   
        $mensaje = $_POST['mensaje'];
  

        require_once "PHPMailer/PHPMailer.php";
        require_once "PHPMailer/SMTP.php";
        require_once "PHPMailer/Exception.php";
        
        $body .= "\r\n";
        $body .= "Nombre: " . $nombres;
        $body .= "\r\n";
        $body .= "Apellido: " . $apellidos;
        $body .= "\r\n";
        $body .= "Email: " . $email;
        $body .= "\r\n";
        $body .= "Asunto: " . $asunto;
        $body .= "\r\n";
        $body .= "Mensaje: " . $mensaje;
        $body .= "\r\n";

        $mail = new PHPMailer();

        //SMTP Settings
        $mail->isSMTP();
        $mail->Host = "axiomaedu.com";
        $mail->SMTPAuth = true;
        $mail->Username = 'informacion@axiomaedu.com';
        $mail->Password = 'informacionaxiomaedu';
        $mail->Port = 465; //587
        $mail->SMTPSecure = "ssl"; //tls

        //Email Settings
        $mail->isHTML(true);
        $mail->setFrom('contacto@axiomaedu.com','Contacto');
        $mail->addAddress('informacion@axiomaedu.com');
        $mail->Subject = $asunto;
        $mail->Body = $body;

        if ($mail->send()) {
            $status = "success";
            $response = "Email is sent!";
            echo "<script language='javascript'>
            alert('Mensaje enviado, muchas gracias.');
         </script>";
         echo '<script>window.location = "index.html" </script>';
        } else {
            $status = "failed";
            $response = "Something is wrong: <br><br>" . $mail->ErrorInfo;
        }

        exit(json_encode(array("status" => $status, "response" => $response)));
    }
?>
