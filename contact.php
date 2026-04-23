<?php
// contact.php - processa formulário de contato (exemplo)
header('Content-Type: text/html; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Método não permitido';
    exit;
}
$name = substr(trim($_POST['name'] ?? ''),0,200);
$email = substr(trim($_POST['email'] ?? ''),0,200);
$message = substr(trim($_POST['message'] ?? ''),0,2000);
if (!$name || !$email || !$message) {
    echo 'Por favor preencha todos os campos obrigatórios.';
    exit;
}
// Aqui você pode usar mail() ou integrar com um serviço externo.
// Exemplo: salvar em um arquivo (apenas para demonstração). Em produção, use uma DB.
$entry = date('Y-m-d H:i:s') . " | CONTACT | $name | $email | " . str_replace("\n"," ",$message) . "\n";
file_put_contents('messages.log', $entry, FILE_APPEND | LOCK_EX);
echo '<!doctype html><meta charset="utf-8"><title>Obrigado</title><body style="background:#0b0610;color:#fff;font-family:Arial;padding:2rem"><h2>Mensagem enviada</h2><p>Obrigado, ' . htmlspecialchars($name) . '. Recebemos a sua mensagem e responderemos em breve.</p><p><a href="index.html">Voltar ao site</a></p></body></html>';
?> 
