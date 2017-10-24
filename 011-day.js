//冒泡排序
/* 把冒泡排序（排序结果为从大到小排序）从迭代改写成递归的方式
  冒泡(迭代)：
  */
  //  function swap(array,i,j){
  //    const temp = array[i];
  //    array[i] = array[j];
  //    array[j] = temp;
  //  }
  //  function bubble(array){
  //    for(let i = 0;i<array.length;i++){
  //      for(let j =0;j<array.length-i-1;j++){
  //        if(array[j]<array[j+1]){
  //          swap(array,j,j+1);
  //        }
  //      }
  //    }
  //    return array;
  //  }
  //  bubble([3,2,5,1,7,0]);
  //  console.log(  bubble([3,2,5,1,7,0]))


   //递归

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubble(array, i, j) {
  console.log(i)
  // console.log(j)
  if (i === array.length - 1) {
    return array;
  }
  if (j === array.length - i - 1) {
    j = 0;
    i++;
  }
  if (array[j] < array[j + 1]) {
    swap(array, j, j + 1);
  }
  return bubble(array, i, j + 1);
}
console.log(bubble([3, 2, 5, 1, 7, 0],1,1))