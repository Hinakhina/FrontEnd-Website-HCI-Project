let social = document.getElementsByClassName('social')
for(let i = 0; i < social.length; i++){
    social[i].addEventListener('click', function(){
        alert('No Link Yet')
    })

}

let founder = document.getElementsByClassName('founder-div')
for(let i = 0; i < founder.length; i++){
    founder[i].addEventListener('click', function(){
        founder[i].classList.toggle('sticky')
    })

    founder[i].addEventListener('mouseenter', function(){
        founder[i].classList.toggle('sticky')
    })
}