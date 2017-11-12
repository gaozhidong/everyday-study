// 实现函数 isInteger(x) 来判断 x 是否是整数

// 可以将 x 转换成10进制，判断和本身是不是相等即可：

function isInteger(x) { 
    return parseInt(x, 10) === x; 
}
// ES6 对数值进行了扩展，提供了静态方法 isInteger() 来判断参数是否是整数：

Number.isInteger(25) // true
Number.isInteger(25.0) // true
Number.isInteger(25.1) // false
Number.isInteger("15") // false
Number.isInteger(true) // false