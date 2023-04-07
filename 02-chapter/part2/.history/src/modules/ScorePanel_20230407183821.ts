class ScorePanel {
  element: HTMLElement;
  // 设置最大等级
  maxLevel: number;
  // 设置分数上线好加等级
  upScore: number;
  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.element = document.querySelector(".scorePanel")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  addScore() {
    
  }
}