<?php 


namespace App\Controller\Auth;

if (!isset($_SESSION)):  session_start(); endif; 

use App\Model\Login;


class Auth {
    
    public static function login($data): void 
    {
        $login = new Login;
        $data = $login->getUserLogin($data);

        if (!empty($data)) {
            self::initSession($data);
        }
    }

    public function confirm($isConfirm) 
    {
        try {
            $user = new Update;
            $results = $user->confirmMail($isConfirm);
        } catch(Exception $error) {
            throw new Exception($error->getMessage());
        }

        return $results;
    }

    public static function getFormData() 
    {
       return filter_input_array(INPUT_POST, FILTER_DEFAULT);
    }

    public static function getLevelAuthorized(array $data): void 
    {
        Login::initSession($data);
        header('Location: home');
        exit;
    }

    public static function initSession($data) 
    {
        if (!empty($data)) {
            $_SESSION['userid'] = $data['id_user'];
            $_SESSION['username'] = $data['name_user'];
            $_SESSION['useravatar'] = $data['id_avatar'];
        }

        header("Location: home");
    }
     
    public static function validateData(array $data)
    {
        if (isset($data) && empty($data)) {
            throw new Exception("");
        }

        foreach($data as $key => $value) {
            $replaced[$key] = strip_tags(str_replace(' ', '', ltrim($value)));
        }

        return $replaced;
    }
}