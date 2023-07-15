
<div class="content-wrapper">
		 <section>
		   <div class="flex-channel-header col-md-12">
		      <div class="card-header">
		         <i class="fab fa-youtube"></i>
		         <h3>GOLIVE</h3>
		      </div>
		      <div class="flex-input-search">
		         <form id="form_pesquisar">
		            <div class="" id="busca">
		               <input type="search" name="pesquisar" placeholder="Pesquisar" >
                     <button type="submit" id="pes"><i class="fa fa-search" style="font-size:1.4rem"></i></button>
		            </div>
		         </form>
		      </div>
		      <div class="flex-notification">
               <lord-icon class="lordicon" 
                     src="https://cdn.lordicon.com/ndydpcaq.json" 
                     trigger="hover" 
                     colors="outline:#0c246c,primary:#e8b817,secondary:#e8b817">
               </lord-icon>

               <span class="badge-count-down" ></span>
               <div class="popover-body popover-box arrow" id="Notificacao">
                 <aside class="notification-header">
                  <span> Notificações</span>
                  <section></section> 
                  <div style="background-color:transparent">
                      <button type="button" class="close onclose" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true" style="font-size:2rem;cursor:pointer;">&times;</span>
                      </button>
                  </div>
                 </aside>

                 <span class="none-notification">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.137 3.945c-.644-.374-1.042-1.07-1.04-1.82v-.003c0-1.172-.939-2.122-2.097-2.122s-2.097.95-2.097 2.122v.003c.002.751-.396 1.446-1.04 1.82-4.668 2.712-1.986 11.715-6.863 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6zm5.015-12.521c-.246-1.504-.933-3.682-2.817-5.515l1.396-1.434c1.8 1.752 2.974 4.044 3.395 6.626l-1.974.323zm-18.015-.322c.421-2.583 1.595-4.874 3.395-6.627l1.396 1.434c-1.884 1.833-2.572 4.011-2.817 5.515l-1.974-.322z"/></svg> <br>
                    Suas notificações são exibidas aqui
                 </span>
               </div>
		      </div>
		   </div>

         <div class="flex">
            <div class="flex-container-movie">
               <span id="carregar-video">
                  <!-- <VIDEO/> !-->
               </span>
              
               <div class="flex-items-details">
                  <div class="title">
                  </div>
                  <div id="views"></div>
                  <div class="flexbox-likes">
                     <div id="countComments">
                        <i class="countDownComments"></i>
                        <i class="far fa-comment"></i>
                     </div>
                     <div id="countLikes">
                         <ul class="icons-item onLike">
                         <i class="countDownLikes" >0</i>
                         <li>
                           <lord-icon src="https://cdn.lordicon.com/iwaotjbp.json" colors="primary:#e8308c,secondary:#ebe6ef" >
                           </lord-icon>
                        </li>

                        <li>
                           <lord-icon src="https://cdn.lordicon.com/ffcffyir.json"></lord-icon>
                        </li>
                       
                        <li><lord-icon src="https://cdn.lordicon.com/lcucqigi.json"></lord-icon></li>

                        <li>
                           <lord-icon src="https://cdn.lordicon.com/qxjdtzah.json" colors="outline:#0c246c,primary:#3a3347,secondary:#f9c9c0">
                           </lord-icon>
                        </li>
                     </ul>

                     </div>
                     <ul class="group-list-icons" >
                        <li data-toggle="tooltip">
                           <lord-icon class="like" title="Amei" 
                                 src="https://cdn.lordicon.com/iwaotjbp.json"
                                 trigger="hover"
                                 colors="primary:#e8308c,secondary:#ebe6ef"
                                 >
                           </lord-icon>
                            <span id="Amei"></span>
                        </li>

                        <li data-toggle="tooltip" >
                           <lord-icon class="like" title="Sorridente" 
                                 src="https://cdn.lordicon.com/ffcffyir.json"
                                 trigger="hover">
                           </lord-icon>
                           <span id="Sorridente"></span> 
                        </li>
                        <li  data-toggle="tooltip"  >
                           <lord-icon class="like" title="Animado" 
                                 src="https://cdn.lordicon.com/rlzrspun.json"
                                 trigger="hover">
                           </lord-icon>
                           <span id="Animado"></span>   
                        </li>
                          <li data-toggle="tooltip" >
                           <lord-icon 
                                 class="like" title="Aplausos" 
                                 src="https://cdn.lordicon.com/lcucqigi.json"
                                 trigger="loop">
                           </lord-icon>
                           <span id="Aplausos"></span>
                        </li>

                        <li data-toggle="tooltip"   >
                           <lord-icon class="like" title="Não gostei" 
                                 src="https://cdn.lordicon.com/qxjdtzah.json"
                                 trigger="hover"
                                 colors="outline:#0c246c,primary:#3a3347,secondary:#f9c9c0">
                           </lord-icon>
                            <span id="Nao_gostei"></span>
                        </li>
                     </ul>
                     <i class="videoid" id=""></i>

                  </div>
                  <div class="line"></div>
               </div>
               <div class="flex-authors">
                  <img src="" class="myAvatar">
                  <div id="autor"> </div>
               </div>
               
               <div class="video-description text">
                  <p></p>
               </div>
               <div class="comments-group">
                  <hr>
                  <form id="formdata">
                     <div class="comment form-group" >
                        <img src="http://localhost/golive/web/view/archive/avatar/<?=$_SESSION['useravatar']?>.png" >
                        <input type="text" name="comment" class="form-control" placeholder="Adicione um comentário"> 
                        <button type="submit" id="pes" class="oncomment">
                          <i class="fa fa-share"></i>
                        </button>
                     </div>
                  </form>
                  <div class="w-min-750-box-comment">
                     <section id="comment-list">
                        <!-- comentarios -->
                     </section>
                    <div class="content-loader">
                         <span class="loader"></span>
                    </div>
                  </div>

                  <section class="button-ver-mais">
                     <a href="#" class="loading-content">
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"/></svg>
                     </a>
                  </section>
               </div>
            </div>
            <div class="flexbox-collumn-movie" id="items">
               <!-- lista videos -->
            </div>
         </div>
    </section>
  </div>