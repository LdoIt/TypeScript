class Person {
  // 静态属性
  // static age: number = 1;
  // 实例属性
   name: string = 'zhansan';
  //  只读的静态属性
  static readonly age: number = 12;
  // 实例方法、静态方法
  sayHello() {
    console.log('nihao')
  }
}
const per = new Person()
// Person.age = 11;
console.log(per);
per.sayHello()
console.log(Person);
