//一个插件验证代码思路。
//待完善：如何判断 和 提示信息。 

(function (window, factory, plug) {
  factory(jQuery, plug);
})(this, function (jQuery, plug) {
  //默认配置
  var DEFALUT = {
    init:"input",  //什么时间发生校验 是input 还是 blur
  }

  jQuery.prototype[plug] = function (options) {

    //数据校验 只让from表单调用
    if(this.is("form")){return;}

    this.$file = this.find("input");
    //已默认配置优先，用户配置覆盖
    $.extend(this,DEFALUT,options)

    this.$file.on(DEFALUT.init,function(){
      // console.log(this.value)
    });
  }
}, "Validata");


//对象有属性和对象  (公共  原型链)
//也可以扩展属性和方法  (静态)


//构造函数  类  封装属性和方法  实例化   new  继承

//原型对象 prototype



//input 事件  blur 事件
//$.extend 拓展
// $.extend(this,DEFALUT,options)  //第一个参数：扩展的对象  第二个或者多个参数 是需要遍历的对象
// jQuery  data 方法
  