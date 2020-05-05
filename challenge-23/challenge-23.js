(function( doc, win ){

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
    var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
    var $buttonOperations = doc.querySelectorAll('[data-js="button-operation" ]');
    var $buttonCE = doc.querySelector('[data-js="button-ce"]');
    var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

    function initialize() {
        initEvents();
    }

    function initEvents(){
        Array.prototype.forEach.call( $buttonsNumbers, function( button ){
            button.addEventListener('click', handleClickNumber, false)
        });
    
        Array.prototype.forEach.call( $buttonOperations, function(button){
            button.addEventListener('click', handleClickOperation, false);
        });
    
        $buttonCE.addEventListener('click', handleClickCE, false );
        $buttonEqual.addEventListener('click', handleClickEqual, false);
    }
   

    function handleClickNumber(){     
        $visor.value += this.value;   
    }

    function handleClickOperation( ){ 
        $visor.value = removeLastItemIfItIsAnOperator($visor.value);
        $visor.value += this.value;
    }

    function handleClickCE( ){
        $visor.value = 0;
    }

    function isLastItemAnOperation(number){//Essa função verifica se há operações nele, retorna o ultimo
        // item e testa pelo some se há algum dele, se houver retorna true.
        var operations = getOperations();
        var lasItem = number.split('').pop();
        return operations.some( function( oeprator ){
            return oeprator === lasItem;
        })
        
    }

    function getOperations(){
        return Array.prototype.map.call($buttonOperations, function(button) {
            return button.value;
        });
    }

    function removeLastItemIfItIsAnOperator(string){
        if (isLastItemAnOperation(string))
            return string.slice(0,-1);//Remover caso a operação seja repetida
        return string;
    }



    function handleClickEqual(){
        $visor.valeu = removeLastItemIfItIsAnOperator($visor.value);
        var allValues = $visor.value.match(getRegexOperations());
        var result = allValues.reduce(calculateAllValues);

        $visor.value = result;
    }

    function getRegexOperations(){
        return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');
    }

    function calculateAllValues( accumulated, actual ){        
        var firstValue = accumulated.slice(0, -1);
        var operator = accumulated.split('').pop();
        var lastValue = removeLastItemIfItIsAnOperator(actual);
        var lasOperator = getLastOperator(actual);
        return doOperation(operator, firstValue, lastValue)  + lasOperator ;
    }

    function getLastOperator(value) {
        return isLastItemAnOperation(value) ? value.split('').pop() : '' ;
    }

    function doOperation( operator, firstValue, lastValue ){
        switch(operator){
            case '+':
                return  +firstValue + +lastValue;
            case '-':
                return  +firstValue - +lastValue;
            case 'x':
                return  +firstValue * +lastValue;
            case '/':
                return  +firstValue / +lastValue;            
            
        }
    }




initialize();

})( document, window );