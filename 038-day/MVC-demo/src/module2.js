import Controller from './Controller'

new Controller({
    element: '.module2',
    template: `
        <span>{{number}}</span>
        <button name="increase">+</button>
        <button name="decrease">-</button>
    `,
    data:{
        number:0
    },
    events: {
        'click button[name=increase]': "increase",
        'click button[name=decrease]': "decrease"
    },
    increase(){
        this.data.number += 1
        this.render()
    },
    decrease(){
        this.data.number -= 1
        this.render()
    }
})
