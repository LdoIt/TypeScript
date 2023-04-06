/*
 * @Date: 2023-04-06 20:50:18
 */
(function() {
  class Person {
    // TS可以在属性前添加属性的修饰符
        /*
        *   public 修饰的属性可以在任意位置访问（修改） 默认值
        *   private 私有属性，私有属性只能在类内部进行访问（修改）
        *       - 通过在类中添加方法使得私有属性可以被外部访问
        *   protected 受包含的属性，只能在当前类和当前类的子类中访问（修改）
        *
        * */
       private _name: string;
       private _age: number;

       constructor(name: string, age: number) {
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
        return this._name
      }
      set name(name: string) {
        this._name = name;
      }
      get age() {
        return this._age;
      }
      set age(age: number) {
        if(age<0) return
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
    protected num: number;
    constructor(num: number) {
      this.num = num;
    }
  }
  class B extends A {
    test() {
      console.log(this.num);
    }
  }
  const b= new B(2)
  console.log(b.test());
  
})()