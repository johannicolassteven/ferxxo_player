const songList = [ [ {
        title: "De tanto chimbiar",
        file: "./mp3/y2mate.com - Feid Totoy El Frio  De Tanto Chimbiar Official Video.mp3",
        cover: "./img/img1.jpg"
    },
    {
        title: "Quemando calorias",
        file: "./mp3/y2mate.com - Quemado Calorías.mp3",
        cover: "./img/img2.jpg"
    },
    {
        title: "Aguante",
        file: "./mp3/y2mate.com - Feid  Aguante Lyric Video.mp3",
        cover: "./img/img3.jpg"
    },


],
   [
    {
        title: "Ultra Solo",
        file: "./mp3/X2Download.app - ULTRA SOLO REMIX - Polimá Westcoast, Pailita, Paloma Mami, Feid, De la Ghetto (Video Oficial) (128 kbps).mp3",
        cover: "./img/img3.jpg"
    },
    {
        title: "XQ te pones asi",
        file: "./mp3/X2Download.app - Feid, Yandel - XQ Te Pones Así (Official Video) (128 kbps).mp3",
        cover: "./img/img3.jpg"
    }
]     
]

//Capturar elementos del DOM
const songs = document.getElementById("songs");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");

actualSong = null

//reproducir pausar

play.addEventListener("click", () => {
    if (audio.paused) {
        playSong()   
    } else {
        pauseSong()
    }
})

next.addEventListener("click", () => nextSong())
prev.addEventListener("click", () => prevSong())
audio.addEventListener("timeupdate", uptadeProgress)
progressContainer.addEventListener("click", setProgress)



//cargar canciones y mostrar listado
album1 = songList[0]

function loadSongs(){
    album1.forEach((song, index) => {
        const li = document.createElement("li")
        const link = document.createElement("a")
        link.textContent = song.title
        link.href = "#"
        link.addEventListener("click", ()=> loadSong(index))
        li.appendChild(link)
        songs.appendChild(li)
    })
}

//cargar canción seleccionada 

function loadSong(songIndex){
    if(actualSong != songIndex){
        changeActiveClass(actualSong, songIndex)
        actualSong = songIndex       
        audio.src = album1[songIndex].file
        playSong()
        changeCover(songIndex)
        changeTitle(songIndex)

    }
}

//Barra progreso

function uptadeProgress(event){
    const {duration, currentTime} = event.srcElement
    const percent = (currentTime / duration) * 100
    progress.style.width = percent + "%" 
}

function setProgress(event){
    const totalWidth = this.offsetWidth
    const progressWidth = event.offsetX
    const duration= (progressWidth / totalWidth) * audio.duration
    audio.currentTime = duration
}

//Actualizar controles

function updateControls() {
    if (audio.paused) {
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
    } else {
        play.classList.add("fa-pause")
        play.classList.remove("fa-play")
    }
}

function playSong() {
    if (actualSong !== null) {
        audio.play()
        updateControls()
    }
}

// Pausar canción
function pauseSong() {
    audio.pause()
    updateControls()
}


function changeActiveClass(lastIndex, newIndex){
    const links = document.querySelectorAll("a")
    if (lastIndex !== null){
        links[lastIndex].classList.remove("activo")
    }
    links[newIndex].classList.add("activo")
}

function changeCover(songIndex){
    cover.src = album1[songIndex].cover
}

function changeTitle(songIndex){
    title.innerText = album1[songIndex].title
}

//go

function prevSong(){
    if(actualSong > 0){
        loadSong(actualSong -1)
    }else{
        loadSong(album1.length -1)
    }
}
function nextSong(){
    if(actualSong < salbum1.length -1){
        loadSong(actualSong +1)
    }else{ 
        loadSong(0)
    }
}

audio.addEventListener("ended", () => nextSong() )

loadSongs()

