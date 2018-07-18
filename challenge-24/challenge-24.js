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

(function(win, doc){
    'use strict';

    var $visor = doc.querySelector('[data-js="visor"]');
    var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
    var $buttonOperation = doc.querySelectorAll('[data-js="buttonOperation"]');
    var $buttonCE = doc.querySelector('[data-js="button-ce"]');
    var $buttonEqual = doc.querySelector('[data-js="button-equal"]');
    
    function initialize(){
        initEvents();
    }

    function initEvents(){
        Array.prototype.forEach.call($buttonsNumbers, function(button){
            button.addEventListener('click', handleClickNumber, false);
        });
        Array.prototype.forEach.call($buttonOperation, function(button){
            button.addEventListener('click', handleClickOperation, false);
        });
        $buttonCE.addEventListener('click', handleClickCe, false);
        $buttonEqual.addEventListener('click',handleClickEqual, false);
    }
   
    function handleClickNumber(){        
        $visor.value += this.value;
    }

    function handleClickOperation(){    
        $visor.value = removeLastItemIfItIsAnOperator($visor.value);
            $visor.value += this.value;
    }
   
    function removeLastItemIfItIsAnOperator(String){
        if(isLastItemAnOperation (String))
        return String.slice(0, -1); 

        return String;
    }

    function isLastItemAnOperation(number){
        var operations = getOperator();
        var lastItem = number.split('').pop();

        return operations.some( function (operator){
            return operator === lastItem;
        });
    }

    function getOperator(){
        return Array.prototype.map.call($buttonOperation, function(button){
            return button.value;
        });
    }

           
    function handleClickCe(){
        $visor.value = 0;       
    }    

   
    function handleClickEqual(){
        $visor.value = removeLastItemIfItIsAnOperator($visor.value);
        var allValues = $visor.value.match(getRegexOperations());  
        $visor.value = allValues.reduce(calculateAllValues);         
    }

    function getRegexOperations(){
        return new RegExp('\\d+['+getOperator().join('') + ']?', 'g');
    }

    function calculateAllValues(accumulated, actual){
            var firstValue = accumulated.slice(0, -1);
            var operator = accumulated.split('').pop();
            var lastValue = removeLastItemIfItIsAnOperator(actual);
            var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
            return comparation(operator, firstValue, lastValue) + lastOperator;           
        };
    
        function comparation(operator, firstValue, lastValue){
            switch (operator){
                case '+':
                return Number(firstValue) + Number(lastValue);
                case'-':
                return Number(firstValue) - Number(lastValue);
                case 'x':
                return Number(firstValue) * Number(lastValue);
                case'÷':
                return Number(firstValue) / Number(lastValue);
            }
        };


    initialize();

})(window, document);
