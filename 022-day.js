["1", "2", "3"].map(parseInt)

//(Array/map)https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//(Number/parseInt) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
//(Javascript parseInt)https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt


/**
 * 首先, map接受两个参数, 一个回调函数 callback, 一个回调函数的this值

其中回调函数接受三个参数 currentValue, index, arrary;

而题目中, map只传入了回调函数–parseInt.

其次, parseInt 只接受两个两个参数 string, radix(基数).

可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。
如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。
如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。
所以本题即问

parseInt('1', 0);
parseInt('2', 1);
parseInt('3', 2);
首先后两者参数不合法.

所以答案是 [1, NaN, NaN]
 */

parseInt('1', 0);
parseInt('2', 1);
parseInt('3', 2);

console.log(parseInt('1', 0))
console.log(parseInt('2', 1))
console.log(parseInt('3', 2))