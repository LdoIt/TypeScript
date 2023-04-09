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
  // 食物
  food: Food;
  // 计分板
  scorePanel: ScorePanel; 
  constructor() {
    this.food = new Food
    this.snake = new Snake
    this.scorePanel  = new ScorePanel
    this.init()
  }
  // 初始化方法，启动游戏
  init() {
    // 绑定键盘按下事件
    document.addEventListener('keydown', this.keydownHandler)
  }
  keydownHandler(event: object) {
    console.log(event);
  }
}

export default GameControl;