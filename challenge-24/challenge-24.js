(function (win, doc){
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

  var $visor = doc.querySelector('[data-js="visor"]');
  var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
  var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
  var $buttonCE = doc.querySelector('[data-js="button-ce"]');
  var $buttonEqual = doc.querySelector('[data-js="button-equal"]');
  var calculator = {
    '-': function(firstValue, lastValue){ return ( Number(firstValue) - Number(lastValue) ) },
    '+': function(firstValue, lastValue){ return ( Number(firstValue) + Number(lastValue) ) },
    'x': function(firstValue, lastValue){ return ( Number(firstValue) * Number(lastValue) ) },
    '÷': function(firstValue, lastValue){ return ( Number(firstValue) / Number(lastValue) ) }
  };


  addHandleClickNumberInButtonsNumbers();
  addHandleClickOperationInButtonsOperations();
  addHandleClickInButtonCE();
  addHandleClickInButtonEqual();

  function addHandleClickNumberInButtonsNumbers(){
    Array.prototype.forEach.call($buttonsNumbers, function(button) {
      button.addEventListener('click', handleClickNumber, false);
    });
  }

  function addHandleClickOperationInButtonsOperations(){
    Array.prototype.forEach.call($buttonsOperations, function(button) {
      button.addEventListener('click', handleClickOperation, false);
    });
  }

  function addHandleClickInButtonCE(){
    $buttonCE.addEventListener('click', handleClickCE, false);
  }

  function addHandleClickInButtonEqual(){
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

  function isLastItemAnOperation(number) {
    var operations = ['+', '-', 'x', '÷'];
    var lastItem = number.split('').pop();
    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }

  function removeLastItemIfItIsAnOperator(number) {
    if(isLastItemAnOperation(number)) {
      return number.slice(0, -1);
    }
    return number;
  }

  function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value = calcul(getValueInDisplayFormated());
  }

  function getValueInDisplayFormated(){
    return $visor.value.match(/\d+[+x÷-]?/g);
  }

  function calcul(values){
    return values.reduce(doOperations);
  }

  function doOperations(accumulated, actual) {
    var firstValue = accumulated.slice(0, -1);
    var operator = accumulated.split('').pop();
    var lastValue = removeLastItemIfItIsAnOperator(actual);
    var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
    return calculator[operator](firstValue, lastValue) + lastOperator;
  }
})(window, document);
