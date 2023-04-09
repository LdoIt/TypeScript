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
  // 记录按下的方向键
  direction: string = '';
  constructor() {
    this.food = new Food;
    this.snake = new Snake;
    this.scorePanel  = new ScorePanel;
    // 开始游戏
    this.init();
  }
  // 初始化方法，启动游戏
  init() {
    // 绑定键盘按下事件：注意要将keydownHandler里面的函数的this指向当前实例对象
    document.addEventListener('keydown', this.keydownHandler.bind(this))
  }
  keydownHandler(event: KeyboardEvent) {
    // 修改方向：ArrowUp ArrowDown ArrowLeft ArrowRight
    this.direction = event.key;
  }
  // 蛇移动
  run() {
    // 获取蛇的坐标
    let X = this.snake.X
    let Y = this.snake.Y
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        X-=10
        break;
      case 'ArrowDown':
      case 'Down':
        X+=10
        break;
      case 'ArrowLeft':
      case 'Left':
        Y-=10
        break;
      case 'ArrowRight':
      case 'Right':
        Y+=10
        break;
      default:
        break;
    }
  }
}

export default GameControl;