
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">

      <?php 

          use App\Controller\VideoUpload;
          use App\Controller\ControllerVideo;

          try {
               
            $video = filter_input_array(INPUT_POST, FILTER_DEFAULT);              
            if (isset($video)) {
               if (!empty($_FILES['video']) && !empty($video['author'])) {
                  VideoUpload::sizeVideo($_FILES['video']); 
                  $videoName = VideoUpload::upload($_FILES);

                  $video['video'] = $videoName;
                  $path = 'http://localhost/golive/web/view/archive/flextube/mp4/'.$video['video'];

                  $video['product_id'] = 1;
                  $video['author'] = 1;
                  $video['path'] = $path;
                  ControllerVideo::add($video);
               }
            }
          } catch(Exception  $e) {
            print "<div class='alert alert-danger'>" .$e->getMessage(). "</div>";
          }

          if (!isset($_SESSION['username'])) {
             echo "<span class='alert alert-danger'> Ops! Área restrita para usuários autorizados!! </span>"; 
             exit;
          }

      ?>

		<section>
		   <div class="col-md-12">
		      <div class="card-header mb-3 ml-16">
		         <i class="fas fa-upload"></i>
		         <h3>PUBLICAR VÍDEO</h3>
		      </div>
		      <div class="flex-input-search"></div>
		      <div class="flex-notification"></div>
		   </div>

         <aside class="flex1 ">
            <form method="post" action="" enctype="multipart/form-data" >
               <div class="col-md-5">
                  <div class="col-md-12 mb-3 field-input">
                     <label for="inputEmail4">Titulo</label>
                     <input type="text" class="form-control" name="title" id="inputEmail4" maxlength="100" placeholder="Titulo">
                  </div>

                  <div class="col-md-12 mb-3 field-input">
                     <label for="inputAddress">Vídeo</label>
                     <input type="file" class="form-control" name="video" accept="video/mp4" id="inputAddress" >
                  </div>

                  <div class="col-md-12 mb-3 field-input">
                     <label for="inputPassword4">Descrição</label>
                     <textarea class="form-control" name="description" id="description" cols="30" rows="5"></textarea>
                  </div>

                  <div class="col-md-12 mb-3 field-input">
                     <label for="category" >Categoria</label>
                     <select class="form-control" name="category" id="category">
                        <option value="">*Selecione uma categoria</option>  
                     <?php 
                        $allCategories = ControllerVideo::category();

                        $categories = $allCategories ?? [];

                        foreach($categories as $category ): ?>
                        
                            <option value="<?= $category['id'] ?>"><?= $category['category'] ?></option>
                        
                     <?php endforeach; ?> 

                     </select>
                  </div>

                  <div class="col-md-12 mb-3">
                      <button type="submit" class="btn btn-primary">Publicar</button>
                  </div>   
               </div>
            </form>
         </aside>
     </section>
  </div>