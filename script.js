function startGame() {

    const  cardsQuantity = prompt("Com quantas cartas você deseja jogar? Por favor, informe um número par entre 2 e 14")
    const cards = document.querySelectorAll('.card');
    
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    
    if(cardsQuantity % 2 == 0 && cardsQuantity >= 2 && cardsQuantity <= 14) {
        alert('Tudo certo, Vamos começar!');
    }else{
        startGame();
    }
  
    
    function flipCard() {
      if (lockBoard) return;
      if (this === firstCard) return;
    
      this.classList.add('flip');
    
      if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    
        return;
      }
    
      secondCard = this;
      checkForMatch();
    }
    
    function checkForMatch() {
      let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    
      isMatch ? disableCards() : unflipCards();
    }
    
    function disableCards() {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
    
      resetBoard();
    }
    
    function unflipCards() {
      lockBoard = true;
    
      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    
        resetBoard();
      }, 1500);
    }
    
    function resetBoard() {
      [hasFlippedCard, lockBoard] = [false, false];
      [firstCard, secondCard] = [null, null];
    }
    
    (function shuffle() {
      cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
      });
    })();
    
    cards.forEach(card => card.addEventListener('click', flipCard));
    
    
  }
  startGame();
  