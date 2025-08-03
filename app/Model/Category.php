<?php

namespace App\Model;

use App\DatabaseManager\Database;

class Category
{
  public function __construct() {}

  public function getCategories()
  {
    return (new Database('tb_category'))->get();
  }
}
