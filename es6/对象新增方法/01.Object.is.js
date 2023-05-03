/*
 * @Date: 2023-05-03 11:36:38
 */
// 与严格比较运算符 === 的行为基本一致，不同之处只有两个：一是+0不等于-0，二是NaN等于自身。
// console.log(Object.is('foo', 'foo')); // true
// console.log(Object.is({}, {})); // false

console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false
