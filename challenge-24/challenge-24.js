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
    $visor.value += this.value;
  }

  function handleClickOperation() {
    removeLastItemIfItIsAnOperatorVisor();
    $visor.value += this.value;
  }

  function handleClickCE() {
    $visor.value = 0;
  }

  function isLastItemAnOperation(number) {
    var operations = getOperations();
    var lastItem = getLastCaractere(number);
    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }

  function getOperations() {
    return Array.prototype.map.call($buttonsOperations, function(button) {
      return button.value;
    });
  }

  function getRegexOperations() {
    return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');
  }

  function getLastCaractere(str) {
    return str.split('').pop();
  }

  function getLastOperator(value) {
    return isLastItemAnOperation(value) ? getLastCaractere(value) : '';
  }

  function removeLastItemIfItIsAnOperator(string) {
    if(isLastItemAnOperation(string))
      return removeLastCaractere(string);
    return string;
  }

  function removeLastItemIfItIsAnOperatorVisor() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  }

  function removeLastCaractere(str) {
    return str.slice(0, -1);
  }

  function handleClickEqual() {
    removeLastItemIfItIsAnOperatorVisor();
    var allValues = $visor.value.match(getRegexOperations());
    $visor.value = allValues.reduce(calculateAllValues);
  }

  function calculateAllValues(accumulated, actual) {
    var firstValue = removeLastCaractere(accumulated);
    var operator = getLastCaractere(accumulated);
    var lastValue = removeLastItemIfItIsAnOperator(actual);
    var lastOperator = getLastOperator(actual);
    return doOperation(operator, firstValue, lastValue) + lastOperator;
  }

  function doOperation(operator, firstValue, lastValue) {
    switch(operator) {
      case '+': return Number(firstValue) + Number(lastValue);
      case '-': return Number(firstValue) - Number(lastValue);
      case 'x': return Number(firstValue) * Number(lastValue);
      case '÷': return Number(firstValue) / Number(lastValue);
    }
  }

  initialize();
})(window, document);
