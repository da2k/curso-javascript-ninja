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
(function(win,doc) {

'use strict';

  var $visor = doc.querySelector('[data-js="visor"]');
  var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
  var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
  var $buttonCE = doc.querySelector('[data-js="button-ce"]');
  var $buttonEqual = doc.querySelector('[data-js="button-equal"]');


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

function initCalculator() {
  initEvents();
}


function handleClickNumber() {
  if ($visor.value === '0')
    $visor.value = '';
  $visor.value += this.value;
}

function handleClickOperation() {
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  $visor.value += this.value;
}

function handleClickCE() {
  $visor.value = 0;
}

function getOperations() {
  return Array.prototype.map.call($buttonsOperations, function(button) {
    return button.value;
  });
}

function getRegexOperations() {
  return new RegExp('['+getOperations().join('')+']?'+'\\d+['+getOperations().join('')+']?', 'g');
}

function getLastOperator(value) {
  return isLastItemAnOperation(value) ? value.split('').pop() : '';
}

function isLastItemAnOperation(item) {
  var operations = getOperations();
  var lastItem = item.split('').pop();
  debugger;
  return operations.some(function(operator) {
    return operator === lastItem;
  });
}

function removeLastItemIfItIsAnOperator(item) {
  if(isLastItemAnOperation(item))
    return item.slice(0, -1);
  return item;
}

function handleClickEqual() {
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  var allValues = $visor.value.match(getRegexOperations());
  $visor.value = allValues.reduce(calculateAllValues);
}

function isDivisionByZero(number) {
  return (number === 0) ? true : false;
}

function calculate(oper, firstVal, lastVal, lastOp) {
  switch(oper) {
    case '+':
      return ( Number(firstVal) + Number(lastVal) ) + lastOp;
    case '-':
      return ( Number(firstVal) - Number(lastVal) ) + lastOp;
    case 'x':
      return ( Number(firstVal) * Number(lastVal) ) + lastOp;
    case '÷':
      if (isDivisionByZero(Number(lastVal)))
        alert('Cannot divide by zero');
        return '0';
      return ( Number(firstVal) / Number(lastVal) ) + lastOp;
  }
}

function calculateAllValues(accumulated, actual) {

  var operator = accumulated.split('').pop();
  var firstValue = accumulated.slice(0, -1);
  var lastValue = removeLastItemIfItIsAnOperator(actual);
  var lastOperator = getLastOperator(actual);
  return calculate(operator, firstValue, lastValue, lastOperator);
}

initCalculator();

})(window, document);
