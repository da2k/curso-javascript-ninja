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

(function (){
	'use strict';

	var $cronometro = document.querySelector('input[data-js="cronometro"]');
	var $start = document.querySelector('button[data-js="start"]');
	var $pause = document.querySelector('button[data-js="pause"]');
	var $reset = document.querySelector('button[data-js="reset"]');
	var interval;
	$cronometro.value = 0;

	//START CRONOMETRO
	$start.addEventListener('click', startCronometro, false);

	function startCronometro() {
	    interval = setInterval(function(){
	    	$cronometro.value ++; 
	    }, 1000);
	}


	//PAUSE CRONOMETRO
	$pause.addEventListener('click', pauseCronometro, false);

	function pauseCronometro() {
	    clearInterval(interval);
	}

	//RESET CRONOMETRO
	$reset.addEventListener('click', function(){
		pauseCronometro();
		if ($cronometro.value == 0)
			alert('Cronometro já resetado!');
		$cronometro.value = 0;
	},false)

}(window, document));
