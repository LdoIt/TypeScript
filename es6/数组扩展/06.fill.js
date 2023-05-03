/*
 * @Date: 2023-04-26 21:33:14
 */
// 1.fill 使用给定值填充一个数组接收三个参数
const arr1 = Array.of(1,2,3,4).fill(0)
console.log(arr1); // [0,0,0,0]
const arr2 = Array.of(1,2,3,4).fill(0, 2, 3) // [1,2,0,4]
console.log(arr2);