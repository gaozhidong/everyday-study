//js随机从数组中取出几个元素
var items = ['1','2','4','5','6','7','8','9','10'];
var item = items[Math.floor(Math.random()*items.length)]; //取一个

function getRandomArrayElements(arr, count) { //取多个
  var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
  while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
  }
  return shuffled.slice(min);
}


console.log( getRandomArrayElements(items, 4) );