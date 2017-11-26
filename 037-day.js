var obj = {a:1, b:2, c:3};

for (var prop in obj) {
console.log("obj." + prop + " = " + obj[prop]);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

//for...in不应该用于迭代一个 Array . for...in 循环是用来对实例对象和原型链中的键（key）做遍历的，而不是用来遍历包含数字索引的数组的。

var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (var prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  } 
}

// Output:
// "obj.color = red"s


// 待续 for...of    find()  findIndex()   map()   indexOf() 


// for...of 迭代Array 

```
let iterable = [10, 20, 30];

for (let value of iterable) {
    value += 1;
    console.log(value);
}
// 11
// 21
// 31
```