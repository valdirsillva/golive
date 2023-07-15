<?php 

/**
 * 
 * retorna o resultado mensal de pontos dos indicadores 
 * 
 */

require_once '../controll/Indicator.php';


// endpoint to service 
$content = file_get_contents('php://input');
$decoded = json_decode($content, true);

$method = isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : '';


if (isset($_GET['usuario'])) {

   if($method === 'GET' && $_GET['usuario']) {

      $data = [
        "user_id" => $_GET['usuario'],
        "mes_atual" => $_GET['mes']
      ];


      $indicators = new Indicator;
      $points = $indicators->getPoints($data);

      $points = ($points == '') ? 0 : $points;

      echo json_decode($points);
   }

}


