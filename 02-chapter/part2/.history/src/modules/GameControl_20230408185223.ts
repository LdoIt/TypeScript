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
  // 记录游戏是否结束
  isLive: boolean = true;
  constructor() {
    this.food = new Food();
    this.snake = new Snake();    
    this.scorePanel  = new ScorePanel(10, 10);
    // 开始游戏
    this.init();
  }
  // 初始化方法，启动游戏
  init() {
    // 绑定键盘按下事件：注意要将keydownHandler里面的函数的this指向当前实例对象
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    // 让蛇能够进行移动
    this.run();
  }
  keydownHandler(event: KeyboardEvent) {
    // 修改方向：ArrowUp ArrowDown ArrowLeft ArrowRight
    this.direction = event.key;
  }
  // 蛇移动
  run() {
    // 获取蛇的坐标
    let X = this.snake.X;
    let Y = this.snake.Y;

    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10;
        break;
      case 'ArrowDown':
      case 'Down':
        Y += 10;
        break;
      case 'ArrowLeft':
      case 'Left':
        X -= 10;
        break;
      case 'ArrowRight':
      case 'Right':
        X += 10;
        break;
    }
    this.snake.X = X;
    this.snake.Y = Y;
    console.log(this.snake.Y);
    
    
    // 开启定时器调用
    this.isLive && setTimeout(this.run.bind(this), (300 - (this.scorePanel.level-1)*30));

  }
}

export default GameControl;