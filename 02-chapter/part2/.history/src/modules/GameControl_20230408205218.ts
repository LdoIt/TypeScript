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
  // 记录先前的direction
  previousDir: string = '';
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel  = new ScorePanel();
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
    // 判断蛇是否吃到了食物
    this.isEatFood();
    // 如果超出限制位置就抛出错误
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (error) {
      this.isLive = false;
      alert('GAME OVER');
    }
    // 开启定时器调用
    this.isLive && setTimeout(this.run.bind(this), (300 - (this.scorePanel.level-1)*30));
  }
  // 判断蛇是否迟到了食物
  isEatFood() {
    if (this.snake.X == this.food.X && this.snake.Y == this.food.Y) {
      this.food.change();
      this.scorePanel.addScore();
      this.snake.addBody();
      return true;
    }else {
      return false;
    }
  }
}

export default GameControl;