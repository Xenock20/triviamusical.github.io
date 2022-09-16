// Api de youtube

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player1
let player2
let player3
function onYouTubeIframeAPIReady() {
  player1 = new YT.Player('playerOne', {
    height: '200',
    width: '400',
    videoId: videosId[videoWin1].id, //cargar video atravez de la id
    playerVars: {
      autoPlay: 1,
      controls: 0,
      disablekb: 0
    },
  });

  player2 = new YT.Player('playerTwo', {
    height: '200',
    width: '400',
    videoId: videosId[videoWin2].id, //cargar video atravez de la id
    playerVars: {
      autoPlay: 1,
      controls: 0,
      disablekb: 0
    },
  });

  
  player3 = new YT.Player('playerThre', {
    height: '200',
    width: '400',
    videoId: videosId[videoWin3].id, //cargar video atravez de la id
    playerVars: {
      autoPlay: 1,
      controls: 0,
      disablekb: 0
    },
  });
}

//Fin de la api de youtube

let level = 1
const video1 = document.getElementById('vl1')
const video2 = document.getElementById('vl2')
const video3 = document.getElementById('vl3')
const game = document.getElementById('trivia')
const home = document.getElementById('cont-play')
const play = document.getElementById('play')
const reset = document.getElementById('r')

const lv1 = document.getElementById('lv1')
let point1 = 100
lv1.innerText = point1
const lv2 = document.getElementById('lv2')
let point2 = 100
lv2.innerText = point2
const lv3 = document.getElementById('lv3')
let point3 = 100
lv3.innerText = point3

const puntos = document.getElementById('puntos')
const soundPlay = new Audio('./sound/play.mp3')
const soundWin = new Audio('./sound/victory.mp3')
const soundError = new Audio('./sound/error.mp3')

const videoWin1 = Math.floor(Math.random() * 15)
const videoWin2 = Math.floor(Math.random() * 15)
const videoWin3 = Math.floor(Math.random() * 15)

const numRandomBoton1 = Math.floor(Math.random() * 4)
const numRandomBoton2 = Math.floor(Math.random() * 4)
const numRandomBoton3 = Math.floor(Math.random() * 4)
let botonWin
let botonDefear
let botonDefear2
let botonDefear3
let botonDefear4

const next = document.getElementById('next')

const arrTitle = []

while(arrTitle.length < 150){

  let n = Math.floor(Math.random() * 15)

  if(n !== videoWin1 && n !== videoWin2 && n !== videoWin3){
    arrTitle.push(n)
  }
}

const newArrTitle = [...new Set(arrTitle)]

const arr = [0,1,2,3,4]
const newArrLv1 = arr.filter(ele => ele !== numRandomBoton1)
const newArrLv2 = arr.filter(ele => ele !== numRandomBoton2)
const newArrLv3 = arr.filter(ele => ele !== numRandomBoton3)

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
    ele.style.background = 'var(--violeta-oscuro)'
    ele.style.border = '5px solid var(--violeta-oscuro-borde)'
    ele.style.color = 'var(--azul-oscuro-background)'
  });
}

function botonD(e){
  soundError.play()
  e.target.style.background = 'var(--rojo)'
  e.target.style.border = '5px solid var(--rojo-borde)'
  e.target.style.color = 'white'
  e.target.style.pointerEvents = 'none'
  
  if(level === 1){
    point1 -= 20
    lv1.innerHTML = point1
  }

  if(level === 2){
    point2 -= 20
    lv2.innerHTML = point2
  }

  if(level === 3){
    point3 -= 20
    lv3.innerHTML = point3
  }
}

next.addEventListener('click', (e) =>{
  if(level === 2){
    plv2()
    next.style.display = 'none'
  }
  
  if(level === 3){
    plv3()
    next.style.display = 'none'
  }

  if(level > 3){
    player3.stopVideo()
    game.style.display = 'none'

    puntos.innerText = String((point1 + point2 + point3))

    document.querySelector('.point').style.display = 'grid'
  }

  clicked()
})

function plv1(){
  player1.playVideo()

  botonWin = document.getElementById(`option${numRandomBoton1}`)

  botonWin.addEventListener('click', (e) =>{
    if(level === 1){
      botonW(e)
      video1.style.filter = 'none'
      lv1.style.backgroundColor = 'var(--verde)'
    }
  })

  botonDefear = document.getElementById(`option${newArrLv1[0]}`)
  botonDefear2 = document.getElementById(`option${newArrLv1[1]}`)
  botonDefear3 = document.getElementById(`option${newArrLv1[2]}`)
  botonDefear4 = document.getElementById(`option${newArrLv1[3]}`)

  botonWin.innerText = player1.videoTitle
  botonDefear.innerText = videosId[newArrTitle[0]].title
  botonDefear2.innerText = videosId[newArrTitle[1]].title
  botonDefear3.innerText = videosId[newArrTitle[2]].title
  botonDefear4.innerText = videosId[newArrTitle[3]].title

  botonDefear.addEventListener('click', (e) =>{
    if(level === 1){
      botonD(e)
    }
  })
  
  botonDefear2.addEventListener('click', (e) =>{
    if(level === 1){
      botonD(e)
    }
  })
  
  botonDefear3.addEventListener('click', (e) =>{
    if(level === 1){
      botonD(e)
    }
  })
  
  botonDefear4.addEventListener('click', (e) =>{
    if(level === 1){
      botonD(e)
    }
  })
}


function plv2(){
  player1.stopVideo();
  player2.playVideo()

  lv1.style.border = 'solid 2px var(--violeta-oscuro-borde)'
  lv2.style.border = 'solid 2px white';
  video1.style.display = 'none'
  video2.style.display = 'block'

  botonWin = document.getElementById(`option${numRandomBoton2}`)

  botonWin.addEventListener('click', (e) =>{
    if(level === 2){
      botonW(e)
      video2.style.filter = 'none'
      lv2.style.backgroundColor = 'var(--verde)'
    }
  })

  botonDefear = document.getElementById(`option${newArrLv2[0]}`)
  botonDefear2 = document.getElementById(`option${newArrLv2[1]}`)
  botonDefear3 = document.getElementById(`option${newArrLv2[2]}`)
  botonDefear4 = document.getElementById(`option${newArrLv2[3]}`)

  botonWin.innerText = player2.videoTitle
  botonDefear.innerText = videosId[newArrTitle[4]].title
  botonDefear2.innerText = videosId[newArrTitle[5]].title
  botonDefear3.innerText = videosId[newArrTitle[6]].title
  botonDefear4.innerText = videosId[newArrTitle[7]].title

  botonDefear.addEventListener('click', (e) =>{
    if(level === 2){
      botonD(e)
    }
  })
  
  botonDefear2.addEventListener('click', (e) =>{
    if(level === 2){
      botonD(e)
    }
  })
  
  botonDefear3.addEventListener('click', (e) =>{
    if(level === 2){
      botonD(e)
    }
  })
  
  botonDefear4.addEventListener('click', (e) =>{
    if(level === 2){
      botonD(e)
    }
  })
}


function plv3(){
  player2.stopVideo();
  player3.playVideo()

  lv2.style.border = 'solid 2px var(--violeta-oscuro-borde)'
  lv3.style.border = 'solid 2px white';
  video2.style.display = 'none'
  video3.style.display = 'block'

  botonWin = document.getElementById(`option${numRandomBoton3}`)

  botonWin.addEventListener('click', (e) =>{
    if(level === 3){
      botonW(e)
      video3.style.filter = 'none'
      lv3.style.backgroundColor = 'var(--verde)'
    }
  })

  botonDefear = document.getElementById(`option${newArrLv3[0]}`)
  botonDefear2 = document.getElementById(`option${newArrLv3[1]}`)
  botonDefear3 = document.getElementById(`option${newArrLv3[2]}`)
  botonDefear4 = document.getElementById(`option${newArrLv3[3]}`)

  botonWin.innerText = player3.videoTitle
  botonDefear.innerText = videosId[newArrTitle[8]].title
  botonDefear2.innerText = videosId[newArrTitle[9]].title
  botonDefear3.innerText = videosId[newArrTitle[10]].title
  botonDefear4.innerText = videosId[newArrTitle[11]].title

  botonDefear.addEventListener('click', (e) =>{
    if(level === 3){
      botonD(e)
    }
  })
  
  botonDefear2.addEventListener('click', (e) =>{
    if(level === 3){
      botonD(e)
    }
  })
  
  botonDefear3.addEventListener('click', (e) =>{
    if(level === 3){
      botonD(e)
    }
  })
  
  botonDefear4.addEventListener('click', (e) =>{
    if(level === 3){
      botonD(e)
    }
  })
}

reset.addEventListener('click', () => {
  location.reload();
})