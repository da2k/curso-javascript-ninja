(function( win, doc ){
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
	- Se o input teMaterial Theme, the most epic theme for Sublime Text 3 by Mattia Astorinom os valores: "1+2+", e for pressionado o botão de
	multiplicação (x), então no input deve aparecer "1+2x".
	- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
	input;
	- Ao pressionar o botão "CE", o input deve ficar zerado.
	*/

	var $screen = doc.querySelector('[data-js="screen"]');
	var $buttonsNumbers = doc.querySelectorAll('[data-js="btn-numbers"]');
	var $buttonOperations = doc.querySelectorAll('[data-js="btn-operations"]');
	var $buttonCE = doc.querySelector('[data-js="btn-ce"]');
	var $buttonEqual = doc.querySelector('[data-js="btn-equal"]');

	Array.prototype.forEach.call($buttonsNumbers, function(button){
		button.addEventListener('click', handleClickButton, false);
	});

	Array.prototype.forEach.call($buttonOperations, function(operator){
		operator.addEventListener('click', handleClickOperations, false);
	});
	$buttonCE.addEventListener('click', handleClickCE, false);
	$buttonEqual.addEventListener('click', handleClickEqual, false);

	function handleClickButton(){
		$screen.value += this.value;
		console.log(this);
	}

	function handleClickOperations(){
		$screen.value = removeItemIfIsOperator($screen.value);
		$screen.value += this.value;
	}

	function handleClickCE(){
		$screen.value = 0;
	}

	function lastItemIsAnOperator(number){
		var operators = ['+', '-', '*', '÷'];
		var lastItem = number.split('').pop();
		return operators.some(function(operator){
			return operator === lastItem;
		});
	}

	function removeItemIfIsOperator(number){
		if(lastItemIsAnOperator(number)){
			return number.slice(0,-1);
		}
		return number;
	}

	function handleClickEqual(){
		$screen.value = removeItemIfIsOperator($screen.value);
		var allValues = $screen.value.match(/\d+[+x÷-]?/g);
		$screen.value = allValues.reduce(function(accumulated, actual){
			var firstValue = accumulated.slice(0,-1);
			var operator = accumulated.split('').pop();
			var lastValue = removeItemIfIsOperator(actual);
			var lastOperator = lastItemIsAnOperator(actual) ? actual.split('').pop() : '';
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
