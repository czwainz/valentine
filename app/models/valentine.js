let id = 0

export default class Valentine {
  constructor(data) {
    this.id = data.id || id
    this.to = data.to
    this.from = data.from
    this.message = data.message
    id++
  }
  getTemplate() {
    return `
     <div class="col-3 card bg-danger d-flex justify-content-center text-white rounded shadow-lg my-1 mx-1 px-1" data-toggle="tooltip" data-placement="bottom" title="${this.message}">
      <div class="display-inline justify-content-around text-center">
      <i class="fas fa-heart"></i>&nbsp;<i class="fas fa-heart"></i>&nbsp;<i class="fas fa-heart"></i>
      </div>
        <h3>To: ${this.to}</h3>
        <h3>From: ${this.from}</h3>
      <div class="justify-content-center d-flex px-1">
        <button onclick="app.controllers.valCtlr.deleteVal(${this.id})" class="btn btn-outline-dark">
        <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
    `
  }
}