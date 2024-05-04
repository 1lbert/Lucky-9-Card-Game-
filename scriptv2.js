
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

// for player2 


let p2cardEl = document.getElementById("p2cards-el")
let p2sumEl = document.getElementById("p2sum-el")
let p2messageEl= document.getElementById("p2message-el")
let p2cards = []
let p2sumCards = 0

function p2getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return randomNumber 
    } else {
        return randomNumber
    }

}

function p2startGame() {
    psIsAlive = true
    let p2randomCardOne = p2getRandomCard()
    let p2randomCardTwo = p2getRandomCard() 

    p2cards = [p2randomCardOne, p2randomCardTwo]
    p2sumCards = p2randomCardOne + p2randomCardTwo
    
    p2renderGame()
}


function p2renderGame() {
    p2cardEl.textContent = "Cards: " 
    for (let i = 0; i < p2cards.length; i++) {
        p2cardEl.textContent += p2cards[i] + " "
    }

    p2sumEl.textContent = "Sum: " + p2sumCards
    if (p2sumCards === 9 || p2sumCards === 19 || p2sumCards === 29) {
        p2messageEl.textContent = "You got Lucky 9!";
        p2hasLucky9 = true
    } else if (p2sumCards >= 10) {
        p2sumCards - 10;
        p2messageEl.textContent = "Want to draw 'New Card' ?";
    } else if (p2sumCards >= 20) {
        p2sumCards - 20;
        p2messageEl.textContent = "Want to draw 'New Card' ?";
    } else {
        p2messageEl.textContent = "Want to draw 'New Card' ?";
    }


}

function p2newCard() { 
    if (psIsAlive === true) {
        let p2newCard = p2getRandomCard()
        p2sumCards += p2newCard
        p2cards.push(p2newCard)
        p2renderGame()  
        if (p2hasLucky9 === false) { 
            p2messageEl.textContent = "Try Again";
        }
        p2hasLucky9 = false
        psIsAlive = false
    }
   
}

