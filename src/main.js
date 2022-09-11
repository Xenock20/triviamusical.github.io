// Api de youtube

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '310',
    width: '600',
    videoId: videosId[videoWin].id, //cargar video atravez de la id
    playerVars: {
      autoPlay: 1,
      controls: 0
    },
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

let done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    //setTimeout(stopVideo, 10000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

//Fin de la api de youtube

const video = document.getElementById('video')
const game = document.getElementById('trivia')
const home = document.getElementById('cont-play')
const play = document.getElementById('play')
const soundPlay = new Audio('./sound/play.mp3')
const soundWin = new Audio('./sound/victory.mp3')
const soundError = new Audio('./sound/error.mp3')
const videoWin = Math.floor(Math.random() * 4)
const numRandomBoton = Math.floor(Math.random() * 4)
const botonWin = document.getElementById(`option${numRandomBoton}`)

const videosId = [
  //{id: 'id del video'}
  {id: 'zbyhx5_tk0o', title: 'YSY A - Vamo A Darle'},
  {id: 'SWoKmOM1CQc', title: 'DUKI, Ysy A, Neo Pistea - TRAP N EXPORT (Video Oficial) #ModoDiablo Shot by Ballve'},
  {id: 'qX9JtGKxtGU', title: 'Midel x Arse x Khea (Ft. Duki x Klave) - B.U.H.O (Prod. by Omar Varela & Mykka)'},
  {id: 'ymvYySd_P2E', title: 'DUKI - GIVENCHY (Video Oficial)'},
  {id: 'y9hR9e6u1dg', title: 'Falke 912, Bhavi Ft. LIT Killah - Nat Geo Remix [Video Oficial]'},
] 

play.addEventListener('click', (e) =>{
  soundPlay.play()
  setTimeout(jugar , 2000)
})

function jugar(){
  home.style.display = 'none'
  game.style.display = 'grid'
  player.playVideo()
  botonWin.innerText = player.videoTitle
}

botonWin.addEventListener('click', () =>{
  soundWin.play()
  botonWin.style.background = 'var(--verde)'
  botonWin.style.border = '5px solid var(--verde-borde)'
  botonWin.style.color = 'white'
  video.style.filter = 'none'
})

/*
p2.addEventListener('click', () =>{
  soundError.play()
  p2.style.background = 'var(--rojo)'
  p2.style.border = '5px solid var(--rojo-borde)'
  p2.style.color = 'white'
  video.style.filter = 'none'
})
*/

//Para cambiar el titulo de un boton se usa: document.getElementById('option1').innerText = videosId[0].title