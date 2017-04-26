(function(win, doc){
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

function eventsFromHtml(){
  Array.prototype.forEach.call($buttonsNumbers, function(button) {
  button.addEventListener('click', handleClickNumber, false);
  });
  Array.prototype.forEach.call($buttonsOperations, function(button) {
  button.addEventListener('click', handleClickOperation, false);
  });
  $buttonCE.addEventListener('click', handleClickCE, false);
  $buttonEqual.addEventListener('click', handleClickEqual, false);
}

function getOperationsSymbols(){
  return Array.prototype.map.call($buttonsOperations, function(button){
    return button.value;
  })
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
  var operations = getOperationsSymbols();
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
  var allValues = $visor.value.match(/\d+[+-x÷]?/g);
  $visor.value = allValues.reduce(function(accumulated, actual) {
    var firstValue = accumulated.slice(0, -1);
    var operator = accumulated.split('').pop();
    var lastValue = removeLastItemIfItIsAnOperator(actual);
    var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
    return (calculate(operator))(firstValue, lastValue, lastOperator);
  });
}

function calculate(operator){
  var operation = {
    '+' : function(number1, number2, lastOperator){
      return Number(number1) + Number(number2) + lastOperator;
    },
    '-' : function(number1, number2, lastOperator){
      return Number(number1) - Number(number2) + lastOperator;
    },
    'x' : function(number1, number2, lastOperator){
      return Number(number1) * Number(number2) + lastOperator;
    },
    '÷' : function(number1, number2, lastOperator){
      return Number(number1) / Number(number2) + lastOperator;
    }
  };
  return operation[operator];
}

eventsFromHtml();
})(window, document);
