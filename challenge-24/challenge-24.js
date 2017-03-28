(function (win, doc) {
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

  function initialize () {
    initEvents();
  }

  function initEvents () {
    Array.prototype.forEach.call($buttonsNumbers, function(button) {
      attachEvent(button, handleClickNumber);
    });
    Array.prototype.forEach.call($buttonsOperations, function(button) {
      attachEvent(button, handleClickOperation);
    });
    attachEvent($buttonCE, handleClickCE);
    attachEvent($buttonEqual, handleClickEqual);
  }

  function sum (x, y) {
    return x + y;
  }

  function subtraction (x, y) {
    return x - y;
  }

  function multiplication (x, y) {
    return x * y;
  }

  function division (x, y) {
    return x / y;
  }

  function getLastItem (array) {
    return array.split('').pop();
  }

  function removeLastItem (array) {
    return array.slice(0, -1);
  }

  function operation (operator, x, y) {
    switch(operator) {

      case '+':
        return sum(x, y);

      case '-':
        return subtraction(x, y);

      case 'x':
        return multiplication(x, y);

      case '÷':
        return division(x, y);
    }
  }

  function attachEvent (button, action) {
    button.addEventListener('click', action, false);
  }

  function isLastItemAnOperation(number) {
    var operations =  getOperations();
    var lastItem = getLastItem(number);

    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }

  function getOperations () {
    return Array.prototype.map.call($buttonsOperations, function (button) {
      return button.value;
    });
  }

  function getRegexOperations () {
    return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');
  }

  function getLastOperator (value) {
    return isLastItemAnOperation(value) ? getLastItem(value) : '';
  }

  function removeLastItemIfItIsAnOperator(number) {
    if(isLastItemAnOperation(number)) {
      return removeLastItem(number);
    }
    return number;
  }

  function calculateAllValues(accumulated, actual) {
      var firstValue = removeLastItem(accumulated);
      var operator = getLastItem(accumulated);
      var lastValue = removeLastItemIfItIsAnOperator(actual);
      var lastOperator = getLastOperator(actual);
      return operation(operator, Number(firstValue), Number(lastValue)) + lastOperator;
    }

  function handleClickNumber() {
    if ($visor.value.charAt(0) === '0') {
      $visor.value = $visor.value.slice(1);
    }
    $visor.value += this.value;
  }

  function handleClickOperation() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value += this.value;
  }

  function handleClickCE() {
    $visor.value = 0;
  }

  function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    var allValues = $visor.value.match(getRegexOperations());
    $visor.value = allValues.reduce(calculateAllValues);
  }

  initialize();

})(window, document);
