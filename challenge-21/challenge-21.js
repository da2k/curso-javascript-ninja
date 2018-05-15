(function (win, doc) {
	'use strict'
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
	var contador = 0;
	var temporizador = 0;
	var timerOn = false;
	var $inputTime = doc.querySelector('input[type=text]');
	var $btnStart = doc.querySelector('button[data-js="startTimer"]');
	var $btnStop = doc.querySelector('button[data-js="stopTimer"]');
	var $btnReset = doc.querySelector('button[data-js="resetTimer"]');
	
	$inputTime.value = contador;
	function timer () {
		contador++;
		$inputTime.value = contador;
		temporizador = setTimeout(timer, 1000);
	}
	
	$btnStart.addEventListener('click', function () {
		if (timerOn) {
			console.log('Timer funcionando');
		}
		else {
			timerOn = true;
			console.log('Start Time');
			timer();
		}
	});
	
	$btnStop.addEventListener('click', function () {
		console.log('Stop Time');
		clearTimeout(temporizador);
		timerOn = false;
	});
	
	$btnReset.addEventListener('click', function () {
		console.log('Reset Time');
		clearTimeout(temporizador);
		contador = 0;
		$inputTime.value = contador;
	});
})(window, document);