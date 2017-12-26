# 面试题和基础知识

## 单链表反转

**wiki百科**对[链表](https://zh.wikipedia.org/wiki/%E9%93%BE%E8%A1%A8)的介绍

>链表（Linked list）是一种常见的基础数据结构，是一种线性表，但是并不会按线性的顺序存储数据，而是在每一个节点里存到下一个节点的指针(Pointer)。由于不必须按顺序存储，链表在插入的时候可以达到O(1)的复杂度，比另一种线性表顺序表快得多，但是查找一个节点或者访问特定编号的节点则需要O(n)的时间，而顺序表相应的时间复杂度分别是O(logn)和O(1)。

## 响应式的不同方案

**为什么要做响应式**

一般是为了提高用户体验，保证在不同分辨率下都有友好的体验。

**方法**很简单就是多写**CSS** ！！！


## get和post的区别
  [get和post的区别](https://github.com/gaozhidong/everyday-study/blob/master/038-day/GET%E5%92%8CPOST%E7%9A%84%E5%8C%BA%E5%88%AB.md)

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
	countObj[dom.tagName] = countObj[dom.tagName] ? countObj[dom.tagName] + 1 : 1
	if (dom.children.length == 0){
		return
	}
	for(var i = 0;i < dom.children.length; i++){
		countTag(dom.children[i],countObj)
	}
}
var obj = {}
countTag(document.children[0],obj)
console.log(obj)
```
