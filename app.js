let firstCard = getrandomcard()
let secondCard = getrandomcard()
let cards = [firstCard, secondCard]
let sum = 0
let hasblackjack = false
let isAlive = false
let message = ""

let messageEl =document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")
playerEl = document.getElementById("player-el")

let playername = "per"
let playerchips = 193

playerEl.textContent = playername + ": $" + playerchips

function getrandomcard(){
    let randomnumber =  math.floor( math.random()*13  ) + 1
    if  (randomnumber >10 ) {
        return 10
    } else if (randomnumber === 1) {
        return 11
    } else {
        return randomnumber
    }
}


function startgame(){
    isAlive + true
    rendergame()
}

function rendergame() {
    cardEl.textContent = "card:" 
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] +  " "
    }
     sumEl.textContent = "sum: " + sum  
    if (sum <= 20){
        message = "Do you want todraw a new card?"
    } else if (sum === 21) {
        message = "wahoo! you've got Blackjack"
        hasblackjack = true
    } else {
        message = "you're out of the game"
        isAlive = false
    }
     messageEl.textContent = message
}

function newcard() {

    if (isAlive === true && hasblackjach === false){
        let card = getrandomcard() 
        sum += card
        cards.push(card)
        rendergame()
    }
  
}