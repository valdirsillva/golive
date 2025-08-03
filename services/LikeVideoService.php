<?php


header('Content-Type: application/json');
// header('Access-Control-Allow-Origin: https://nucleo.flexcontact.com.br/guia_online/');


use App\Controllers\VideoController;

require "../vendor/autoload.php";

class LikeVideoService
{
   public static function add(VideoController $video)
   {
      $obj = self::parse();

      $video::like([
         'text' => $obj['text'],
         'user' => (int) $obj['user'],
         'videoId' => (int) $obj['videoId']
      ]);
   }

   public static function get(VideoController $video, $videoId)
   {

      $results = $video::getLikes($videoId);

      echo json_encode($results);
   }

   public static function parse()
   {
      $json = file_get_contents('php://input');
      return json_decode($json, true);
   }
}



$content = LikeVideoService::parse();

$method = isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : '';

if ($method === 'POST' and $content['action'] == 'ADD') {
   LikeVideoService::add(new VideoController);
}

if ($method === 'GET') {
   $videoId = $_GET['id']  ?? '';

   LikeVideoService::get(new VideoController, $videoId);
}
