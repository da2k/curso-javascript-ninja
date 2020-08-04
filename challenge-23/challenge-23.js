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
  
  var $display = document.querySelector('[data-js="display"]');
  var $number = document.querySelectorAll('[data-js="number"]');
  var $operator = document.querySelectorAll('[data-js="operator"]');
  var $equal = document.querySelector('[data-js="equal"]');
  var $CE = document.querySelector('[data-js="ce"]');
  
  $number.forEach(function(num) {
    num.addEventListener('click', clickedNum, false);
  });
  
  $operator.forEach(function(sign) {
    sign.addEventListener('click', clickedSign, false);
  });
  
  $equal.addEventListener('click', clickedEqual, false);
  
  $CE.addEventListener('click', clickedCE, false);
  
  function clickedNum() {
    $display.value += this.innerHTML;
  }
  
  function clickedSign() {
    $display.value = removeSign($display.value);
    
    $display.value += this.innerHTML;
  }
  
  function removeSign(str) {
    if(invalidSingUse(str)) {
      return str.slice(0, -1);
    }
    
    return str;
  }
  
  function invalidSingUse(str) {
    var operators = ['+', '-', '×', '÷'];
    var lastChar = str.split('').pop();
    
    return operators.some(function(char) {
      return char === lastChar;
    });
  }
  
  function clickedEqual() {
    $display.value = removeSign($display.value);
    var displayValue = $display.value.match(/\d+[+÷×-]?/g);
    $display.value = displayValue.reduce(function(accumu, actu) {
      var baseNum = accumu.slice(0, -1);
      var baseOperator = accumu.split('').pop();
      var actualNum = removeSign(actu);
      var actualOperator = invalidSingUse(actu) ? actu.split('').pop() : '';
      
      switch (baseOperator) {
        case '+':
          return Number(baseNum) + Number(actualNum) + actualOperator;
        case '-':
          return Number(baseNum) + Number(actualNum) + actualOperator;
        case '×':
          return Number(baseNum) + Number(actualNum) + actualOperator;
        case '÷':
          return Number(baseNum) + Number(actualNum) + actualOperator;
      }
    });
  }
  
  function clickedCE() {
    $display.value = 0;
  }

})(window, document);