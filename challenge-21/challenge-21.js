(function(win,doc){
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
  'use strict';

  var $timer = doc.querySelector( '[data-js="timer"]' );
  var $startButton = doc.querySelector( '[data-js="start"]' );
  var $stopButton = doc.querySelector( '[data-js="stop"]' );
  var $resetButton = doc.querySelector( '[data-js="reset"]' );
  var time;

  $startButton.addEventListener('click', startChronometer, false);
  $stopButton.addEventListener('click', stopChronometer, false);
  $resetButton.addEventListener('click', resetChronometer, false);

  function startChronometer(){
      $timer.value = +$timer.value +1;setTimeout(startChronometer, 1000);
  }

  function stopChronometer(){
    clearTimeout(time);
  }

  function resetChronometer(){
    stopChronometer();
    $timer.value = 0;
  }
})(window,document);
