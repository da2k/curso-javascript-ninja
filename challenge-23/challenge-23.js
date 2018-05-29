
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

(function(win, doc) {

  'use strict';

  var $tela = doc.querySelector('[data-js="txt"]');
  var $btnNumeros = doc.querySelectorAll('[data-js="btn-numbers"]');
  var $btnOperations = doc.querySelectorAll('[data-js="btn-operations"]');
  var $btnCE = doc.querySelector('[data-id="button-operation-clear"]');
  var $btnResult = doc.querySelector('[data-id="button-operation-equals"]');


  Array.prototype.forEach.call($btnNumeros, function(btn) {
    btn.addEventListener('click', handleClickNumber, false);
  });


  function handleClickNumber() {
    $tela.value += this.value;
  }

  Array.prototype.forEach.call($btnOperations, function(btn) {
    btn.addEventListener('click', handleOperation, false);
  });

  function handleOperation() {
    $tela.value = removeLastItemIfOperator($tela.value);
    $tela.value += this.value;
  }

  function isLastItemAnOperation(number) {
    var operations = ['+', '-', '*', '/'];
    var ultimoItem = number.split('').pop();
    return operations.some(function(operation) {
      return operation === ultimoItem;
    });
  }

  function removeLastItemIfOperator(number) {
    if (isLastItemAnOperation(number))
      return number.slice(0,-1);
    return number;
  }

  $btnResult.addEventListener('click', handleResultClick, false);

  function handleResultClick() {
    $tela.value = removeLastItemIfOperator($tela.value);
    var valoresInput = $tela.value.match(/[\+\-\*\/]?\d+[\+\-\*\/]?/g);
    var result = valoresInput.reduce(function(acumulado, atual) {
    var first = acumulado.slice(0, -1);
    var operador = acumulado.split('').pop();
    var last = removeLastItemIfOperator(atual);
    var lastOp = isLastItemAnOperation(atual) ? atual.split('').pop() : '';

    switch (operador) {
      case '+':
      return ( +(first) + +(last) ) + lastOp;
      case '-':
      return ( +(first) - +(last) ) + lastOp;
      case '*':
      return ( +(first) * +(last) ) + lastOp;
      case '/':
      return ( +(first) / +(last) ) + lastOp;
    }

  });
  $tela.value = result;
}





$btnCE.addEventListener('click', function() {
  $tela.value = '0';
});









})(window, document);
