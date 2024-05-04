
let cardEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl= document.getElementById("message-el")

let hasLucky9 = false
let isAlive = false
let cards = []
let sumCards = 0

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return randomNumber 
    } else {
        return randomNumber
    }

}

function startGame() {
    isAlive = true
    let randomCardOne = getRandomCard()
    let randomCardTwo = getRandomCard() 

    cards = [randomCardOne, randomCardTwo]
    sumCards = randomCardOne + randomCardTwo
    
    renderGame()
}


function renderGame() {
    cardEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sumCards
    if (sumCards === 9 || sumCards === 19 || sumCards === 29) {
        messageEl.textContent = "You got Lucky 9!";
        hasLucky9 = true
    } else if (sumCards >= 10) {
        sumCards - 10;
        messageEl.textContent = "Want to draw 'New Card' ?";
    } else if (sumCards >= 20) {
        sumCards - 20;
        messageEl.textContent = "Want to draw 'New Card' ?";
    } else {
        messageEl.textContent = "Want to draw 'New Card' ?";
    }


}

function newCard() { 
    if (isAlive === true) {
        let newCard = getRandomCard()
        sumCards += newCard
        cards.push(newCard)
        renderGame()  
        if (hasLucky9 === false) { 
            messageEl.textContent = "Try Again";
        }
        hasLucky9 = false
        isAlive = false
    }
   
}

