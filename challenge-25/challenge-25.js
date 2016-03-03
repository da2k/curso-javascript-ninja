(function( window, document, undefined ){
  'use strict';
  /*
  Essa semana você terá dois desafios:
  1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
  tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
  ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
  o que não ficou tão claro das aulas anteriores.
  É essencial que você entenda todo o conteúdo que foi passado até aqui,
  para que possamos prosseguir para a parte mais avançada do curso :D

  2) Estudar eventos!
  Acesse a página do MDN:
  https://developer.mozilla.org/en-US/docs/Web/Events#Categories

  Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
  desafio os experimentos legais que você conseguir desenvolver :D
  */

  function initialize() {
    initEvents();
  }

  function initEvents() {
    windowEvents();
    inputEvents();
    divEvents();
    otherEvents();
    formEvents();
  }

  function otherEvents() {
    document.addEventListener('DOMContentLoaded', function(event) {
      console.log('DOMContentLoaded');
    });
    document.querySelector('[data-js="click"]')
      .addEventListener('click', function(event) {
        console.log('click')
      }, false);
    document.querySelector('[data-js="select"]')
      .addEventListener('change', function(event) {
        console.log('change', this.value);
      }, false);
    document.querySelector('[data-js="p"]')
      .addEventListener('copy', function() {
        console.log('copy');
      }, false);
  }

  function formEvents() {
    var $form = document.querySelector('[data-js="form"]');
    $form.addEventListener('reset', function(event) {
      console.log('reset');
    }, false);
    $form.addEventListener('submit', function(event) {
      event.preventDefault();
      console.log('submit');
    }, false);
  }

  function windowEvents() {
    window.addEventListener('load', function(event) {
      console.log('load');
    }, false);
    window.addEventListener('resize', function(event) {
      console.log('resize');
    }, false);
    window.addEventListener('scroll', function(event) {
      console.log('scroll')
    }, false);
  }

  function inputEvents() {
    var $input = document.querySelector('[data-js="input"]');
    $input.addEventListener('input', function(event) {
      console.log(this.value);
    }, false);
    $input.addEventListener('focus', function(event) {
      console.log('focus');
    }, false);
    $input.addEventListener('blur', function(event) {
      console.log('blur');
    }, false);
    $input.addEventListener('select', function(event) {
      console.log('select');
    }, false);
    $input.addEventListener('paste', function(event) {
      console.log('paste');
    }, false);
    $input.addEventListener('cut', function(event) {
      console.log('cut');
    }, false);
  }

  function divEvents() {
    var $div = document.querySelector('[data-js="div"]');
    $div.addEventListener('mouseenter', function(event) {
      console.log('mouseenter');
    }, false);
    $div.addEventListener('mouseleave', function(event) {
      console.log('mouseleave');
    }, false);
    $div.addEventListener('mousemove', function(event) {
      console.log('mousemove');
    }, false);
  }

  initialize();
})( window, document );
