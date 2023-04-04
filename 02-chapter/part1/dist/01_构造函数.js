"use strict";
/*
 * @Date: 2023-04-04 22:00:58
 */
class Dog {
    // constructor 被称为构造函数
    // 会在对象创建时调用
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const dog = new Dog('旺财', 12);
console.log(dog);
