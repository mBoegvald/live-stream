<?php 
if(!isset($_POST['submit']))
{
  echo "error; you need to submit the form!";
}

$name = $_POST['name'];
$customer_email = $_POST['email'];
$message = $_POST['message'];


//validation

if(empty($name)||empty($customer_email)
{
  echo "Name and Email are mandatory!";
  exit;
}

$email_from = "noreply@mboegvald.dk";
$email_subject = "New Form Submission";
$email_body = "You have received a new message from $name.\n". " Details:\n Name: $name \n Email: $customer_email \n Message: $message";


$to = "miklasbogvald@gmail.com";
$headers = "From: $email_from \r\n";

// Configure SMTP Settings
ini_set('SMTP','send.one.com');
ini_set('smtp_port',"465");
ini_set('sendmail_from', $email_from);

//Send Email
if (!mail($to,$email_subject,$email_body,$headers)){
    // If failed to send email.
    echo "Email Failed To Send";
}

