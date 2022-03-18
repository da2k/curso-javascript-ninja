(function(doc) {

    'use strict';

    var $display = doc.querySelector('[data-js="tela"]');
    var $btnNumbers = doc.querySelectorAll('[data-js="btnNumbers"]');

    var $btnPlus = doc.querySelector('[data-js="btnPlus"]');
    var $btnMinus = doc.querySelector('[data-js="btnMinus"]');
    var $btnMult = doc.querySelector('[data-js="btnMult"]');
    var $btnDiv = doc.querySelector('[data-js="btnDiv"]');

    var $btnEqual = doc.querySelector('[data-js="btnEqual"]');
    var $btnClear = doc.querySelector('[data-js="btnClear"]');

    function addNumber(){
        if($display.value === '0') 
             $display.value = this.value;        
        else
            $display.value += this.value;        
    };
    
    $btnNumbers.forEach(function(button) {
        button.addEventListener('click', addNumber, false);
    });

    $btnPlus.addEventListener('click', function(){
        $display.value += '+';
    }, false);

    $btnMinus.addEventListener('click', function(){
        $display.value += '-';
    }, false);

    $btnMult.addEventListener('click', function(){
        $display.value += '*';
    }, false);

    $btnDiv.addEventListener('click', function(){
        $display.value += '/';
    }, false);

    $btnClear.addEventListener('click', function(){
        $display.value = '0';
    }, false);

    $btnEqual.addEventListener('click', function(){
        $display.value = eval($display.value);
    }, false);

})(document);
