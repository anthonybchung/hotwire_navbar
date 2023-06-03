import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="nav-bar"
export default class extends Controller {

  static targets = ["menu"]
  static values = {opened: Boolean}
  initialize() {
    this.openedValue = false
    document.body.style.overflowY = "auto"
  }

  connect() {
  }

  toggle(){
    if(this.openedValue){
      this.menuTarget.classList.remove("h-screen")
      this.menuTarget.classList.add("h-0")
      document.body.style.overflowY = "auto"
      this.openedValue = !this.openedValue
    } else {
      this.menuTarget.classList.remove("h-0")
      this.menuTarget.classList.add("h-screen")
      document.body.style.overflowY = "hidden"
      this.openedValue = !this.openedValue
    }
  }
}
