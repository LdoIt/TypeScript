// 1.new Array()，Array() 创建数组时，会将3作为数组的长度，里面的元素都是三个undefined
let arr = new Array(3) 
let arr1 = Array(3)
console.log(arr, arr1); // [undefined, undefined, undefined]
// 2.ES6中新增的方法不会出现上面的问题
const arr3 = Array.of(3)
console.log(arr3); // [3]