(function(win, doc){
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

var $screen= doc.querySelector('[data-js="screen"]');
var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
var $reset = doc.querySelector('[data-js="button-CE"]');
var $equal = doc.querySelector('[data-js="button-equal"]');
var $operations = doc.querySelectorAll('[data-js="button-operation"]');

Array.prototype.forEach.call($buttonsNumbers, function(button){
  button.addEventListener('click', clickNumber , false);
});
Array.prototype.forEach.call($operations, function(button){
  button.addEventListener('click', clickOperations , false);
});

$reset.addEventListener('click', clickCE, false);
$equal.addEventListener('click', clickEqual, false);

function clickNumber(){
  $screen.value += this.value;
}
function clickOperations(){
  $screen.value = removeLastOperator($screen.value);
  $screen.value += this.value;
}
function clickCE(){
  $screen.value = 0;
}
function clickEqual(){
  $screen.value = removeLastOperator($screen.value);
  var inputValues = $screen.value.match(/\d+[+x÷-]?/g);
  $screen.value = inputValues.reduce(function(accumulate, actual){
    var firstValue = accumulate.slice(0, -1);
    var operator = accumulate.split('').pop();
    var lastValue = removeLastOperator(actual);
    var lastOperator = isLastItemOperation(actual) ? actual.split('').pop() : '';

    switch(operator){
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

function isLastItemOperation(number){
  var calculation = ['+', '-', 'x', '÷'];
  var lastItem = number.split('').pop();
  return calculation.some(function(operator){
    return operator === lastItem;
  })
}

function removeLastOperator(number){
  if(isLastItemOperation(number)){
    return number.slice(0, -1);
  }
  return number;
}

})(window, document);
