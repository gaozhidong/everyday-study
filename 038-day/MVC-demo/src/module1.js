import Controller from './Controller'
import $ from 'jquery'
new Controller({
    element: '.module1',
    template: `
        <input type="text" name="number1">
        <button name="button1">点我</button>
        <div class="output">{{output}}</div>
    `,
    data: {
        output: '111'
    },
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
        let html = this.template.replace(/\{\{\s*(\S+)\s*\}\}/g, (match, cl) => {
            return this.data[cl]
        })
        this.$element.html(html)
    }
})
