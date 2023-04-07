import './style/index.less'
// import Food from './modules/Food'
// import ScorePanel from './modules/ScorePanel'
// const food = new Food();

class ScorePanel {
  defaultScore: number = 0;
  defaultLevel: number = 0;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  // 设置最大等级
  maxLevel: number;
  // 设置分数上线好加等级
  upScore: number;
  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.querySelector(".score")!;
    this.levelEle = document.querySelector(".grade")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }
  // 设置一个加分的方法
  addScore() {
    this.scoreEle.innerText = ++this.defaultScore + '';
  }
  // 升级：有最大值
  updateLevel() {
    if(this.defaultLevel > this.maxLevel) return
    this.levelEle.innerText = ++this.defaultLevel + '';
  }
}

const scorepanel = new ScorePanel();
scorepanel.addScore();
scorepanel.addScore();
scorepanel.addScore();
