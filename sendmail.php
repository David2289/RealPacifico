<?php
$admin_email = "admision@realpacifico.com";//correo corporativo
$name = $_POST['message-name'];
$email = $_POST['message-email'];
$subject = $_POST['message'];

$cabeceras = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$cabeceras .= 'From: '.$email;

$contenido='Nombres: '.$name.'<br>';
$contenido.='Email: '.$email.'<br>';
$contenido.='Mensaje: '.$comment;

//send email


mail($admin_email, "$subject", '<html>' . $contenido . '</html>', $cabeceras);
?>

