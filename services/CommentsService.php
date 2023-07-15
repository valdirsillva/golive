<?php


header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');


use App\Controller\ControllerVideo;

require "../vendor/autoload.php";

class CommentsService 
{
        public static function add(ControllerVideo $video) 
        {

           $json = file_get_contents('php://input');
           $obj = json_decode($json, true);

           unset($obj['action']);

           $video::commentsAdd([
                'autor' => $obj['autor'],
                'criacao' => $obj['criacao'],
                'mensagem' => $obj['mensagem'],
                'video' => $obj['video']
           ]); 
        }

        public static function get(ControllerVideo $video) 
        {
            $videoid = $_GET['id'] ?? ''; 

            $response = $video::getComments($videoid);

            echo json_encode($response);
        }

}

$json = file_get_contents('php://input');
$content = json_decode($json, true);

$method = isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : '';

if($method === 'POST' AND $content['action'] == 'ADD') {
    CommentsService::add(new ControllerVideo);
}

if($method === 'GET') {
  CommentsService::get(new ControllerVideo);
}


