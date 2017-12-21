# 面试题和基础知识

## 链表反转

## 响应式的不同方案

## get和post的区别
  []()

## SEO技巧与坑

## MVC和MVVM的区别

## em，rem，px，vh，vw

## 提高页面性能

## 判断镜像二叉树

## Js实现链表

## 重绘和重排


通常在文档初次加载时，浏览器引擎会解析HTML文档来构建DOM树,之后根据DOM元素的几何属性构建一颗用于渲染的树。渲染树的每个节点都有大小和边距属性。当渲染树构建完成后，浏览器就可以将元素放到正确的位置了，在根据**渲染树节点的样式属性绘制**出页面。

**重绘(redraw)**

重绘是一个元素外观的改变所触发的浏览器行为，例如改变visibility、背景色等。浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。重绘不会带来新的重新布局，并不一定伴随重排。

**重排(reflow)**

重排是更明显的一种改变，可以理解为渲染树需要重新计算。

* DOM元素的几何属性变化

* DOM树的结构变化

* 获取某些属性

* 改变元素的一些样式，调整浏览器窗口大小等


面试链接

[https://github.com/ElemeFE/node-interview/tree/master/sections/zh-cn](https://github.com/ElemeFE/node-interview/tree/master/sections/zh-cn)
[https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/Translations/Chinese/README.md](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/Translations/Chinese/README.md)
[https://github.com/h5bp/Front-end-Developer-Interview-Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions)

## 查找HTML中各个标签的个数

```
function countTag(dom,countObj){
	countObj[dom.tagName] = countObj[dom.tagName]?countObj[dom.tagName]+1:1
	if (dom.children.length == 0){
		return
	}
	for(var i = 0;i<dom.children.length;i++){
		countTag(dom.children[i],countObj)
	}
}
var obj = {}
countTag(document.children[0],obj)
console.log(obj)
```