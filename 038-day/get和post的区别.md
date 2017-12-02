# GET和POST的区别

GET和POST都是HTTP请求的一种方法，HTTP请求信息由3部分组成：（1）请求方法URI协议/版本（2）　请求头(Request Header)（3）　请求正文。HTTP请求方法有8种(都是动词)：GET,POST,HEAD,PUT,DELETE,OPTIONS,TRACE,CONNECT。

```
GET ：从服务器取出资源（一项或多项）。
POST ：在服务器新建一个资源。
HEAD：只请求页面的首部。 
PUT ：在服务器更新资源（客户端提供改变后的完整资源）。
DELETE ：从服务器删除资源。
OPTIONS：获取信息，关于资源的哪些属性是客户端可以改变的。
TRACE ：TRACE方法被用于激发一个远程的，应用层的请求消息回路
CONNECT : 把请求连接转换到透明的TCP/IP通道。
```

那么GET和POST表面现象上有什么区别呢？

1. GET请求的数据会附在URL之后（就是把数据放置在HTTP协议头中），以?分割URL和传输数据，参数之间以&相连，如：login.action?name=hyddd&password=idontknow&verify=%E4%BD%A0%E5%A5%BD。如果数据是英文字母/数字，原样发送，如果是空格，转换为+，如果是中文/其他字符，则直接把字符串用BASE64加密，得出如：%E4%BD%A0%E5%A5%BD，其中％XX中的XX为该符号以16进制表示的ASCII。

POST把提交的数据则放置在是HTTP包的包体中。

简单说就是：GET请求的数据会暴露在地址栏中，而POST请求则不会。

2. 传输数据的大小
在HTTP规范中，没有对URL的长度和传输的数据大小进行限制。但是在实际开发过程中，对于GET，特定的浏览器和服务器对URL的长度有限制。因此，在使用GET请求时，传输数据会受到URL长度的限制。
对于POST，由于不是URL传值，理论上是不会受限制的，但是实际上各个服务器会规定对POST提交数据大小进行限制，Apache、IIS都有各自的配置。
3. 安全性
POST的安全性要比GET的安全性高。注意：这里所说的安全性和上面GET提到的“安全”不是同个概念。上面“安全”的含义仅仅是不作数据修改，而这里安全的含义是真正的Security的含义，比如：通过GET提交数据，用户名和密码将明文出现在URL上，因为(1)登录页面有可能被浏览器缓存，(2)其他人查看浏览器的历史纪录，那么别人就可以拿到你的账号和密码了，除此之外，使用GET提交数据还可能会造成**Cross-site request forgery**攻击。

总结：GET和POST都是向服务器发起请求。Get是向服务器发索取数据的一种请求，而Post是向服务器提交数据的一种请求，在FORM（表单）中，Method默认为"GET"，实质上，GET和POST只是发送机制不同，并不是一个取一个发！



**Cross-site request forgery（跨站请求伪造）** 简称CSRF。 是通过伪装来自受信任用户的请求来利用受信任的网站。

参考文章：
[https://www.cnblogs.com/hyddd/archive/2009/03/31/1426026.html](https://www.cnblogs.com/hyddd/archive/2009/03/31/1426026.html)

[http://blog.csdn.net/resilient/article/details/52585724](http://blog.csdn.net/resilient/article/details/52585724)

[http://www.ruanyifeng.com/blog/2014/05/restful_api](http://www.ruanyifeng.com/blog/2014/05/restful_api)