<?php
$nombre = $_POST["nombre"];
$telefono = $_POST["telefono"];
$email = $_POST["email"];
$mensaje = $_POST["mensaje"];

$mensaje = "Nombre:      ". $_POST['nombre'] . "\n\n";
$mensaje .= "Telefono:    ". $_POST['telefono'] . "\n\n";
$mensaje .= "Email:       ". $_POST['email'] . "\n\n\n";
$mensaje .= "Mensaje:     ". $_POST['mensaje'] . "\n\n";

$cabecera = "From: $nombre <$email> \r\n";
$cabecera .= "Reply-To: $email";

if(mail("formulario@aadoccsa.com.mx", "formuario desde el sitio", $mensaje, $cabecera)){
	header ("Location: index.html");
}
else{
	header ("Location: contacto.html");
}

?>
