import Controller from './Controller'

new Controller({
    element:'.module1',
    events:{
        'change input':function(e){
            console.log('change1')
        },
        'click button':function(e){
            console.log('click1')
        }
    }
})
