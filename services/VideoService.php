<?php 


use App\Controller\ControllerVideo;

require "../vendor/autoload.php";

// header('Content-Type: application/json');
// header('Access-Control-Allow-Origin: *');

class VideoService 
{
	public static function findAll(ControllerVideo $video) 
	{
		$uuid_product = $_GET['product'] ?? 4;
		print json_encode($video::get($uuid_product));
	}
}

VideoService::findAll( new ControllerVideo);


