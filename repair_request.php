<?php
// repair_request.php - processa pedidos de reparação
header('Content-Type: text/html; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Método não permitido';
    exit;
}
$name = substr(trim($_POST['name'] ?? ''),0,200);
$phone = substr(trim($_POST['phone'] ?? ''),0,100);
$email = substr(trim($_POST['email'] ?? ''),0,200);
$model = substr(trim($_POST['model'] ?? ''),0,200);
$problem = substr(trim($_POST['problem'] ?? ''),0,2000);
if (!$name || !$phone) {
    echo 'Por favor preencha o nome e telefone.';
    exit;
}
$entry = date('Y-m-d H:i:s') . " | REPAIR | $name | $phone | $email | $model | " . str_replace("\n"," ",$problem) . "\n";
file_put_contents('repairs.log', $entry, FILE_APPEND | LOCK_EX);
echo '<!doctype html><meta charset="utf-8"><title>Pedido Recebido</title><body style="background:#0b0610;color:#fff;font-family:Arial;padding:2rem"><h2>Pedido de Reparação Recebido</h2><p>Obrigado, ' . htmlspecialchars($name) . '. Entraremos em contacto pelo telefone ' . htmlspecialchars($phone) . '.</p><p><a href="index.html">Voltar ao site</a></p></body></html>';
?> 
