(function () {
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

  var operations = {
    '+': function sum(x, y) {
      return +x + +y
    },
    '-': function sub(x, y) {
      return +x - +y
    },
    'x': function mult(x, y) {
      return +x * +y
    },
    '÷': function div(x, y) {
      return +x / +y
    }
  };

  var $visor = document.querySelector('[data-js="visor"]');
  var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
  var $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
  var $buttonCE = document.querySelector('[data-js="button-ce"]');
  var $buttonEqual = document.querySelector('[data-js="button-equal"]');

  Array.prototype.forEach.call($buttonsNumbers, function (button) {
    button.addEventListener('click', handleClickNumber, false);
  });

  Array.prototype.forEach.call($buttonsOperations, function (button) {
    button.addEventListener('click', handleClickOperation, false);
  });

  $buttonCE.addEventListener('click', handleClickCE, false);
  $buttonEqual.addEventListener('click', handleClickEqual, false);

  function handleClickNumber() {
    $visor.value += this.value;
  }

  function handleClickOperation() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value += this.value;
  }

  function handleClickCE() {
    setValueVisor(0);
  }

  function isLastItemAnOperation(number) {
    return /[+÷x-]$/g.test(number);
  }

  function handleClickEqual() {
    setValueVisor(removeLastItemIfItIsAnOperator($visor.value));
    var allValues = convertValuesToArray($visor.value);
    setValueVisor(allValues.reduce(calculateExpression));
  }

  function convertValuesToArray(values) {
    return values.match(/\d+[+x÷-]?/g);
  }

  function calculateExpression(accumulated, actual) {
    var firstValue = removeLastChar(accumulated);
    var operator = getAndDeleteLastChar(accumulated);
    var lastValue = removeLastItemIfItIsAnOperator(actual);

    return ( calculate(firstValue, lastValue, operator) ) + getLastOperator(actual);
  }

  function removeLastChar(value) {
    return value.slice(0, -1);
  }

  function getAndDeleteLastChar(value) {
    return value.split('').pop();
  }

  function getLastOperator(value) {
    return isLastItemAnOperation(value) ? getAndDeleteLastChar(value) : '';
  }

  function removeLastItemIfItIsAnOperator(number) {
    return isLastItemAnOperation(number) ? removeLastChar(number) : number;
  }

  function calculate(number1, number2, operator) {
    return operations[operator](number1, number2);
  }

  function setValueVisor(value) {
    $visor.value = value;
  }

})();
