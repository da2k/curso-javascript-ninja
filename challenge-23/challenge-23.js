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

(function(win, doc) {
    'use strict';

    var textInput = doc.querySelector('[data-js="text-input"]');
    var buttonsNumber = doc.querySelectorAll('[data-js="button-number"');
    var buttonsOperation = doc.querySelectorAll('[data-js="button-operation"]');
    var buttonCE = doc.querySelector('[data-js="button-ce"]');
    var buttonEqual = doc.querySelector('[data-js="button-equal"]');

    function isLastItemAnOperator(number) {
        var operators = ['+', '-', 'x', '÷'];
        var lastItem = number.split('').pop();

        return operators.some(function(operator) {
            return operator === lastItem;
        });
    }

    function removeLastItemIfIsAnOperator(number) {
        if (isLastItemAnOperator(number))
            return number.slice(0, -1);

        return number;
    }

    function clickNumber(inputData) {
        textInput.value += this.value;
    }

    function clickOperation(inputData) {
        textInput.value = removeLastItemIfIsAnOperator(textInput.value);
        textInput.value += this.value;
    }

    function clickCE(inputData) {
        textInput.value = 0;
    }

    function clickEqual() {
        removeLastItemIfIsAnOperator(textInput.value);
        var allValues = textInput.value.match(/\d+[+-x÷]?/g);
        textInput.value = allValues.reduce(function(total, current) {
            var firstValue = total.slice(0, -1);
            var operator = total.split('').pop();
            var lastValue = removeLastItemIfIsAnOperator(current);
            var lastOperator = isLastItemAnOperator(current) ? current.split('').pop() : '';

            switch (operator) {
                case '+':
                    return (Number(firstValue) + Number(lastValue)) + lastOperator;
                case '-':
                    return (Number(firstValue) - Number(lastValue)) + lastOperator;
                case 'x':
                    return (Number(firstValue) * Number(lastValue)) + lastOperator;
                case '÷':
                    return (Number(firstValue) / Number(lastValue)) + lastOperator;
            }
        });
    }

    Array.prototype.forEach.call(buttonsNumber, function(button) {
        button.addEventListener('click', clickNumber, false);
    });

    Array.prototype.forEach.call(buttonsOperation, function(button) {
        button.addEventListener('click', clickOperation, false);
    });

    buttonCE.addEventListener('click', clickCE, false);
    buttonEqual.addEventListener('click', clickEqual, false);

})(window, document);
