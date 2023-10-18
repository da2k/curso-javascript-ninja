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

function addClickListenerToElements(elements, callback) {
  Array.prototype.forEach.call(elements, function(element) {
    element.addEventListener('click', callback, false);
  });
}

function handleClickNumber() {
  $visor.value += this.value;
}

function handleClickOperation() {
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  $visor.value += this.value;
}

function handleClickCE() {
  $visor.value = '0';
}

function isLastItemAnOperation(number) {
  var operations = ['+', '-', 'x', '÷'];
  var lastItem = number.slice(-1);
  return operations.includes(lastItem);
}

function removeLastItemIfItIsAnOperator(number) {
  if (isLastItemAnOperation(number)) {
    return number.slice(0, -1);
  }
  return number;
}

function calculate(accumulated, actual) {
  var firstValue = accumulated.slice(0, -1);
  var operator = accumulated.slice(-1);
  var lastValue = removeLastItemIfItIsAnOperator(actual);
  var lastOperator = isLastItemAnOperation(actual) ? actual.slice(-1) : '';
  switch (operator) {
    case '+':
      return (Number(firstValue) + Number(lastValue)).toString() + lastOperator;
    case '-':
      return (Number(firstValue) - Number(lastValue)).toString() + lastOperator;
    case 'x':
      return (Number(firstValue) * Number(lastValue)).toString() + lastOperator;
    case '÷':
      return (Number(firstValue) / Number(lastValue)).toString() + lastOperator;
  }
}

function handleClickEqual() {
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  var allValues = $visor.value.match(/\d+[+x÷-]?/g);
  $visor.value = allValues.reduce(calculate);
}

addClickListenerToElements($buttonsNumbers, handleClickNumber);
addClickListenerToElements($buttonsOperations, handleClickOperation);
$buttonCE.addEventListener('click', handleClickCE, false);
$buttonEqual.addEventListener('click', handleClickEqual, false);
