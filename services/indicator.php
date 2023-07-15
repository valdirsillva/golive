<?php  


require_once '../controll/Indicator.php';

$indicators = new Indicator;

if (isset($_GET['search'])) {
   
   $paramsId = $_GET['__id'] ?? '';
   $data = $indicators->currentMonthOfMetrics($paramsId);
   
   echo json_encode($data);
}

if (isset($_GET['indicator'])) {
        
    $indicator = $_GET['indicator'];

    $all = $indicators->allIndicators($indicator);  

    echo json_encode($all);
}

