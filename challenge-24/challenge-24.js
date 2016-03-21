(function(win, doc){
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

     function initialize() {
          initEvents();
     }

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

     function handleClickNumber() {
          if(isThereZeroOnVisor()) $visor.value = '';
          addValueToVisor(this.value);
     }

     function handleClickOperation() {
          if(isThereZeroOnVisor()) return false;
          $visor.value = removeLastItemIfItIsAnOperator($visor.value);
          addValueToVisor(this.value);
     }

     function handleClickCE() {
          clearVisor();
     }

     function handleClickEqual() {
          $visor.value = removeLastItemIfItIsAnOperator($visor.value);
          var allValues = $visor.value.match(getRegexOperations());
          $visor.value = makesCalculations(allValues);
     }

     function getRegexOperations() {
          return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');
     }

     function isThereZeroOnVisor() {
          return $visor.value === '0';
     }

     function addValueToVisor(value) {
          $visor.value += value;
     }

     function clearVisor() {
          $visor.value = 0;
     }

     function isLastItemAnOperation(str) {
          var operations = getOperations();
          var lastItem = getLastItemFromString(str);;
          return operations.some(function(operator) {
               return operator === lastItem;
          });
     }

     function getOperations() {
          return Array.prototype.map.call($buttonsOperations, function(item) {
               return item.value;
          });
     }

     function removeLastItemIfItIsAnOperator(str) {
          if(isLastItemAnOperation(str))
               return removeLastItemFromString(str);
          return str;
     }

     function getLastItemFromString(str) {
          return str.split('').pop();
     }

     function removeLastItemFromString(str) {
          return str.slice(0, -1);
     }

     function makesCalculations(allValues) {
          return allValues.reduce(function(accumulated, current) {
               var firstValue = removeLastItemFromString(accumulated);
               var operator = getLastItemFromString(accumulated);
               var lastValue = removeLastItemIfItIsAnOperator(current);
               var lastOperator = isLastItemAnOperation(current) ? getLastItemFromString(current) : '';
               return doOperation(operator, firstValue, lastValue) + lastOperator;
          });
     }

     function doOperation(operator, firstValue, lastValue) {
          switch(operator) {
                    case '+':
                    return Number(firstValue) + Number(lastValue);
               case '-':
                    return Number(firstValue) - Number(lastValue);
               case 'x':
                    return Number(firstValue) * Number(lastValue);
               case '÷':
                    return Number(firstValue) / Number(lastValue);
          }
     }

     initialize();

})(window, document);