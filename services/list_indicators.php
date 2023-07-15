<?php 


require_once '../controll/Indicator.php';

if (isset($_GET)) {
        
    $indicators = new Indicator;
    $all = $indicators->getNamesIndicators();

    echo json_encode($all);
}

