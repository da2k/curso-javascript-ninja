(function(doc) {
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
  var $calculator = doc.querySelector('input[type="text"]');
  var $numbers = doc.querySelectorAll('[data-js="number"]');
  var $operations = doc.querySelectorAll('[data-js="operation"]');
  var $calc = doc.querySelector('[data-js="equal"]');
  var $reset = doc.querySelector('[data-js="ce"]');

  Array.prototype.forEach.call($numbers, function(button) {
    button.addEventListener('click', addValue, false);
  });

  Array.prototype.forEach.call($operations, function(button) {
    button.addEventListener('click', addOperation, false);
  });

  $calc.addEventListener('click', calculate, false);

  $reset.addEventListener('click', resetCalculator, false);

  function addValue(event) {
    $calculator.value += this.value;
  }

  function addOperation(event) {
    $calculator.value = removeLastItemIfItIsAnOperator($calculator.value);
    $calculator.value += this.value;
  }

  function calculate() {
    $calculator.value = removeLastItemIfItIsAnOperator($calculator.value);
    var values = $calculator.value.match(/\d+[+-/*]?/g);
    $calculator.value = values.reduce(function(accumulated, current) {
      var initialValue = Number(accumulated.slice(0, -1));
      var operator = accumulated.split('').pop();
      var endValue = Number(removeLastItemIfItIsAnOperator(current));
      var endOperator = isLastItemAnOperation(current)
        ? current.split('').pop() : '';
      switch (operator) {
        case '+':
          return (initialValue + endValue) + endOperator;
        case '-':
          return (initialValue - endValue) + endOperator;
        case '/':
          return (initialValue / endValue) + endOperator;
        case '*':
          return (initialValue * endValue) + endOperator;
      }
    });
  }

  function removeLastItemIfItIsAnOperator(number) {
    if (isLastItemAnOperation(number)) {
      return number.slice(0, -1);
    }
    return number;
  }

  function isLastItemAnOperation(number) {
    var operations = ['+', '-', '*', '/'];
    var lastItem = number.split('').pop();
    return operations.some(function (operation) {
      return operation === lastItem;
    })
  }

  function resetCalculator() {
    $calculator.value = 0;
  }

}) (document)
