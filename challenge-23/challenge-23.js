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

(function (win, doc){
	'use strict';

	var $operacoes = doc.querySelector('[data-js="operacoes"]');
	var $number = doc.querySelectorAll('[data-js="number"]');
	var $buttonCE = doc.querySelector('[data-js="buttonCE"]');
	var $buttonOperator = doc.querySelectorAll('[data-js="operator"]');
	var $calcula = doc.querySelector('[data-js="calcula"]');

	//console.table($number);

	//EVENTOS
	Array.prototype.forEach.call($number, function(button){
		button.addEventListener('click', handleClickNumber, false);

	});

	Array.prototype.forEach.call($buttonOperator, function(button){
		button.addEventListener('click', handleClickOperator, false);
	});

	$buttonCE.addEventListener('click', handleClickCE, false);

	$calcula.addEventListener('click', handleClickCalcula, false);

	//FUNÇÕES DOS EVENTOS
	function handleClickNumber() {
		$operacoes.value += this.value;
	}

	function handleClickCE() {
		$operacoes.value = 0;
	}

	function handleClickOperator() {
		$operacoes.value = removeLastItemIfItIssAnOperator($operacoes.value);
		$operacoes.value += this.value;
	}

	function removeLastItemIfItIssAnOperator(number) {
	if(isLastItemAnOperation(number)) {
			return number.slice(0, -1);
		}
		return number;
	}
	
	function isLastItemAnOperation(number) {
		var operator = ['+', '-', '*', '/'];
		var lastItem = number.split('').pop();
		return operator.some(function(operator){
			return operator === lastItem;
		});
	}

	function handleClickCalcula(){
		$operacoes.value = removeLastItemIfItIssAnOperator($operacoes.value);
		var allValues = $operacoes.value.match(/\d+[+x/-]?/g);
		var result = allValues.reduce(function(accumulated, actual) {
			var firstValue = accumulated.slice(0,-1);
			var operator = accumulated.split('').pop();
			var lastValue = removeLastItemIfItIssAnOperator(actual);
			var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
			switch(operator){
				case '+':
					return (Number(firstValue) + Number(lastValue)) + lastOperator;
				case '-':
					return (Number(firstValue) - Number(lastValue)) + lastOperator;
				case '*':
					return (Number(firstValue) * Number(lastValue)) + lastOperator;
				case '/':
					return (Number(firstValue) / Number(lastValue)) + lastOperator;
			}
		});

		$operacoes.value = result;

	}


}(window, document));
