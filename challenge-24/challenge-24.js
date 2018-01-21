(function(window, doc){
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
    var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
    var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
    var $buttonCE = doc.querySelector('[data-js="button-ce"]');
    var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

    function initialize(){
        initEvents();
    }

    function initEvents(){
        addClickListenerElements($buttonsNumbers, handleClickNumber);
        addClickListenerElements($buttonsOperations, handleClickOperation);
        addClickListener($buttonCE, handleClickCE);
        addClickListener($buttonEqual, handleClickEqual);
    
        function addClickListenerElements(elements, func){
            Array.prototype.forEach.call(elements, function(button) {
                addClickListener(button, func);
            });
        }
        function addClickListener(element, func){
            element.addEventListener('click', func, false);
        }
    }
    
    function handleClickNumber() {
        $visor.value += this.value;
    }

    function handleClickOperation() {
        $visor.value = removeLastItemIfItIsAnOperator($visor.value);
        $visor.value += this.value;
    }

    function handleClickCE() {
        $visor.value = 0;
    }

    function isLastItemAnOperation(number) {
        var operations = getOperations();
        var lastItem = number.split('').pop();
        return operations.some(function(operator) {
            return operator === lastItem;
        });
    }

    function getOperations(){
        return Array.prototype.map.call($buttonsOperations, function(button){
            return button.value;
        });
    }

    function removeLastItemIfItIsAnOperator(string) {
        return isLastItemAnOperation(string) ?
            string.slice(0, -1) :
            string;
    }

    function handleClickEqual() {
        $visor.value = removeLastItemIfItIsAnOperator($visor.value);
        var allValues = $visor.value.match(getRegExOperations());
        $visor.value = allValues.reduce(calculateAllValues);
    }

    function getRegExOperations(){
        return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');
    }

    function calculateAllValues(accumulated, actual) {
        var firstValue = accumulated.slice(0, -1);
        var operator = accumulated.split('').pop();
        var lastValue = removeLastItemIfItIsAnOperator(actual);
        var lastOperator = getLastOperator(actual);
        return doOperation(operator, firstValue, lastValue) + lastOperator; 
    }

    function getLastOperator(value){
        return isLastItemAnOperation(value) ? value.split('').pop() : ''
    }

    function doOperation(operator, firstValue, lastValue){
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

    initialize();
})(window, document);
