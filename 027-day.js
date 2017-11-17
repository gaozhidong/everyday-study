
//简单理解闭包
(function(){

  var local = '变量'   //局部变量
   
  function foo(){
    console.log(local)
  }
})()

//在函数内部可访问的local变量

//「函数」和「函数内部能访问到的变量」（也叫环境）的总和，就是一个闭包。

//闭包是Js函数作用域的副产品
//JS 的函数内部可以使用函数外部的变量。



//内存泄露 ： 用不到（访问不到）的变量，依然占居着内存空间，不能被再次利用起来