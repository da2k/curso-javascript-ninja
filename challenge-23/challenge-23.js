(function(win, doc) {
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

	var $visor = document.querySelector('[data-js="visor"]');
	var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
	var $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
	var $buttonCE = document.querySelector('[data-js="button-ce"]');
	var $buttonEqual = document.querySelector('[data-js="button-equal"]');

	Array.prototype.forEach.call($buttonsNumbers, function(button) {
		button.addEventListener('click', handleClickNumber, false);
	});
	Array.prototype.forEach.call($buttonsOperations, function(button) {
		button.addEventListener('click', handleClickOperation, false);
	});
	$buttonCE.addEventListener('click', handleClickCE, false);
	$buttonEqual.addEventListener('click', handleClickEqual, false);

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
		var operations = ['+', '-', 'x', '÷'];
		var lastItem = number.split('').pop();
		return operations.some(function(operator) {
			return operator === lastItem;
		});
	}

	function removeLastItemIfItIsAnOperator(number) {
		if(isLastItemAnOperation(number)) {
			return number.slice(0, -1);
		}
		return number;
	}

	function handleClickEqual() {
		$visor.value = removeLastItemIfItIsAnOperator($visor.value);
		var allValues = $visor.value.match(/\d+[+x÷-]?/g);
		$visor.value = allValues.reduce(function(accumulated, actual) {
			var firstValue = accumulated.slice(0, -1);
			var operator = accumulated.split('').pop();
			var lastValue = removeLastItemIfItIsAnOperator(actual);
			var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
			switch(operator) {
				case '+':
					return ( Number(firstValue) + Number(lastValue) ) + lastOperator;
				case '-':
					return ( Number(firstValue) - Number(lastValue) ) + lastOperator;
				case 'x':
					return ( Number(firstValue) * Number(lastValue) ) + lastOperator;
				case '÷':
					return ( Number(firstValue) / Number(lastValue) ) + lastOperator;
			}
		});
	}

})(window, document);
