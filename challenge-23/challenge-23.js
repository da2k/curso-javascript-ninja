(function (doc, win) {

  'use strict';
   var $visor = document.querySelector('[data-js="visor"]');
   var $buttonsNumbers = doc.querySelectorAll('[data-js="button-num"]');
   var $buttonOperations = doc.querySelectorAll('[data-js="button-oper"]');
   var $buttonCE = doc.querySelector('[data-js="button-ce"]');
   var $buttonIgual = doc.querySelector('[data-js="button-igual"]');
   console.log($buttonIgual);
   Array.prototype.forEach.call($buttonsNumbers, function (button) {
       button.addEventListener('click', handleClickNumber, false);
   });
   Array.prototype.forEach.call($buttonOperations, function (button) {
       button.addEventListener('click', handleClickOper, false);
   })
   $buttonCE.addEventListener('click', handleClickCE, false);
   $buttonIgual.addEventListener('click', handleClickIgual, false);
   function handleClickNumber () {
       $visor.value += this.value;
   }
   function handleClickCE () {
       $visor.value = 0;
   }
   function handleClickOper () {
       $visor.value = removeLastItemIfItIsAnOperator($visor.value);
       $visor.value += this.value;
   }
   function isLastItemAnOperation(number) {
       var operations = ['+', '-', 'x', '÷'];
       var lastItem = number.split('').pop();
       return operations.some(function (operator) {
           return operator === lastItem;
       })
   }
   function removeLastItemIfItIsAnOperator(number) {
       if(isLastItemAnOperation(number))
           return number.slice(0, -1);
       return number;
   }
   function handleClickIgual () {
       $visor.value = removeLastItemIfItIsAnOperator($visor.value);
       var allValues = $visor.value.match(/\d+[+x÷-]?/g);
       var result = allValues.reduce(function(acc, actual) {
           var firstValue = acc.slice(0, -1);
           var operator = acc.split('').pop();
           var lastValue = removeLastItemIfItIsAnOperator(actual);
           var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
           switch(operator){
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
       console.log(result);
   }
 } (document, window));
