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

(function(){

  //declaração de variáveis a partir dos elementos HTML
  var $visor = document.querySelector('[data-js="visor"]');
  var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
  var $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
  var $buttonCE = document.querySelector('[data-js="button-ce"]');
  var $buttonEqual = document.querySelector('[data-js="button-equal"]');

  //evento de clique em todos os botões
  Array.prototype.forEach.call($buttonsNumbers, function(button) {
    button.addEventListener('click', handleClickNumber, false);
  });
  Array.prototype.forEach.call($buttonsOperations, function(button) {
    button.addEventListener('click', handleClickOperation, false);
  });
  $buttonCE.addEventListener('click', handleClickCE, false);
  $buttonEqual.addEventListener('click', handleClickEqual, false);

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
    var allValues = $visor.value.match(/\d+[+x÷-]?/g);
    $visor.value = allValues.reduce(function(accumulated, actual) {
      var firstValue = Number(removeLastItem(accumulated));
      var lastValue = Number(removeLastItemIfItIsAnOperator(actual));
      var operator = getLastItem(accumulated);
      var lastOperator = isLastItemAnOperation(actual) ? getLastItem(actual) : '';
      switch(operator) {
        case '+':
          return ( firstValue + lastValue ) + lastOperator;
        case '-':
          return ( firstValue - lastValue ) + lastOperator;
        case 'x':
          return ( firstValue * lastValue ) + lastOperator;
        case '÷':
          return ( firstValue / lastValue ) + lastOperator;
      }
    });
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
  function isLastItemAnOperation(number) {
    var operations = ['+', '-', 'x', '÷'];
    return operations.some(function(operator) {
      return operator === getLastItem(number);
    });
  }
  function removeLastItemIfItIsAnOperator(number) {
    if(isLastItemAnOperation(number)) {
      return removeLastItem(number);
    }
    return number;
  }

})();