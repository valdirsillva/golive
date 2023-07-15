var mod_page_post = "
	
$(document).ready(function(){
	 mostrarPost();
	setInterval(function(){
		mostrarPost();
	},200000);
	
		
$(document).scroll(function(){ 
		var bottomDiv = $('#conteudo').height()+$('#conteudo').offset().top;
        var bottomWindow = $(window).height() + $(window).scrollTop();
		
		if (bottomWindow < bottomDiv){ $("#mais").css("display","none");}
		if (bottomWindow == bottomDiv){ $("#mais").css("display","none"); }
		if (bottomWindow > bottomDiv)
		{
		
				$("#mais").css("display","block");
			
			
		} 
    }); 
});
	
	
$("#mais").click(function()
	  {
		 $.ajax({
           url:'../controll/post.php', 
           type:'POST', 
           data:'limit=5', 
           success: function(data)
			{ 
				mostrarPost();
            } 
		 });
		
	 });
	
	
	function mostrarPost()
	{
	var avatar_id ='<?=$_SESSION['id_avatar']?>';
	var user_id  ='<?=$_SESSION['id_user']?>';
    $.ajax({
      url: '../controll/post.php',
      type: 'GET',
      success: function(response) {
        const tasks =  $.parseJSON(response);
        let template = '';
		  
		  tasks.forEach(task=>{
			  var conteudo ='';
			   var permission_comentary ='';
		if(task.id_post_type==1)
				{
				 conteudo  = `<img class="img-fluid pad" src="${task.url_post}" alt="Photo">`
					
				}
			if(task.id_post_type==3)
				{
				 conteudo  = `<iframe width="100%" height="600px;" 
                    src='${task.url_post}'">
                   </iframe>`
				}	  
		if(task.id_post_type==4)
				{
				 conteudo  = `<center><iframe width="100%" height="600px;" 	src="${task.url_post}" > </iframe></center>`
				}	  
		if(task.id_post_type==2)
				{
				  conteudo  = `

				<video width="100%" height="600px;" controls="true" autoplay="" name="media">

                   <source src="${task.url_post}" type="video/mp4">
	
				</video>`

				} 
			  
		if(task.permission_comentary==0)
		{
			permission_comentary= `
			<div class="card-footer ">
                  <img class="img-fluid img-circle img-sm" src="../view/archive/avatar/${avatar_id}.png" alt="Alt Text">
                 
                  <div class="img-push">
                    <input type="text"   id="post_messagem${task.id_post}"   class="form-control form-control-sm comentario_mensagem " data-touserid='${task.id_post}' tousername="${task.id_user}" placeholder="Aperte enter para postar o comentário" required>
                  </div>
              </div>
			<!-- inicio do bloco de comentários -->
				<div id="comentario${task.id_post}"></div>
			<!-- Final do bloco de comentários -->
`
		}
			  
		if(task.permission_comentary==1)
		{
			permission_comentary=``
		}
			  
		template +=`
            <!-- Box Comment -->
            <div class="card card-widget">
              <div class="card-header">
                <div class="user-block">
                  <img class="img-circle" src="../view/archive/avatar/${task.id_avatar}.png" alt="User Image">
                  <span class="username"><a href="#">${task.name_user}.</a></span>
                  <span class="description" >   ${task.post_date_hours} </span>
                </div>
                <!-- /.user-block -->
                <div class="card-tools">
                  <button type="button" class="btn btn-tool" title="Favoritar post">
				  <span class="float-right text-sm text-"><i class="fas fa-star"></i></span>
                  </button>

                </div>
                <!-- /.card-tools -->
              </div>

              <!-- /.card-header -->

              <div class="card-body">
				<h4 > ${task.name_category} - ${task.title_name} </h4>
				<hr>
				<p style="font-size:14px;" alight="justify">${task.post_description}</p>
				${conteudo}
				<div id="comentarycount${task.id_post}"></div>
              </div>

				${permission_comentary}
			   <hr>
        
            </div>
			 	`
		    mostrarPostcomentary(task.id_post);
			contarComentary(task.id_post,user_id);
		  });       
        $('#conteudo').html(template);
      }
    });
  }	

	
	
		
function mostrarPostcomentary(id_post)
	{
		$.ajax({
   		url:"../controll/postcomentary.php",
		type:'POST',
		data:{id_post:id_post},
		success: function(response)
			{
        const tasks = $.parseJSON(response);
        let template = '';
		  tasks.forEach(task=>{
			template +=`
  			<div class="card-footer card-comments">
                <div class="card-comment">
				<img class="img-circle img-sm" src="../view/archive/avatar/${task.id_avatar}.png" alt="User Image">
				<div style="font-size:14px;" class="comment-text"> 
                    <span class="username">
                     ${task.name_user}
                      <span class="text-muted float-right">${task.post_date_hours}</span>
                    </span>
					${task.post_comentary}
                  </div>
                </div>
				<hr>
                </div>
			 	`
		  });   
        $('#comentario'+id_post).html(template);
      }
  		})
	}

$(document).on('keypress','.comentario_mensagem', function(e) 
	{
	
	if(e.which== 13)
	{
	var id_post = $(this).attr('data-touserid');
	var post_comentary =$('#post_messagem'+id_post).val();
		$.ajax({
		   url:"../controll/receiveComentary.php",
		   method:"POST",
		   data:{
			  id_post:id_post,
			  post_comentary:post_comentary
		   	 
		   	},
		   success:function(data)
   			{
				mostrarPost();
   			}
  			})	
	}
   });	 
	
		
function contarComentary(id_post,id_user)
	
	{
		$.ajax({
   		url:"../controll/countComentary.php",
		type:'POST',
		data:{id_post:id_post},
		success: function(response)
			{
        const tasks = $.parseJSON(response);
        let template = '';
		  tasks.forEach(task=>{
			template +=`

				 <div  class=" btn" style=" float: right;"><i class="far fa-comments"></i> Comentários (${task.contComentary})</div>
               <div class="btn" style=" float: left;"  " id="like${id_post}" > <i   class="far fa-thumbs-up"></i>Like (${task.contlike})</div>
			 	`
		  });  
				
        $('#comentarycount'+id_post).html(template);
	 	gravarLikecomentary(id_post,id_user);
      	}
  		})
	}
	
function gravarLikecomentary(id_post,id_user)
		{
  	$('#like'+id_post).click(function()
		{
		$.ajax({
   			url:"../controll/gravalike.php",
			type:'POST',
			data:{id_post:id_post,id_user:id_user},
			success: function(response)
			{
				mostrarPost();
			}
			});
		 });
	
		}
	
	


";