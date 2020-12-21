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

let $visor = document.querySelector('[data-js="visor"]');
let $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
let $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
let $buttonCE = document.querySelector('[data-js="button-ce"]');
let $buttonEqual = document.querySelector('[data-js="button-equal"]');


function initialize() {
	initEvents();
}

function initEvents() {
	 Array.prototype.forEach.call($buttonsNumbers, function(button) {
      button.addEventListener('click', handleClickNumber, handleClickClearNumberVisor, false);
    });
    Array.prototype.forEach.call($buttonsOperations, function(button) {
      button.addEventListener('click', handleClickOperation, false);
    });
    $buttonCE.addEventListener('click', handleClickCE, false);
    $buttonEqual.addEventListener('click', handleClickEqual, false);
}


function handleClickNumber() {
	if($visor.value === '0'){
		return $visor.value = this.value;
	}
	return $visor.value += this.value		
}

function handleClickOperation() {
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  $visor.value += this.value;
}

function handleClickCE() {
  $visor.value = 0;
}

function isLastItemAnOperation(number) {
  let operations = getOperations();
  let lastItem = number.split('').pop();
  return operations.some(function(operator) {
    return operator === lastItem;
  });
}

function getOperations() {
	return Array.prototype.map.call($buttonsOperations, function(button){
		return button.value;
	});
}

function removeLastItemIfItIsAnOperator(string) {
  if(isLastItemAnOperation(string)) {
    return string.slice(0, -1);
  }
  return string;
}

function handleClickEqual(){
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  let allValues = $visor.value.match(getRegexOperation());
  $visor.value = allValues.reduce(calculateAllValues); 
 
  console.log($visor.value);
}


function  handleClickClearNumberVisor() {
	console.log('teste');
}



 function getRegexOperation(){
	 return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');
 }

function calculateAllValues(accumulated, actual) {
		let firstValue = accumulated.slice(0, -1);
		let operator = accumulated.split('').pop();
		let lastValue = removeLastItemIfItIsAnOperator(actual);
		let lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';

		console.log(firstValue + ' first');
		console.log(operator + ' operator');
		console.log(lastValue + ' last');
		console.log(lastOperator + ' last operator');

		return doOperation(operator, firstValue, lastValue) + lastOperator;	
		
}

function doOperation(operator, firstValue, lastValue) {
	switch(operator) {
		case '+':
		  return  Number(firstValue) + Number(lastValue);
		case '-':
		  return  Number(firstValue) - Number(lastValue);
		case 'x':
		  return  Number(firstValue) * Number(lastValue);
		case '/':
		  return  Number(firstValue) / Number(lastValue);
	 }
}

initialize();
