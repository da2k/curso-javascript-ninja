(function(window, document) {
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

var $input = document.querySelector('[data-js="input"]');
var $numbers = document.querySelectorAll('[data-js="number"]');
var $CE = document.querySelector('[data-js="CE"]');
var $operations = document.querySelectorAll('[data-js="operation"]');
var $equal = document.querySelector('[data-js="equal"]')


console.log($operations)

Array.prototype.forEach.call($numbers, function(button) {
  button.addEventListener('click', numberClicked, false);
});

Array.prototype.forEach.call($operations, function(button) {
  button.addEventListener('click', operationClicked, false);
})

$CE.addEventListener('click', resetInput, false);

$equal.addEventListener('click', result, false)


function numberClicked() {
  $input.value += this.value;
}

function operationClicked(){

  $input.value = removeLastOperation($input.value);
  $input.value += this.value;
}

function resetInput() {
  $input.value = 0;
}

function isOperation(num) {
  var listOperations = ['+', '-', 'x', '÷'];
  var lastItem = num.split('').pop();

  return listOperations.some(function(operation) {
    return operation === lastItem;
  });
}

function removeLastOperation(num) {
  if (isOperation(num)) {
    return num.slice(0, -1);
  }
  return num;
}

function result() {
  $input.value = removeLastOperation($input.value);

  var arrayValues = $input.value.match(/\d+[+x÷-]?/g);
  $input.value = arrayValues.reduce(function(acc, atual) {
    var firstNumber = acc.slice(0, -1);
    var operator = acc.split('').pop();
    var lastNumber = removeLastOperation(atual);
    var lastOperator = isOperation(atual) ? atual.split('').pop() : '';
    switch(operator) {
      case '+':
        return (Number(firstNumber) + Number(lastNumber)) + lastOperator;
      case '-':
        return (firstNumber - lastNumber) + lastOperator;
      case 'x':
        return (firstNumber * lastNumber) + lastOperator;
      case '÷':
        return (firstNumber / lastNumber) + lastOperator;
    };

    return acc + atual;

  });
}

})(window, document);
