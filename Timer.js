export default class Timer {
    constructor(root) {
      root.innerHTML = Timer.getHTML();

      this.el = {
        minutes: root.querySelector(".timer__part--minutes"),
        seconds: root.querySelector(".timer__part--seconds"),
        control: root.querySelector(".timer__btn--control"),
        reset: root.querySelector(".timer__btn--reset")
      };

      console.log(this.el);

      this.interval = null;
      this.remainingSeconds = 90;

      this.updateInterfaceTime();

      this.el.control.addEventListener("clikc", () => {
        // TODO: add in the code

      })

      this.el.reset.addEventListener("clikc", () => {
        // TODO: add in the code
        
      })

    }

  updateInterfaceTime() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;

    console.log(minutes, seconds);
  }

  static getHTML() {
    return `
    <span class="timer__part timer__part__minutes">00</span>
    <span class="timer__part">:</span>
    <span class="timer__part timer__part__seconds">00</span>
    <button type="button" class="timer__btn timer__btn--control timer__btn--start">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0" />
        <span class="material-symbols-outlined">play_arrow</span>
     </button>
    <button type="button" class="timer__btn timer__btn--reset">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0" />
        <span class="material-symbols-outlined">timer</span>
    </button>
    `;
  }

}