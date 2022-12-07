const songList = [ 
    {
        title: "De tanto chimbiar",
        file: ".mp3",
        cover: "img1"
    },
    {
        title: "Quemando calorias",
        file: ".mp3",
        cover: "img1"
    },
    {
        title: "Aguante",
        file: ".mp3",
        cover: "img1"
    }
]

//Capturar elementos del DOM
const songs = document.getElementsByClassName("songs")

//cargar canciones y mostrar listado

function loadSongs(){
    songList.forEach((song, index) => {
        console.log(index)
        const li = document.createElement("li")
        const link = document.createElement("a")
        link.textContent = song.title
        link.href = "#"
        li.appendChild(link)
        songs.appendChild(li)
        
    })
}

//go

loadSongs()

