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

    var $visor = doc.querySelector('[data-js="visor"]');
    var $numberButtons = doc.querySelectorAll('[data-js="number-button"]');
    var $operButtons = doc.querySelectorAll('[data-js="oper-button"]');
    var $ceButton = doc.querySelector('[data-js="ce-button"]');
    var $equalsButton = doc.querySelector('[data-js="equals-button"]');

    Array.prototype.forEach.call($numberButtons, function (button) {
        button.addEventListener('click', numberClickHandler, false);
    })

    Array.prototype.forEach.call($operButtons, function (button) {
        button.addEventListener('click', operButtonHandler, false);
    })

    $ceButton.addEventListener('click', ceClickHandler, false);
    $equalsButton.addEventListener('click', equalsClickHandler, false);

    function numberClickHandler(event) {
        $visor.value += this.value;
    }

    function operButtonHandler(event) {
        $visor.value = removeIfLastItemIsAnOperator($visor.value);
        $visor.value += this.value;
    }

    function ceClickHandler(event) {
        $visor.value = 0;
    }

    function equalsClickHandler(event) {
        removeIfLastItemIsAnOperator($visor.value);
        var allValues = $visor.value.match(/\d+[+*/-]?/g);
        $visor.value = allValues.reduce(function (acumulated, actual) {
            var firstValue = acumulated.slice(0, -1);
            var operator = acumulated.split('').pop();
            var lastValue = removeIfLastItemIsAnOperator(actual);
            var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';

            switch (operator) {
                case '+':
                    return Number(firstValue) + Number(lastValue) + lastOperator;
                case '-':
                    return Number(firstValue) - Number(lastValue) + lastOperator;
                case '*':
                    return Number(firstValue) * Number(lastValue) + lastOperator;
                case '/':
                    return Number(firstValue) / Number(lastValue) + lastOperator;
            }

        })
    }

    function isLastItemAnOperation(number) {
        var operations = ['+', '-', '*', '/'];
        var lastItem = number.split('').pop();
        return operations.some(function (oper) {
            return lastItem === oper;
        })
    }

    function removeIfLastItemIsAnOperator(number) {
        if (isLastItemAnOperation(number)) {
            return number.slice(0, -1);
        }
        return number;
    }

})(window, document);