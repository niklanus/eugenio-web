<?php
if($_POST)
{
    $to_email = "nicolaslanus@gmail.com"; //Recipient email, Replace with own email here
    
    //check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
        $output = json_encode(array( //create JSON data
            'type' => 'error', 
            'text' => 'Request must be Ajax POST.'
        ));
        die($output); //exit script outputting json data
    } 
    
    //Sanitize input data using PHP filter_var().
    $name  = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $tel   = filter_var($_POST["tel"], FILTER_SANITIZE_NUMBER_INT);
    $msg   = filter_var($_POST["msg"], FILTER_SANITIZE_STRING);
    
    //additional php validation
    if(strlen($name)<2){ // If length is less than 4 it will output JSON error.
        $output = json_encode(array('type'=>'error', 'text' => 'El nombre es demasiado corto o está vacío.'));
        die($output);
    }
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){ //email validation
        $output = json_encode(array('type'=>'error', 'text' => 'Por favor ingrese una dirección de email válida.'));
        die($output);
    }
    if(!filter_var($tel, FILTER_SANITIZE_NUMBER_FLOAT)){ //check for valid numbers in phone number field
        $output = json_encode(array('type'=>'error', 'text' => 'Por favor ingrese solo dígitos en el número de teléfono.'));
        die($output);
    }
    if(strlen($msg)<3){ //check emtpy msg
        $output = json_encode(array('type'=>'error', 'text' => 'Su mensaje es demasiado corto o está vacío.'));
        die($output);
    }
    
    //email body
    $msg_body = $msg."\r\n\r\nNombre: ".$name."\r\nEmail: ".$email."\r\nTeléfono: ". $tel ;
    
    //proceed with PHP email.
    $headers = 'From: '.$name.'' . "\r\n" .
    'Reply-To: '.$email.'' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    
    $send_mail = mail($to_email, "Dr. Eugenio Chouhy - Formulario de contacto", $msg_body, $headers);
    
    if(!$send_mail)
    {
        //If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
        $output = json_encode(array('type'=>'error', 'text' => 'No se pudo enviar el email, por favor chequee su servidor de email PHP.'));
        die($output);
    }else{
        $output = json_encode(array('type'=>'msg', 'text' => '<h3>¡Muchas gracias por contactarse!</h3>'));
        $output = json_encode(array('type'=>'msg', 'text' => '<h3>¡Muchas gracias por contactarse!</h3>'));
        die($output);
    }
}
?>