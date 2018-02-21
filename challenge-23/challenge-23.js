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

  var display = '0';

  function updateDisplay() {
    document.getElementsByName('display')[0].value = display;
  }

  function clearDisplay() {
    display = '0';
    updateDisplay();
  }

  function calculate() {
    var signals = (display.match(/\D+/g));
    display = display.match(/\d+/g).reduce(function (prev, curr, index) {
      switch (signals[index - 1]) {
        case '-':
          return Number(prev) - Number(curr);
        case '*':
          return Number(prev) * Number(curr);
        case '/':
          return Number(prev) / Number(curr);
        default:
          return Number(prev) + Number(curr);
      }
    });
    updateDisplay();
  }

  function setDisplay(value) {

    if (/[\d]/.test(value)) {
      display = display === '0' ? display = value : display += value;
      return updateDisplay();
    }
    if (/[+-/*//]/.test(value)) {
      display = /[+-/*//]$/.test(display) ? display.substr(0, display.length -
        1) + value : display + value;
      return updateDisplay();
    }

  }
