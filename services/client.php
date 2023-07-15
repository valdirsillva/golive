<?php 

require_once "../controll/Factory/AbstractFactory.php";
require_once "../controll/Factory/ConcreteFactory.php";


// class Client {}

function getContracts( AbstractFactory $factory) {}

function getConversion( AbstractFactory $factory ) {}

function getQuality( AbstractFactory $factory ) 
{
    $item = $factory->calculateBalanceQuality();

    $media = $item->useCalculator([10, 4, 30, 10]);

    return $media;
}

$quality =  getQuality(new ConcreteFactory());


print "<pre>";

print "NOTA DE QUALIDADE: {$quality} ";

print "</pre>";


