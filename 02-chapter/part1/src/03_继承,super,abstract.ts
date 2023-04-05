/*
 * @Date: 2023-04-05 09:37:35
 */
// 定义一个Anmial类
(function() {
  // 抽象类：abstract 不能用来创建对象，专门用来被继承的类，抽象类中可以写抽象方法
  abstract class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    sayHello() {
      console.log('动物叫唤');
    }
    // 抽象方法：没有方法体，子类必须重写
    abstract run(): void;
  }
  
  // Dog继承动物类：拥有父类所有的属性和方法
class Dog extends Animal {
    action: string;
    // 子类中写了构造函数，必须对父类的构造函数进行调用
    constructor(name: string, age: number, action: string) {
      super(name, age); // 调用父类构造函数
      this.action = action;
    }
    // 重写父类抽象方法
    run():void {
      console.log(`${this.name}在跑`);
    }
    // 重写父类方法
    sayHello(): void {
      // 调用父类的方法:
      super.sayHello()
      console.log('汪汪汪')
    }
  }

  const dog = new Dog('旺财', 10, '唱跳rap');
  console.log(dog);
  
  dog.sayHello();
  dog.run();

})()