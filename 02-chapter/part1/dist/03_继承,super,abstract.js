"use strict";
/*
 * @Date: 2023-04-05 09:37:35
 */
// 定义一个Anmial类
(function () {
    // 抽象类：abstract 不能用来创建对象，专门用来被继承的类，抽象类中可以写抽象方法
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物叫唤');
        }
    }
    // Dog继承动物类：拥有父类所有的属性和方法
    class Dog extends Animal {
        // 子类中写了构造函数，必须对父类的构造函数进行调用
        constructor(name, age, action) {
            super(name, age); // 调用父类构造函数
            this.action = action;
        }
        // 重写父类抽象方法
        run() {
            console.log(`${this.name}在跑`);
        }
        // 重写父类方法
        sayHello() {
            // 调用父类的方法:
            super.sayHello();
            console.log('汪汪汪');
        }
    }
    const dog = new Dog('旺财', 10, '唱跳rap');
    console.log(dog);
    dog.sayHello();
    dog.run();
})();
