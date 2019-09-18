<?php
$admin_email = "admision@realpacifico.com";//correo corporativo
$name = $_POST['nombre'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$comment = $_POST['message'];
$celular = $_POST['celular'];

$cabeceras = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$cabeceras .= 'From: '.$email;

$contenido='Nombres: '.$name.'<br>';
$contenido.='Celular: '.$celular.'<br>';
$contenido.='Email: '.$email.'<br>';
$contenido.='Asunto: '.$subject.'<br>';
$contenido.='Mensaje: '.$comment;

//send email


mail($admin_email, "$subject", '<html>' . $contenido . '</html>', $cabeceras);
?>

