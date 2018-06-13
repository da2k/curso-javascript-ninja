(function(win, doc) {

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

	'use strict';

	var $txtNumero  = doc.querySelector('[data-js=txtNumero]');

	var $btn0  = doc.querySelector('[data-js=btn0]');
	var $btn1  = doc.querySelector('[data-js=btn1]');
	var $btn2  = doc.querySelector('[data-js=btn2]');
	var $btn3  = doc.querySelector('[data-js=btn3]');
	var $btn4  = doc.querySelector('[data-js=btn4]');
	var $btn5  = doc.querySelector('[data-js=btn5]');
	var $btn6  = doc.querySelector('[data-js=btn6]');
	var $btn7  = doc.querySelector('[data-js=btn7]');
	var $btn8  = doc.querySelector('[data-js=btn8]');
	var $btn9  = doc.querySelector('[data-js=btn9]');

	var $btnSum = doc.querySelector('[data-js=btnSum]');
	var $btnSub = doc.querySelector('[data-js=btnSub]');
	var $btnMul = doc.querySelector('[data-js=btnMul]');
	var $btnDiv = doc.querySelector('[data-js=btnDiv]');

	var $btnRes = doc.querySelector('[data-js=btnRes]');
	var $btnClr = doc.querySelector('[data-js=btnClr]');

	function initValues() {
		$txtNumero.value = "0";
	}

	function addValue(event) {
		if ($txtNumero.value.length === 1 && $txtNumero.value.startsWith('0')) $txtNumero.value = this.value;
		else $txtNumero.value += this.value;
	}

	function endsWithOperation(value) {
		return value.match(/\D+$/gm);
	}

	function setOperation(event) {
		endsWithOperation($txtNumero.value) ? 
			$txtNumero.value = $txtNumero.value.replace(/\D+$/gm, this.value) : 
			$txtNumero.value += this.value;
	}

	function removeLastOperation(value) {
		if (endsWithOperation(value)) return value.slice(0, -1);
		return value;
	}

	function calculate() {
		$txtNumero.value = removeLastOperation($txtNumero.value);
		var values = $txtNumero.value.match(/\d+[+x÷-]?/g);

		$txtNumero.value = values.reduce(function(acumulado, atual) {
			var v1 = acumulado.slice(0,-1);
			var op = acumulado.split('').pop();
			var v2 = removeLastOperation(atual);
			var lastOp = endsWithOperation(atual) ? atual.split('').pop() : '';

			switch(op) {
				case '+' : 
					return ( Number(v1) + Number(v2) ) + lastOp;
				break;

				case '-' : 
					return ( Number(v1) - Number(v2) ) + lastOp;
				break;

				case 'x' : 
					return ( Number(v1) * Number(v2) ) + lastOp;
				break;

				case '÷' : 
					return ( Number(v1) / Number(v2) ) + lastOp;
				break;

			}
		});

	}
	
	//
	$btn0.addEventListener('click',addValue, false);
	$btn1.addEventListener('click',addValue, false);
	$btn2.addEventListener('click',addValue, false);
	$btn3.addEventListener('click',addValue, false);
	$btn4.addEventListener('click',addValue, false);
	$btn5.addEventListener('click',addValue, false);
	$btn6.addEventListener('click',addValue, false);
	$btn7.addEventListener('click',addValue, false);
	$btn8.addEventListener('click',addValue, false);
	$btn9.addEventListener('click',addValue, false);

	//
	$btnSum.addEventListener('click',setOperation, false);
	$btnSub.addEventListener('click',setOperation, false);
	$btnMul.addEventListener('click',setOperation, false);
	$btnDiv.addEventListener('click',setOperation, false);
	
	//
	$btnClr.addEventListener('click',initValues, false);
	$btnRes.addEventListener('click',calculate, false);


})(window, document);