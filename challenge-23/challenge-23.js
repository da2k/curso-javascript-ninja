(function(win, doc){
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
	var $equal = doc.querySelector('[data-js="equal"]');
	var $clear = doc.querySelector('[data-js="clear"]');
	var $operators = doc.querySelectorAll('[data-js="operator"]');
	var $numbers = doc.querySelectorAll('[data-js="number"]');

	$equal.addEventListener('click', handleClickEqual, false);
	$clear.addEventListener('click', handleClickClear, false);

	Array.prototype.forEach.call($numbers, function(item){
		item.addEventListener('click', handleClickNumber, false);
	});

	Array.prototype.forEach.call($operators, function(item){
		item.addEventListener('click', handleClickOperator, false);
	});

	function handleClickNumber() {
		addValueToVisor(this.value);
	}

	function handleClickOperator() {
		if($visor.value === '0') return false;
		$visor.value = removeLastItemIfItIsAnOperation($visor.value);
		addValueToVisor(this.value);
	}

	function handleClickEqual() {
		$visor.value = removeLastItemIfItIsAnOperation($visor.value);
		var allValues = $visor.value.match(/\d+[÷x+-]?/g);
		$visor.value = allValues.reduce(function(acumulated, current){
			var firstValue = acumulated.slice(0, -1);
			var operator = acumulated.split('').pop();
			var lastValue = removeLastItemIfItIsAnOperation(current);
			var lastOperator = isTheLastValueAnOperator(current) ? current.split('').pop() : '';
			switch(operator){
				case '÷':
				return (Number(firstValue) / Number(lastValue)) + lastOperator;
				case 'x':
				return (Number(firstValue) * Number(lastValue)) + lastOperator;
				case '+':
				return (Number(firstValue) + Number(lastValue)) + lastOperator;
				case '-':
				return (Number(firstValue) - Number(lastValue)) + lastOperator;
			}
		});
	}

	function handleClickClear() {
		$visor.value = '0';
	}

	function addValueToVisor(value) {
		if($visor.value === '0') $visor.value = '';
		$visor.value += value;

	}

	function removeLastItemIfItIsAnOperation(value) {
		if(isTheLastValueAnOperator(value))
			return value.slice(0, -1);
		return value;
	}

	function isTheLastValueAnOperator(value) {
		var operations = ['÷', 'x', '+', '-'];
		var lastItem = value.split('').pop();
		return operations.some(function(item){
			return item === lastItem;
		}); 
	}

})(window, document);