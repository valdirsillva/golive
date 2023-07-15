<?php

require_once '../controll/Indicator.php';
require_once 'ProviderDataPanel.php';

error_reporting(E_ERROR | E_WARNING | E_PARSE);



// endpoint to service 

$content = file_get_contents('php://input');
$decoded = json_decode($content, true);

$method = isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : '';


 if ($method === 'POST' AND $decoded['action'] === 'add') {
    // add new indicator 
    ProviderDataPanel::add(new Indicator, $decoded);
 }

 if ($method === 'POST' AND $decoded['action'] === 'edit') {
    // add new indicator 
    ProviderDataPanel::edit(new Indicator, $decoded);
 }


 if ($method === 'GET') {
    require_once '../models/menusClass.php';

    $monthId = $_GET['id'] ?? '';
    $user = $_SESSION['login_user'] ?? '';
    
    // get all indicators
    ProviderDataPanel::getDataProvider(new Menu, $monthId, $user);
}


