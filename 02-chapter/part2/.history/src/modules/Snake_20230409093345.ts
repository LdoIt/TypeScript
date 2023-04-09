/*
 * @Date: 2023-04-07 19:27:46
 */
class Snake {
  // 表示蛇头的元素
  head: HTMLElement;
  // 蛇身体
  bodies: HTMLCollection;
  // 获取蛇容器
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('.snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }
  // 获取蛇的坐标（蛇头坐标）
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }
  // 设置蛇头的坐标
  set X(value) {
    // 如果X没有变的话直接退出
    if(this.X === value){      
      return;
    }
    // 水平方向发生了掉头
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      // 当向右掉头时，继续向左走
      if(this.X < value) {
        this.X = this.X - 10
      }else {
        this.X = this.X + 10
      }
    }
    // 如果是合法值
    if(value>=0 && value<=290) {
      this.moveBodies()
      this.head.style.left = value + 'px';
      this.checkHeadBody()
    }else { // 不合法，GAME OVER
      throw new Error('GAME OVER');
    }
  }
  set Y(value) {
    if(this.Y === value){
      return;
    }
    // 禁止掉头
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if(this.Y < value) {
        this.Y = this.Y - 10
      }else {
        this.Y = this.Y + 10
      }
    }

    // 如果是合法值
    if(value>=0 && value<=290) {
      this.moveBodies();
      this.head.style.top = value + 'px';
      this.checkHeadBody()
      
    }else { // 不合法，GAME OVER
      throw new Error('GAME OVER');
    }
  }
  // 蛇增加身体的方法
  addBody() {
    // 向element中添加一个div
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }

  // 蛇移动身体
  moveBodies() {
      for(let i = this.bodies.length - 1; i > 0; i--) {
        let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
        let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
        (this.bodies[i] as HTMLElement).style.left = X + 'px';
        (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        console.log((this.bodies[i] as HTMLElement).style.left);
        console.log((this.bodies[i] as HTMLElement).style.top);
    }
  }

  // 判断是否撞到自己
  checkHeadBody() {
    for(let i = 1; i < this.bodies.length; i++ ) {
      if(this.X == (this.bodies[i] as HTMLElement).offsetLeft && this.Y == (this.bodies[i] as HTMLElement).offsetTop) {
        throw new Error("撞到自己了");
      }
    }
  }
}

export default Snake