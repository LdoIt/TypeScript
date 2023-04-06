"use strict";
/*
 * @Date: 2023-04-05 09:58:21
 */
(function () {
    // 可以用来限制对象的结构
    const obj = {
        name: 'zs',
        age: 12,
        gender: '男'
    };
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('nihao');
        }
    }
})();
