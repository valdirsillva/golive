<?php 


namespace App\Model;

use App\Connection\Connection;

class Login 
{
    private $connection;

    public function __construct() 
    {
        $this->connection = Connection::getInstance();
    }

    public function getUserLogin(array $data) 
    {
    
        $toSql = "SELECT * FROM tb_user WHERE login_user = '{$data['login']}' AND pass_user = '{$data['password']}' ";

        $query = $this->connection->prepare($toSql);

        $query->execute();

        $user = $query->fetch();

        return $user;
    }
}