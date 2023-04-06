/*
 * @Date: 2023-04-05 09:58:21
 */
(function() {
  // 描述对象的类型
  type myType = {
    name: string,
    age: number
  }

  // 接口用来定义一个类的结构，用来定义一个类中应该包含哪些属性和方法
  interface myInterface {
    name: string;
    age: number;
  }

  interface myInterface {
    gender: string;
  }

  // 可以用来限制对象的结构
  const obj: myInterface = {
    name: 'zs',
    age: 12,
    gender: '男'
  }

  // 接口可以在定义类的时候去限制类的结构
  // 接口中所有属性不可能有实际的值接口只定义对象的结构，不考虑实际的值
  // 在接口中所有的方法都是抽象方法，类可以实现一个接口
  interface myInte {
    name: string;
    sayHello(): void;
  }

  class MyClass implements myInte {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello(): void {
      console.log('nihao');
      
    }
  }

})()