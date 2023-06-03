import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="nav-bar"
export default class extends Controller {

  static targets = ["menu","hamburger","cross"]
  static values = {opened: Boolean}
  initialize() {
    this.openedValue = false
    this.hamburgerTarget.classList.remove("hidden")
    this.crossTarget.classList.add("hidden")
    document.body.style.overflowY = "auto"
  }

  connect() {
  }

  toggle(){
    if(this.openedValue){
      this.menuTarget.classList.remove("h-screen")
      this.menuTarget.classList.add("h-0")

      this.hamburgerTarget.classList.remove("hidden")
      this.crossTarget.classList.add("hidden")
      console.log("hamburger")
      console.log(this.hamburgerTarget)

      document.body.style.overflowY = "auto"
      this.openedValue = !this.openedValue
    } else {
      this.menuTarget.classList.remove("h-0")
      this.menuTarget.classList.add("h-screen")

      this.crossTarget.classList.remove("hidden")
      this.hamburgerTarget.classList.add("hidden")
      document.body.style.overflowY = "hidden"
      this.openedValue = !this.openedValue
    }
  }
}
