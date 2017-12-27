import Controller from './Controller'

new Controller({
    element: '.module1',
    events: {
        'change input': function (e) {
            console.log('change1')
        },
        'click button': 'addToCart'
    },
    addToCart: function () {
        console.log(this)
        let value = this.$element.find('input').value
        this.remoteAddCart(value).then(() => {
            this.showAnimation()
        })
    },
    remoteAddCart: function () {
        //$.ajax....
        // return Promise
        return Promise.resolve(2)
    },
    showAnimation: function () {
        // this.$element.animate('...')
    }
})
