class Food{
  element: HTMLElement;
  constructor() {
    // 获取页面中的food元素
    this.element = document.querySelector(".food")!;
  }
  // 获取食物的位置
  get X() {
    return this.element.offsetLeft
  }
  get Y() {
    return this.element.offsetTop;
  }
  // 修改食物的位置
  change() {
    // 食物位置范围：0-290px
    this.element.style.top = Math.round(Math.random()*29)*10 + 'px';
    this.element.style.left = Math.round(Math.random()*29)*10 + 'px';
  }
}

export default Food