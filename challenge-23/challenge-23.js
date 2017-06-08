(function( win, doc ) {
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
	var $display = doc.querySelector('[data-js="display"]');
	var $buttons = doc.querySelectorAll( '[data-js="number"]' );
	var $operations = doc.querySelectorAll( '[data-js="operation"]' );
	var $equal = doc.querySelector( '[data-js="equal"]' );
	var $reset = doc.querySelector( '[data-js="reset"]' );

	$display.value = 0;

	Array.prototype.forEach.call( $buttons, function(button) {
		button.addEventListener( 'click', clickNumbers, false );
	});
	Array.prototype.forEach.call( $operations, function(button) {
		button.addEventListener( 'click', clickOperator, false );
	});

	$reset.addEventListener( 'click', clickReset, false );
  $equal.addEventListener( 'click', clickEqual, false );

  function clickNumbers() {
    $display.value += this.value;
  }

  function clickOperator() {
    $display.value = removeLastItem( $display.value );
    $display.value += this.value;
  }

  function isLastItem( number ) {
    var operations = [ '+', '-', '*', '÷' ];
    var lastItem = number.split('').pop();
    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }

  function removeLastItem(number) {
    if (isLastItem(number))
      return number.slice(0, -1);
    return number;
  }

  function clickReset() {
    return $display.value = 0;
  }

  function clickEqual() {
    $display.value = removeLastItem( $display.value );
    var values = $display.value.match(/(\d+)[+*÷-]?/g);
    $display.value = values.reduce(function(accumulated, actual) {
      var firstValue = accumulated.slice(0, -1);
      var operator = accumulated.split('').pop();
      var lastValue = removeLastItem(actual);
      var lastOperator = isLastItem(actual) ? actual.split('').pop() : '';
      switch(operator) {
        case '+':
          return ( Number(firstValue) + Number(lastValue) ) + lastOperator;
        case '-':
          return ( Number(firstValue) - Number(lastValue) ) + lastOperator;
        case '*':
          return ( Number(firstValue) * Number(lastValue) ) + lastOperator;
        case '÷':
          return ( Number(firstValue) / Number(lastValue) ) + lastOperator;
      }
    });
  }
})( window, document );
