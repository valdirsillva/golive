<?php 

namespace App\Controller;

use App\Model\Video;

class ControllerVideo {

	public static function modelVideo() 
	{
		return new Video;
	}

	public static function add(array $video) 
	{
		if (!isset($_FILES['video']) && empty($_FILES['video']['name'])) {
			throw new Exception("Oops ! Nenhum vídeo foi selecionado.");
		}

		$add = self::modelVideo();
		$add->add($video);
	}

	public static function addView(array $video) 
	{
		$newViewVideo = self::modelVideo();
		$newViewVideo->setVideoView($video);
	}

	/**
     * Adiciona visualização da notificação 
     **/
	public static function addViewNotification(array $notification) 
	{
		if (empty($notification)) {
			throw new Exception("Houve um erro na operacao.");
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
		$category = self::modelVideo();
		$result = $category->findAllCategory();

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
		if (!empty($data)) {
			$newComment = self::modelVideo();
			$results = $newComment->addComment($data);
		}
	}

	public static function getComments($videoid) 
	{
		$comments = self::modelVideo();
		$results = $comments->findAllComment($videoid);
		return $results;
	}

	public static function getLikes($videoid) 
	{
		$like = self::modelVideo(); 
		$results = $like->likes($videoid);
		return $results;
	}

	public static function views($videoid) 
	{
		if(empty($videoid)) {
			throw new \Exception('Não foi possível carregar total de visualizações do video.');
		}

		$view = self::modelVideo();
		$row = $view->issetView($videoid);
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
		if(empty($videoid)) {
			throw new \Exception('Não foi possível carregar os dados.');
		}

		$view = self::modelVideo();
		$row = $view->countDownReaction($videoid);
		return $row;
	}



	// public static function findAllViews($videoid) 
	// {
	// 	if(empty($videoid)) {
	// 		throw new \Exception('Não foi possível carregar total de visualizações do video.');
	// 	}

	// 	$view = self::modelVideo();
	// 	$row = $view->getViews($videoid);

	// 	return $row;
	// }


}