( function( wind , doc ){  

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

     initEvents()
}

function initEvents(){

 Array.prototype.forEach.call($buttonsNumbers, function( button ) {
  button.addEventListener('click', handleClickNumber, false);
} );
 Array.prototype.forEach.call($buttonsOperations,function( button ) {
  button.addEventListener('click', handleClickOperation, false);
} );
 $buttonCE.addEventListener('click', handleClickCE, false);
 $buttonEqual.addEventListener('click', handleClickEqual, false);

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

function isLastItemAnOperation( string ) {
  var operations = new RegExp('['+ stringsOperations() +']$','g');
  return operations.test( string );
}

function stringsOperations(  ){
  return Array.prototype.map.call( $buttonsOperations , function( button ){
         return '\\'+button.value;
  }  ).join('');
}

function removeLastItemIfItIsAnOperator( string ) {
  if(isLastItemAnOperation(string)) {
    return string.slice(0, -1);
  }
  return string;
}

function handleClickEqual() {
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  var allValues = $visor.value.match( new RegExp('\\d+['+ stringsOperations() +']?', 'g') );
  $visor.value = allValues.reduce( CalculateAllValue );
}

 function CalculateAllValue( accumulated , actual) {
  var firstValue = removeLastItemIfItIsAnOperator( accumulated );
  var operator  =  lastItem( accumulated );
  var lastValue = removeLastItemIfItIsAnOperator( actual );
  return doOperations(firstValue ,operator, lastValue) + lastOperator( actual );
} 

function lastItem( value ){
    return value.split('').pop(); 
}

function lastOperator( value  ){
    if ( isLastItemAnOperation( value ) ) 
        return lastItem( value ) 
    return '';          
}

function doOperations(  firstValue , operator ,lastValue ){
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

} )( window , document )