<?php

namespace App\Controllers;

use App\Model\Category;
use App\Model\Comment;
use App\Model\Video;
use App\Model\VideoPreview;

class VideoController
{
	public static function modelVideo()
	{
		return new Video;
	}

	public static function add(array $video)
	{
		if (
			!isset($_FILES['video']) ||
			$_FILES['video']['error'] !== UPLOAD_ERR_OK
		) {
			http_response_code(400);
			echo json_encode(['error' => 'Oops! Nenhum vídeo válido foi enviado.']);
			return;
		}

		$model = self::modelVideo();

		try {
			$result = $model->add($video);

			if ($result) {
				http_response_code(201);
				return json_encode(['message' => 'Video inserido com sucesso!', 'id' => $result]);
			} else {
				http_response_code(400);
				return json_encode(['error' => 'Erro ao salvar o vídeo.']);
			}
		} catch (\Throwable $e) {
			http_response_code(500);
			return json_encode(['error' => 'Erro interno.', 'details' => $e->getMessage()]);
		}
	}

	public static function addView(array $video)
	{
		if (!isset($video)) {
			http_response_code(400);
			return json_encode(['error' => 'Nenhum video para adicionar views']);
		}

		$videoPreview = new VideoPreview();

		try {
			$response = $videoPreview->add($video);

			if ($response) {
				http_response_code(201);
				return json_encode(['message' => 'Visualizaao atualizada para o video', 'id' => $response]);
			} else {
				http_response_code(400);
				return json_encode(['error' => 'Erro ao salvar a visualizacao']);
			}
		} catch (\Throwable $e) {
			http_response_code(500);
			return json_encode(['error' => 'Erro interno.', 'details' => $e->getMessage()]);
		}
	}

	/**
	 * Adiciona visualização da notificação 
	 **/
	public static function addViewNotification(array $notification)
	{
		if (empty($notification)) {
			throw new \Exception("Houve um erro na operacao.");
		}

		$obNotificationVideo = self::modelVideo();
		$obNotificationVideo->handleNotificationUpdate($notification);
	}

	public static function get($productid)
	{
		$productId = $productid ?? '';
		$video = self::modelVideo();
		$result = $video->findAll($productId);
		return $result;
	}

	public static function category()
	{
		$category = new Category();
		$result = $category->getCategories();

		return $result;
	}

	public static function like(array $videoContent)
	{
		if (!empty($videoContent)) {

			$newLike = self::modelVideo();
			$newLike->addLike($videoContent);
		}
	}

	public static function commentsAdd(array $data)
	{
		if (empty($data)) {
			throw new \Exception('Não foi possivel salvar o comentario.');
		}

		$comment = new Comment();
		$results = $comment->add($data);
	}

	public static function getComments($videoId)
	{
		$comments = new Comment();
		$results = $comments->getCommentsByVideoId($videoId);
		return $results;
	}

	public static function getLikes($videoid)
	{
		$like = self::modelVideo();
		$results = $like->likes($videoid);
		return $results;
	}

	public static function views(int $videoid)
	{
		if (empty($videoid)) {
			throw new \Exception('Não foi possível listar o total de visualizacao do video');
		}

		$videoView = new VideoPreview();
		$row = $videoView->getViewsByVideoId($videoid);
		return $row;
	}

	public static function getNotifications(array $data)
	{
		if (empty($data)) {
			throw new \Exception("Necessário informar dados do vídeo: 'ID','USUÁRIO' e 'PRODUTO' ");
		}

		$obNotification = self::modelVideo();
		$notificationItems = $obNotification->getNotificationsByVideo($data);

		return $notificationItems;
	}

	public static function getVideoReactById($videoid)
	{
		if (empty($videoid)) {
			throw new \Exception('Não foi possível carregar os dados.');
		}

		$view = self::modelVideo();
		$row = $view->countDownReaction($videoid);
		return $row;
	}
}
