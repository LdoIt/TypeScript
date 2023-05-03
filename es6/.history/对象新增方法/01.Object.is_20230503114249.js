/*
 * @Date: 2023-05-03 11:36:38
 */
// 与严格比较运算符 === 的行为基本一致
console.log(Object.is('foo', 'foo')); // true
console.log(Object.is({}, {})); // false
