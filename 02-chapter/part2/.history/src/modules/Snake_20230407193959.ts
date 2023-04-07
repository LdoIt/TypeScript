/*
 * @Date: 2023-04-07 19:27:46
 */
class Snake {
  // 表示蛇头的元素
  head: HTMLElement;
  // 蛇身体
  bodies: HTMLCollection;
  constructor() {
    this.head = document.querySelector('.snake > div')!;
    this.bodies = document.getElementsByClassName('snake')!.getElementsByTagName('div');
  }
}