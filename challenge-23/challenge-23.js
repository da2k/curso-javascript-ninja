(function(){

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

    var resultDisplay = document.querySelector('[data-js=result]');
	var resultValue = resultDisplay.value;
	var operations = {
		"+" : function(x, y) {
			return x + y;
		},
		"-" : function(x, y) {
			return x - y;
		},
		"x" : function(x, y) {
			return x * y;
		},
		"÷" : function(x, y) {
			return x / y;
		}
	};

	function calculate(operator, x, y) {
		return operations[operator](x, y);
	}

	function addTargetValue(e) {
		resultValue += e.target.textContent;
		resultDisplay.value = resultValue;
	}

	function handleClearClick() {
		resultValue = '0';
		resultDisplay.value = resultValue;
	}

	function handleNumbersClick(e) {
		if (resultValue === '0')
			resultValue = '';
		addTargetValue(e);
	}

	function handleOperationsClick(e) {
		var currentChars = resultValue.split('');
		var lastChar = currentChars[currentChars.length-1];
		if (lastChar.match(/\d/)) {
			addTargetValue(e);
		}
		else {
			resultValue = currentChars.join('').slice(0, -1) + e.target.textContent;
			resultDisplay.value = resultValue;
		}
	}

	function buildsResult(numbers, operations ) {
		var currentResult;
		var finalResult = 0;
		numbers.forEach(function(number, index){
			if (index === 0) {
				finalResult += +numbers[index];
			}
			else {
				currentResult = calculate(operations[index-1], finalResult, Number(number));
				finalResult = currentResult;
			}
		});
		return finalResult;
	}

	function handleEqualsClick() {
		var lastChar = resultDisplay.value.split('').pop();
		if (lastChar.match(/\D/))
			resultDisplay.value = resultValue.slice(0, -1);
		var displayNumbers = resultDisplay.value.split(/\D/g);
		var displayOperations = resultDisplay.value.match(/\D/g);
		var finalResult = buildsResult(displayNumbers, displayOperations);
		resultValue = String(finalResult);
		resultDisplay.value = resultValue;
	}

    document.querySelector('.numbers').addEventListener('click', handleNumbersClick);
    document.querySelector('[data-js=clear]').addEventListener('click', handleClearClick);
    document.querySelector('.operations').addEventListener('click', handleOperationsClick);
	document.querySelector('[data-js=equals]').addEventListener('click', handleEqualsClick);

})();
