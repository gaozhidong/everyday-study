import $ from  'jquery'

// let $module3 = $('.module3')

// $module3.on('change','input',function(){
//     console.log('change3')
// })

// $module3.on('click','button',function(){
//     console.log('click3')
// })


function  Maker(options){
    this.$element = $(options.element)
    this.events = options.events
    this.bindEvents()
}

Maker.prototype.bindEvents = function(){
    for(let key in this.events){
        let parts = key.split(' ')
        let eventType = parts.shift()
        let selector = parts.join(' ')
        this.$element.on(eventType,selector,this.events[key])
    }
}

new Maker({
    element:'.module3',
    events:{
        'change input':function(e){
            console.log('change3')
        },
        'click button':function(e){
            console.log('click3')
        }
    }
})
