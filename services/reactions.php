<?php

header('Content-Type: application/json');

use App\Controller\ControllerVideo;

require "../vendor/autoload.php";

if(!isset($_GET['videoid'])) {
  http_response_code(403);
  return;
}

$videoid = $_GET['videoid'] ?? 1;
$obVideo = ControllerVideo::getVideoReactById($videoid);

$reactions = [
    "reacoes" => [
      "Amei" => 0,
	    "Aplausos" => 0,
	    "Sorridente" => 0,
	    "Animado" => 0,
	    "Nao gostei" => 0
    ]
];


$contextReactions = [];

foreach($reactions["reacoes"] as $keys => $reactions) {
	foreach($obVideo as $context) {
	   if($context['liked'] == $keys) {
		  	++$contextReactions[$keys];
	   } 
    }
	
}

echo json_encode($contextReactions);
