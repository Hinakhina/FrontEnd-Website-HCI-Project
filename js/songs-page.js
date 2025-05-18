for(let i = 0; i < 5; i++){
    document.getElementsByClassName('social')[i].addEventListener('click', function(){
        alert('No Link Yet')
    })

}


let songs = document.getElementsByClassName('songs-div')
let idx = 0

carousel()
document.getElementById('prev').addEventListener('click', Prev)
document.getElementById('next').addEventListener('click', Next)


function Next(){
    if(idx == songs.length - 1){
        idx = 0
    }
    else{
        idx++
    }
    carousel()
}

function Prev(){
    if(idx == 0){
        idx = songs.length - 1
    }
    else{
        idx--
    }
    carousel()
}

function carousel(){
    for(let i = 0; i < songs.length; i++){
        songs[i].style.display = "none"
    }
    songs[idx].style.display = "flex"
}


