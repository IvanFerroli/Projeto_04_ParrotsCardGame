function startGame() {
    const cardsQuantity = prompt(
      "Com quantas cartas você deseja jogar? Por favor, informe um número par entre 4 e 14"
    );
    const cards = document.querySelectorAll(".card");
    const card1 = document.querySelector("#c1");
    const card2 = document.querySelector("#c2");
    const card3 = document.querySelector("#c3");
    const card4 = document.querySelector("#c4");
    const card5 = document.querySelector("#c5");
    const card6 = document.querySelector("#c6");
    const card7 = document.querySelector("#c7");
  
    var flippedCards = 0;
    var moves = 0;
    var hasFlippedCard = false;
    var lockBoard = false;
    var firstCard, secondCard;
  
    // function renderGame() {
    //     const gameBoard = document.querySelector('.container')
    //     gameBoard.innerHTML = `
    //     ${deck[]}
    //     `
    // }
  
    const timer = document.querySelector(".timer");
    let interval = null;
  
    function countIncrease() {
      if (parseInt(timer.innerHTML) === 999999999) {
        clearInterval(interval);
      } else {
        timer.innerHTML = parseInt(timer.innerHTML) + 1;
      }
    }
    countIncrease();
  
    interval = setInterval(countIncrease, 1000);
  
    if (cardsQuantity % 2 == 0 && cardsQuantity >= 4 && cardsQuantity <= 14) {
      var idToHide = (14 - cardsQuantity) / 2;
  
      var idList = [];
      // do{
      //     let random = (Math.floor(Math.random() * cardsToToggle) + 1)
      //     arrayToToggle.push(random)
      // }
      // while(arrayToToggle.includes(random) == false)
      if(idToHide != 0) {
      for (i = 0; idList.length < idToHide; i++) {
          var random = Math.floor(Math.random() * 6 + 1);
          if (idList.includes(random) == false && random <= 7) {
              idList.push(random);
          console.log(idList);
          }
      }
          console.log(idList, idToHide, "IdList")
  
          for (i = 0; i <= idToHide; i++) {
              
              if ((idList[idToHide] = 1)) {
                  card1.classList.toggle("hidden");
                  console.log(idList[idToHide], "Oculta 1 (em teoria)");
              } else if ((idList[idToHide] = 2)) {
                  card2.classList.toggle("hidden");
                  console.log(idList[idToHide], "Oculta 2 (em teoria)");
              } else if ((idList[idToHide] = 3)) {
                  card3.classList.toggle("hidden");
                  console.log(idList[idToHide], "Oculta 3 (em teoria)");
              } else if ((idList[idToHide] = 4)) {
                  card4.classList.toggle("hidden");
                  console.log(idList[idToHide], "Oculta 4 (em teoria)");
              } else if ((idList[idToHide] = 5)) {
                  card5.classList.toggle("hidden");
                  console.log(idList[idToHide], "Oculta 5 (em teoria)");
              } else if ((idList[idToHide] = 6)) {
                  card6.classList.toggle("hidden");
                  console.log(idList[idToHide], "Oculta 6 (em teoria)");
              } else if ((idList[idToHide] = 7)) {
                  card7.classList.toggle("hidden");
                  console.log(idList[idToHide], "Oculta 7 (em teoria)");
              }
          }
      }
      // let random = (Math.floor(Math.random() * cardsToToggle) + 1)
      // switch(arrayToToggle.includes(random)){
      //     case true:
      //         case false:
      //         arrayToToggle.push(random)
      //         break;
      //     }
    } else {
      startGame();
    }
  
    function flipCard() {
      if (lockBoard) return;
      if (this === firstCard) return;
  
      this.classList.add("flip");
  
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
      if (isMatch == true) {
        disableCards();
        moves();
        score();
      } else {
        unflipCards();
        moves();
      }
      //   isMatch ? disableCards() : unflipCards();
    }
  
    function disableCards() {
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
  
      resetBoard();
    }
  
    function unflipCards() {
      lockBoard = true;
  
      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
  
        resetBoard();
      }, 1500);
    }
  
    function resetBoard() {
      [hasFlippedCard, lockBoard] = [false, false];
      [firstCard, secondCard] = [null, null];
  
      if (flippedCards == 14) {
        endGame();
      }
    }
  
    (function shuffle() {
      cards.forEach((card) => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
      });
    })();
  
    cards.forEach((card) => card.addEventListener("click", flipCard));
  
    function endGame() {
      var endGamePrompt = `Você ganhou em ${moves} jogadas e ${timer} segundos, deseja jogar novamente? (S/N)`;
      if (endGamePrompt == "S" || endGamePrompt == "s") {
        startGame();
      } else {
        alert("Obrigado por jogar!");
      }
    }
    function moves() {
      var moves = moves + 1;
    }
    function score() {
      var score = score + 1;
      if ((score) => 7) {
        endGame();
      }
    }
  }
  startGame();