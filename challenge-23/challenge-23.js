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
    var $visor = doc.querySelector('[data-id="visor"]');
    var $buttonsNumber = doc.querySelectorAll('[data-group="buttton-number"]');
    var $buttonsOperation = doc.querySelectorAll('[data-group="buttton-operation"]');

    var $buttonEqual = doc.querySelector('[data-id="buttton-equal"]');
    var $buttonCE = doc.querySelector('[data-id="buttton-ce"]');

    Array.prototype.forEach.call($buttonsNumber, function (button) {
        button.addEventListener('click', function () {
            $visor.value += this.value;
        }, false)
    });

    Array.prototype.forEach.call($buttonsOperation, function (button) {
        button.addEventListener('click', function () {
            if (isOperation(lastChar($visor.value))) {
                $visor.value = $visor.value.slice(0, -1);
            }
            $visor.value += this.value;
        }, false)
    });

    $buttonCE.addEventListener('click', function () {
        $visor.value = '0';
    }, false);

    $buttonEqual.addEventListener('click', calculate, false);

    function calculate() {
        var expression = $visor.value.valueOf();

        expression = expression.replace(/[\+|\-|\÷|x]/g, ',$&,');
        expression = expression.split(',');

        //remove operação não completada do final.
        if (expression[expression.length - 1] == '') {
            expression.pop();
        }
        if (isOperation(expression[expression.length - 1])) {
            expression.pop();

        }
        var binaryOperator, operand;
        var result = expression.shift();
        while (expression.length > 0) {
            var binaryOperator = expression.shift();
            var operand = expression.shift();
            result = binaryOperation(result, binaryOperator, operand)
        }
        $visor.value = result;
        return

        function binaryOperation(operandOne, operator, operandTwo) {
            var result;
            operandOne = Number(operandOne);
            operandTwo = Number(operandTwo);

            switch (operator) {
                case '+':
                    result = operandOne + operandTwo;
                    break;

                case '-':
                    result = operandOne - operandTwo;
                    break;

                case '÷':
                    result = operandOne / operandTwo;
                    break;

                case 'x':
                    result = operandOne * operandTwo;
                    break;
            }
            return result;
        }

    }

    function lastChar(str) {
        return str.charAt(str.length - 1);
    }

    function isOperation(op) {
        return ['+', '-', '÷', 'x'].some(function (operator) {
            return operator === op;
        });
    }


})(window, document);
