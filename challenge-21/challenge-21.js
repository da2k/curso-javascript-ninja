(function(win, doc){
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
	var $startButton = doc.querySelector('[data-js="start"]');
	var $stopButton = doc.querySelector('[data-js="stop"]');
	var $resetButton = doc.querySelector('[data-js="reset"]');
	
	$startButton.innerHTML = 'Começar';
	$stopButton.innerHTML = 'Parar';
	$resetButton.innerHTML = 'Reiniciar';

	var counter = 1;
	var idTimer;
	var $inputChronometer = doc.querySelector('[type="text"]');

	function timer() {
		$inputChronometer.value = counter++;
		idTimer = win.setTimeout(timer, 1000);
	}

	$startButton.addEventListener('click', function(){
		timer();
	}, false);

	$stopButton.addEventListener('click', function(){
		clearTimeout(idTimer);
	}, false);

	$resetButton.addEventListener('click', function(){
		counter = 0;
		clearTimeout(idTimer);
		timer();
	}, false);

}(window, document));