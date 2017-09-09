(function(win,doc){
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
	
	// caputrar os elementos necessários
	var $counter = doc.querySelector('[data-js="counter"]');
	var $startCounter = doc.querySelector('[data-js="startCounter"]');
	var $stopCounter = doc.querySelector('[data-js="stopCounter"]');
	var $resetCounter = doc.querySelector('[data-js="resetCounter"]');

	var counting;

	function timer(){
		$counter.value++;
		counting = setTimeout(timer, 1000);
	}

	// evento do start
	$startCounter.addEventListener('click', function(){
		timer();
	}, false);

	// evento do stop
	$stopCounter.addEventListener('click', function(){
		clearTimeout(counting);
	}, false);

	// evento do reset
	$resetCounter.addEventListener('click', function(){
		clearTimeout(counting);
		$counter.value = 0;
	}, false);


})(window,document);
