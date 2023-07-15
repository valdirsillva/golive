<?php

namespace Services;

header('Content-Type: application/json');


use App\Controller\ControllerVideo;

require "../vendor/autoload.php";

class NotificationsService {
	public static function get(ControllerVideo $video) 
	{
		try {

			$dataValues = [
				'uuid_user' => $_GET['uuiduser'] ?? '',
				'uuid_video' => $_GET['uuidvideo'] ?? '',
				'uuid_product' => $_GET['uuidprod'] ?? ''
			];

			print json_encode($video::getNotifications($dataValues));

		} catch(Exception $e) {
			throw new Exception('Erro ao checar se existem notificações', 400);
		}
	}
}

$method = isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : '';

if($method === 'GET') {
  NotificationsService::get(new ControllerVideo);
}


