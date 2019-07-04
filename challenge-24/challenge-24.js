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

(function (win, doc){
	'use strict';

	var $visor = doc.querySelector('[data-js="visor"]');
	var $buttonNumber = doc.querySelectorAll('[data-js="buttonNumber"]');
	var $buttonCE = doc.querySelector('[data-js="buttonCE"]');
	var $buttonOperator = doc.querySelectorAll('[data-js="operator"]');
	var $calculate = doc.querySelector('[data-js="calculate"]');

	function initialize(){
		initEvents();
	}

	function initEvents(){
		Array.prototype.forEach.call($buttonNumber, function(button){
		button.addEventListener('click', handleClickNumber, false);
		});
		Array.prototype.forEach.call($buttonOperator, function(button){
			button.addEventListener('click', handleClickOperator, false);
		});
		$buttonCE.addEventListener('click', handleClickCE, false);
		$calculate.addEventListener('click', handleClickCalculate, false);
	}

	function handleClickNumber() {
		$visor.value += this.value;
	}

	function handleClickCE() {
		$visor.value = 0;
	}

	function handleClickOperator() {
		$visor.value = removeLastItemIfItIssAnOperator($visor.value);
		$visor.value += this.value;
	}

	function removeLastItemIfItIssAnOperator(string) {
	if(isLastItemAnOperation(string)) {
			return string.slice(0, -1);
		}
		return string;
	}
	
	function isLastItemAnOperation(number) {
		var operator = getOperation();
		var lastItem = number.split('').pop();
		return operator.some(function(operator){
			return operator === lastItem;
		});
	}

	function getOperation(){
		return Array.prototype.map.call($buttonOperator, function(button){
			return button.value;
		});
	}

	function handleClickCalculate(){
		$visor.value = removeLastItemIfItIssAnOperator($visor.value);
		var allValues = $visor.value.match(getRegexOperator());
		$visor.value = allValues.reduce(calculateAllValues);
	}

	function getRegexOperator(){
		return new RegExp('\\d+[' + getOperation().join('') + ']?', 'g');
	}

	function calculateAllValues(accumulated, actual) {
		var firstValue = accumulated.slice(0,-1);
		var operator = accumulated.split('').pop();
		var lastValue = removeLastItemIfItIssAnOperator(actual);
		var lastOperator = getLastOperator(actual);
		return doOperation(operator, firstValue, lastValue) + lastOperator;
	}

	function getLastOperator(value){
		return isLastItemAnOperation(value) ? value.split('').pop() : '';
	}

	function doOperation(operator, firstValue, lastValue){
			switch(operator){
				case '+':
					return Number(firstValue) + Number(lastValue);
				case '.':
					return Number(firstValue) - Number(lastValue);
				case '*':
					return Number(firstValue) * Number(lastValue);
				case '/':
					return Number(firstValue) / Number(lastValue);
			}
	}

	initialize();

}(window, document));
