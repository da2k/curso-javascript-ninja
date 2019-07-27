(function(){
    'use strict'

    let $main = document.querySelector('main')

    // console.log($main.parentNode)
    // console.log($main.childNodes)
    // console.log($main.lastChild)
    // console.log($main.nextSibling)
    // console.log($main.nextElementSibling)


    // console.log($main.firstChild.nextSibling.innerHTML)
    // console.log('.cloneNode('nome do nó que será clonado'))
    // console.log('.hasChildNode()')
    // console.log($main.firstElementChild.nodeName)
    // console.log($main.replaceChild('newChild, oldChild'))


    var $ul = document.querySelector('.list')
    // console.log($ul.hasChildNodes())

    var $list = document.querySelector('ol')
    console.log($list.getAttribute('data'))
    console.log($list.classList.add("selected"))



})()