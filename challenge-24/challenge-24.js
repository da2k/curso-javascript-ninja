(function (win, doc) {
  'use Strict';
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

  var $visor = doc.querySelector('[data-js="visor"]');
  var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
  var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
  var $buttonCE = doc.querySelector('[data-js="button-ce"]');
  var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

  function initialize() {
    initEvents();
  }

  function initEvents() {
    Array.prototype.forEach.call($buttonsNumbers, function (button) {
      button.addEventListener('click', handleClickNumber, false);
    });
    Array.prototype.forEach.call($buttonsOperations, function (button) {
      button.addEventListener('click', handleClickOperation, false);
    });
    $buttonCE.addEventListener('click', handleClickCE, false);
    $buttonEqual.addEventListener('click', handleClickEqual, false);

  }

  function handleClickNumber() {
    $visor.value += this.value;
  }

  function handleClickOperation() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value += this.value;
  }

  function handleClickCE() {
    $visor.value = 0;
  }

  function isLastItemAnOperation(str) {
    var lastItem = str.split('').pop();
    return getOperations().some(function (operator) {
      return operator === lastItem;
    });
  }

  function removeLastItemIfItIsAnOperator(str) {
    if (isLastItemAnOperation(str)) {
      return str.slice(0, -1);
    }
    return str;
  }

  function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    var allValues = getAllValues($visor.value);
    $visor.value = allValues.reduce(calculate);
  }

  function calculate(accumulated, actual) {
    var firstValue = getFirstValue(accumulated);
    var operator = getOperator(accumulated);
    var lastValue = removeLastItemIfItIsAnOperator(actual);
    var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
    return calculator(operator)(Number(firstValue), Number(lastValue)) + lastOperator;
  }

  function getFirstValue(acc) {
    return acc.slice(0, -1);
  }

  function getOperator(acc) {
    return acc.split('').pop();
  }

  function getAllValues(number) {
    var regex = getOperationsRegex();
    return number.match(regex);
  }

  function getOperationsRegex() {
    return new RegExp('\\d+[' + getOperations().join('').replace('-', '') + '-]?', 'g');
  }

  function calculator(op) {
    var operations = {
      '+': function (x, y) { return x + y; },
      '-': function (x, y) { return x - y; },
      'x': function (x, y) { return x * y; },
      '÷': function (x, y) { return x / y; }
    };
    return operations[op];
  }

  function sum(x, y) {
    return x + y;
  }

  function subtract(x, y) {
    return x - y;
  }

  function multiply(x, y) {
    return x * y;
  }

  function divide(x, y) {
    return x / y;
  }

  function getOperations() {
    return Array.prototype.map.call($buttonsOperations, function (btn) {
      return btn.value;
    });
  }

  initialize();
})(window, document);
