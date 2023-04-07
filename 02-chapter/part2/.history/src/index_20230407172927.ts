import './style/index.less'
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
  }
}

const food = new Food()
console.log(food.X,food.Y);
