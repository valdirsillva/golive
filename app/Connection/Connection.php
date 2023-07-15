<?php



namespace App\Connection;
use Dotenv;
use PDO;

class Connection {

   private static $pdo = null;

   private static $instance;

   /**
    * construtor privado é a garantia que nenhuma nova instância poderá ser criada
    */
   private function __construct() {}


   // singleton pattern
   public static function getInstance() 
   {
        try {
            if(!self::$instance) {    
                self::$instance = self::connection();
            }
        } catch(\PDOException $e) {
            throw new \Exception($e->getMessage());
        }
        return self::$instance;
   }

   private function connection() 
   {
        $path = 'http://localhost/golive/';
        $dotenv = Dotenv\Dotenv::createImmutable($path);
        $dotenv->load();
        self::$pdo = new PDO("mysql:host=localhost;port=3307;dbname={$_ENV['DB_NAME']}", "{$_ENV['DB_USER']}", '');
        return self::$pdo;
   }

}