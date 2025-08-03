<?php

namespace App\Model;

use App\DatabaseManager\Database;

class Comment
{
  private int $id;

  public function __construct() {}

  public function add(array $data)
  {
    $this->id = (new Database('tb_comments'))->add([
      'autor' => $data['autor'] ?? '',
      'video_id' => $data['video'] ?? '',
      'mensagem' => $data['mensagem'] ?? '',
      'criacao' => $data['criacao'],
    ]);
    return $this->id;
  }

  public function getCommentsByVideoId(int $id)
  {
    return (new Database('tb_comments'))->getById($id, "video_id");
  }
}
