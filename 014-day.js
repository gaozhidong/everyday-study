//一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
function jumpFloor(number) {
  var f = 1,
    g = 2;
  while (--number > 0) {
    g += f;
    f = g - f;
  }
  return f;
}

jumpFloor(3)
// console.log(jumpFloor(4))