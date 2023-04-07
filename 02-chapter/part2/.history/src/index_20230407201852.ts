import './style/index.less'
import Food from './modules/Food'
import Snake from './modules/Snake'
import ScorePanel from './modules/ScorePanel'
console.log(ScorePanel);

const food = new Food();
console.log(food.X);
console.log(food.Y);

const scorePanel = new ScorePanel(100, 10);
for(let i = 0; i < 1020; i++) {
  scorePanel.addScore();
}

const snake = new Snake();
snake.addBody()


