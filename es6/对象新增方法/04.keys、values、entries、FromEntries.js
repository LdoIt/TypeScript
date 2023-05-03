/*
 * @Date: 2023-05-03 17:04:33
 */
// Object.keys 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名
let obj = { foo: 'bar', baz: 42 }
// let arrKey = Object.keys(obj)
// console.log(arrKey);
// for(let key of arrKey) {
//   console.log(key);
// }

// Object.values 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值
  // 接收一个对象或一个字符串，如果是字符串的话返回各个字符串组成的数组
// let arrValue = Object.values(obj)
// console.log(arrValue);
// for(let value of arrValue) {
//   console.log(value);
// }

// Object.entries 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组
let arrEntries = Object.entries(obj)
// console.log(arrEntries);

// console.log(arrEntries.flat()); // 扁平化数组

console.log(Object.fromEntries(arrEntries));