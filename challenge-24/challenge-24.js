(function(win, doc){
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

  var $visor = document.querySelector('[data-js="visor"]');
  var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
  var $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
  var $buttonCE = document.querySelector('[data-js="button-ce"]');
  var $buttonEqual = document.querySelector('[data-js="button-equal"]');

  function initButtonsEvents() {
    Array.prototype.forEach.call($buttonsNumbers, function(button) {
      handleClickEvent(button, handleClickNumber);
    });
    Array.prototype.forEach.call($buttonsOperations, function(button) {
      handleClickEvent(button, handleClickOperation);
    });
    handleClickEvent($buttonCE, handleClickCE);
    handleClickEvent($buttonEqual, handleClickEqual);
  }


  function handleClickEvent(button, callback) {
    button.addEventListener('click', callback, false);
  }

  function handleClickNumber() {
    $visor.value !== '0' ? $visor.value += this.value : $visor.value = this.value;
  }

  function handleClickOperation() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value += this.value;
  }

  function handleClickCE() {
    $visor.value = 0;
  }

  function isLastItemAnOperation(number) {
    var operations = ['+', '-', 'x', '÷'];
    var lastItem = getLastChar(number);
    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }

  function removeLastItemIfItIsAnOperator(number) {
    if(isLastItemAnOperation(number)) {
      return removeLastChar(number);
    }
    return number;
  }

  function getLastChar(str) {
    return str.split('').pop();
  }

  function removeLastChar(str) {
    return str.slice(0, -1)
  }

  function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    var allValues = $visor.value.match(/\d+[+x÷-]?/g);
    $visor.value = allValues.reduce(function(accumulated, actual) {
      var firstValue = Number(removeLastChar(accumulated));
      var operator = getLastChar(accumulated);
      var lastValue = Number(removeLastItemIfItIsAnOperator(actual));
      var lastOperator = isLastItemAnOperation(actual) ? getLastChar(actual) : '';
      switch(operator) {
        case '+':
          return ( firstValue + lastValue ) + lastOperator;
        case '-':
          return (firstValue - lastValue ) + lastOperator;
        case 'x':
          return ( firstValue * lastValue ) + lastOperator;
        case '÷':
          return ( firstValue / lastValue ) + lastOperator;
      }
    });
  }
  initButtonsEvents();
})(window, document);
