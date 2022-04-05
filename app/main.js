import { GhostsController } from "./Controllers/GhostsController.js";

class App {
  ghostsController = new GhostsController();
}

window["app"] = new App();
