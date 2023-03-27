/*
 * @Date: 2023-03-27 21:21:20
 */
let m: {name: string, [propName: string]: any}
m = {name: 'xiaomign', age: 23}
type myType = 1 | 2 | 3 | 4
let k: myType
k = 4
let fn: (a:number, b: number) => number
fn = function(a, b) {
  return a+b
}
fn(1,4)
console.log(k);
