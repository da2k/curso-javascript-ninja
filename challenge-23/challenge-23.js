(function(win, doc) {
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
  'use strict';

  $inputCalc = doc.querySelector('[data-js="inputCalc"]');
  $numbers = doc.querySelectorAll('[data-js="number"]');
  $operations = doc.querySelectorAll('[data-js="op"]');
  $result = doc.querySelector('[data-js="result"]');
  $clear = doc.querySelector('[data-js="ce"]');

  $numbers.forEach(function(number) {
    number.addEventListener('click', function(event) {
      if(!this.innerHTML.match(/^\d+$/g))
        return;

      $inputCalc.value += this.innerHTML;
    }, false);
  });

  $operations.forEach(function(operation) {
    operation.addEventListener('click', function(event) {
      var operator = this.innerHTML;

      if(!operator.match(/^[+|\-|*|÷]$/g))
        return;

      if($inputCalc.value.charAt($inputCalc.value.length - 1).match(/[+|\-|*|÷]/))
        $inputCalc.value = $inputCalc.value.slice(0, -1);
      $inputCalc.value += operator;
    }, false);
  });

  $result.addEventListener('click', function(event) {
    var calc = $inputCalc.value.replace(/÷/g, '/');
    var values = calc.match(/\d+[+|\-|*|\/]?/g);
    var result = values.reduce(function(total, current) {
      var first = total.slice(0, -1);
      var operation = total.charAt(total.length - 1);
      var last = current;
      var lastOperation = current.charAt(current.length - 1).match(/[+|\-|*|\/]/) ? current.charAt(current.length - 1) : '';

      if(last.charAt(last.length - 1).match(/[+|\-|*|\/]/)) {
        last = last.slice(0, -1);
      }

      switch(operation) {
        case '+':
          return ((+first) + (+last)) + lastOperation;
        case '-':
          return ((+first) - (+last)) + lastOperation;
        case '/':
          return ((+first) / (+last)) + lastOperation;
        case '*':
          return ((+first) * (+last)) + lastOperation;
      }
    });

    $inputCalc.value = result;
  }, false);

  $clear.addEventListener('click', function(event) {
    $inputCalc.value = 0;
  }, false);
})(window, document);
