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
(function (win, doc) {
  'use strict';

  var inputDisplay = doc.querySelector('[data-js=inputDisplay]');
  var button0 = doc.querySelector('[data-js=button0]');
  var button1 = doc.querySelector('[data-js=button1]');
  var button2 = doc.querySelector('[data-js=button2]');
  var button3 = doc.querySelector('[data-js=button3]');
  var button4 = doc.querySelector('[data-js=button4]');
  var button5 = doc.querySelector('[data-js=button5]');
  var button6 = doc.querySelector('[data-js=button6]');
  var button7 = doc.querySelector('[data-js=button7]');
  var button8 = doc.querySelector('[data-js=button8]');
  var button9 = doc.querySelector('[data-js=button9]');
  var buttonAdd = doc.querySelector('[data-js=buttonAdd]');
  var buttonSub = doc.querySelector('[data-js=buttonSub]');
  var buttonMult = doc.querySelector('[data-js=buttonMult]');
  var buttonDiv = doc.querySelector('[data-js=buttonDiv]');
  var buttonEqual = doc.querySelector('[data-js=buttonEqual]');
  var buttonReset = doc.querySelector('[data-js=buttonReset]');

  button0.addEventListener('click', displayNumber);
  button1.addEventListener('click', displayNumber);
  button2.addEventListener('click', displayNumber);
  button3.addEventListener('click', displayNumber);
  button4.addEventListener('click', displayNumber);
  button5.addEventListener('click', displayNumber);
  button6.addEventListener('click', displayNumber);
  button7.addEventListener('click', displayNumber);
  button8.addEventListener('click', displayNumber);
  button9.addEventListener('click', displayNumber);
  buttonAdd.addEventListener('click', displaySignal);
  buttonSub.addEventListener('click', displaySignal);
  buttonMult.addEventListener('click', displaySignal);
  buttonDiv.addEventListener('click', displaySignal);
  buttonEqual.addEventListener('click', calc);
  buttonReset.addEventListener('click', reset);

  function displayNumber() {
    if (inputDisplay.value === '0') {
      inputDisplay.value = '';
    }
    inputDisplay.value += this.value;
  }

  function displaySignal() {
    inputDisplay.value = inputDisplay.value.replace(/[+\-x÷]$/, '');
    inputDisplay.value += this.value;
  }

  function calc() {
    inputDisplay.value = inputDisplay.value.replace(/[+\-x÷]$/, '');
    var expression = inputDisplay.value;

    while (expression.match(/\d+[x÷]\d+/) !== null) {
      var expressionPart = expression.match(/\d+[x÷]\d+/)[0];
      expression = expression.replace(expressionPart, simpleCalc(expressionPart));
    }

    while (expression.match(/\d+[+\-]\d+/) !== null) {
      var expressionPart = expression.match(/\d+[+\-]\d+/)[0];
      expression = expression.replace(expressionPart, simpleCalc(expressionPart));
    }

    inputDisplay.value = expression;

    function simpleCalc(expression) {
      var numbers = expression.split(/[+\-x÷]/);
      var num1 = +numbers[0];
      var num2 = +numbers[1];
      var operation = expression.match(/[+\-x÷]/)[0];
      switch (operation) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case 'x':
          return num1 * num2;
        case '÷':
          return num1 / num2;
      }
    }
  }

  function reset() {
    inputDisplay.value = '0';
  }

})(window, document);
