<?php

namespace App\Controller;


class VideoUpload {

    public static $extension;
    public static $maxSize =  '20000000';

    /**
     * retorna a extensão do arquivo 
     */    
    public static function getExtension($video) 
    {

        if (isset($video['name']) && !empty($video['name'])) {
            $dataInfo = pathinfo($_FILES['video']['name']);
            VideoUpload::$extension = $dataInfo['extension'];
        }
        return VideoUpload::$extension;
    }

    /**
     * Pega tamanho da imagem e verifico se é um tam válido p/ o upload
     */
    public static function sizeVideo($video) 
    {  
        // retorna informações sobre o caminho do aequivo
        $imagem = pathinfo($_FILES['video']['size']);
        $size_image = $imagem['filename'];
        $megabytes  = self::$maxSize/1000000;


        if ($size_image <= self::$maxSize) {
            return true;
        } else {
            throw new Exception("O vídeo deve ser menor que {$megabytes} Mb ");
        }
    }
    
    public static function upload($filename) 
    {   
        $filename = $_FILES['video'];
        
        $extension = VideoUpload::getExtension($filename);
                
        $filename['name'] = time().uniqid(date("ymd")) .'.'. $extension;

        if (isset($filename)) {
            
            $directory = $_SERVER['DOCUMENT_ROOT'] . '/golive/web/view/archive/flextube/mp4/';

            move_uploaded_file($filename['tmp_name'], $directory.''.$filename['name']);
        } else {
            throw new Exception(" Não foi possível fazer o upload do arquivo ! ");
        }

        return $filename['name'];
    }

}