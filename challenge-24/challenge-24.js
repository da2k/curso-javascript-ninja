(function(win, doc) {
	'use strict';

	/*
	 * Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
	 * As regras são: - Deve ter somente 1 input, mas não deve ser possível
	 * entrar dados nesse input diretamente; - O input deve iniciar com valor
	 * zero; - Deve haver 10 botões para os números de 0 a 9. Cada botão deve
	 * ser um número; - Deve haver 4 botões para as operações principais: soma
	 * (+), subtração(-), multiplicação(x) e divisão(÷); - Deve haver um botão
	 * de "igual" (=) que irá calcular os valores e um botão "CE" que irá limpar
	 * o input, deixando-o com valor 0; - A cada número pressionado, o input
	 * deve atualizar concatenando cada valor digitado, como em uma calculadora
	 * real; - Ao pressionar um botão com uma das 4 operações, deve aparecer o
	 * símbolo da operação no input. Se o último caractere no input já for um
	 * símbolo de alguma operação, esse caractere deve ser substituído pelo
	 * último pressionado. Exemplo: - Se o input tem os valores: "1+2+", e for
	 * pressionado o botão de multiplicação (x), então no input deve aparecer
	 * "1+2x". - Ao pressionar o botão de igual, o resultado do cálculo deve ser
	 * mostrado no input; - Ao pressionar o botão "CE", o input deve ficar
	 * zerado.
	 */

	var $visorCalc = doc.querySelector('[data-js="visorCalc"]');
	var $buttonCe = doc.querySelector('[data-js="buttonCe"]');
	var $buttonEqual = doc.querySelector('[data-js="buttonEqual"]');
	var $buttonNumber = doc.querySelectorAll('[data-js="buttonNumber"]');
	var $buttonOperation = doc.querySelectorAll('[data-js="buttonOperation"]');
	var $operations = {
		'+' : '+',
		'-' : '-',
		'x' : '*',
		'÷' : '/'
	};

	function initializer() {
		initEvents();
	}

	function initEvents() {
		$buttonCe.addEventListener('click', buttonCe, false)
		$buttonEqual.addEventListener('click', buttonEqual, false)

		$buttonNumber.forEach(function(item) {
			item.addEventListener('click', function() {
				if ($visorCalc.value === '0') {
					$visorCalc.value = item.value
				} else {
					$visorCalc.value += item.value
				}
			}, false)
		});

		$buttonOperation.forEach(function(item) {
			item.addEventListener('click', function() {
				if (lastItemIsOperation($visorCalc.value))
					$visorCalc.value = $visorCalc.value.slice(0, -1);
				$visorCalc.value += item.value;
			}, false)
		})
	}

	function buttonCe() {
		$visorCalc.value = 0;
	}

	function buttonEqual() {
		if (lastItemIsOperation($visorCalc.value))
			$visorCalc.value = $visorCalc.value.slice(0, -1);
		var $calculo = $visorCalc.value.match(/\d+|\D/g);
		var $resultado = $calculo.reduce(function(acumulado, atual) {
			if (isOperation(atual))
				return acumulado + $operations[atual];
			return acumulado + Number(atual);
		}, false);
		$visorCalc.value = eval($resultado);
	}

	function isOperation(value) {
		return $operations.hasOwnProperty(value);
	}

	function lastItemIsOperation(operation) {
		return isOperation(operation.match(/.$/));
	}

	initializer();

})(window, document);