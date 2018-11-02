<?php
header('Content-Type: text/html; charset=UTF-8');

$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

require 'PHPMailerAutoload.php';

function sendMail($destino, $email)
{
	$mail = new PHPMailer;
	$mail->CharSet = 'UTF-8';
	$mail->isSMTP();
	$mail->IsHTML(true);
	$mail->SMTPDebug = 0;
	$mail->Debugoutput = 'html';
	$mail->Host = 'smtp.gmail.com';
	$mail->Port = 587;
	$mail->SMTPSecure = 'tls';
	$mail->SMTPAuth = true;
	$mail->Username = "rodrigo.eritel@gmail.com";
	$mail->Password = "42018144DIIH";
	$mail->setFrom('rodrigo.eritel@gmail.com', 'Contato - Site');
	$mail->addAddress($destino, 'Assunto - Contato Site');
	$mail->Subject = "Assunto - Contato Site";
	$mail->Body = $email;

	if (!$mail->send()) {
		return false;
	} else {
		return true;
	}
}
$ymsgJorgeAlex = "<div style=\"width:100%;\">

<p><b>Nome: </b> {$nome}</p>
<p><b>E-mail: </b> {$email}</p>
<p><b>Mensagem: </b> {$mensagem}</p>

</div>";

$ysendJorgeAlex = sendMail('rodrigo.oliveira260994@gmail.com', $ymsgJorgeAlex);

if ($ysendJorgeAlex != true) {
	$url = 'http://www.ffodontologia.com?sucesso=false';
} else {
	$url = 'http://www.ffodontologia.com?sucesso=true';
}

echo '<script type="text/javascript">
window.location.href = "' . $url . '";
</script>';

?>
