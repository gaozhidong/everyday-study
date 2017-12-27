import $ from 'jquery'
const Handlebars = require('handlebars')

class Controller {
    constructor(options) {
        for (let key in options) {
            this[key] = options[key]
        }
        this.$element = $(options.element)
        if (this.template && this.render) {
            this.render()
        }
        this.bindEvents()
    }
    bindEvents() {
        for (let key in this.events) {
            let parts = key.split(' ')
            let eventType = parts.shift()
            let selector = parts.join(' ')
            if (typeof this.events[key] === 'function') {
                this.$element.on(eventType, selector, this.events[key])
            } else if (typeof this.events[key] === 'string') {
                let methodName = this.events[key]
                // let that = this
                // this.$element.on(eventType, selector, function(e){
                //     that[methodName].call(that,e)
                // })

                this.$element.on(eventType, selector, this[methodName].bind(this))
            }
        }
    }
    render() {
        let template = (this.template[0] === '#') ? (document.querySelector(this.template).innerHTML) : this.template
        let html = Handlebars.compile(template)(this.data)
        this.$element.html(html)
    }
}

export default Controller
