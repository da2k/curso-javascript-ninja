(function( window, document ){
	'use strict';

	/*
	O desafio de hoje será um pequeno projeto: um cronômetro!
	As regras para criação do cronômetro são as seguintes:
	1. Crie um arquivo index.html e adicione esse script a ele;
	2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
	Ele será o nosso cronômetro;
	3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
	4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
	cada segundo;
	5. Ao clicar em Stop, o cronômetro deve parar de contar;
	6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

	Utilize o atributo data-js para nomear o campo e os botões. Você pode
	usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
	dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
	*/

	var $input 		= document.querySelector( 'input[type="text"]' );
	var $btnStart 	= document.querySelector( '[data-js="btn-start"]' );
	var $btnStop 	= document.querySelector( '[data-js="btn-stop"]' );
	var $btnReset 	= document.querySelector( '[data-js="btn-reset"]' );

	var counter = $input.value;
	var timer;

	// Function Start Timer
	function startTimer() {	
		$input.value = counter++;
		timer = setTimeout( startTimer, 1000 );
	}

	// Function Stop Timer
	function stopTimer() {	
		clearTimeout( timer );
	} 

	// Function Reset Timer
	function resetTimer() {	
		clearTimeout( timer );
		$input.value = 0;
	}

	// Btn Start
	$btnStart.addEventListener( 'click', function( event ){
		event.preventDefault();
		startTimer();
	}, false );

	// Btn Stop
	$btnStop.addEventListener( 'click', function( event ){
		event.preventDefault();
		stopTimer();
	}, false );

	// Btn Reset
	$btnReset.addEventListener( 'click', function( event ){
		event.preventDefault();
		resetTimer();
	}, false );

})( window, document );