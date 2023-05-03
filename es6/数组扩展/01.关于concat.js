/*
 * @Date: 2023-04-26 19:51:42
 */
const a1 = [{count: 0}]
// concat 会浅拷贝数组里面的每个元素
const a2 = a1.concat()
a2[0].count = 3
console.log(a1);