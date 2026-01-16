let player = {
    name: "Arthur",
    chips: 100
}

let nameP = document.getElementById("name-p")
let chipsP = document.getElementById("chips-p")

let cards = []
let sum = 0
let isAlive = false

let cardsP = document.getElementById("cards-p")
let sumP = document.getElementById("sum-p")
let messageP = document.getElementById("message-p")
let warningP = document.getElementById("warning-p")


// add nome e fichas
// nameP.textContent += player.name
// chipsP.textContent += player.chips

function startGame() {
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function randomCard() {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
        if (randomNumber > 10) {
            return 10
        } else if (randomNumber === 1) {
            if (sum < 11) {
                return 11
            } else {
                return 1
            }
        } else {
            return randomNumber
        }
}

// add mensagem aviso
function newCard() {
    if (isAlive && sum < 21) {
        let draw = randomCard()
        sum += draw
        cards.push(draw)
        renderGame()
    } else {
        warningP.textContent = "Start the game to draw another card"
    }
}

function renderGame() {

    cardsP.textContent = "CARDS: "
    for (i=0;i<cards.length;i++) {
        cardsP.textContent += cards[i] + " "
    }

    sumP.textContent = "GAME: " + sum 
        if (sum === 21) {
        messageP.textContent = "You have BlackJack!"
    } else if (sum < 21) {
        messageP.textContent = "Draw new card?"
    } else {
        messageP.textContent = "You lost! Play again?"
        isAlive = false
    }

}
