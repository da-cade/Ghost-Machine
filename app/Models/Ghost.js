import { generateId } from "../Utils/generateId.js"

export class Ghost {
  constructor(data) {
    this.name = data.name
    this.id = generateId()
    this.title = data.title
    this.price = data.price
  }

  get Template() {
    return /*html*/`
      <div class="col">
        <div title="${this.title}" class="d-flex flex-column justify-content-center bg-light rounded-top shadow ms-2 mb-4 selectable" onclick="app.ghostsController.buyGhost('${this.id}')">
          <div>
            <img src="https://media4.giphy.com/media/fnfONXQS7MmHi2AcsJ/giphy.gif?cid=790b76112a2b403eb1b753875e606082c5ca75214189fb4e&rid=giphy.gif&ct=s" class="rounded-bottom" alt="">
          </div>
          <div id="ghost-label" class="d-flex bg-dark text-light rounded-bottom p-2" >
            <p>${this.name}</p><p class="ms-auto">${this.price}</p>
          </div>
        </div>
      </div>`
  }
}
