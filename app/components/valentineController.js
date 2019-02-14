import ValentineService from "../components/valentineService.js"

let _vs = new ValentineService()

function drawForm() {
  document.querySelector('#valForm').innerHTML = `
    <form onsubmit="app.controllers.valCtlr.addValentine(event)">
    <div class="form-group">
      <input type="text" name="to" placeholder="To" required>
      <input type="text" name="from" placeholder="From" required>
      <textarea type="text" name="message" placeholder="Message" required/>
      <button type="submit" class="btn btn-outline-danger btn-block">My Funny Valentine</button>
  </div>
</form>
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
    let form = event.targer
    let newValentine = {
      to: form.to.value,
      from: form.from.value,
      message: form.message.value
    }
    _vs.addValentine(newValentine)
    form.reset()
  }
}