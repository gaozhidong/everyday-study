## this的类型

1. 默认绑定 :默认绑定就是什么都匹配不到的情况下，非严格模式this绑定到全局对象window或者global,严格模式绑定到undefined;
2. 隐式绑定 :隐式绑定就是函数作为对象的属性，通过对象属性的方式调用，这个时候this绑定到对象;
3. 显示绑定 :显示绑定就是通过apply和call调用的方式;
4. new绑定  :new绑定就是通过new操作符时将this绑定到当前新创建的对象中，它们的匹配有限是是从小到大的。

```
var length = 10;
function fn() {
    console.log(this.length)
};
var obj = {
    length: 5, 
    method: function (fn) {
        // fn();
        arguments[0]();
        // fn.call(obj, 12); // 和12没什么关系， 那么12到底有什么用呢？
        fn.call(obj)
    }
};
obj.method(fn, 1);

```
 * 第一个： 通过将函数赋值给函数参数(fn)，然后调用fn,这个时候能匹配到的this类型就是第一条默认绑定，因为实在非严格模式下，所以this绑定的是window，当然首先输出的是10。

 * 第三个： 这个也很简单，因为用了call,所以实际匹配了显示绑定，所以当前this绑定了obj,那么输出的肯定是2。
 * 第二个： 其实在JavaScript中数组算是一种特殊的对象，arguments[0]其实就是通过对象的属性去调用（数组的默认属性类型是数值而普通对象的属性类型是字符串），
            那么现在其实运用的是规则2，this被绑定到arguments上，而arguments确实存在一个length属性，并且值为2,所以输出的肯定就是2啦

```

var app = {
    fn1() {
        setTimeout(function(){
            console.log(this)
        }, 10)
    },
    fn2() {
        setTimeout(()=>{
            console.log(this)
        },20)
    },
    fn3() {
        setTimeout((function(){
            console.log(this)
        }).bind(this), 30)        
    },
    fn4: ()=> {
        setTimeout(()=>{
            console.log(this)
        },40)        
    }
}
app.fn1()
app.fn2()
app.fn3()
app.fn4()
 ```

 以上代码相当于

 ```
 var app = {
     fn1() {
         function fn(){
             console.log(this)
         }
         //过10ms 后执行
         //fn.call(undefined) ，所以输出 Window
     },
     fn2() {
         //过20ms 执行箭头函数
         //箭头函数里面没资格有 自己的 this，借用 setTimeout 外面的 this，也就是 app
     },
     fn3() {
         // 创建了一个新函数，这个新函数里面绑定了 外面的this，也就是 app
         // 20 ms 后执行新函数，输出 this，也就是刚刚绑定的 app    
     }
     fn4: ()=> {
         //过40ms 执行箭头函数
         //箭头函数里面没资格有 this，用 setTimeout 外面的 this
         //setTimeout 所在的 fn4也是箭头函数，没资格拥有自己的 this，借用外面的 this ，也就是 Window     
     }
 }
 ```