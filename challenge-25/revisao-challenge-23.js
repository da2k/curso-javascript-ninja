(function(win, doc) {
  'use strict';
  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  var $visor = getElement('[data-js="visor"]');
  var $numberButtons = getElements('[data-js="number-button"]');
  var $operationButtons = getElements('[data-js="operation-button"]');

  function initialize() {
    initEvents();
  }

  function initEvents() {
    $numberButtons.forEach(function(button) {
      button.addEventListener('click', handleClickNumber, false);
    });
    $operationButtons.forEach(function(button) {
      button.addEventListener('click', handleClickOperation, false);
    });
    on('[data-js="ce-button"]', 'click', handleClickCe);
    on('[data-js="equal-button"]', 'click', handleClickEqual);
  }

  function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperation($visor.value);
    var allValues = $visor.value.match(getRegexOperators());
    $visor.value = allValues.reduce(reduceAllValues);
  }

  function reduceAllValues(accumulated, actual) {
    var firstValue = removeLastItemIfItIsAnOperation(accumulated);
    var operator = getOperator(accumulated);
    var lastValue = removeLastItemIfItIsAnOperation(actual);
    var lastOperator = getOperator(actual);
    return makeOperation(operator, firstValue, lastValue) + lastOperator;
  }

  function makeOperation(operator, firstValue, lastValue, lastOperator) {
    switch(operator) {
      case '+':
        return Number(firstValue) + Number(lastValue);
      case '-':
        return Number(firstValue) - Number(lastValue);
      case 'x':
        return Number(firstValue) * Number(lastValue);
      case '÷':
        return Number(firstValue) / Number(lastValue);
      case '%':
        return Number(firstValue) % Number(lastValue);
    }
  }

  function getOperator(string) {
    return isLastItemAnOperation(string) ? string.split('').pop() : '';
  }

  function getRegexOperators() {
    return new RegExp('\\d+[' + getAllOperators().join('') + ']?', 'g');
  }

  function handleClickOperation() {
    $visor.value = removeLastItemIfItIsAnOperation($visor.value);
    $visor.value += this.value;
  }

  function removeLastItemIfItIsAnOperation(string) {
    if(isLastItemAnOperation(string))
      return string.slice(0, -1);
    return string;
  }

  function handleClickNumber() {
    if($visor.value === '0')
      return $visor.value = this.value;
    $visor.value += this.value;
  }

  function isLastItemAnOperation(string) {
    var operators = getAllOperators();
    var lastItem = string.split('').pop();
    return operators.some(function(operator) {
      return lastItem === operator;
    });
  }

  function getAllOperators() {
    return Array.prototype.map.call($operationButtons, function(operator) {
      return operator.value;
    });
  }

  function handleClickCe() {
    $visor.value = 0;
  }

  function getElement(element) {
    return doc.querySelector(element);
  }

  function getElements(elements) {
    return doc.querySelectorAll(elements);
  }

  function on(element, eventName, callback) {
    getElement(element).addEventListener(eventName, callback, false);
  }

  initialize();

})(window, document);
