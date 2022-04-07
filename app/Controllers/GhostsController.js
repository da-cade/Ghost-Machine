import { ProxyState } from "../AppState.js";
import { ghostsService } from "../Services/GhostsService.js";
import { Pop } from "../Utils/Pop.js";


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
