(function(win, doc){
		    'use strict'
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
	var $buttonNumbers = doc.querySelectorAll('[data-js="numbers"]');
	var $buttonOperations = doc.querySelectorAll('[data-js="operations"]');
	var $buttonCE = doc.querySelector('[data-js="ce"]');
	var $buttonEqual = doc.querySelector('[data-js="equal"');
	var $buttonEqual = doc.querySelector('[data-js="equal"');
	Array.prototype.forEach.call($buttonNumbers, function(button){
	button.addEventListener('click', handClickNumber, false);
	})//view number in click a button
	function handClickNumber(){
	  $visor.value += this.value;
	  console.log($visor.value);
	}//view number click in visor
	Array.prototype.forEach.call($buttonOperations, function(button){
	    button.addEventListener('click', handClickOperations, false);
	 })//search all item operation
	function handClickOperations(){
	  $visor.value = removeLastItemOperation($visor.value);
	  $visor.value += this.value;
	  console.log($visor.value);
	}//sum value operation
	 function removeLastItemOperation(number){
	  if(isLastItemOperation(number)){
	    return number.slice(0, -1);
	  }
	  return number;
	 }//remove last value
	 function isLastItemOperation(number){
	   var operations = ['+', '-', '*', '/'];
	   var lastItem = number.split('').pop();
	   return operations.some(function(operator){
	     return operator === lastItem;
	   });
	 console.log(lasItem);
	 }//remove last dual item operation
	$buttonCE.addEventListener('click', handClickCE, false);
	function handClickCE(){
	   $visor.value = 0;
	console.log($visor.value);
	}
    $buttonEqual.addEventListener('click', handClickEqual, false);
    function handClickEqual(){
      $visor.value = removeLastItemOperation();
      var allValues = $visor.value.match(/\d+[+*/-]?/g);
      
    $visor.value = allValues.reduce(function(acumulated, actual){
    	var firstValue = acumulated.slice(0, -1);
    	var operator = acumulated.slice('').pop();
    	var lastValue = removeLastItemOperation(actual);
    	var lastOperator = isLastItemOperation(actual) ? actual.split('').pop() : '';

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
     console.log($visor.value);
     console.log(allValues);
     console.log(allValues.length)
    }


})(window, document);

		  	