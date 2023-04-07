import './style/index.less'
// import Food from './modules/Food'
import ScorePanel from './modules/ScorePanel'
// const food = new Food();
const scorepanel = new ScorePanel(100, 10);
for(let i = 0; i < 1020; i++) {
  scorepanel.addScore();
}


