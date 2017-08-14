(function( window, document ){

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

	var $display = document.querySelector('[data-js="display"]');
	var $btnsNumber = document.querySelectorAll('[data-js="btn-number"]');
	var $btnsOperator = document.querySelectorAll('[data-js="btn-operator"]');
	var $btnCE = document.querySelector('[data-js="CE"]');
	var $btnEqual = document.querySelector('[data-js="btn-equal"]');

	Array.prototype.forEach.call( $btnsNumber, function(btn){
		btn.addEventListener( 'click', handleClickNumber , false );
	});

	Array.prototype.forEach.call( $btnsOperator, function(btn){
		btn.addEventListener( 'click', handleClickOperator , false );
	});	

	$btnCE.addEventListener( 'click', handleClickCE, false );

	$btnEqual.addEventListener( 'click', handleClickEqual, false );

	function handleClickNumber() {
		$display.value += this.value;
	}

	function handleClickOperator() {		
		$display.value = removeLastItemIfIsOperator( $display.value );
		$display.value += this.value;
	}	

	function handleClickCE() {
		$display.value = 0;
	}

	function handleClickEqual() {
		$display.value = removeLastItemIfIsOperator( $display.value );

		var allValues = $display.value.match( /\d+[\/*+-]?/g );

		var result = allValues.reduce( function( accumulated, actual ) {
			var firstValue = accumulated.slice( 0, -1 );
			var operator = accumulated.split('').pop();
			var lastValue = removeLastItemIfIsOperator( actual );
			var lastOperator = isLastItemOperator( actual ) ? actual.split('').pop() : '';

			switch( operator ) {
				case '+':
					return ( +firstValue + +lastValue ) + lastOperator;
				case '-':
					return ( firstValue - lastValue ) + lastOperator;
				case '*':
					return ( firstValue * lastValue ) + lastOperator;
				case '/':
					return ( firstValue / lastValue ) + lastOperator;
			}

			console.log( firstValue, operator, actual );
			return accumulated + actual;
		});

		$display.value = result;
	}

	function isLastItemOperator( number ) {
		var operators = [ '/', '*', '+', '-' ];
		var lastItem = number.split( '' ).pop();

		return operators.some( function( operator ){
			return operator === lastItem;
		});
	}

	function removeLastItemIfIsOperator( number ) {
		if( isLastItemOperator( number ) ) {
			return number.slice( 0, -1 );
		}

		return number;
	}


})( window, document );