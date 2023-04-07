import './style/index.less'
class Food{
  element: HTMLElement;
  constructor() {
    // 获取页面中的food元素
    this.element = document.querySelector(".food")!;
  }
  get X() {
    return this.element.offsetLeft
  }
  get Y() {
    return this.element.offsetTop;
  }
}