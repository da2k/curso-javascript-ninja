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
(function(win, doc) {
    'use strict';

    var $visor = doc.querySelector('[data-js="visor"]');
    var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
    var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
    var $buttonCE = doc.querySelector('[data-js="button-ce"]');
    var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

    function calculate(accumulated, actual) {
        var firstValue = accumulated.slice(0, -1);
        var operator = accumulated.split('').pop();
        var lastValue = removeLastItemIfItIsAnOperator(actual);
        var lastOperator = getLastOperator(actual);

        return doOperation(operator, firstValue, lastValue) + lastOperator;
    }

    function doOperation(operator, firstValue, lastValue) {
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

    function getLastOperator(value) {
        isLastItemAnOperation(value) ? value.split('').pop() : '';
    }

    function getOperators() {
        return Array.prototype.map.call($buttonsOperations, function(operator) {
            return operator.value;
        });
    }

    function getRegex() {
        return new RegExp('\\d+[' + getOperators().join('') + ']?', 'g');
    }

    function handleClickCE() {
        $visor.value = 0;
    }

    function handleClickEqual() {
        $visor.value = removeLastItemIfItIsAnOperator($visor.value);
        var allValues = $visor.value.match(getRegex());
        $visor.value = allValues.reduce(calculate);
    }

    function handleClickNumber() {
        $visor.value += this.value;
    }

    function handleClickOperation() {
        $visor.value = removeLastItemIfItIsAnOperator($visor.value);
        $visor.value += this.value;
    }

    function isLastItemAnOperation(number) {
        var operations = getOperators();
        var lastItem = number.split('').pop();

        return operations.some(function(operator) {
            return operator === lastItem;
        });
    }

    function removeLastItemIfItIsAnOperator(character) {
        if(isLastItemAnOperation(character))
            return character.slice(0, -1);

        return character;
    }

    function startCalculator() {
        startEvents();
    }

    function startEvents() {
        Array.prototype.forEach.call($buttonsNumbers, function(button) {
            button.addEventListener('click', handleClickNumber, false);
        });
        Array.prototype.forEach.call($buttonsOperations, function(button) {
            button.addEventListener('click', handleClickOperation, false);
        });
        $buttonCE.addEventListener('click', handleClickCE, false);
        $buttonEqual.addEventListener('click', handleClickEqual, false);
    }

    startCalculator();
})(window, document);
