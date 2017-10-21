(function(win, doc) {
    'use strict';
    /*
    Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
    o código, conforme vimos na aula anterior. Quebrar as responsabilidades
    em funções, onde cada função faça somente uma única coisa, e faça bem feito.

    - Remova as duplicações de código;
    - agrupe os códigos que estão soltos em funções (declarações de variáveis,
    listeners de eventos, etc);
    - faça refactories para melhorar esse código, mas de forma que o mantenha com a
    mesma funcionalidade.
    */

    var $visor = doc.querySelector('[data-js="visor"]');
    var $numberButtons = doc.querySelectorAll('[data-js="button-number"]');
    var $operationButtons = doc.querySelectorAll('[data-js="button-operation"]');
    var $equalButton = doc.querySelector('[data-js="button-equal"]');
    var $ceButton = doc.querySelector('[data-js="button-ce"]');

    function initialize() {
        initEvents();
    }

    function initEvents() {
        $numberButtons.forEach(function(button) {
            button.addEventListener('click', handleClickNumbers, false);
        });
        $operationButtons.forEach(function(button) {
            button.addEventListener('click', handleClickOperations, false);
        });
        $equalButton.addEventListener('click', handleClickEqual, false);
        $ceButton.addEventListener('click', handleClickCe, false);
    }

    function handleClickNumbers() {
        if($visor.value === '0')
            return $visor.value = this.value;
        return $visor.value += this.value;
    }

    function handleClickOperations() {
        $visor.value = removeLastItemIfItIsAnOperation($visor.value);
        $visor.value += this.value;
    }

    function handleClickEqual() {
        $visor.value = removeLastItemIfItIsAnOperation($visor.value);
        var allValues = $visor.value.match(getRegexOperations());
        $visor.value = allValues.reduce(calculateAllValues);
    }

    function getRegexOperations() {
        return new RegExp('\\d+[' + getAllOperators().join('') + ']?', 'g');
    }

    function getAllOperators() {
        return Array.prototype.map.call($operationButtons, function(button) {
            return button.value;
        });
    }

    function calculateAllValues(accumulated, actual) {
        var firstValue = removeLastItemIfItIsAnOperation(accumulated);
        var operator = accumulated.split('').pop();
        var lastValue = removeLastItemIfItIsAnOperation(actual);
        var lastOperator = getLastOperator(actual);
        return makeOperation(operator, firstValue, lastValue) + lastOperator;
    }

    function getLastOperator(string) {
        return isLastItemAnOperation(string) ? string.split('').pop() : '';
    }

    function makeOperation(operator, firstValue, lastValue) {
        switch(operator) {
            case '+':
                return Number(firstValue) + Number(lastValue);
            case '-':
                return Number(firstValue) - Number(lastValue);
            case 'x':
                return Number(firstValue) * Number(lastValue);
            case '÷':
                return Number(firstValue) / Number(lastValue);
        }
    }

    function isLastItemAnOperation(string) {
        var operators = getAllOperators();
        var lastItem = string.split('').pop();
        return operators.some(function(operator) {
            return operator === lastItem;
        });
    }

    function removeLastItemIfItIsAnOperation(string) {
        if(isLastItemAnOperation(string))
            return string.slice(0, -1);
        return string;
    }

    function handleClickCe() {
        $visor.value = 0;
    }

    initialize();

})(window, document);
