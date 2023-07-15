<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

/**
 * provê os dados necessário para alimentar o painel 
 * 
 * @return  //json_encode
 * 
 * 03/02/2022
 **/


class ProviderDataPanel 
{   
    public static $monthIndex;

    public static function add(Indicator $indicator, $content) 
    {   
        // invoco o metodo do controlador e passo o array que desejo persistir no banco de dados
        $results = $indicator->addIndicator($content);

        return $results; 
    }

    public static function edit(Indicator $indicator, $content) 
    {
        $results = $indicator->editIndicator($content);

        return $results;
    }

    public static function getDataProvider(Menu $menu, $monthId = null,  $user) 
    {   
        $currentMonth = $monthId ?? '';

        $nameMonths = date('F');

        $monthIndex = self::formatMonth($nameMonths);

        $user = [
            "user" => $user,
            "month" => (int) $monthIndex,
            "index" => $currentMonth
        ];

   
        $data = $menu->Graficos_meta($user);

        echo json_encode($data, true);
    }

    protected static function formatMonth($month) 
    {
        $monthsYear = array(
            0 => 'January', 
            1 => 'February', 
            2 => 'March',
            3 => 'April',
            4 => 'May', 
            5 => 'June', 
            6 => 'July',
            7  => 'August',  
            8 => 'September',  
            9 => 'October',  
            10 => 'November', 
            11 => 'December' 
        );

        foreach($monthsYear as $key => $value) {
           if ($value === $month) {
               self::$monthIndex =  $key;
           }
        }

       return self::$monthIndex;
    }
}



