(function(win, doc) {

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

	'use strict';

	var $visor = doc.querySelector('[data-js="visor"]');
	var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
	var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
	var $buttonCE = doc.querySelector('[data-js="button-ce"]');
	var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

	function init() {
		initAllEvents();
	}

	function initAllEvents() {

		Array.prototype.forEach.call($buttonsNumbers, function(button) {
		  button.addEventListener('click', handleClickNumber, false);
		});

		Array.prototype.forEach.call($buttonsOperations, function(button) {
		  button.addEventListener('click', handleClickOperation, false);
		});

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

	function isLastItemAnOperation(value) {
	  var operations = ['+', '-', 'x', '÷'];
	  var lastItem = value.split('').pop();
	  return operations.some(function(operator) {
	    return operator === lastItem;
	  });
	}

	function removeLastItemIfItIsAnOperator(value) {
	  if(isLastItemAnOperation(value)) {
	    return value.slice(0, -1);
	  }
	  return value;
	}

	function handleClickEqual() {
	  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
	  var allValues = $visor.value.match(/\d+[+x÷-]?/g);
	  $visor.value = allValues.reduce(calcular);

	}

	function calcular(accumulated, actual) {
		var firstValue = accumulated.slice(0, -1);
		var operator = accumulated.split('').pop();
		var lastValue = removeLastItemIfItIsAnOperator(actual);
		var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
		return executarCalculo(operator, firstValue, lastValue) + lastOperator;
	}

	function executarCalculo(operator, firstValue, lastValue) {
		switch(operator) {
		  case '+':
		    return ( Number(firstValue) + Number(lastValue) );
		  case '-':
		    return ( Number(firstValue) - Number(lastValue) );
		  case 'x':
		    return ( Number(firstValue) * Number(lastValue) );
		  case '÷':
		    return ( Number(firstValue) / Number(lastValue) );
		}
	}

	init();

})(window, document);