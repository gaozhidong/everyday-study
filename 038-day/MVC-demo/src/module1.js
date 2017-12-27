import Controller from './Controller'

new Controller({
    element: '.module1',
    events: {
        'change input': 'onChangeInput',
        'click button': 'addToCart'
    },
    addToCart: function () {
        let value = this.$element.find('input').value
        this.remoteAddCart(value).then(() => {
            this.showAnimation()
        })
    },
    remoteAddCart: function () {
        console.log('远程请求')
        //$.ajax....
        // return Promise
        return Promise.resolve(2)
    },
    showAnimation: function () {
        console.log('展示动画')
        // this.$element.animate('...')
    },
    onChangeInput:function(e){
        let input = e.currentTarget
        console.log(input.value)
    }
})
