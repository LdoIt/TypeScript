"use strict";
class Person {
    constructor() {
        // 静态属性
        // static age: number = 1;
        // 实例属性
        this.name = 'zhansan';
    }
    // 实例方法、静态方法
    sayHello() {
        console.log('nihao');
    }
}
//  只读的静态属性
Person.age = 12;
const per = new Person();
// Person.age = 11;
console.log(per);
per.sayHello();
console.log(Person);
