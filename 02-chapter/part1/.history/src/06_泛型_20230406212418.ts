/*
 * @Date: 2023-04-06 21:14:56
 */
// 在定义函数或是类时，如果遇到类型不明确就可以使用泛型
function fn<T>(a: T): T {
  return a;
}

// 可以直接调用具有泛型的函数
let result = fn(10); // 不指定泛型，TS可以自动对类型进行推断
let result2 = fn<string>('hello'); // 指定泛型

// 泛型可以同时指定多个
function fn2<t,k>(a: t, b: k) {
  console.log(b);
  return a;
}
let res = fn2<number, string>(250, 'nihao')
console.log(res);
