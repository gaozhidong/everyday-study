var ary = [0,1,2];
ary[10] = 10;
ary.filter(function(x){
  return x === undefined;
})

// []

// http://www.cnblogs.com/ziyunfei/archive/2012/09/16/2687165.html
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// http://www.codeceo.com/article/44-javascript-crazy-question.html