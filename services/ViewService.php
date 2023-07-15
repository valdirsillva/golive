<?php

header("Content-Type: application/json");

use App\Controller\ControllerVideo;

require "../vendor/autoload.php";

class ViewService
{
    public static function add(ControllerVideo $video)
    {
        $json = file_get_contents("php://input");
        $obj = json_decode($json, true);

        $video::addViews([
            "autor" => $obj["autor"],
            "criacao" => $obj["criacao"],
            "mensagem" => $obj["mensagem"],
            "video" => $obj["video"],
        ]);

    }

    public static function setViewVideoById(ControllerVideo $video) 
    {
        $json = file_get_contents("php://input");
        $obj = json_decode($json, true);

        $video->addView([
            "uuid_user" => $obj["userid"],
            "uuid_video" => $obj["videoid"],
            "uuid_product" => $obj["productid"]
        ]);    
    }

    public static function get(ControllerVideo $video)
    {
       
        if (!empty($_GET['videoid'])) {
            $videoid = $_GET['videoid'];
            $results = $video::views($videoid);
            
            echo json_encode($results);
        }
    }
}

$json = file_get_contents("php://input");
$content = json_decode($json, true);

$method = isset($_SERVER["REQUEST_METHOD"]) ? $_SERVER["REQUEST_METHOD"] : "";

if ($method === "POST" and $content["action"] == "ADD") {
    ViewService::add(new ControllerVideo());
}

if ($method === "POST" and $content["action"] == "onplaying") {
    ViewService::setViewVideoById(new ControllerVideo());
}


if ($method === 'GET') {
    ViewService::get(new ControllerVideo());
}
