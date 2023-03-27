// 一、示例代码：
// 声明一个变量a并指定其类型为number，a的值就只能是number不能为其他类型
let a: number;
a = 3;

// 声明完变量直接进行复制
let c: boolean = true;

// 如果变量的声明和赋值同时进行，则TS可以自动对变量进行类型检测
let d = 'you';
// d = true // 此行代码会报错

// 对函数参数和返回值进行类型指定
function sum(a: number, b: number): number {
  return a + b
}
sum(2, 4)

// 二、扩展的一些类型和语法：
// 1.声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any（隐式的any）
let e;
e = 'hello';
e = true;
// e 的类型时any它可以赋值给任何变量
let g = e // true
console.log(typeof g); // boolean

// 2.unknown 表示未知类型的值：该类型的变量不能赋值给其他变量
let f: unknown;
f = 2;
f = 'nihao';
// a = f; // 报错

// 类型断言，用来告诉解析器变量的实际类型
// 语法：变量 as 类型     <类型>变量
// 例如：当 一个unkonwn的变量值为string时赋值给另一个变量
e = f as string;
console.log(e);
e = <string>e;
console.log(e);

// 3.void 表示为空，以函数为例：表示没有返回值的函数及undefined
function fn(): void {

}
console.log(fn());


// 4.never 表示永远不会返回结果
// function fn2(): never {
//   throw new Error("error")
// }
// console.log(fn2());

// 5.object 新增的语法
let h: object;
h = {};
h = function() {};
// 上面代码指定h的类型为object但是，函数也是特殊的object
// {}字面量形式，可以用来指定对象中包含哪些属性，在属性名后边加上？，表示属性是可选的
let i: {name: string, age?: number} // 必须要有name属性
i = {name: '孙悟空'}
i = {name: '孙悟空', age: 90}
// [propName: string]: any 表示任意类型的属性
let j: {name: string, [propName: string]: any}

// 6.设置函数结构的类型声明
let k: (a: number, b: number) => number;

// 7.数组的类型声明：类型[]，Array<类型>
// string[] 表示字符串数组
let l: string[]
let m: Array<number>

// 8.元组：固定长度的数组语法：[类型，类型，类型]
let n: [string, number, string, number]
n = ['nihao', 2, 'nihao', 3]

// 9.枚举：enum
enum Gender {
  Male,
  Female,
  no
}

let o: {name: string, gender: Gender}
o = {name: 'xiaozhang', gender: Gender.Male}
console.log(o); // { name: 'xiaozhang', gender: 0 }
o = {name: 'xiaozhang', gender: Gender.Female}
console.log(o); // { name: 'xiaozhang', gender: 1 }
o = {name: 'xiaozhang', gender: Gender.no}
console.log(o); // { name: 'xiaozhang', gender: 2 }

// 10. & 表示同时
let p: {name: string} & {age: number};
p = {name: 'xiao', age: 0}

// 11.类型别名 type
type myType =  1 | 2 | 3 | 4 | 5;
let q: myType;
q = 1;
q = 4
// q = 9 // 报错