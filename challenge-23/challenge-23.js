(function (window, document) {
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
  var $display = document.querySelector('[data-js=display]');

  console.log($buttons);

  var $buttons = {
    zero: document.querySelector('[data-js=zeroBtn]'),
    one: document.querySelector('[data-js=oneBtn]'),
    two: document.querySelector('[data-js=twoBtn]'),
    three: document.querySelector('[data-js=threeBtn]'),
    four: document.querySelector('[data-js=fourBtn]'),
    five: document.querySelector('[data-js=fiveBtn]'),
    six: document.querySelector('[data-js=sixBtn]'),
    seven: document.querySelector('[data-js=sevenBtn]'),
    eight: document.querySelector('[data-js=eightBtn]'),
    nine: document.querySelector('[data-js=nineBtn]'),
    plus: document.querySelector('[data-js=plusBtn]'),
    minus: document.querySelector('[data-js=minusBtn]'),
    times: document.querySelector('[data-js=timesBtn]'),
    div: document.querySelector('[data-js=divBtn]'),
    equals: document.querySelector('[data-js=equalsBtn'),
    clear: document.querySelector('[data-js=clearBtn]')
  };

  addButtonsEventListeners();

  function isFirstOperation() {
    return $display.value.length === 1 && $display.value === '0';
  }

  function eraseDisplay() {
    $display.value = '';
  }

  function addButtonsEventListeners() {
    Object.keys($buttons).forEach(function (btn) {
      $buttons[btn].addEventListener('click', function () {
        var signalsInEndRegex = /[+\-x\/]$/;
        if (isFirstOperation())
          eraseDisplay();

        switch (btn) {
          case 'zero':
            $display.value += '0';
            break;
          case 'one':
            $display.value += '1';
            break;
          case 'two':
            $display.value += '2';
            break;
          case 'three':
            $display.value += '3';
            break;
          case 'four':
            $display.value += '4';
            break;
          case 'five':
            $display.value += '5';
            break;
          case 'six':
            $display.value += '6';
            break;
          case 'seven':
            $display.value += '7';
            break;
          case 'eight':
            $display.value += '8';
            break;
          case 'nine':
            $display.value += '9';
            break;

          case 'plus':
            if (signalsInEndRegex.test($display.value))
              $display.value = $display.value.replace(signalsInEndRegex, '')
            $display.value += '+';
            break;

          case 'minus':
            if (signalsInEndRegex.test($display.value))
              $display.value = $display.value.replace(signalsInEndRegex, '')
            $display.value += '-';
            break;

          case 'times':
            if (signalsInEndRegex.test($display.value))
              $display.value = $display.value.replace(signalsInEndRegex, '')
            $display.value += 'x';
            break;

          case 'div':
            if (signalsInEndRegex.test($display.value))
              $display.value = $display.value.replace(signalsInEndRegex, '')
            $display.value += '/';
            break;

          case 'equals':
            $display.value = calculator($display.value.replace(signalsInEndRegex, ''));
            break;

          case 'clear':
            $display.value = '0';
            break;
        }
      }, false);
    });
  }

  function calculator(expression) {
    // var expressionRegex = /[+\-x\/]/;
    var expressionRegex = /\d+[+\-x\/]\d+/;
    var timesDivRegex = /(\d+)([x\/])(\d+)/;
    var plusMinusRegex = /(\d+)([+\-])(\d+)/;

    var operations = {
      '+': function (x, y) {
        return x + y;
      },
      '-': function (x, y) {
        return x - y;
      },
      'x': function (x, y) {
        return x * y;
      },
      '/': function (x, y) {
        return y === 0 ? 'Divisão Por Zero' : x / y;
      }
    };

    while (expressionRegex.test(expression)) {
      if (timesDivRegex.test(expression))
        expression = expression.replace(timesDivRegex, calculate);
      else
        expression = expression.replace(plusMinusRegex, calculate);
    }

    function calculate(full, x, op, y) {
      return operations[op](+x, +y);
    }

    return expression;
  }

})(window, document);
