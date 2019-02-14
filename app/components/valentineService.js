import Valentine from "../models/valentine.js"

let _state = {
  valentines: [
    new Valentine({ to: 'D$', from: 'Chrissy', message: 'Sup Dawg!' }),
    new Valentine({ to: 'Mark', from: 'Chrissy', message: 'Sup Dawg!' }),
    new Valentine({ to: 'Jake', from: 'Chrissy', message: 'Sup Dawg!' }),
    new Valentine({ to: 'Zach', from: 'Chrissy', message: 'Wazzup Dawg!' }),
    new Valentine({ to: 'Porter', from: 'Chrissy', message: 'Sup Dawg!' }),
  ]
}

let _subscribers = {
  valentines: []
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
    return _state.valentines.map(valentine => new Valentine(valentine))
  }

  addSubscribers(data, fn) {
    _subscribers[data].push(fn)
  }

  addValentine(newValentine) {
    let valentine = new Valentine(newValentine)
    let updatedArr = this.Valentines
    updatedArr.push(valentine)
    setState('valentines', updatedArr)
  }

  deleteVal(id) {
    let updatedVal = this.Valentines
    for (let i = 0; i < updatedVal.length; i++) {
      let val = updatedVal[i]
      if (val.id == id) {
        updatedVal.splice(i, 1)
        break;
      }
    }
    setState('valentines', updatedVal)
  }
}