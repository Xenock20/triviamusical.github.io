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
    videoId: videosId[0].id, //cargar video atravez de la id
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

const video = document.getElementById('player')
const game = document.getElementById('trivia')
const home = document.getElementById('cont-play')
const play = document.getElementById('play')
const soundPlay = new Audio('./sound/play.mp3')
const soundWin = new Audio('./sound/victory.mp3')
const soundError = new Audio('./sound/error.mp3')
let playgame = false

const videosId = [
  //{id: 'id del video', title: 'titulo del video'}
  {id: 'zbyhx5_tk0o', title: 'YSY A - Vamo A Darle'},
] 


play.addEventListener('click', (e) =>{
  soundPlay.play()
  setTimeout(jugar , 2000)
})

function jugar(){
  home.style.display = 'none'
  game.style.display = 'grid'
  player.playVideo()
}

const p1 = document.getElementById('option1')
const p2 = document.getElementById('option2')

p1.addEventListener('click', () =>{
  soundWin.play()
  p1.style.background = 'var(--verde)'
  p1.style.border = '5px solid var(--verde-borde)'
  p1.style.color = 'white'
  video.style.filter = 'blur(0px)'
})

p2.addEventListener('click', () =>{
  soundError.play()
  p2.style.background = 'var(--rojo)'
  p2.style.border = '5px solid var(--rojo-borde)'
  p2.style.color = 'white'
  video.style.filter = 'blur(0px)'
})




//Para cambiar el titulo de un boton se usa: document.getElementById('option1').innerText = videosId[0].title
