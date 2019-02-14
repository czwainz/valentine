import ValentineController from './components/valentineController.js'

class App {
  constructor() {
    this.controllers = {
      valCtlr: new ValentineController()
    }
  }
}

window.app = new App()