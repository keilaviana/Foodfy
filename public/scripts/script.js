const cards = document.querySelectorAll('.card')
const status = document.querySelectorAll('.status')

for(let card of cards){
    card.addEventListener("click", function(){
        let indexId = card.getAttribute('id')
        window.location.href=`/recipes/${indexId}`
    })
}

for(let botao of status){
    botao.addEventListener("click", function(){
        if(querySelector('.lista').style.display == "block"){
            querySelector('.lista').style.display == "none"
            modo.innerHTML = "MOSTRAR"
        }else{
            querySelector('.lista').style.display == "block"
            modo.innerHTML = "ESCONDER"
        }
    })
}

const buttons = document.querySelectorAll('.status')
const infos = document.querySelectorAll('.lista')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if (infos[i].style.display == 'none') {
            infos[i].style.display = 'block'
            buttons[i].textContent = "ESCONDER"
        } else {
            infos[i].style.display = 'none'
            buttons[i].textContent = "MOSTRAR"
        }
    })
}



