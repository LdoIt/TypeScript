// Object.keys 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名
// Object.values 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值
// Object.entries 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组
let obj = { foo: 'bar', baz: 42 }
let arrKey = Object.keys(obj)
console.log(arrKey);
for(let key of arrKey) {
  console.log(key);
}

let arrValue = Object.values(obj)
console.log(arrValue);
for(let value of arrValue) {
  console.log(value);
}

let arrEntries = Object.entries(obj)
console.log(arrEntries);

console.log(arrEntries.flat());