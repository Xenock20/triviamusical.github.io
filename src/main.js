// Api de youtube

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player1
let player2
//let player3
function onYouTubeIframeAPIReady() {
  player1 = new YT.Player('playerOne', {
    height: '200',
    width: '400',
    videoId: videosId[videoWin].id, //cargar video atravez de la id
    playerVars: {
      autoPlay: 1,
      controls: 0,
      disablekb: 0
    },
  });

  player2 = new YT.Player('playerTwo', {
    height: '200',
    width: '400',
    videoId: videosId[0].id, //cargar video atravez de la id
    playerVars: {
      autoPlay: 1,
      controls: 0,
      disablekb: 0
    },
  });

  /*
  player3 = new YT.Player('playerThre', {
    height: '200',
    width: '400',
    videoId: videosId[1].id, //cargar video atravez de la id
    playerVars: {
      autoPlay: 1,
      controls: 0,
      disablekb: 0
    },
  });*/
}

//Fin de la api de youtube

let level = 1
const video1 = document.getElementById('vl1')
const video2 = document.getElementById('vl2')
const video3 = document.getElementById('vl3')
const game = document.getElementById('trivia')
const home = document.getElementById('cont-play')
const play = document.getElementById('play')
const lv1 = document.getElementById('lv1')
let point1 = 100
lv1.innerText = point1
const lv2 = document.getElementById('lv2')
let point2 = 100
lv2.innerText = point2
const lv3 = document.getElementById('lv3')
let point3 = 100
lv3.innerText = point3
const soundPlay = new Audio('./sound/play.mp3')
const soundWin = new Audio('./sound/victory.mp3')
const soundError = new Audio('./sound/error.mp3')
const videoWin = Math.floor(Math.random() * 15)
const numRandomBoton1 = Math.floor(Math.random() * 4)
const numRandomBoton2 = Math.floor(Math.random() * 4)
//const numRandomBoton3 = Math.floor(Math.random() * 4)
const botonWin1 = document.getElementById(`option${numRandomBoton1}`)
const botonWin2 = document.getElementById(`option${numRandomBoton2}`)
//const botonWin3 = document.getElementById(`option${numRandomBoton3}`)
console.log(botonWin1)
console.log(botonWin2)
//console.log(botonWin3)

const next = document.getElementById('next')

const arrTitle = []

while(arrTitle.length < 100){

  let n = Math.floor(Math.random() * 15)

  if(n !== videoWin){
    arrTitle.push(n)
  }
}

const newArrTitle = [...new Set(arrTitle)]

const arr = [0,1,2,3,4]
const newArr = arr.filter(ele => ele !== numRandomBoton1)

const botonDefear = document.getElementById(`option${newArr[0]}`)
const botonDefear2 = document.getElementById(`option${newArr[1]}`)
const botonDefear3 = document.getElementById(`option${newArr[2]}`)
const botonDefear4 = document.getElementById(`option${newArr[3]}`)
const botones = document.querySelectorAll('.op')

const videosId = [
  //{id: 'id del video', title: 'titulo'}
  {id: '-10ZXMMc4x4', title: 'YSY A - Silbando (prod. Club Hats) | #YSYA2020 Vol. 5'},
  {id: 'OWoMlr4bUQ4', title: 'DUKI - Rockstar (Video Oficial)'},
  {id: 'rQ2KLveYGDU', title: 'DUKI, Aleman - Me Gusta lo Simple (Video Lyric)'},
  {id: 'uc8Fr6m_6qU', title: 'DUKI x YSY A - A Punta de Espada (Video Oficial)'},
  {id: 'AmNOfqeUFLk', title: 'WOS - FRESCO'},
  {id: 'VVPgs_MDSoI', title: 'YSY A - Una de Dos (prod. Club Hats) | #YSYA2020 Vol. 1'},
  {id: 'mLUZel-6p-g', title: 'YSY A - Un flow de infarto (prod. Bizarrap) | #YSYA2020 Vol. 6'},
  {id: 'y9hR9e6u1dg', title: 'Falke 912, Bhavi Ft. LIT Killah - Nat Geo Remix [Video Oficial]'},
  {id: '5K37BDfzPKk', title: 'Tiago PZK x Rusherking x LIT killah x Seven Kayne x Bhavi x Tobi - Cerca De Ti (Remix)'},
  {id: 'BPOTsDH3BaU', title: 'Seven Kayne - Buenos Aires (feat BHAVI, KHEA)'},
  {id: 'b-WbKJJjetQ', title: 'WOS - TERRAZA (Video Oficial)'},
  {id: 'l5QAOvBqT3c', title: 'WOS - CANGURO (Video Oficial)'},
  {id: 'gfhwR0hzGA0', title: 'ZANTO - ATURDIDO'},
  {id: 'xGIsFhzg9NA', title: 'Ecko, Khea, Seven Kayne & Iacho - Rebota (Prod. by Omar Varela)'},
  {id: 'ucD-T9hH7-w', title: 'Frijo - LIKE BOSS Remix ft. Moonkey, Polimá, Akapellah, Duki, Santoz, Zanto [Lyrics Video]'},
  {id: 'DeE8gnjfsrA', title: 'YSY A - Pasa que yo (prod. yesan) | #YSYA2020 Vol. 4'},
] 

play.addEventListener('click', () =>{
  soundPlay.play()
  setTimeout(jugar , 2000)
})

function jugar(){
  home.style.display = 'none'
  game.style.display = 'grid'
  
  plv1()
}

function botonW(e){
  soundWin.play()
  e.target.style.background = 'var(--verde)'
  e.target.style.border = '5px solid var(--verde-borde)'
  e.target.style.color = 'white'
  video1.style.filter = 'none'
  lv1.style.backgroundColor = 'var(--verde)'

  notclicked()

  level++

  next.style.display = 'block'
}

function notclicked(){
  botones.forEach(ele => {
    ele.style.pointerEvents = 'none'
  });
}

function clicked(){
  botones.forEach(ele => {
    ele.style.pointerEvents = 'auto'
  });
}

function botonD(e){
  soundError.play()
  e.target.style.background = 'var(--rojo)'
  e.target.style.border = '5px solid var(--rojo-borde)'
  e.target.style.color = 'white'
  point1 -= 20
  lv1.innerHTML = point1
}

botonDefear.addEventListener('click', (e) =>{
  botonD(e)
})

botonDefear2.addEventListener('click', (e) =>{
  botonD(e)
})

botonDefear3.addEventListener('click', (e) =>{
  botonD(e)
})

botonDefear4.addEventListener('click', (e) =>{
  botonD(e)
})

next.addEventListener('click', (e) =>{
  if(level === 2){
    plv2()
    next.style.display = 'none'
  }
  
  /*if(level === 3){
    plv3()
    next.style.display = 'none'
  }*/

  clicked()
})

function plv1(){
  player1.playVideo()

  botonWin1.addEventListener('click', (e) =>{
    botonW(e)
  })

  botonWin1.innerText = player1.videoTitle
  botonDefear.innerText = videosId[newArrTitle[0]].title
  botonDefear2.innerText = videosId[newArrTitle[1]].title
  botonDefear3.innerText = videosId[newArrTitle[2]].title
  botonDefear4.innerText = videosId[newArrTitle[3]].title
}

function plv2(){
  player1.stopVideo();

  lv1.style.border = 'solid 2px var(--violeta-oscuro-borde)'
  lv2.style.border = 'solid 2px white';
  video1.style.display = 'none'
  video2.style.display = 'block'

  botonWin2.addEventListener('click', (e) =>{
    botonW(e)
  })

  botonWin2.innerText = player2.videoTitle
  botonDefear.innerText = videosId[newArrTitle[4]].title
  botonDefear2.innerText = videosId[newArrTitle[5]].title
  botonDefear3.innerText = videosId[newArrTitle[6]].title
  botonDefear4.innerText = videosId[newArrTitle[7]].title
}

/*
function plv3(){
  player2.stopVideo();

  lv2.style.border = 'solid 2px var(--violeta-oscuro-borde)'
  lv3.style.border = 'solid 2px white';
  video2.style.display = 'none'
  video3.style.display = 'block'

  botonWin3.addEventListener('click', (e) =>{
    botonW(e)
  })

  botonWin3.innerText = player3.videoTitle
  botonDefear.innerText = videosId[newArrTitle[8]].title
  botonDefear2.innerText = videosId[newArrTitle[9]].title
  botonDefear3.innerText = videosId[newArrTitle[10]].title
  botonDefear4.innerText = videosId[newArrTitle1[1]].title
}
*/


//TRABAJO POR REALIZAR

/*
*Arreglar los titulos
*Agregar cambio alateorio para los videos
*Desactivar boton ya apretado

*Agregar tercer nivel
*/