//执行上下文

/*
JS的执行上下文可以理解为当前代码的执行环境，
在执行JS程序时，每遇到一段JS可执行代码，
都会创建一个可执行上下文。
JS当中可执行代码分为三种：全局代码、函数代码、eval代码。
所以一段JS程序必定会产生多个执行上下文，
而JavaScript引擎则是以堆栈的形式来对其进行管理，
也就是常说的函数调用栈。栈底是全局上下文，
栈顶则是当前正在执行的上下文。
*/



var global = "globalStack";
function threeStack(){
  var three = "threeStack";
  function twoStack(){
    var two = "twoStack";
    eval(console.log("oneStack"));
  }
  twoStack();
}
threeStack();

//执行上下文在函数调用栈中的顺序为（自底向上）：globalStack => threeStack => twoStack => oneStack


//特性

//1.单线程
//2.同步执行，只有栈顶的上下文处于执行中，其他上下文需要等待
//3.全局上下文只有唯一的一个，它在浏览器关闭时出栈
//4.函数的执行上下文的个数没有限制
//5.每次某个函数被调用，就会有个新的执行上下文为其创建，即使是调用的自身函数，也是如此。



//http://www.ruanyifeng.com/blog/2014/10/event-loop.html