"use strict";

let titular = document.querySelector("#autor")
let source = document.createElement('source')
let like = document.querySelectorAll('.like')
let onLike = document.querySelector('.onLike')
let videoid = document.querySelector('.videoid')
let titleVideo = document.querySelector('.title')
let popover = document.querySelector('.popover-box')
let photoAuthor = document.querySelector(".myAvatar")
let textDescription = document.querySelector(".text")
let notification = document.querySelector('.lordicon')
let onSearch = document.querySelector('[type="search"]')
let groupItems = document.querySelector('.group-list-icons')
let onFormSearch = document.querySelector('#form_pesquisar')
let containerVideo = document.querySelector('#carregar-video')

const onClose = document.querySelector('.onclose')
const comments = document.querySelector('.comment')
const onSubmit = document.querySelector('#formdata')
const currentVideoId = document.querySelector('video')
const onLoading = document.querySelector('.loading-content')
const onModalNotification = document.getElementById('Notificacao')
const badgeNotification = document.querySelector('.badge-count-down')

const SERVICES = {
  view: 'http://localhost/golive/services/ViewService.php',
  video: 'http://localhost/golive/services/VideoService.php',
  reactions: 'http://localhost/golive/services/reactions.php',
  like: 'http://localhost/golive/services/LikeVideoService.php',
  comment: 'http://localhost/golive/services/CommentsService.php',
  videoviews: 'http://localhost/golive/services/ViewService.php',
  notification: 'http://localhost/golive/services/NotificationsService.php',
}


window.addEventListener("load", async () => {
   let PRODUCT = document.querySelector('.product___id').getAttribute('id')
   async function getVideos() {
      return await fetch(`${SERVICES.video}?product=${PRODUCT}`)
         .then(response => response.json())
         .catch(err => console.log(err.message()))
   }

   async function mapper() {
      const VIDEOS = await getVideos()

      if (VIDEOS.length == '') {
         throw new Error('Nenhum vídeo encontrado')
      }

      let FILTEREDACTIVES = VIDEOS.filter(video => video.video_status == 'ATIVO')

      FILTEREDACTIVES.map(video => {
         findAll(video);
      })
   }

  
   function findAll(video) {
      if (video.length == '') throw new Error('Não foi possível carregar o conteúdo.')

      document.querySelector("#items").innerHTML += componentTemplate(video);
   }

   async function onNotify() {
      const VIDEOS = await getVideos()

      VIDEOS.forEach(function(item) {
         let videoid = item.id
         onCheckNotifications(videoid)
      })
   } 

   async function onCheckNotifications(videoid) {
      let userid = document.querySelector('.user').getAttribute('id')
      let params = `uuiduser=${userid}&uuidvideo=${videoid}&uuidprod=${PRODUCT}`
    
      const createdContextNotification = await getVideos()

      try {
         const data = await fetch(`${SERVICES.notification}?`+params)
         const line = await data.json() 
         
         if(line['ROW'] === 0) {            
            createdContextNotification.map((notificationData, index) => {
               if(notificationData.id === videoid && notificationData.product_id === PRODUCT) 
                  // Crio uma nova notificação
                  createElementNotification(notificationData)
            })
         }

      } catch(err) {
         console.log(`Não foi possível checar novas notificações: ${err.message}`)
      }
   }

   // disable mouse click right 
   document.oncontextmenu = function() {
      return true;
   }

   async function find() {
      const VIDEOS = await getVideos()

      const FILTEREDACTIVES = VIDEOS.filter(video => video.video_status == 'ATIVO')

      if(FILTEREDACTIVES.length == '') {
         notFoundError404()
         return 'Nenhum vídeo encontrrado'
      }

      let video = document.createElement('video')
      let source = document.createElement('source')

      // uso um spread operator para espalhar os valores, pegando o último obj
      let { id, url, title, author, description, user_avatar } = [...FILTEREDACTIVES].pop() 

      console.log(id)
      
      titular.textContent = author;
      titleVideo.textContent = title;
      source.src = url;
      source.type = "video/mp4"

      textDescription.textContent = description;

      photoAuthor.src = `http://localhost/golive/web/view/archive/avatar/${user_avatar}.png`

      const attributes = {
         width: '100%',
         height: '387px',
         controls: "",
         controlsList: 'nodownload',
         id: id,
         class: `current`,
         preload: 'auto'
         // poster: 'http://localhost/golive/view/archive/img/poster.png'
      }

      setAtributeComponent(video, attributes)

      video.appendChild(source);
      containerVideo.appendChild(video);

      return id;
   }

   var aux = 0
   Array.prototype.forEach.call(like, function(element) {
      element.addEventListener("click", async () => {
        aux++
        const contextLike = event.target.title
        const uuidUser = document.querySelector('.user').getAttribute('id')
        const uuidVideo = document.querySelector('video').getAttribute('id')

        if(aux === 1) {
            var newLike = parseInt(document.querySelector('.countDownLikes').textContent)
            document.querySelector('.countDownLikes').textContent = newLike + 1
        }
      
      
        try {
            await fetch(SERVICES.like, {
               method: "post",
               headers: {
                  'Content-Type': 'application/json;charset=utf-8'
               },

               //serializo os dados no Body da requisição
               body: JSON.stringify({
                  action: 'ADD',
                  videoId: `${uuidVideo}`,
                  user: `${uuidUser}`,
                  text: `${contextLike}`
               })

            }).then(response => response.status)

        } catch(err) {
          console.log(err)
        }

      })
   })

   setTimeout(() => {
      notification.addEventListener('mouseenter', () => {
         $(popover).slideToggle().css('display', 'flex')
      })
   }, 7000)

   notification.addEventListener('click', () => {
      $(popover).slideToggle()
   })

   onLike.addEventListener("mouseenter", () => {
      groupItems.classList.toggle('activate')
   })

   onClose.addEventListener('click', () => {
      $(popover).slideToggle()
   })

   /**
    * Quando um submit for executado envio um novo comentários para o banco de dados
    **/
   onSubmit.addEventListener("submit", (e) => {
      e.preventDefault();

      let userAuthor = document.querySelector('.userlogged').textContent
      const contextMessage = document.querySelector('[name="comment"]').value
      const uuidCurrentVideo = document.querySelector('video').getAttribute('id');

      // Crio um comentário
      const COMMENT = {
         author: userAuthor,
         message: contextMessage,
         created: getDatetime(),
         video: parseInt(uuidCurrentVideo, 10)
      };

      if (COMMENT.message === '') return
         // Envia requisição de comentario POST p/ backend
         postComment(COMMENT)

         // Limpo o input do comentário 
         document.querySelector('[name="comment"]').value = ''

         removeComponent( document.querySelector('#comment-list'))

         // Recarrega lista de comentários  
         getLoadComments(uuidCurrentVideo);

   })

   onSearch.addEventListener("blur", (event) => {  
      removeComponent(document.querySelector('#items'))    
      // se quando perder o foco do elemento estiver vazio, recarrego a lista de videos
      if (event.target.value == '') return mapper();
   })

   /**
    * Função responsavel criar uma requisição e enviar os dados
    **/ 
   async function postComment(comment) {
      const {author, message, created, video } = comment
      //  let userAvatar = document.querySelector('.user-avatar').textContent = 'png'

      try {

            await fetch(SERVICES.comment, {
               method: "post",
               headers: {
                  'Content-Type': 'application/json;charset=utf-8'
               },

               body: JSON.stringify({
                  action: 'ADD',
                  autor: `${author}`,
                  avatar: `teste`,
                  mensagem: `${message}`,
                  criacao: `${created}`,
                  video: `${video}`
               })

            }).then(response => {
               console.log({ message: 'Comentário salvo com sucesso', statusCode: response.status})
            })
         
      } catch(err) {
         console.log(err)
      }
   }

   /**
    * Aguarde a Promise ser resolvida e retorne o id
    */
   let uuid = await find()

   mapper()

   /**
    * Recarrego a lista de COMENTÁRIOS p/ o vídeo atual
    */ 
   getLoadComments(uuid)
    
   /**
    * Pega a quantidade de LIKES do vídeo
    */ 
   getLikes(uuid) // UUID - Identificador Único Universal
   
   /**
    * Pega a quantidade de VISUALIZAÇÃO do vídeo
    */ 
   getViews(uuid)

   updateNotificationCountDown(7000)

   onNotify()

 });

 /**
  * Requisita todos os comentários pelo id do video Atual 
  **/
 async function getLoadComments(uuidCurrentVideo) {

   const comments = await fetch(`${SERVICES.comment}?id=${uuidCurrentVideo}`)
               .then(response => response.json())
               .catch(err => { console.log(`Não foi possível carregar os comentários ${err.message}`) })


            
   loading()

   // Recebe total comentarios do vídeo
   let countDownComments = comments.length ?? 0 

   document.querySelector('.countDownComments').textContent = countDownComments

   setTimeout(() => {
      loading() 

      notRecordFound(comments)

   }, 1200)

   let sortedComments = comments.sort((firstItem, lastItem) => { return lastItem.id - firstItem.id })

   sortedComments.forEach(data => {
      createElementComment(data)
   })
 }


 /**
 * Requisita total de visualizações do video 
 **/
 async function getViews(uuidCurrentVideo) {
    try {
      let countDownViews;

      const views = await fetch(`${SERVICES.videoviews}?videoid=${uuidCurrentVideo}`)
                     .then(response => response.json())
                     .catch(err => console.log(err.message))

                     console.log(views)

      countDownViews = views 

      if(typeof views == 'undefined') countDownViews = 0
         document.querySelector(`#views`).textContent = `${countDownViews} visualizações` ?? 0 
         document.querySelector(`#views`).setAttribute('value', countDownViews)
         // var totalViews = document.querySelector("#views").getAttribute("value")
         // document.querySelector(`#uuidvideo_${uuidCurrentVideo}`).textContent = `${totalViews} visualizações` ?? 0

         // getReactions(uuidCurrentVideo)
       
    } catch(err) {
      console.log( err)
    }
 }

 async function getReactions(uuid){
   //  try {
   //      // fetch aqui p/ pegar dados
   //      await fetch(`${SERVICES.reactions}?videoid=${uuid}`)
   //      .then(response  => response.json())
   //      .then(data => {
   //        document.getElementById('Amei').textContent = data.Amei ?? 0
   //        document.getElementById('Aplausos').textContent = data.Aplausos ?? 0
   //        document.getElementById('Sorridente').textContent = data.Sorridente ?? 0
   //        document.getElementById('Animado').textContent = data.Animado ?? 0
   //        document.getElementById('Nao_gostei').textContent = data.Nao_gostei ?? 0
   //      })

   //  } catch(err) {
   //     console.log(err)  
   //  }
 }


 /**
 * Pega a quantidade de likes do vídeo baseado no ID 
 */
 async function getLikes(uuidCurrentVideo) {
   try {
      if (uuidCurrentVideo == '') throw new Error("Aconteceu um erro inesperado")
         let likes = await fetch(`${SERVICES.like}?videoid=${uuidCurrentVideo}`)
         const result = await likes.json()
         document.querySelector('.countDownLikes').textContent = result.TOTAL_LIKES

         getReactions(uuidCurrentVideo)

   } catch(err) {
      console.log(err)
   }   
 }


/**
 * Retorna data e hora no formato: [ 18 de Ago de 2022 13:00 ]
 **/
function getDatetime() {
   const months = ["Jan", "Fev", "Mar", "Abr", "Mai","Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

   const d = new Date();
   let month = months[d.getMonth()];
   return `${d.getDate()} de ${month} de ${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`
}

function getUrlVideo() {
   let { id, title, alt, name } = event.target

   let getValueClass = event.target.className
   let videoAvatarId = getValueClass.replace(/\D/gim, '');
   // pega descrição do vídeo
   let videoDescription = event.target.nonce

   let parentBoxComment = document.querySelector('#comment-list')

   let extension = name.split('.').pop();

   const VIDEO = {
      id: id,
      title: title,
      autor: alt,
      uniformResourceLocator: name,
      imageAuthor: videoAvatarId,
      description: videoDescription
     
   }

   var uuidCurrentVideo = VIDEO.id

   // remove os elementos de comentarios
   removeComponent(parentBoxComment);

   // remove o elemento  <video/> do DOM
   removeComponent(containerVideo);

   let video = document.createElement('video');

   photoAuthor.src = `http://localhost/golive/web/view/archive/avatar/12.png`

   video.setAttribute("width", "100%");
   video.setAttribute("height", "387px");
   video.setAttribute("controls", "");
   video.setAttribute("preload", "auto");
   video.setAttribute("id", VIDEO.id);

   video.classList.add('onplaying');
   video.setAttribute("autoplay", true);
   video.setAttribute("controlsList", "nodownload");

   source.setAttribute("onclick", "handleOnPlay()");
   source.src = VIDEO.uniformResourceLocator;
   source.setAttribute("id", 'video');
   source.type = 'video/'+extension

   titular.textContent = VIDEO.autor
   titleVideo.textContent = VIDEO.title
   textDescription.textContent = VIDEO.description

   video.appendChild(source);
   containerVideo.appendChild(video);
   
   // Recarrego a lista atualizada de comentarios p/ o video atual
   getLoadComments(uuidCurrentVideo);

   // Pega total de LIKES do video   
   getLikes(uuidCurrentVideo)

   /**
   * Pega a quantidade de VISUALIZAÇÃO do vídeo
   */ 
   getViews(uuidCurrentVideo)

   // Resolvo a promise e pego o resultado
   getVewsUserById(uuidCurrentVideo).then(response => {
      // Retorna false e não contabiliza visualização
      if(response.VIEWS > 0) {
         return false 
      }

      handleVideoEnded(id)  
   })
}

/**
 * criando e renderizando um novo componente de comentário 
 **/
function createElementComment(comment) {

   const {autor, mensagem, criacao, user_avatar} = comment

   // let userAvatar = document.querySelector('.user-avatar').textContent

   let parentBoxComment = document.querySelector('#comment-list')
   let avatar = "http://localhost/golive/web/view/archive/avatar/12.png"

   let box = document.createElement('div')
   let item = document.createElement('div')
   let message = document.createElement('p')
   let titular = document.createElement('span')
   let datetime = document.createElement('small')
   let authorImage = document.createElement('img')

   box.classList.add('comment-item')

   authorImage.src = avatar
   // photoAuthor.src = `http://localhost/golive/view/archive/avatar/${user_avatar}.png`

   authorImage.width = '30px'
   authorImage.height = '30px'

   item.classList.add('item')
   titular.textContent = autor
   message.textContent = mensagem
   datetime.textContent = criacao

   item.appendChild(authorImage)
   item.appendChild(titular)
   item.appendChild(message)
   item.appendChild(datetime)

   box.appendChild(item)
   parentBoxComment.appendChild(box)
   
   // Limpo novamente o input do comentario
   document.querySelector('[name="comment"]').value = ''
}

function createElementNotification(notificationData) {   
   const notification = document.createElement('div')
   const notificationAuthor = document.createElement('img')
   const notificationBox = document.createElement('div')
   const notificationContext = document.createElement('a')
   const notificationCreated = document.createElement('span')
   
   notificationAuthor.src = 'http://localhost/golive/web/view/archive/avatar/12.png'

   let str = notificationData.author
   const [, match] = str.match(/(\S+) /) || [];

   notification.classList.add('notification-item')
   notification.classList.add(`notify_${notificationData.id}`)
   notificationContext.textContent = `${match} publicou um novo vídeo: ${notificationData.title}`

   notificationBox.classList.add('group-notify')

   notificationContext.href = '#'
   notificationContext.setAttribute("id", notificationData.id)
   notificationContext.setAttribute("alt", notificationData.author)
   notificationContext.setAttribute("name", notificationData.url)
   notificationContext.setAttribute("title", notificationData.description)
   notificationContext.setAttribute("onclick", "getUrlVideo(this)")
   notificationContext.setAttribute("data-js", "notification")
   notificationCreated.textContent = notificationData.data_created

   notificationBox.appendChild(notificationContext)
   notificationBox.appendChild(notificationCreated)

   notification.appendChild(notificationAuthor)
   notification.appendChild(notificationBox)
   onModalNotification.appendChild(notification)
}

function notiticationEmpty(notificationData) {
   if (notificationData.length == '') {
      alert('Não há nenhuma notificação!')
   }
}

function handleVideoEnded(id) {
  let onVideo = document.querySelector('video')
  var userid = document.querySelector('.user').getAttribute('id')
  var productid = document.querySelector('.product___id').getAttribute('id')
 

  onVideo.addEventListener("ended", async () => {
      const ONPLAYED = {
         action: 'onplaying',
         videoid: id,
         userid: userid,
         productid: productid
      }
      
      // let total = countDownViews + 1
      // countDownViews.textContent = `${total} visualizações` ?? 0

      await fetch(SERVICES.view,  {
          method: "post",
            headers: {
               'Content-Type': 'application/json;charset=utf-8'
            },

            body: JSON.stringify(ONPLAYED)
         }   
      ).then(response => {
         console.log(response)
      })

  })
}

/**
 * Checa se o usuário já visualizou o vídeo
 */ 
async function getVewsUserById(id) {
   let userid = document.querySelector('.user').getAttribute('id')

   try {

      let fetchUser = await fetch(`${SERVICES.videoviews}?userview=true&useruuid=${userid}&videouuid=${id}`)
      let user = await fetchUser.json()
      
      return user

   } catch(err) {
      console.log(err)
   }

   return true   
}

setTimeout(() => {
   let elementsNotifications = document.querySelectorAll('[data-js="notification"]')

   Array.prototype.forEach.call(elementsNotifications, function(notification){
       notification.addEventListener("click", (item, index) => {
         let id = item.target.id
         handleUpdateNotification(id)
       })  
   })

}, 7000)

function handleUpdateNotification(id) {
   if (id === '') return

   document.querySelector(`.notify_${id}`).addEventListener("click", function() {
      this.remove()

      // Atualiza contador de notificações 
      updateNotificationCountDown(1000)

      const VIEW = {
         action: "set_update",
         id: id,
         userid: document.querySelector('.user').getAttribute('id'),
         productid: document.querySelector('.product___id').getAttribute('id'),
         status: 'VISTO'
      }

      fetch(SERVICES.view, {
         method: "post",
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
         },

         body: JSON.stringify(VIEW)
      }).then(response => {
         console.log({ message: 'Dados atualizados com sucesso', statusCode: response.status})
      })
   })
}

function updateNotificationCountDown(counter) {
   setTimeout(() => {
      badgeCountDown(Array.from(document.querySelectorAll('[data-js="notification"]')).length ) 
      
      if (Array.from(document.querySelectorAll('[data-js="notification"]')).length == 0) {
          document.querySelector('.none-notification').classList.toggle('notification-is-empty')
      }

   }, counter)
}

/**
 * Retorna Badge do total de notificações 
 **/
function badgeCountDown(notificationsCountDown) {
  const notification = notificationsCountDown 
  return  badgeNotification.innerHTML = `${notification}+` ?? 0
}

/**
 * Cria atributos a partir de um Objeto de configurações 
 */
function setAtributeComponent(component, attributes) {
   for(let attr in attributes) {
      component.setAttribute(attr, attributes[attr])
   }        
}

/**
 * Remove o(s) elemento(s) filho(s) a partir d elemento PARENT
 */
function removeComponent(parent) {
   // caso haja um filho um nó filho no elemento <parent/> remova-o do DOM
   while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
   }
}

/**
 * Se não houver comentários executo função com feedback p/ usuário 
 */
function notRecordFound(comments) {
   // removeComponent(document.getElementById('comment-list'))

   if(comments.length == '') {   
      var span = document.createElement('span')
      span.classList.add('toast-alert')
      span.textContent = 'Nenhum comentário.'

      document.getElementById('comment-list').appendChild(span)
      document.querySelector('.button-ver-mais').classList.toggle('active')
   } 

}

function notFoundError404() {
   let poster = 'http://localhost/golive/web/view/archive/flextube/http-error-404-not-found.png'
   let video = document.createElement('video')

   video.setAttribute('height', '315px')
   video.setAttribute('poster', poster)

   containerVideo.appendChild(video);

   document.querySelector('#items').textContent = 'Nenhum vídeo publicado'
}
      
/**
 *  Requisita a lista de videos em JSON  
 **/
onFormSearch.onsubmit = async function(e) {
   e.preventDefault();

   let inputFieldValues = e.target[0].value;
   let uuid_prod = document.querySelector('.product___id').getAttribute('id')

   // Se input for vazio aborto a execução
   if(inputFieldValues == '') return;
      let allVideos = await fetch(`${SERVICES.video}?product=${uuid_prod}`).then(response => response.json())

      allVideos.filter(function(video) {
         if(video.title.includes(inputFieldValues) && video.product_id === uuid_prod)  return video
           
      }).map(video => {
         if(video.length == 0) return mapper()
            filterVideo(video)
      })
}

/**
 *  Recarregar mais conteúdo p/ o usuário visualizar modificando o componente de visualização
 **/
onLoading.onclick = (event) => {
   event.preventDefault()
   let scale = 200

   let boxHeightMin = document.querySelector('.w-min-750-box-comment')
   let heightMinElement = boxHeightMin.clientHeight
   let setHight = heightMinElement + scale

   boxHeightMin.style.height = `${setHight}px`;
   
   movieScrollToBottom(setHight)
}

function filterVideo(video) {
   let component = document.querySelector("#items");

   removeComponent(component);

   let output = componentTemplate(video);
   component.innerHTML += output;
}

/**
 * Monto o componente necessario para renderizar o vídeo
 */ 
function componentTemplate(video) {
   let uuidCurrentVideo = video.id;
   
   // Desestruturação do objeto
   const { id, url, title, author, user_avatar, description } = video

   // const getDataViews = (id) => {
   //    fetch(`${SERVICES.view}?videoid=${uuidCurrentVideo}`)
   //    .then(response => response.json())
   //    .then(views => {
   //       console.log(views)
   //       try {
   //          document.querySelector(`#uuidvideo_${id}`).textContent = `${views ?? '0' } visualizações`
   //       } catch(err) {
   //          console.log(err)
   //       }

   //    }).catch(err => {
   //       console.log('Erro ao carregar os dados de visualização.')
   //    })
   // }

   
   return `
      <div class="movie" >
         <div class="thumbnail-video">
            <video>
               <source src=${url} type="video/mp4" id="video">
            </video>

            <div class="details-video">
               <span>${title}</span>
               <small class="name-author">${author}</small>
               <small id='uuidvideo_${id}'></small>
            </div>
         </div>

         <div class="frame">
            <div class="play">
               <img src='http://localhost/golive/web/view/archive/flextube/icons/play.png'' 
                  onclick='getUrlVideo(this)' 
                  id=${id}
                  name=${url} 
                  title='${title}' 
                  alt='${author}' class='avarar_${user_avatar}' nonce='${description}' />
            </div>
         </div>
         
      </div>`;  
}

function movieScrollToBottom(currentValue) {
   let value = currentValue + 750

   window.scrollTo({
      bottom: value,
      left: 0,
      behavior: 'smooth'
   });
}

function loading() {
  document.querySelector('.loader').classList.toggle('active')
}



      // function progressLoop() {
      //    alert('cheguei ate aqui')
      //   setInterval(function () {
      //     progress.value = Math.round((video_.currentTime / video_.duration) * 100);
          
      //     timer.innerHTML = 
      //     Math.round(video_.currentTime) + " seconds";
      //   });
      // }
  
      // function playPause() {
      //   if (video_.paused) {
      //     video_.play();
      //     button.innerHTML = "Pause";
      //   } else {
      //     video_.pause();
      //     button.innerHTML = "Play";
      //   }
      // }
  
      // // video_.addEventListener("click", playPause);
      // play.addEventListener("play", progressLoop);


  