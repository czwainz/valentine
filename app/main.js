import valentineController from '.components/valentineController.js'

class App {
  constructor() {
    this.controllers = {
      valCtlr: valentineController()
    }
  }
}

window.app = new App()