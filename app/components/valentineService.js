import Card from "../models/valentine.js"

let _state = {
  cards: [
    new Card({ to: 'D$', from: 'Chrissy', message: 'Sup Dawg!' }),
    new Card({ to: 'Mark', from: 'Chrissy', message: 'Sup Dawg!' }),
    new Card({ to: 'Jake', from: 'Chrissy', message: 'Sup Dawg!' }),
    new Card({ to: 'Zach', from: 'Chrissy', message: 'Wazzup Dawg!' }),
    new Card({ to: 'Porter', from: 'Chrissy', message: 'Sup Dawg!' }),
  ]
}

let _subscribers = {
  cards: []
}

function setState(data, val) {
  _state[data] = val
  _subscribers[data].forEach(fn => fn())
}

//PUBLIC
export default class ValentineService {
  constructor() {
    console.log('hello from service')
  }

  get Valentines() {
    return _state.cards.map(card => new Card(card))
  }

  addSubscribers(data, fn) {
    _subscribers[data].push(fn)
  }

  addValentine(data) {

  }

}