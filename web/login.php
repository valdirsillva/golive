<?php 
   
   require "../vendor/autoload.php";
   
   use App\Controller\Auth\Auth;
   
   try {
      $user = filter_input_array(INPUT_POST, FILTER_DEFAULT);

      if(isset($user) && !empty($user['login']) && !empty($user['password'])) {
         $login = new Auth;
         $result = $login->login($user);
      }

   } catch(Exception $error) {
   	 print $error->getMessage();
   }
 
   ?>
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title>GOLIVE</title>
      <meta name="viewport" content="width=device-width user-scalable=no">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" >
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.min.js"></script>
      <link rel="stylesheet" media="screen" href="static/css/login-mobile.css?id=1">
      <style>
         * {
            margin:  0;
            padding: 0;
            box-sizing: border-box;
            overflow: hidden;
         }
         body {
            background: url('static/logo/pexels-peng-liu-169647.jpg');
            background-repeat: no-repeat;
            background-position: 75% 90%;
         }
         .text-lg-start {
         color: white;
         }
         .background {
            position: absolute;
            display: block;
            top: 0;
            left: 0;
            z-index: -1;
         }
         .flex-button-color {
            color: #fff;
            background-color: #f20c55;
            border-color: #f20c55;
         }
         .flex-button-color:hover {
         color: #fff;
         filter: brightness(0.7);
         }
            .overlay-image {
            width: 100%;
            height: 100vh;
            position: absolute;
            background: #121214;
            opacity: .7;
            z-index: -2;
            -webkit-filter: blur(90px);
            -moz-filter: blur(90px);
            -o-filter: blur(90px);
            -ms-filter: blur(90px);
            filter: blur(90px);
         }
         .recuperar___senha {
             cursor: pointer; 
         }
      </style>
   </head>
   <body>
      <canvas class="background"></canvas>
      <div class="overlay-image"> </div>
      <div class="container-fluid mt-5">
         <div class="container col-xl-10 col-xxl-8 px-4 py-5">
            <div class="row align-items-center g-lg-5 py-5">
               <div class="col-lg-7 text-center text-lg-start">
                  <p class="col-lg-10 fs-4">
                     <img src="" width="150px" heigth="150px" class="img-responsive" />
                  </p>
                  <h1 class="display-4 fw-bold lh-2 mb-1">Bem-vindo ao GOLIVE </h1>
                  <?php
                     if ( isset($_SESSION['message'])):
                     print $_SESSION['message'];
                     unset($_SESSION['message']);
                     endif;	
                     ?>
               </div>
               <div class="col-xs-12 col-md-10 mx-auto col-lg-5">
                  <form class="p-4 p-md-5 border rounded-3 bg-light" action="" method="post">
                     <br><br>
                     <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="login" name="login" value="<?php if(isset($form['login']) || isset($_GET['login'])): print $form['login'] ?? $_GET['login']; endif;?>" placeholder="Usuário" />
                        <label id="email" for="email">Usuário </label>
                     </div>
                     <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="senha" name="password" placeholder="Password" />
                        <label id="pass" for="senha">Senha</label>
                     </div>
                     <div class="checkbox mb-3">
                        <label> <input type="checkbox" value="remember-me" /> Lembre de Mim </label>
                     </div>
                     <button class="w-100 btn btn-lg  flex-button-color" type="submit" value="entrar">ENTRAR</button>
                     <p class="my-2"></p>
                     <p class="text-center">
                        <a  class="recuperar___senha">Esqueci a senha</a><br>
                        <a class="link__cadastro" href="criar-conta.php">Ainda não tenho conta</a><br>
                        <a class="goback" href="https://localhost/login" style="display:none">Voltar ao login</a><br>
                     </p>
                     <!-- <small class="text-muted">Visualizar os termos de uso</small> -->
                     
                  </form>
               </div>
            </div>
         </div>
      </div>
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" ></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" ></script>
   </body>
</html>