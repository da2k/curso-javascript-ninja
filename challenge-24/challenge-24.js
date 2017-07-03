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

  var $screen = doc.querySelector('[data-id="calc-screen"]');
  var $buttonsNumbers = doc.querySelectorAll('[data-id="button-number"]');
  var $buttonCE = doc.querySelector('[data-id="ce-button"]');
  var $buttonsOperations = doc.querySelectorAll('[data-id="button-operation"]');
  var $buttonEqual = doc.querySelector('[data-id="equal-button"]');

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
    if ($screen.value === '0')
      return $screen.value =+ this.value;
    return $screen.value += this.value;
  }

  function handleClickOperation() {
    $screen.value = removeLastItemIfItIsOperator($screen.value);
    $screen.value += this.value;
  }

  function isLastItemAnOperation(number) {
    var operations = ['+', '-', '×', '÷'];
    var lastItem = number.split('').pop();
    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }

  function removeLastItemIfItIsOperator(string) {
    if (isLastItemAnOperation(string))
      return string.slice(0, -1);
    return string;
  }

  function handleClickCE() {
    return $screen.value = 0;
  }

  function handleClickEqual() {
    $screen.value = removeLastItemIfItIsOperator($screen.value);
    var allValues = $screen.value.match(/\d+[+×÷-]?/g);
    $screen.value = allValues.reduce(calculateAllValues);
  }

  function calculateAllValues(accumulated, actual) {
    var firstValue = Number(accumulated.slice(0, -1));
    var operator = accumulated.split('').pop();
    var lastValue = Number(removeLastItemIfItIsOperator(actual));
    var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
    return doOperation(operator, firstValue, lastValue) + lastOperator;
  }

  function doOperation(operator, firstValue, lastValue) {
    switch(operator) {
      case '+':
        return firstValue + lastValue;
      case '-':
        return firstValue - lastValue;
      case '×':
        return firstValue * lastValue;
      case '÷':
        return firstValue / lastValue;
    }
  }

  initialize();
})(window, document);
