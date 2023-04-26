// 1.find、findIndex，查找元素，找出第一个符合条件的数组成员，接收一个回调函数和绑定回调函数的this对象
let v = [1,2,3,4,5].find((value, index, currentArr) => { return value > 2 })
console.log(v); // 3
let i = [1,2,3,4,5].findIndex((value, index, currentArr) => { return value > 2 })
console.log(i); // 2

// 2.findIndex和indexOf比较：findIndex可以查找到NaN
console.log([NaN].findIndex(value => Object.is(NaN, value))); // 0
console.log([NaN].indexOf(NaN)); // -1
