<?php 

$from_city = $_POST['from_city'];
$to_city = $_POST['to_city'];
$date_book = $_POST['date_book'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'popovaira0398@yandex.ru';                 // Наш логин
$mail->Password = 'Qq1535543';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('popovaira0398@yandex.ru', 'Ирина Попова');   // От кого письмо 
$mail->addAddress('popova_ira210398@mail.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Новая заявка с сайта';
$mail->Body    = '
	Пользователь забронировал билет <br> 
	Имя: неизвестно <br>
	Откуда: ' . $from_city . ' <br>
	Куда: ' . $to_city . ' <br>
	Дата поездки: ' . $date_book . '';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    echo "Error";
} else {
    echo "Success";
}

?>