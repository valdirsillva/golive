<?php

namespace App\Model;
use App\Connection\Connection;

use PDO;

class Video
{
    private $connection;

    public function __construct()
    {
        $this->connection = Connection::getInstance();
    }

    public function add(array $video)
    {
        $query = "INSERT INTO tb_videos(product_id, video, title, description, url, author, category) 
					VALUES (
					   '{$video["product_id"]}',
					   '{$video["video"]}',
					   '{$video["title"]}',
					   '{$video["description"]}',
					   '{$video["path"]}', 
					   '{$video["author"]}',
					   '{$video["category"]}'
			    )";

        $results = $this->connection->prepare($query);
        $results->execute();
    }

    public function find()
    {
    }

    public function findAll($product_id)
    {
        $query = " 
		        SELECT 
		           T1.*, T2.name_user AS author 
				FROM tb_videos AS T1
				RIGHT JOIN tb_user AS T2 ON T2.id_user = T1.author 
				WHERE product_id = '$product_id' ";

        $query = $this->connection->prepare($query);
        $query->execute();
        $allResults = $query->fetchAll(PDO::FETCH_ASSOC);
        return $allResults;
    }

    public function countDownReaction($videoid)
    {
        // contar total reação
        $query = $this->connection->prepare(
            " SELECT liked FROM tb_videos_liked WHERE video_id = '$videoid' "
        );
        $query->execute();
        $allResults = $query->fetchAll(PDO::FETCH_ASSOC);
        return $allResults;
    }

    public function findAllCategory()
    {
        $query = $this->connection->prepare(" SELECT * FROM tb_category ");
        $query->execute();
        $allResults = $query->fetchAll(PDO::FETCH_ASSOC);
        return $allResults;
    }

    public function addLike(array $video)
    {
        $isLikeType = $this->checkIsLiked($video["videoId"], $video["user"]);

        // Se o número de linhas afetadas for zero, então permito salvar o like
        if ($isLikeType == 0) {
            $query = $this->connection->prepare(
                " INSERT INTO tb_videos_liked (usuario_id, video_id, liked) VALUES (:user, :videoid, :curti) "
            );

            $query->bindParam(":curti", $video["text"], PDO::PARAM_STR);
            $query->bindParam(":videoid", $video["videoId"], PDO::PARAM_INT);
            $query->bindParam(":user", $video["user"], PDO::PARAM_INT);
            $query->execute();

            return;
        }

        // Atualiza o tipo de like
        $this->runUpdateTypeLike(
            $video["text"],
            $video["videoId"],
            $video["user"]
        );
    }

    private function runUpdateTypeLike($type, $userid, $videoid)
    {
        $query = $this->connection->prepare(
            " UPDATE tb_videos_liked SET liked = :type WHERE usuario_id = :user AND video_id = :videoid "
        );

        $query->bindParam(":type", $type, PDO::PARAM_STR);
        $query->bindParam(":videoid", $videoid, PDO::PARAM_INT);
        $query->bindParam(":user", $userid, PDO::PARAM_INT);
        $query->execute();
    }

    public function likes($videoId)
    {
        $query = $this->connection->prepare(
            "SELECT count(id) as 'TOTAL_LIKES' FROM tb_videos_liked  WHERE video_id = :id "
        );

        $query->execute([":id" => $videoId]);
        $allResults = $query->fetch(PDO::FETCH_ASSOC);
        return $allResults;
    }

    private function checkIsLiked(int $userid, int $videoid): int
    {
        $query = $this->connection->prepare(
            "SELECT video_id  FROM tb_videos_liked  WHERE video_id = :videoid AND usuario_id = :userid"
        );

        $query->execute([":videoid" => $videoid, ":userid" => $userid]);
        $rowCountLikes = $query->rowCount();

        return $rowCountLikes;
    }

    public function addComment($data)
    {
        $query = $this->connection->prepare(
            " INSERT INTO tb_comments (autor, video_id, mensagem, criacao) VALUES (:usuario_id, :video, :mensagem, :criacao) "
        );

        $query->bindParam(":usuario_id", $data["autor"], PDO::PARAM_STR);
        $query->bindParam(":mensagem", $data["mensagem"], PDO::PARAM_STR);
        $query->bindParam(":video", $data["video"], PDO::PARAM_INT);
        $query->bindParam(":criacao", $data["criacao"], PDO::PARAM_STR);
        $query->execute();
    }

    public function findAllComment($videoid)
    {
        $query = $this->connection->prepare(
            " SELECT * FROM tb_comments WHERE video_id = :id "
        );
        $query->execute([":id" => $videoid]);
        $response = $query->fetchAll(PDO::FETCH_ASSOC);

        return $response;
    }

    /**
     * @param Videoid
     * @return boolean
     **/
    public function issetView(int $videoid)
    {
        $query = $this->connection->prepare(
            "SELECT * FROM tb_video_views WHERE video_uuid = :id"
        );
        $query->execute([":id" => $videoid]);
        $allResults = $query->rowCount();

        return $allResults;
    }

    public function getNotificationsByVideo(array $data)
    {
        $uuid_user = $data["uuid_user"];
        $uuid_video = $data["uuid_video"];
        $uuid_product = $data["uuid_product"];

        $query = $this->connection->prepare(
            "SELECT video_uuid FROM tb_video_views WHERE user_uuid = :user AND video_uuid = :video AND product_uuid = :product"
        );

        $query->execute([
            ":user" => $uuid_user,
            ":video" => $uuid_video,
            ":product" => $uuid_product,
        ]);
        $rowCountNotifications = $query->rowCount();

        // Retorna um array com linhas afetadas
        return ["ROW" => $rowCountNotifications];
    }

    public function handleNotificationUpdate(array $notification)
    {
        $query = $this->connection->prepare(
            " INSERT INTO tb_video_notificacao (user_uuid, video_uuid, product_uuid) VALUES (:userid, :videoid, :prodid) "
        );

        $query->bindParam(":userid", $notification["userid"]);
        $query->bindParam(":videoid", $notification["videoid"]);
        $query->bindParam(":prodid", $notification["productid"]);
        $query->execute();
    }

    public function setVideoView(array $video)
    {
        $query = $this->connection->prepare(
            " INSERT INTO tb_video_views (user_uuid, video_uuid, product_uuid, status_view) VALUES (:userid, :videoid, :prodid, 'VISTO') "
        );

        $query->bindParam(":userid", $video["uuid_user"]);
        $query->bindParam(":videoid", $video["uuid_video"]);
        $query->bindParam(":prodid", $video["uuid_product"]);
        $query->execute();
    }
}
