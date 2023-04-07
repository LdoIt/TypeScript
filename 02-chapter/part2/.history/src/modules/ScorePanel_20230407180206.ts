class ScorePanel {
  element: HTMLElement;
  maxLevel: number;
  upScore: number;
  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.element = document.querySelector(".scorePanel")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }
}