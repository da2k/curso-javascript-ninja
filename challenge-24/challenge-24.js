(function (window, document) {
  'use strict';

  /*
  Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
  o código, conforme vimos na aula anterior. Quebrar as responsabilidades
  em funções, onde cada função faça somente uma única coisa, e faça bem feito.

  - Remova as duplicações de código;
  - agrupe os códigos que estão soltos em funções (declarações de variáveis,
  listeners de eventos, etc);
  - faça refactories para melhorar esse código, mas de forma que o mantenha com a
  mesma funcionalidade.
  */



  var calculadoraNucleo = {
    '+': function(number1, number2) {
      return Number(number1) + Number(number2);
    },
    '-':function(number1, number2) {
      return Number(number1) - Number(number2);
    },
    'x':function(number1, number2) {
      return Number(number1) * Number(number2);
    },
    '÷':function(number1, number2) {
      return Number(number1) / Number(number2);
    }
  }

  var $visor = document.querySelector('[data-js="visor"]');
  var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
  var $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
  var $buttonCE = document.querySelector('[data-js="button-ce"]');
  var $buttonEqual = document.querySelector('[data-js="button-equal"]');

  function initialize() {
    initEvents();
  }

  function initEvents() {
    Array.prototype.forEach.call($buttonsNumbers, function(button) {
      button.addEventListener('click', handleClick, false);
    });
    Array.prototype.forEach.call($buttonsOperations, function(button) {
      button.addEventListener('click', handleClickOperation, false);
    });
    $buttonCE.addEventListener('click', handleClickCE, false);
    $buttonEqual.addEventListener('click', handleClickEqual, false);
  }

  function handleClick() {
    $visor.value += this.value;
  }

  function handleClickOperation() {
    removeLastItemIfItIsAnOperator($visor.value);
    handleClick.call(this);
  }

  function handleClickCE() {
    $visor.value = 0;
  }

  function removeLastItemIfItIsAnOperator(number) {
    return number = number.replace(/[+x÷-]$/g, '');
  }

  function handleClickEqual() {
    removeLastItemIfItIsAnOperator($visor.value);
    var operadores = $visor.value.replace(/\d+/g, '').split('');
    var numeros = $visor.value.split(/\D/g);
    var i = -1;
    $visor.value = Array.prototype.reduce.call(numeros, function(accumulated, actual) {
      return String(calculadoraNucleo[operadores[++i]](accumulated, actual));
    });
  }

  initialize();

})(window, document);
