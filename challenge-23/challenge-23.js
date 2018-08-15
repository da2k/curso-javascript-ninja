(function(win, doc) {
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

  var input = doc.querySelector('[ data-js="screen" ]');

  var buttons = doc.querySelectorAll('[ type="button" ]');

  var operation = [];

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      execButton(button.id);
    });
  });

  function addOperation(value) {
    if (operation.length < 1) {
      operation.push(+value);
    } else {
      if (isOperation(value)) {
        if (isOperation(lastOperation())) {
          operation[operation.length - 1] = value;
        } else {
          operation.push(value);
        }
      } else {
        if (isOperation(lastOperation())) {
          operation.push(+value);
        } else {
          var newValue = operation[operation.length - 1] + value;
          operation[operation.length - 1] = +newValue;
        }
      }
    }
    updateInput();
  }

  function lastOperation() {
    return operation[operation.length - 1];
  }

  function updateInput() {
    input.value = operation.join(' ');
  }

  function isOperation(value) {
    return ['+', '-', '*', '/'].lastIndexOf(value) > -1;
  }

  function cancelEntry() {
    operation = [];
    updateInput();
  }

  function calc() {
    var result = eval(operation.join(' '));
    operation.push('= ' + result);
    updateInput();
  }

  function execButton(value) {
    switch (value) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        return addOperation(value);
        break;
      case 'soma':
        return addOperation('+');
        break;
      case 'subtracao':
        return addOperation('-');
        break;
      case 'multiplicacao':
        return addOperation('*');
        break;
      case 'divisao':
        return addOperation('/');
        break;
      case 'CE':
        return cancelEntry();
        break;
      case 'igual':
        return calc();
        break;
      default:
        return false;
    }
  }
})(window, document);
