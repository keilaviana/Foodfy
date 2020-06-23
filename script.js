const modalOverlay = document.querySelector('.modal-content')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener("click", function(){
        const imageId = card.querySelector('img').getAttribute("id")

        const title = card.children[1].textContent
        const autor = card.children[2].textContent

        modalOverlay.classList.add("active")
        modalOverlay.querySelector("img").src = `./assets/${imageId}.png`

        modal.querySelector('.modal-title p').innerHTML = title
        modal.querySelector('.modal-autor p').innerHTML = autor

    })
}


document.querySelector('.close').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})