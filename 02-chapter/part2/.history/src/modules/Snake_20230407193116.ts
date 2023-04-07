/*
 * @Date: 2023-04-07 19:27:46
 */
class Snake {
  // 表示蛇头的元素
  element: HTMLElement;
  head: HTMLElement;
  constructor() {
    this.head = document.querySelector('.snake > div')!;
  }
}