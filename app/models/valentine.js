let id = 0

export default class Valentine {
  constructor(data) {
    this.id = id || id
    this.to = data.to
    this.from = data.from
    this.message = data.message
    id++
  }
  getTemplate() {
    return `
     <div class="col-3 card bg-danger d-flex justify-content-center text-white rounded shadow-sm my-1 mx-1">
      <div class="card-header display-inline justify-content-around">
      <i class="fas fa-heart"></i>&nbsp;<i class="fas fa-heart"></i><i class="fas fa-heart"></i>
      </div>
      <h3>To: ${this.to}</h3>
      <h3>From: ${this.from}</h3>
      <h6>Message: ${this.message}</h6>
    </div>
    `
  }
}