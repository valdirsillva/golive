<?php 
 if (!isset($_SESSION)) {
    session_start();
 }
 

?>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" type="image/png" href="assets/img/favicon.ico">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>GOLIVE </title>
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" >
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/css/animate.min.css" rel="stylesheet"/>
        <link href="assets/css/light-bootstrap-dashboard.css?v=1" rel="stylesheet"/>
        <link href="assets/css/font-awesome.min.css" rel="stylesheet">
        <script src="assets/js/Chart.bundle.min.js"></script>
        <script src="assets/js/jquery.3.2.1.min.js" type="text/javascript"></script>
        <script src="assets/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="assets/js/light-bootstrap-dashboard.js?v=1.4.0"></script>
    
        <link href="assets/css/main.css?id=<?= time() ?>" rel="stylesheet" />
        <script src="https://cdn.ckeditor.com/4.19.0/standard/ckeditor.js"></script>

        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script src="https://code.highcharts.com/highcharts-3d.js"></script>
        <script src="https://code.highcharts.com/modules/cylinder.js"></script>
        <script src="https://code.highcharts.com/modules/exporting.js"></script>
        <script src="https://code.highcharts.com/modules/export-data.js"></script>
        <script src="https://code.highcharts.com/modules/accessibility.js"></script>

        <link rel="stylesheet" type="text/css" href="assets/css/flexchannel.css">

        <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>

        

<style>
	.show{display: block; padding-left: 19px;}
	.ativar_hidden{display: none;}
	.desativar_hidden{display:block}
	.salve{border: none;}
   .main-header {
      position: fixed;
      width: 100%;
   }
   /* Fix menu sidebar  */
   .main-sidebar {
      position: fixed !important;
      height: 100vh !important; 
   }

   #notifications_menu {
      margin-left: 220px !important;
   }

 
</style>
	


    <link href='https://fonts.googleapis.com/css?family=Titillium+Web:400,200,300,600,700' rel='stylesheet' type='text/css'>

    </head>
    <body class="product___id" id="1">

        <div class="wrapper user" id="1">
            <div class="sidebar" data-color="blue" data-image="assets/img/sidebar-2.jpg">
                <!--   you can change the color of the sidebar using: data-color="blue | azure | green | orange | red | purple" -->

                <div class="sidebar-wrapper">
                    <div class="logo">
                        <a target="newwindow" href="#" class="simple-text ">
                         <span class="userlogged"><?= $_SESSION['username'] ??'Visitante'; ?> </span>
                        </a>
                    </div>
                    <ul class="nav">
                        <li><a href="home"><i class="fa fa-home"></i> Home</a></li>
                        <li><a href="publish_video"><i class="fa fa-film"></i> Postar video</a></li>
                        <li>
                    </ul>
                </div>
            </div>
            <div class="main-panel">
                <nav class="navbar navbar-default navbar-fixed">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class="collapse navbar-collapse">
                            <ul class="nav navbar-nav navbar-left">
                                <li>
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                        <p class="hidden-lg hidden-md">Dashboard</p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                        <p> Atalhos
                                            <b class="caret"></b>
                                        </p>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a href="index.php?page=produtos">Home</a></li>
                                        <li><a href="index.php?class=PessoasList">Publicações</a></li>
                                        <li><a href="index.php?page=publicar_video">Postar Video</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="logout?logout">
                                        <p>Log out</p>
                                    </a>
                                </li>
                                <li class="separator hidden-lg hidden-md"></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                           <div class="col-md-12">
                              <?php 

                                require_once "../vendor/autoload.php";

                                $page = $_GET['url'] ?? 'index';

                                if (isset($page)) {
                                   
                                    $filename = "./view/pages/".$page.".php";
                                
                                    if (file_exists($filename)) {
                                        require "./view/pages/" .$page. ".php";
                                    } else {
                                       echo 'Página não encontrada';
                                    //    require_once "/pages/error.php";
                                    }
                                } 
                            
                              ?> 
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script type="text/javascript" src="assets/js/flex.js?<?= time() ?>"></script>

    </body>
</html>