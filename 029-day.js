// [,,,].join(", ")
// [,,,] => [undefined × 3]

// 因为javascript 在定义数组的时候允许最后一个元素后跟一个,, 所以这是个长度为三的稀疏数组(这是长度为三, 并没有 0, 1, 2三个属性哦)

// 答案: ", , "


var xxxx = [,,,].join(", ")
// console.log(xxxx.length) //4
console.log(xxxx[0]) //
console.log(xxxx[1]) //
console.log(xxxx[2]) //
console.log(xxxx[3]) //