import './style.scss'
import $ from  'jquery'

let $module1 = $('.module1')
let $module2 = $('.module2')
let $module3 = $('.module3')

$module1.on('change','input',function(){
    console.log('change1')
})

$module2.on('change','input',function(){
    console.log('change2')
})

$module3.on('change','input',function(){
    console.log('change3')
})

$module1.on('click','button',function(){
    console.log('click1')
})

$module2.on('click','button',function(){
    console.log('click2')
})

$module3.on('click','button',function(){
    console.log('click3')
})
