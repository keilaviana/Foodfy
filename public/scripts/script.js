const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener("click", function(){
        let indexId = card.getAttribute('id')
        window.location.href=`/recipes/${indexId}`
    })
}
