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

  var $numberInput = doc.querySelector('#number-input');
  var $numberBtn = doc.querySelectorAll('.number-btn-item');
  var $operationBtn = doc.querySelectorAll('.operation-btn-item');
  var $equalBtn = doc.querySelector('.equal-btn');
  var $clearBtn = doc.querySelector('.ce-btn');

  var inputValue;
  var inputSize;

  function justNumbers (arr) {
    return arr.map( function(element, index) {
      return Number(element);
    });
  }

  function numberButton (btn) {
    btn.addEventListener('click', function (event) {
      $numberInput.value += btn.value;
    });
  }

  function operationButton (btn) {
    btn.addEventListener('click', function (event) {
      inputValue = $numberInput.value;
      inputSize = inputValue.length;
      console.log($numberInput.value.charAt(inputSize - 1));

      if (inputValue.charAt(inputSize - 1) === '+' ||
          inputValue.charAt(inputSize - 1) === '-' ||
          inputValue.charAt(inputSize - 1) === 'x' ||
          inputValue.charAt(inputSize - 1) === '÷') {

        $numberInput.value = inputValue.slice(0, inputSize - 1) + btn.value;

      } else {

        $numberInput.value += btn.value;

      }
    });
  }

  Array.prototype.forEach.call($numberBtn, function (item) {
    numberButton(item);
  });

  Array.prototype.forEach.call($operationBtn, function (item) {
    operationButton(item);
  });

  $equalBtn.addEventListener('click', function (event) {
    var op = $numberInput.value.match(/[+\÷\-x]/g);
    var num = justNumbers($numberInput.value.match(/\d+/g));

    var result = num[0];

    if (op === null) {

      event.preventDefault();
      alert('Digite um operador.');

    } else if (op.length < num.length) {

      for (var i = 0; i <= op.length; i++) {

        switch ( op[i] ) {
          case '+':
            result += num[i + 1];
            break;
          case '-':
            result -= num[i + 1];
            break;
          case 'x':
            result *= num[i + 1];
            break;
          case '÷':
            result /= num[i + 1];
            break;
          default:
            console.log('error');
        }
      }

    } else {

      event.preventDefault();
      alert('Sentença incorreta.');

    }

    $numberInput.value = result;

  });

  $clearBtn.addEventListener('click', function (event) {
    $numberInput.value = '';
  });

})(window, document);
