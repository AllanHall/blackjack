const deck = []
const suit = ['Hearts', 'Spades', 'Diamonds', 'Clubs']
const face = [
  { rank: 'Ace', value: 11 },
  { rank: '2', value: 2 },
  { rank: '3', value: 3 },
  { rank: '4', value: 4 },
  { rank: '5', value: 5 },
  { rank: '6', value: 6 },
  { rank: '7', value: 7 },
  { rank: '8', value: 8 },
  { rank: '9', value: 9 },
  { rank: '10', value: 10 },
  { rank: 'Jack', value: 10 },
  { rank: 'Queen', value: 10 },
  { rank: 'King', value: 10 }
]
/*
const playerHand = []
const dealerHand = []
*/
const main = () => {
  makeDeck()
  shuffle()
  dealCardToPlayer1()
  dealCardToPlayer2()
  dealCardToDealer1()
  dealCardToDealer2()
}

const makeDeck = () => {
  for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < face.length; j++) {
      deck.push(face[j].rank + ' ' + 'of' + ' ' + suit[i])
    }
  }
}

const shuffle = () => {
  let a
  let b
  let c = deck.length
  while (c) {
    a = Math.floor(Math.random() * c--)
    b = deck[c]
    deck[c] = deck[a]
    deck[a] = b
  }
}

const dealCardToPlayer1 = () => {
  const dealtCard = deck.shift()
  document.querySelector('.player-display-1').textContent = dealtCard
}
const dealCardToPlayer2 = () => {
  const dealtCard = deck.shift()
  document.querySelector('.player-display-2').textContent = dealtCard
}
const dealCardToDealer1 = () => {
  const dealtCard = deck.shift()
  document.querySelector('.dealer-display-1').textContent = dealtCard
}
const dealCardToDealer2 = () => {
  const dealtCard = deck.shift()
  document.querySelector('.dealer-display-2').textContent = dealtCard
}
const hit = () => {
  const dealtCard = deck.shift()
  document.querySelector('.hit-card-1').textContent = dealtCard
}

const stand = () => {
  const dealtCard = deck.shift()
  document.querySelector('.dealer-display-3').textContent = dealtCard
}

const newHand = () => {
  main()
  document.querySelector('.winner-display').textContent = ' '
  document.querySelector('.dealer-display-3').textContent = ' '
  document.querySelector('.hit-card-1').textContent = ' '
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.hit-button').addEventListener('click', makeDeck)
document.querySelector('.reset-button').addEventListener('click', newHand)
document.querySelector('.hit-button').addEventListener('click', hit)
document.querySelector('.stand-button').addEventListener('click', stand)
