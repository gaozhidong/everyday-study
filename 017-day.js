
var Storage = (function(){
  return {
    set: function(key, value, expireSeconds){
      localStorage[key] = JSON.stringify({
        value: value, 
        expired: expireSeconds===undefined?undefined:Date.now() + 1000*expireSeconds
      })
    },
    get: function(key){
      if(localStorage[key] === undefined){
        return
      }
      var o = JSON.parse(localStorage[key])
      if(o.expired === undefined || Date.now() < o.expired){
        return o.value
      }else{
        delete localStorage[key]
      }
    }
 }
})()

Storage.set('name', '高治东') 
Storage.set('age', 22, 30) ;  //设置 name 字段存储的值为'高治东'
Storage.set('address', ['河南', '周口', '淮阳'],  60)

Storage.get('name')   // 高治东
Storage.get('age')     //  如果不超过30秒，返回数字类型的2；如果超过30秒，返回 undefined，并且 localStorage 里清除 age 字段
Storage.get('address')  //如果不超过60秒，返回数组； 如果超过60秒，返回 undefined，并且 localStorage 里清除 teachers 字段
