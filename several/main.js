(function () {
  'use strict'

  function getEvent(element, event, callback) {
    document.querySelector(element)
      .addEventListener(event, callback, false)
  }

  getEvent('[data-js="link"]', 'click', function(event) {
    event.preventDefault();
    alert('clicou no link ')
  })

  getEvent('[data-js="div"]', 'click', function() {
    alert('clicou na div')
  })

  getEvent('[data-js="span"]', 'click', function() {
    alert('clicou no span')
  })
})()
