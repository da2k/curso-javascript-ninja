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
(function() {
    'use strict';

    var $visor = document.querySelector('[data-js="visor"]');
    var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
    var $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
    var $buttonEqual = document.querySelector('[data-js="button-equal"]');
    var $buttonCe = document.querySelector('[data-js="button-ce"]');

    Array.prototype.forEach.call($buttonsNumbers, function($button) {
        $button.addEventListener('click', handleNumberClick, false);
    });

    Array.prototype.forEach.call($buttonsOperations, function($button) {
        $button.addEventListener('click', handleOperationClick, false);
    });

    $buttonEqual.addEventListener('click', handleEqualClick, false);
    $buttonCe.addEventListener('click', handleCeClick, false);
    
    function handleNumberClick() {
        $visor.value += this.value;
    }

    function handleOperationClick() {
        $visor.value = removeLastCharIfItsAnOperator($visor.value);
        $visor.value += this.value;
    }

    function handleCeClick() {
        $visor.value = 0;
    }

    function handleEqualClick() {
        $visor.value = removeLastCharIfItsAnOperator($visor.value);

        var visorValues = $visor.value.match(/\d+[+x÷-]?/g);

        $visor.value = visorValues.reduce(function(accumulated, actual) {
            var firstValue = accumulated.slice(0, -1);
            var operator = accumulated.split('').pop();
            var lastValue = removeLastCharIfItsAnOperator(actual);
            var lastOperator = isLastCharAnOperation(actual) ? actual.split('').pop() : '';

            switch(operator) {
                case '+':
                  return (+(firstValue) + +(lastValue)) + lastOperator;
                case '-':
                  return (+(firstValue) - +(lastValue)) + lastOperator;
                case 'x':
                  return (+(firstValue) * +(lastValue)) + lastOperator;
                case '÷':
                  return (+(firstValue) / +(lastValue)) + lastOperator;
              }
        });
    }

    function isLastCharAnOperation(number) {
        var operations = ['+', '-', 'x', '÷'];
        var lastChar = number.split('').pop();

        return operations.some(function(operator) {
            return operator === lastChar;
        });
    }

    function removeLastCharIfItsAnOperator(number) {
        if (isLastCharAnOperation(number)) {
            return number.slice(0, -1);
        }

        return number;
    }
})();