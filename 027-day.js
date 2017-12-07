
//简单理解闭包
// (function(){

//   var local = '变量'   //局部变量
   
//   function foo(){
//     console.log(local)
//   }
// })()

//在函数内部可访问的local变量

//「函数」和「函数内部能访问到的变量」（也叫环境）的总和，就是一个闭包。

//闭包是Js函数作用域的副产品
//JS 的函数内部可以使用函数外部的变量。



//内存泄露 ： 用不到（访问不到）的变量，依然占居着内存空间，不能被再次利用起来


// 使用闭包  全局变量不会被销毁 除非关掉页面
// function bindName(name){
//   return function(action){
//     console.log(`${name} is ${action}ing`)
//   }
// }

//简化了传递的参数
// var doing = bindName('gao')
// doing('work')
// doing('play')


//以上代码相当于
function bindName(){
  var name = arguments[0]
  function fn (action){
    console.log(`${name} is ${action}ing`)
  }
  return fn
}
var doing = bindName('gao')
doing('work')
doing('play')

var doing2 = bindName('wang')
doing2('work')
doing2('play')