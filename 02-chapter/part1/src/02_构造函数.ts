/*
 * @Date: 2023-04-04 22:00:58
 */
class Dog {
  name: string;
  age: number;
  // constructor 被称为构造函数
  // 会在对象创建时调用
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  bark() {
    // 方法中可以通过this来表示当前调用方法的对象
    console.log(this.name);
    
  }
}

const dog = new Dog('旺财', 12)
console.log(dog);
dog.bark();
