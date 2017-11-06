//setTimeout与循环闭包的思考题

/**
 * 利用闭包，修改代码，让循环输出的结果依次为1,2,3,4,5
 */
// for(var i = 1; i <= 5; i++){
//   setTimeout(function timer(){
//     console.log(i)
//   },i*1000)
// } // 每个一秒打印一个 6  //共五个

// for(let i = 1; i <= 5; i++){
//   setTimeout(function timer(){
//     console.log(i)
//   },i*1000)
// } //打印 1 2 3 4 5 


// setTimeout(function(){
//   console.log(a) //4. 10
// },0);

// var a = 10;

// console.log(b) //1.undefined
// console.log(fn) //2.  fn这个函数

// var b = 20 ;

// function fn(){
//   setTimeout(function() {
//     console.log("setTimeout 10ms") //5. setTimeout 10ms
//   }, 10);
// }

// fn.toString = function(){
//   return 30;
// }

// console.log(fn) // 3. fn.toString 返回的 30
// setTimeout(function(){
//   console.log("setTimeout 20ms") // 6. setTimeout 20ms
// },20)

// fn()








// 使用自执行函数提供闭包条件，穿入i值并保存在闭包中
// for(var i = 1; i <= 5; i++ ){
//   (function (i){
//     setTimeout(function timer() {
//       console.log(i)
//     }, i*1000);
//   })(i)
// }

// 在setTimeout的第一个参数处利用闭包

for (var i = 1; i <= 5; i++) {
  setTimeout((function (i) {
    return function () {
      console.log(i)
    }
  })(i), i * 1000);
}