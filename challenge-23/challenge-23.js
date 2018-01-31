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

  var $calculatorScreen = doc.querySelector('[data-js=calculatorScreen]')
  var $btn9 = doc.querySelector('[data-js=btn9]');
  var $btn8 = doc.querySelector('[data-js=btn8]');
  var $btn7 = doc.querySelector('[data-js=btn7]');
  var $btn6 = doc.querySelector('[data-js=btn6]');
  var $btn5 = doc.querySelector('[data-js=btn5]');
  var $btn4 = doc.querySelector('[data-js=btn4]');
  var $btn3 = doc.querySelector('[data-js=btn3]');
  var $btn2 = doc.querySelector('[data-js=btn2]');
  var $btn1 = doc.querySelector('[data-js=btn1]');
  var $btn0 = doc.querySelector('[data-js=btn0]');
  var $btnSum = doc.querySelector('[data-js=btnSum]');
  var $btnSubtraction = doc.querySelector('[data-js=btnSubtraction]');
  var $btnMultiply = doc.querySelector('[data-js=btnMultiply]');
  var $btnDivide = doc.querySelector('[data-js=btnDivide]');
  var $btnEqual = doc.querySelector('[data-js=btnEqual]');
  var $btnCe = doc.querySelector('[data-js=btnCe]');

  var operators = {
    sum: '+',
    subtraction: '-',
    multiply: '*',
    divide: '/'
  };

  var isPressedEqual = false;

  $btn9.addEventListener('click', concatNumbers, false);
  $btn8.addEventListener('click', concatNumbers, false);
  $btn7.addEventListener('click', concatNumbers, false);
  $btn6.addEventListener('click', concatNumbers, false);
  $btn5.addEventListener('click', concatNumbers, false);
  $btn4.addEventListener('click', concatNumbers, false);
  $btn3.addEventListener('click', concatNumbers, false);
  $btn2.addEventListener('click', concatNumbers, false);
  $btn1.addEventListener('click', concatNumbers, false);
  $btn0.addEventListener('click', concatNumbers, false);
  $btnSum.addEventListener('click', concatOperators, false);
  $btnSubtraction.addEventListener('click', concatOperators, false);
  $btnMultiply.addEventListener('click', concatOperators, false);
  $btnDivide.addEventListener('click', concatOperators, false);
  $btnCe.addEventListener('click', cancelEntry, false);
  $btnEqual.addEventListener('click', calculateEqual, false);

  function concatNumbers() {
    if ($calculatorScreen.value === '0' || isPressedEqual) {
      isPressedEqual = false;
      return $calculatorScreen.value = this.value;
    }
    return $calculatorScreen.value = $calculatorScreen.value + this.value;
  }

  function concatOperators() {
    var operator = operators[this.value];

    if ($calculatorScreen.value == '0') {
      if(operator === '-') {
        return $calculatorScreen.value = operator;
      } else {
        return $calculatorScreen.value = '0';
      }
    }

    if (isTheLastCharactererAnOperator())
      return $calculatorScreen.value = changeLastOperator(operator);
    if (isPressedEqual) {
      isPressedEqual = false;
      return $calculatorScreen.value = $calculatorScreen.value + operator;
    }
      return $calculatorScreen.value = $calculatorScreen.value + operator;
  }

  function isTheLastCharactererAnOperator() {
    return /[+-\/\\*]$/.test($calculatorScreen.value);
  }

  function changeLastOperator(newOperator) {
    var regex = /[+-\/\\*]$/;
    return $calculatorScreen.value.replace(regex, newOperator);
  }

  function cancelEntry() {
    $calculatorScreen.value = 0;
  }

  function calculateEqual() {
    isPressedEqual = true;
    var expression = (isTheLastCharactererAnOperator())?$calculatorScreen.value.slice(0, -1):$calculatorScreen.value;
    $calculatorScreen.value = calculate(expression);
  }



  function calculate(expression) {

    if (hasMultiply(expression)) {
      var expressionMultiply = expression.match(/[-+]?\d+[*][-+]?\d+/).toString();
      var numbers = expressionMultiply.match(/[-+]?\d+/g);
      var multiply = numbers.reduce(function (accumulate, next) {
        return accumulate * next;
      });
      expression = expression.replace( expressionMultiply, '').concat('+' + multiply);
      expression = expression.replace('++','+');

      return calculate(expression);
    }

    if (hasDivide(expression)) {
      var expressionDivide = expression.match(/[+-]?\d+[\/][+-]?\d+/).toString();
      var numbers = expressionDivide.match(/[+-]?\d+/g);
      var divide = numbers.reduce(function (accumulate, next) {
        return Number(accumulate) / Number(next);
      });
      expression = expression.replace( expressionDivide, '').concat('+' + divide);
      expression = expression.replace('++','+');

      return calculate(expression);
    }

    var regexSum = /[-+]?\d+/g;
    var numbers = expression.match(regexSum);
    var sumAndSubtract = numbers.reduce(function (accumulate, next) {
      return Number(accumulate) + Number(next);
    });
    expression = sumAndSubtract;

    return Number(expression);
  }

  var hasMultiply = function (exp) {
    return /\d+[*][+-]?\d+/.test(exp);
  };

  var hasDivide = function (exp) {
    return /\d+[\/][+-]?\d+/.test(exp);
  };

}(window, document));
