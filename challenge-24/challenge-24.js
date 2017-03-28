(function(w, d) {

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

  var $visor = d.querySelector('[data-js="visor"]');
  var $buttonsNumbers = d.querySelectorAll('[data-js="button-number"]');
  var $buttonsOperations = d.querySelectorAll('[data-js="button-operation"]');
  var $buttonCE = d.querySelector('[data-js="button-ce"]');
  var $buttonEqual = d.querySelector('[data-js="button-equal"]');

  function isLastItemAnOperation (number) {
    var operations = ['+', '-', 'x', '÷'];
    var lastItem = number.split('').pop();
    return operations.some(function (operator) {
      return operator === lastItem;
    });
  }

  function removeLastItemIfItIsAnOperator (number) {
    if (isLastItemAnOperation(number)) {
      return number.slice(0, -1);
    }
    return number;
  }

  function getLastOperator(value) {
    return isLastItemAnOperation(value) ? value.split('').pop() : '';
  }

  function doAllOperators(operator, firstValue, lastValue) {
    switch (operator) {
      case '+':
        return (Number(firstValue) + Number(lastValue));
      case '-':
        return (Number(firstValue) - Number(lastValue));
      case 'x':
        return (Number(firstValue) * Number(lastValue));
      case '÷':
        return (Number(firstValue) / Number(lastValue));
    }
  }

  function calculateIt(accumulated, actual) {
    var firstValue = accumulated.slice(0, -1);
    var operator = accumulated.split('').pop();
    var lastValue = removeLastItemIfItIsAnOperator(actual);
    var lastOperator = getLastOperator(actual);

    return doAllOperators(operator, firstValue, lastValue) + lastOperator;
  }

  function getRegexToOperations() {
    return new RegExp('\\d+[+x÷-]?', 'g');
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

  function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    var allValues = $visor.value.match(getRegexToOperations());
    $visor.value = allValues.reduce(calculateIt);
  }

  function startEvents() {
    Array.prototype.forEach.call($buttonsNumbers, function (button) {
      button.addEventListener('click', handleClickNumber, false);
    });
    Array.prototype.forEach.call($buttonsOperations, function (button) {
      button.addEventListener('click', handleClickOperation, false);
    });
    $buttonCE.addEventListener('click', handleClickCE, false);
    $buttonEqual.addEventListener('click', handleClickEqual, false);
  }

  function start() {
    startEvents();
  }

  start();

})(window, document);
