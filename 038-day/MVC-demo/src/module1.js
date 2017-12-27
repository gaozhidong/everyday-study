import Controller from './Controller'
import $ from 'jquery'
new Controller({
    element: '.module1',
    events: {
        'change input': 'onChangeInput',
        'click button': 'onClickButton'
    },
    onClickButton: function (e) {
        let value = this.$element.find('input').val()
        this.render(value)
    },
    onChangeInput: function (e) {
        let input = e.currentTarget
        console.log(input.value)
    },
    render: function (value) {
        let $output = this.$element.find('.output')
        if($output.length === 0){
            $output = $('<div class="output"></div>').text(value)
            $output.appendTo(this.$element)
        }else{
            $output.text(value)
        }
    }
})
