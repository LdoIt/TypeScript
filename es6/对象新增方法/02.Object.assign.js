/*
 * @Date: 2023-05-03 16:08:15
 */
// Object.assign() 方法用于对象的合并，该方法是浅拷贝
  // 1.将源对象（source）的所有可枚举属性，复制到目标对象
  // 2.如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性
  // 3.如果只有一个参数，Object.assign()会直接返回该参数
  // 4.如果该参数不是对象，则会先转成对象，然后返回
  // 5.可以用来处理数组，但是会把数组视为对象。
let target = {foo: 'foo'}
let item1 = {goo: 'goo', foo: 'item1Foo'}
let item2 = {loo: 'loo'}
Object.assign(target, item1, item2)
console.log(target);

Object.defineProperties(item1, {
  no: {
    value: 'no',
    enumerable: false
  },
  yes: {
    value: 'yes',
    enumerable: true
  }
})
Object.assign(target, item1, item2)
console.log(target);

console.log(Object.assign(target) === target);

console.log(typeof Object.assign(2));

console.log(Object.assign({}, 'abcdefg')); // 会将这个字符串转换成对象，非字符串，非对象的数据类型不起作用