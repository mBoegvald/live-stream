<?php
if(!isset($_POST['submit']))
{
  echo "error; you need to submit the form!";
}

$name = $_POST['name'];
$customer_email = $_POST['email'];
$message = $_POST['message'];
$product = $_POST['product']; 

//validation

if(empty($name)||empty($customer_email))
{
  echo "Name and Email are mandatory!";
  exit;
}

$email_subject = "Mail fra $name";
$email_body =
"Informationer:\nNavn: $name \nEmail: $customer_email \nProdukt: $product \nBesked: $message";


$to = $customer_email;
$email_from = "noreply@mboegvald.dk";
$headers = "From: $email_from";

// Configure SMTP Settings
ini_set('SMTP','send.one.com');
ini_set('smtp_port',"465");
ini_set('sendmail_from', $email_from);

//Send Email
if (!mail($to,$email_subject,$email_body,$headers)){
    // If failed to send email.
    echo "Email Failed To Send";
}


