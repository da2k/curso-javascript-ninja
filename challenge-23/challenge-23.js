(function (win, doc) {
  'use strict'
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

  var $btnNumberGroup = doc.querySelector('[data-btngroup="btnNumberGroup"]');
  var $inputData = doc.querySelector('[data-js="input"]');
  var $operationGroup = doc.querySelector('[data-operations="operations"]');
  var $buttonResult = doc.querySelector('[data-result="result"]');
  var $buttonClean = doc.querySelector('[data-clean="clean"]');
  var operation = 0;

  $btnNumberGroup.addEventListener('click', function (event) {
    operation = 0;
    var target = event.srcElement.value;
    $inputData.value += target;

  }, false);

  $operationGroup.addEventListener('click', function (event) {
    var arr = [];
    operation += 1;
    if (operation >= 2) {
      $inputData.value = $inputData.value.slice(0, -1);
    }
    var target = event.srcElement.value;
    $inputData.value = $inputData.value + target;
  }, false);

  $buttonResult.addEventListener('click', function (event) {
    var allValues = $inputData.value.match(/\d+|[+-/*]/g);
    $inputData.value = calculate(allValues);
  }, false);

  $buttonClean.addEventListener('click', function () {
    $inputData.value = 0;
  }, false)

  function calculate(arrayValues) {
    var temp, result;
    var length = $inputData.value.match(/\d+/g).length;

    for (var i = 0; i < length; i++) {
      temp = arrayValues.shift();

      if (isOperator(temp)) {
        switch (temp) {
          case '+':

            result += Number(arrayValues.shift());
            break;
          case '-':
            result -= Number(arrayValues.shift());
            break;
          case '*':
            result *= Number(arrayValues.shift());
            break;
          case '/':
            result /= Number(arrayValues.shift());
            break;
        }
      } else
        result = Number(temp);
    }
    return result;
  }
  function isOperator(operator) {
    return operator.match(/[/+-/*]/) ? true : false

  }




})(window, document)
