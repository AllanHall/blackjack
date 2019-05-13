let deck = []
const suit = ['hearts', 'spades', 'diamonds', 'clubs']
const faces = [
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
let playerHand = []
let dealerHand = []
let playerScore = 0
let dealerScore = 0

const main = () => {
  makeDeck()
  shuffle()
  dealCardToPlayer()
  dealCardToPlayer()
  dealCardToDealer()
  dealCardToDealer()
}

const makeDeck = () => {
  deck = []
  for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < faces.length; j++) {
      const card = {
        rank: faces[j].rank,
        value: faces[j].value,
        suit: suit[i],
        imageUrl: './cards/' + faces[j].rank + '_of_' + suit[i] + '.svg'
      }
      deck.push(card)
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

const dealCardToPlayer = () => {
  const dealtCard = deck.pop()
  playerHand.push(dealtCard)
  const img = document.createElement('img')
  img.src = dealtCard.imageUrl
  document.querySelector('.player-display').appendChild(img)
  playerScore += dealtCard.value
}

const dealCardToDealer = () => {
  const dealtCard = deck.pop()
  dealerHand.push(dealtCard)
  const img = document.createElement('img')
  img.src = './cards/black_joker.svg'
  document.querySelector('.dealer-display').appendChild(img)
  dealerScore += dealtCard.value
}

const showDealerHand = () => {
  document.querySelector('.dealer-display').textContent = ''
  for (let i = 0; i < dealerHand.length; i++) {
    const card = dealerHand[i]
    const img = document.createElement('img')
    img.src = card.imageUrl
    document.querySelector('.dealer-display').appendChild(img)
  }
}

const hit = () => {
  dealCardToPlayer()
  if (playerScore > 21) {
    document.querySelector('.winner-display').textContent = 'You Bust!'
  }
}

const stand = () => {
  showDealerHand()
  // eslint-disable-next-line no-unmodified-loop-condition
  while (dealerScore < 17) {
    dealCardToDealer()
    showDealerHand()
  }
  if (dealerScore > 21) {
    document.querySelector('.winner-display').textContent = 'You Win!'
  } else if (playerScore > 21) {
    document.querySelector('.winner-display').textContent = 'You Bust!'
  } else if (playerScore === dealerScore) {
    document.querySelector('.winner-display').textContent = 'Its a push!'
  } else {
    if (playerScore > dealerScore) {
      document.querySelector('.winner-display').textContent = 'You Win!'
    } else document.querySelector('.winner-display').textContent = 'You Lose!'
  }
}

const newHand = () => {
  deck = []
  playerHand = []
  playerScore = 0
  dealerHand = []
  dealerScore = 0
  document.querySelector('.winner-display').textContent = ' '
  document.querySelector('.player-display').textContent = ' '
  document.querySelector('.dealer-display').textContent = ' '
  main()
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.reset-button').addEventListener('click', newHand)
document.querySelector('.hit-button').addEventListener('click', hit)
document.querySelector('.stand-button').addEventListener('click', stand)
