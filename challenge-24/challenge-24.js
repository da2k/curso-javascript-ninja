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
  var operations = ['+', '-', 'x', '÷'];
  var convertOperatorAndCalc = {
    '+': function(x, y, z) { return ( x + y ) + z},
    '-': function(x, y, z) { return ( x - y ) + z},
    'x': function(x, y, z) { return ( x * y ) + z},
    '÷': function(x, y, z) { return ( x / y ) + z}
  };

  Array.prototype.forEach.call($buttonsNumbers, function(button) {
    button.addEventListener('click', handleClickNumber, false);
  });
  Array.prototype.forEach.call($buttonsOperations, function(button) {
    button.addEventListener('click', handleClickOperation, false);
  });
  $buttonCE.addEventListener('click', handleClickCE, false);
  $buttonEqual.addEventListener('click', handleClickEqual, false);

  function handleClickNumber() {
    $visor.value += this.value;
  }

  function handleClickOperation() {
    cleanVisorLastOperator();
    $visor.value += this.value;
  }

  function handleClickCE() {
    $visor.value = 0;
  }

  function isLastItemAnOperation(number) {
    return operations.some(function(operator) {
      return operator === getLastItem(number);
    });
  }

  function removeLastItemIfItIsAnOperator(number) {
    if(isLastItemAnOperation(number)) {
      return number.slice(0, -1);
    }
    return number;
  }

  function getLastItem(number){
    return number.split('').pop();
  }

  function cleanVisorLastOperator(){
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  }

  function getAllValuesToCalc(){
    return $visor.value.match(/\d+[+x÷-]?/g);
  }

  function handleClickEqual() {
    cleanVisorLastOperator();
    $visor.value = getAllValuesToCalc().reduce(function(accumulated, actual) {
      var firstValue = Number(accumulated.slice(0, -1));
      var operator = getLastItem(accumulated);
      var lastValue = Number(removeLastItemIfItIsAnOperator(actual));
      var lastOperator = isLastItemAnOperation(actual) ? getLastItem(actual) : '';
      return convertOperatorAndCalc[operator](firstValue, lastValue, lastOperator);
    });
  }
})(window,document);
