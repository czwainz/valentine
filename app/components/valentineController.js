import ValentineService from "../components/valentineService.js"

let _vs = new ValentineService()

function drawForm() {
  document.querySelector('#valForm').innerHTML = `
  <div class="col-12 my-2">
    <form onsubmit="app.controllers.valCtlr.addValentine(event)" class="form-group justify-content-center d-flex">
      <input type="text" name="to" placeholder="To" class="form-control mx-2" required>
      <input type="text" name="from" placeholder="From" class="form-control mx-2" required>
      <input type="text" name="message" placeholder="Message" class="form-control mx-2" required />
      <button type="submit" class="btn btn-outline-danger btn-block">My Funny Valentine</button>
    </form>
  </div>
  `
}

function draw() {
  let template = ''
  let valentines = _vs.Valentines
  valentines.forEach(valentine => (
    template += valentine.getTemplate()
  ))
  document.querySelector('#valentines').innerHTML = template
}


export default class ValentineController {
  constructor() {
    console.log('hello from controller')
    draw()
    _vs.addSubscribers('valentines', draw)
    draw()
  }
  showForm() {
    drawForm()
  }

  addValentine(event) {
    event.preventDefault();
    let form = event.target
    let newValentine = {
      to: form.to.value,
      from: form.from.value,
      message: form.message.value
    }
    _vs.addValentine(newValentine)
    form.reset()
  }

  deleteVal(id) {
    _vs.deleteVal(id)
  }
}