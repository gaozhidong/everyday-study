//用2*1的小矩形横着或者竖着去覆盖更大的举行。 用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，共有多少种方法

function rectCover(target) {
  var tempNum = 1;
  var result = 2;
  if (target < 0) {
    throw new Error('params is wrong');
  }
  if (target < 3 && target >= 0) {
    return target;
  }
  var count = 2;
  while (count < target) {
    result += tempNum;
    tempNum = result - tempNum;
    count++;
  }
  return result;
}

rectCover(5)
console.log(rectCover(5))