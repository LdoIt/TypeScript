"use strict";
/*
 * @Date: 2023-04-06 20:50:18
 */
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        //  getName() {
        //   return this._name
        //  }
        //  setName(name: string) {
        //   return this._name = name
        //  }
        //  getAge() {
        //   return this._age
        //  }
        //  setAge(age: number) {
        //   if(age<0) return
        //   return this._age = age;
        //  }
        //  上面这种读取，修改方式很麻烦
        get name() {
            return this._name;
        }
        set name(name) {
            this._name = name;
        }
        get age() {
            return this._age;
        }
        set age(age) {
            if (age < 0)
                return;
            this._age = age;
        }
    }
    const person = new Person('zs', 10);
    console.log(person);
    // console.log(person.getName());
    // 不允许输入非法的值
    // console.log(person.setAge(-13));
    // console.log(person.setAge(13));
    console.log(person.name);
    console.log(person.age);
    console.log(person.name = 'lihua');
    console.log(person.age = 111);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(2);
    console.log(b);
    b.test();
})();
