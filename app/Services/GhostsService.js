import { ProxyState } from "../AppState.js";
import { Ghost } from "../Models/Ghost.js";
import { Pop } from "../Utils/Pop.js"


let _ghostList = [{name: "Inverse Maya Angelou", title: "She never found out why the caged bird sings...", price: 28}, {name: "Dan Dillion", title: "Don't let him near your grandmother", price: 39}, {name: "Old Crab-Eyes", title: "they aren't the only thing that's crablike...", price: 31}]


class GhostsService {
  
  makeGhosts(){
    _ghostList.forEach(g => {
      ProxyState.ghosts4Vend.push(new Ghost(g))
    })
  }

  getPlasm(){
    ProxyState.plasm += 5
    console.log("plasm = ", ProxyState.plasm)
    document.getElementById("plasm-count").innerText = ProxyState.plasm
  }
  buyGhost(ghostID){
    const ghost = ProxyState.ghosts4Vend.find(g => g.id == ghostID)
    if(ProxyState.plasm >= ghost.price){
      ProxyState.plasm -= ghost.price
      ghost.price += 3
      Pop.toast("That was probably a mistake", "warning", "bottom-end")
    }else{
      Pop.toast("You don't have the slime for this ghost, buddy.", "warning", "bottom-end")
    }
  }
}


export const ghostsService = new GhostsService();

