<?php

namespace App\Model;

use App\DatabaseManager\Database;

class VideoNotification
{
  public function __construct() {}

  public function getNotificationByVideoId(int $id)
  {
    return (new Database('tb_video_views'))->getById($id, "video_uuid");
  }

  // 	public function setVideoView(array $video)
  public function addView(array $video) {}
}
