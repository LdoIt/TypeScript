// 一、示例代码：
// 声明一个变量a并指定其类型为number，a的值就只能是number不能为其他类型
var a;
a = 3;
// 声明完变量直接进行复制
var c = true;
// 如果变量的声明和赋值同时进行，则TS可以自动对变量进行类型检测
var d = 'you';
// d = true // 此行代码会报错
// 对函数参数和返回值进行类型指定
function sum(a, b) {
    return a + b;
}
sum(2, 4);
// 二、扩展的一些类型和语法：
// 1.声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any（隐式的any）
var e;
e = 'hello';
e = true;
// e 的类型时any它可以赋值给任何变量
var g = e; // true
console.log(typeof g); // boolean
// 2.unknown 表示未知类型的值：该类型的变量不能赋值给其他变量
var f;
f = 2;
f = 'nihao';
// a = f; // 报错
// 类型断言，用来告诉解析器变量的实际类型
// 语法：变量 as 类型     <类型>变量
// 例如：当 一个unkonwn的变量值为string时赋值给另一个变量
e = f;
console.log(e);
e = e;
console.log(e);
// 3.void 表示为空，以函数为例：表示没有返回值的函数及undefined
function fn() {
}
console.log(fn());
// 4.never 表示永远不会返回结果
// function fn2(): never {
//   throw new Error("error")
// }
// console.log(fn2());
// 5.object 新增的语法
var h;
h = {};
h = function () { };
// 上面代码指定h的类型为object但是，函数也是特殊的object
// {}字面量形式，可以用来指定对象中包含哪些属性，在属性名后边加上？，表示属性是可选的
var i; // 必须要有name属性
i = { name: '孙悟空' };
i = { name: '孙悟空', age: 90 };
// [propName: string]: any 表示任意类型的属性
var j;
// 6.设置函数结构的类型声明
var k;
// 7.数组的类型声明：类型[]，Array<类型>
// string[] 表示字符串数组
var l;
var m;
// 8.元组：固定长度的数组nopqrstuvwxyz：语法：[类型，类型，类型]
var n;
n = ['nihao', 2, 'nihao', 3];
// 9.枚举：enum
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["no"] = 2] = "no";
})(Gender || (Gender = {}));
var o;
o = { name: 'xiaozhang', gender: Gender.Male };
console.log(o);
o = { name: 'xiaozhang', gender: Gender.Female };
console.log(o);
o = { name: 'xiaozhang', gender: Gender.no };
console.log(o);
