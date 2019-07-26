(function(){

    'use strict'



    function on(element, event, callback){
        document.querySelector(element)
        .addEventListener(event, callback)
    }

    on('[data-js="link"]','click', function(){
        console.log('Refatorando o código...')
    })

    on('[data-js="div"]','click', function(){
        console.log('Clicou na div')
    })

    on('[data-js="span"]','click', function(){
        console.log('Clicou na span')
    }) 

    // var $div = document.querySelector('[data-js="div"]')
    // var $span = document.querySelector('[data-js="span"]')
    // var $a = document.querySelector('[data-js="link"]')




    // $div.addEventListener('click', function(){
    //     console.log('CLicou na div')
    // })

    // $span.addEventListener('click', function(){
    //     console.log('clicou no span')
    // })

    // $a.addEventListener('click', function(event){
    //     event.preventDefault()
    //     console.log('Clicou no link')
    // })

})()

