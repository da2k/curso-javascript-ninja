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

Array.prototype.forEach.call($buttonsNumbers, function(button) {
  button.addEventListener('click', handleClickNumber, false);
});
Array.prototype.forEach.call($buttonsOperations, function(button) {
  button.addEventListener('click', handleClickOperation, false);
});
$buttonCE.addEventListener('click', handleClickCE, false);
$buttonEqual.addEventListener('click', handleClickEqual, false);

function handleClickNumber() {
  $visor.value = addValueToVisor(this.value);
}

function handleClickOperation() {
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  $visor.value = addValueToVisor(this.value);
}

function handleClickCE() {
  $visor.value = 0;
}

function isLastItemAnOperation(number) {
  var operations = ['+', '-', 'x', '÷'];
  var lastItem = getLastItem(number);
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
  var allValues = $visor.value.match(/\d+[+x÷-]?/g);
  $visor.value = reduceAllValues(allValues);
}

function getLastItem(item){
  return item.split('').pop();
}

function addValueToVisor(value){
  return $visor.value += value;
}

function reduceAllValues(allValues){
  return allValues.reduce(function(accumulated, actual) {
    var firstValue = accumulated.slice(0, -1);
    var operator = getLastItem(accumulated);
    var lastValue = removeLastItemIfItIsAnOperator(actual);
    var lastOperator = isLastItemAnOperation(actual) ? getLastItem(actual) : '';
    return calculate(operator, firstValue, lastValue, lastOperator);
  });
}

function calculate(operator, firstValue, lastValue, lastOperator){
  switch(operator) {
    case '+':
      return ( Number(firstValue) + Number(lastValue) ) + lastOperator;
    case '-':
      return ( Number(firstValue) - Number(lastValue) ) + lastOperator;
    case 'x':
      return ( Number(firstValue) * Number(lastValue) ) + lastOperator;
    case '÷':
      return ( Number(firstValue) / Number(lastValue) ) + lastOperator;
  }
}
