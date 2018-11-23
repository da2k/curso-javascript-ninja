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

(function(win, doc){
  'use strict';

  //declaração de variáveis a partir dos elementos HTML
  var $visor = doc.querySelector('[data-js="visor"]');
  var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
  var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
  var $buttonCE = doc.querySelector('[data-js="button-ce"]');
  var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

  function initialize() {
    initEvents();
  }

  function initEvents() { //inicia todos os eventos
    //evento de clique em todos os botões
    Array.prototype.forEach.call($buttonsNumbers, function(button) {
      button.addEventListener('click', handleClickNumber, false);
    });
    Array.prototype.forEach.call($buttonsOperations, function(button) {
      button.addEventListener('click', handleClickOperation, false);
    });
    $buttonCE.addEventListener('click', handleClickCE, false);
    $buttonEqual.addEventListener('click', handleClickEqual, false);
  }

  //ação de clique nos botões
  function handleClickNumber() {
    reloadVisor(this);
  }
  function handleClickOperation() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    reloadVisor(this);
  }
  function handleClickCE() {
    $visor.value = 0;
  }
  function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    var allValues = $visor.value.match(getRegexOperations());
    $visor.value = allValues.reduce(calculateAllValues);
  }

  // retorna o resultado da operação
  function calculateAllValues(accumulated, actual) {
    var firstValue = Number(removeLastItem(accumulated));
    var lastValue = Number(removeLastItemIfItIsAnOperator(actual));
    var operator = getLastItem(accumulated);
    var lastOperator = isLastItemAnOperation(actual) ? getLastItem(actual) : '';
    return doOperation(operator, firstValue, lastValue) + lastOperator;
  }

  // retorna todas as operações da aplicação para uma regex
  function getRegexOperations(){
    return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');
  }

  // realiza as operações
  function doOperation(operator, firstValue, lastValue) {
    switch(operator) {
      case '+':
        return ( firstValue + lastValue );
      case '-':
        return ( firstValue - lastValue );
      case 'x':
        return ( firstValue * lastValue );
      case '÷':
        return ( firstValue / lastValue );
    }
  }

  function reloadVisor(btn){ //atualiza o valor no visor, input
    $visor.value += btn.value;
  }

  function getLastItem(str){ //retorna somente o último digito do parametro
    return str.split('').pop();
  }

  function removeLastItem(str){ //retorna a string sem o último digito
    return str.slice(0, -1);
  }

  function isLastItemAnOperation(number) { // verifica se o último dígito é um operador
    var operations = getOperations();
    return operations.some(function(operator) {
      return operator === getLastItem(number);
    });
  }

  function getOperations(){ // captura o valor de todas as operações da aplicação
    return Array.prototype.map.call($buttonsOperations, function(button) {
      return button.value;
    });
  }

  function removeLastItemIfItIsAnOperator(string) {
    if(isLastItemAnOperation(string))
      return removeLastItem(string);
    return string;
  }

  initialize();
})(window, document);