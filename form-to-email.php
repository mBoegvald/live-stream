<?php
$name = $_POST['name'];
$customer_email = $_POST['email'];
$message = $_POST['message'];
$product = $_POST['product']; 

//validation

if(empty($name)||empty($customer_email))
{
  echo json_encode(array('status' => 'error'));
  exit;
}

$email_subject = "Mail fra $name";
$email_body = '<html>
<head>
    <title>Informationer</title>
</head>
<body>
    <p><b>Navn:</b> '.$name.'</p>
    <p><b>Email:</b> '.$customer_email.'</p>
    <p><b>Produkt:</b> '.$product.'</p>
    <p><b>Besked:</b> '.$message.'</p>
</body>
</html>';


$to = $customer_email;
$email_from = "noreply@mboegvald.dk";
$headers = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: $email_from";

// Configure SMTP Settings
ini_set('SMTP','send.one.com');
ini_set('smtp_port',"465");
ini_set('sendmail_from', $email_from);

//Send Email
if (!mail($to,$email_subject,$email_body,$headers)){
  // If failed to send email.
echo json_encode(array('status' => 'error'));
} else {
  echo json_encode(true);
}


