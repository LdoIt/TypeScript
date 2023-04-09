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
    // 如果是合法值
    if(value>=0 && value<=290) {
      this.head.style.left = value + 'px';
    }else { // 不合法，GAME OVER
      throw new Error('GAME OVER');
    }
  }
  set Y(value) {
    // 如果是合法值
    if(value>=0 && value<=290) {
      this.head.style.top = value + 'px';
    }else { // 不合法，GAME OVER
      throw new Error('GAME OVER');
    }
  }
  // 蛇增加身体的方法
  addBody() {
    let div = document.createElement('div')
    // 向element中添加一个div
    this.element.insertAdjacentElement("beforeend", div)
  }
}

export default Snake