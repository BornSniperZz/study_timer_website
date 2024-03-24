export default class Timer {
    constructor(root) {
      root.innerHTML = Timer.getHTML();
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