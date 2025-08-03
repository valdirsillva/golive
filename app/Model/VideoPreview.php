<?php

namespace App\Model;

use App\DatabaseManager\Database;

class VideoPreview
{
  private int $id;

  public function __construct() {}

  public function getViewsByVideoId(int $id)
  {
    return (new Database('tb_video_views'))->getById($id, "video_uuid");
  }

  public function add(array $video): int
  {
    $this->id = (new Database('tb_video_views'))->add([
      'user_uuid' => $video['uuid_user'] ?? 0,
      'video_uuid' => $video['uuid_video'] ?? '',
      'product_uuid' => $video['uuid_product'] ?? '',
      'status_view' => 'VISTO',
    ]);
    return $this->id;
  }
}
