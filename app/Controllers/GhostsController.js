import { ProxyState } from "../AppState.js";
import { ghostsService } from "../Services/GhostsService.js";
import { Pop } from "../Utils/Pop.js";


//Private
// function _draw() {
//   let values = ProxyState.values;
//   let template = ''
//   values.forEach(v => template += v.Template)
//   document.getElementById("app").innerHTML = /*html*/`
//   <div class="my-3">
//     <button class="btn btn-secondary text-white elevation-2" onclick="app.valuesController.addValue()">Add Value</button>  
//     <div class="values d-flex flex-wrap my-3">
//       ${template}
//     </div>
//   </div>
//   `
// }

function _drawGhosts(){
  let ghosts = ProxyState.ghosts4Vend; 
  let template = ''
  ghosts.forEach(g => {template += g.Template})
  document.getElementById('ghost-zone').innerHTML = template
}

//Public
export class GhostsController {
  constructor() {
    ghostsService.makeGhosts()
    ProxyState.on("ghosts4Vend", _drawGhosts);
    _drawGhosts()
  }
  makeGhosts(){
    ghostsService.makeGhosts()
  }

  getPlasm(){
    ghostsService.getPlasm()
  }

  async buyGhost(ghostID){
    if(await Pop.confirm("Are You Sure?", "You are buying a ghost.", "question", "Yes, I want the ghost.")){
      ghostsService.buyGhost(ghostID)
    }
  }
}
