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

;(function(win, doc) {
  'use strict';

  function app() {
    let $visor;
    let $buttonsNumbers;
    let $buttonsOperations;
    let $buttonCE;
    let $buttonEqual;

    function init() {
      $visor = doc.querySelector('[data-js="visor"]');
      $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
      $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
      $buttonCE = doc.querySelector('[data-js="button-ce"]');
      $buttonEqual = doc.querySelector('[data-js="button-equal"]');
      initEvents();
    }

    function initEvents() {
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
      var operations = ['+', '-', 'x', '÷'];
      var lastItem = number.split('').pop();
      return operations.some(function (operator) {
        return operator === lastItem;
      });
    }

    function removeLastItemIfItIsAnOperator(number) {
      if (isLastItemAnOperation(number)) {
        return number.slice(0, -1);
      }
      return number;
    }

    function handleClickEqual() {
      $visor.value = removeLastItemIfItIsAnOperator($visor.value);
      let allValues = $visor.value.match(/\d+[+x÷-]?/g);
      $visor.value = allValues.reduce(function (accumulated, actual) {
        let firstValue = accumulated.slice(0, -1);
        let operator = accumulated.split('').pop();
        let lastValue = removeLastItemIfItIsAnOperator(actual);
        let lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
        switch (operator) {
          case '+':
            return (Number(firstValue) + Number(lastValue)) + lastOperator;
          case '-':
            return (Number(firstValue) - Number(lastValue)) + lastOperator;
          case 'x':
            return (Number(firstValue) * Number(lastValue)) + lastOperator;
          case '÷':
            return (Number(firstValue) / Number(lastValue)) + lastOperator;
        }
      });
    }

    return {
      init: init
    }
  }
  win.app = app();
  win.app.init();
})(window, document);
