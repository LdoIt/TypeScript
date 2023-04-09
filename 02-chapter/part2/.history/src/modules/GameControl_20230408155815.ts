/*
 * @Date: 2023-04-07 20:20:10
 */
// 引入其他类
import Food from './Food'
import Snake from './Snake'
import ScorePanel from './ScorePanel'
// 游戏控制器，控制其他所有类
class GameControl {
  // 定义三个属性
  // 蛇
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel; 
  constructor() {
    this.food = new Food
    this.snake = new Snake
    this.scorePanel  = new ScorePanel
  }
}

export default GameControl;