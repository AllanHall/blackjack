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

const main = () => {
  for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < face.length; j++) {
      deck.push(face[j].rank + ' ' + 'of' + ' ' + suit[i])
    }
  }
  shuffle()
}

const drawCard = () => {
  document.querySelector('.card-display').textContent = deck[0]
  deck.shift()
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

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.button').addEventListener('click', drawCard)
