import Controller from './Controller'

new Controller({
    element:'.module2',
    events:{
        'change input':function(e){
            console.log('change2')
        },
        'click button':function(e){
            console.log('click2')
        }
    }
})
