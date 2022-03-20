(function(doc) {

    'use strict';

    var $display = doc.querySelector('[data-js="tela"]');
    var $btnNumbers = doc.querySelectorAll('[data-js="btnNumbers"]');
    var $btnOperators = doc.querySelectorAll('[data-js="btnOperator"]');

    var $btnEqual = doc.querySelector('[data-js="btnEQ"]');
    var $btnClear = doc.querySelector('[data-js="btnCE"]');


    function removeLastCharIfItIsAnOperator(){
        var operator = $display.value.slice(-1); 
        if(operator === '+' || operator === '-' || operator === '*' || operator === '/' ) {
            $display.value = $display.value.slice(0, -1); 
        };
    };

    function checkIfDisplayIsEmpty() {
        return ($display.value === '0');
    };
    
    function checkIfItHasDivisionByZero(){
        for(var i = 0; i + 1 < $display.value.length; i++) {
            if($display.value[i] == '/' && $display.value[i + 1] == '0') {
                return true;
            }
        }
        return false;
    };

    function addNumber(){
        if(checkIfDisplayIsEmpty()) 
            $display.value = this.value;        
        else 
            $display.value += this.value;        
    };

    function addOperator() {
        removeLastCharIfItIsAnOperator();
        $display.value += this.value;
    };
    
    $btnNumbers.forEach(function(button) {
        button.addEventListener('click', addNumber, false);
    });

    $btnOperators.forEach(function(button){
        button.addEventListener('click', addOperator, false);
    });

    $btnClear.addEventListener('click', function(){
        $display.value = '0';
    }, false);

    $btnEqual.addEventListener('click', function(){
        if(checkIfItHasDivisionByZero()) {
            alert("Não é possivel realizar uma divisão por zero!\nLimpando os valores...");
            $display.value = '0';
        } else {
            $display.value = eval($display.value);
        }
    }, false);
    
})(document);
