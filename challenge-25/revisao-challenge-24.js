(function(win, doc) {
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

  function initialize() {
    initEvents();
  }

  function initEvents() {
    Array.prototype.forEach.call($buttonsNumbers, function(button) {
      button.addEventListener('click', handleClickNumber, false);
    });
    Array.prototype.forEach.call($buttonsOperations, function(button) {
      button.addEventListener('click', handleClickOperation, false);
    });
    $buttonCE.addEventListener('click', handleClickCE, false);
    $buttonEqual.addEventListener('click', handleClickEqual, false);
  }

  function handleClickNumber() {
    if($visor.value === '0')
      return $visor.value = this.value;
    $visor.value += this.value;
  }

  function handleClickOperation() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value += this.value;
  }

  function handleClickCE() {
    $visor.value = 0;
  }

  function getOperationsRegex() {
    return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');
  }

  function getOperations() {
    return Array.prototype.map.call($buttonsOperations, function(button) {
      return button.value;
    });
  }

  function calculateAllValues(accumulated, actual) {
    var firstValue = removeLastItemIfItIsAnOperator(accumulated);
    var operator = getOperator(accumulated);
    var lastValue = removeLastItemIfItIsAnOperator(actual);
    var lastOperator = getOperator(actual);
    return makeOperation(operator, firstValue, lastValue) + lastOperator;
  }

  function getOperator(string) {
    return isLastItemAnOperation(string) ? string.split('').pop() : '';
  }

  function makeOperation(operator, firstValue, lastValue) {
    switch(operator) {
      case '+':
        return Number(firstValue) + Number(lastValue);
      case '-':
        return Number(firstValue) - Number(lastValue);
      case 'x':
        return Number(firstValue) * Number(lastValue);
      case '÷':
        return Number(firstValue) / Number(lastValue);
    }
  }

  function isLastItemAnOperation(string) {
    var operations = getOperations();
    var lastItem = string.split('').pop();
    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }

  function removeLastItemIfItIsAnOperator(string) {
    if(isLastItemAnOperation(string))
      return string.slice(0, -1);
    return string;
  }

  function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    var allValues = $visor.value.match(getOperationsRegex());
    $visor.value = allValues.reduce(calculateAllValues);
  }

  initialize();

})(window, document);
