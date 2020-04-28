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

  var $visor = document.querySelector('[data-js="visor"]');
  var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
  var $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
  var $buttonCE = document.querySelector('[data-js="button-ce"]');
  var $buttonEqual = document.querySelector('[data-js="button-equal"]');

  function initialize() {
    initializeEvents();
  }

  function initializeEvents() {
    Array.prototype.forEach.call($buttonsNumbers, function (button) {
      button.addEventListener('click', handleClickNumber, false);
    });
    Array.prototype.forEach.call($buttonsOperations, function (button) {
      button.addEventListener('click', handleClickOperation, false);
    });
    $buttonCE.addEventListener('click', handleClickCE, false);
    $buttonEqual.addEventListener('click', handleClickEqual, false);
  }

  function concatInVisor(value) {
    $visor.value += value;
  }

  function handleClickNumber() {
    concatInVisor(this.value);
  }

  function handleClickOperation() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    concatInVisor(this.value);
  }

  function handleClickCE() {
    $visor.value = 0;
  }

  function isLastItemAnOperation(number) {
    var operations = getOperations();
    var lastItem = number.split('').pop();
    return operations.some(function (operator) {
      return operator === lastItem;
    });
  }

  function getOperations() {
    return Array.prototype.map.call($buttonsOperations, function (operation) {
      return operation.value;
    });
  }

  function removeLastItemIfItIsAnOperator(str) {
    if (isLastItemAnOperation(str)) {
      return str.slice(0, -1);
    }
    return str;
  }

  function getLastChOfString(str) {
    return str.split('').pop();
  }

  function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    var allValues = $visor.value.match(getRegexOperations());
    $visor.value = allValues.reduce(calculateAllValues);
  }

  function getRegexOperations() {
    return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');
  }

  function calculateAllValues(accumulated, actual) {
    var firstValue = accumulated.slice(0, -1);
    var operator = getLastChOfString(accumulated);
    var lastValue = removeLastItemIfItIsAnOperator(actual);
    var lastOperator = getLastOperator(actual);
    return calculate(operator)(firstValue, lastValue) + lastOperator;
  }

  function getLastOperator(string) {
    return isLastItemAnOperation(string) ? getLastChOfString(string) : '';
  }

  function calculate(operation) {
    var operations = {
      '+': function (x, y) {
        return Number(x) + Number(y);
      },
      '-': function (x, y) {
        return Number(x) - Number(y);
      },
      'x': function (x, y) {
        return Number(x) * Number(y);
      },
      '÷': function (x, y) {
        return Number(x) / Number(y);
      }
    };
    return operations[operation];
  }

  initialize();
})(window, document);
