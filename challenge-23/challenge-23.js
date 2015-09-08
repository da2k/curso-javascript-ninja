(function (win, doc) {
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

  var $numberInput = doc.querySelector('[data-js="number-input"]');
  var $numberButton = doc.querySelectorAll('[data-js="number-button-item"]');
  var $operationButton = doc.querySelectorAll('[data-js="operation-button-item"]');
  var $equalButton = doc.querySelector('[data-js="equal-button"]');
  var $clearButton = doc.querySelector('[data-js="ce-button"]');

  var inputValue;
  var inputSize;

  function sum (x, y) {
    return x + y;
  }

  function subtraction (x, y) {
    return x - y;
  }

  function multiplication (x, y) {
    return x * y;
  }

  function division (x,y) {
    return x / y;
  }

  function justNumbers (array) {
    return array.map( function(element, index) {
      return Number(element);
    });
  }

  function operation (operator, x, y) {
    switch(operator) {

      case '+':
        return sum(x, y);

      case '-':
        return subtraction(x, y);

      case 'x':
        return multiplication(x, y);

      case '÷':
        return division(x, y)

    }
  }

  function clearEverything () {
    event.preventDefault();
    $numberInput.value = '0';
  }

  function printNumber () {
    event.preventDefault();
    $numberInput.value += this.value;

    if ($numberInput.value.charAt(0) === '0') {

      $numberInput.value = $numberInput.value.slice(1);

    }

  }

  function printOperator () {
    event.preventDefault();
    inputValue = $numberInput.value;
    inputSize = inputValue.length;

    if (inputValue.charAt(inputSize - 1) === '+' ||
        inputValue.charAt(inputSize - 1) === '-' ||
        inputValue.charAt(inputSize - 1) === 'x' ||
        inputValue.charAt(inputSize - 1) === '÷') {

      $numberInput.value = inputValue.slice(0, inputSize - 1) + this.value;

    } else {

      $numberInput.value += this.value;

    }
  }

  function printResult () {
    event.preventDefault();
    var inputOperator = $numberInput.value.match(/[+\÷\-x]/g);
    var inputNumber = justNumbers($numberInput.value.match(/\d+/g));

    var result = inputNumber[0];

    if (!inputOperator) {

      alert('Digite um operador.');

    } else if (inputOperator.length < inputNumber.length) {

      for (var i = 0; i < inputOperator.length; i++) {

      result = operation(inputOperator[i], result, inputNumber[i + 1]);

      }

    } else {

      alert('Sentença incorreta.');

    }

    $numberInput.value = result;

  }

  function attachEvent (button, action) {
    button.addEventListener('click', action);
  }

  Array.prototype.forEach.call($numberButton, function (item) {
    attachEvent(item, printNumber);
  });

  Array.prototype.forEach.call($operationButton, function (item) {
    attachEvent(item, printOperator);
  });

  attachEvent($equalButton, printResult);

  attachEvent($clearButton, clearEverything);

})(window, document);
