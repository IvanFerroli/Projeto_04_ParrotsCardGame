



function howManyCards() {
    let cardsQuantity = prompt("Com quantas cartas você deseja jogar? Por favor, informe um número par entre 2 e 14")
    if(cardsQuantity % 2 == 0 && cardsQuantity >= 2 && cardsQuantity <= 14) {
        renderCards();
    }else{
        howManyCards();
    }

    function renderCards() {
        const container = document.querySelector(".container")
        container.innerHTML
    }
}
howManyCards();


