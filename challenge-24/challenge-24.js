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

(function(window, doc){
  'use strict';


var $visor = getSelector('', '[data-js="visor"]');
var $buttonsNumbers = getSelector('all', '[data-js="button-number"]');
var $buttonsOperations = getSelector('all', '[data-js="button-operation"]');
var $buttonCE = getSelector('', '[data-js="button-ce"]');
var $buttonEqual = getSelector('', '[data-js="button-equal"]');


function getSelector( typeSelector, targetElement ) {
  if (typeSelector === 'all')
    return document.querySelectorAll(targetElement);

  return document.querySelector(targetElement);
}

function initialize(){
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

function isLastItemAnOperation(number) {
  var operations = getOperators();
  var lastItem = number.split('').pop();
  return operations.some(function(operator) {
    return operator === lastItem;
  });
}

function getOperators (){
  return Array.prototype.map.call($buttonsOperations, function(item, index){
    return item.value;
  })
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
  $visor.value = allValues.reduce(function(accumulated, actual) {
    var firstValue = accumulated.slice(0, -1);
    var operator = accumulated.split('').pop();
    var lastValue = removeLastItemIfItIsAnOperator(actual);
    var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
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
  });
}




teste.apply(this, [], function(){
  console.log('opa')
});

  teste();

initialize();


})(window, document);
