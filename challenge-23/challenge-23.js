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
(function (win, doc){
  'use strict';
  var $display = doc.querySelector('[data-js="display"]');
  var $btnNumbers = doc.querySelectorAll('[data-js="btn-number"]');
  var $btnOperations = doc.querySelectorAll('[data-js="btn-operation"]');
  var $btnCE = doc.querySelector('[data-js="btn-ce"]');
  var $btnresult = doc.querySelector('[data-js="btn-result"]');

  Array.prototype.forEach.call($btnNumbers,  function (btn) {
    btn.addEventListener('click', btnNumbersClick, false);
  });
  Array.prototype.forEach.call($btnOperations, function (btn){
    btn.addEventListener('click', btnOperationsClick, false);
  });

  $btnCE.addEventListener('click', btnCEclick, false);
  $btnresult.addEventListener('click', btnResultClick, false);

  function btnNumbersClick () {
    if ($display.value === '0')
      $display.value = '';
    $display.value += this.value;
   }

  function btnOperationsClick () {
    if ($display.value === '0')
      return;
    removeLastItemIfItsOperatior();
    $display.value += this.value;
   }

  function btnCEclick () {
    $display.value = 0;
   }

  function isLastItemAnOperations () {
    var operations = ['+', '-', 'x','÷'];
    var lastItem = $display.value.split('').pop();
    return operations.some( function (operator) {
      return operator === lastItem;
    });
  }

  function removeLastItemIfItsOperatior () {
    if (isLastItemAnOperations())
      $display.value = $display.value.slice(0, -1);
  }

  function btnResultClick () {
    removeLastItemIfItsOperatior();
    var allValues = $display.value.match(/(?:\d+)|[+x÷-]/g);
    var operator = allValues.filter(function (value,index){
      return index % 2;
    });
    console.log(operator[0])
    var number = allValues.filter(function (value, index) {
      return index % 2 == 0;
    });

    var result;
      for (var i = 0; i < operator.length; i++) {
         result = number.reduce(function (acumulado, atual) {
            if (operator[i] == "+")
                return Number(acumulado) + Number(atual);
            if (operator[i] == '-')
                return Number(acumulado) - Number(atual);
            if (operator[i] == 'x')
                return Number(acumulado) * Number(atual);
            if (operator[i] == '÷')
                return Number(acumulado) / Number(atual)
        });
   }
    console.log(result);

  }

})(window, document);
