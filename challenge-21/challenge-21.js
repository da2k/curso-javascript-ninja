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
(function() {
  'use strict'

  // get input cronometro
  var $timer = document.querySelector('[data-js="timer"]');
  $timer.style.display = "none"; // hide the input timer
  // set value for input
  var interval;
  console.log(timer.value);

  // get the buttons
  var $start = document.querySelector('.start__timer');
  var $stop = document.querySelector('.stop__timer');
  var $reset = document.querySelector('.reset__timer');
  var $text = document.querySelector('#counter');


  // function for start the time
      console.log(timer.value);

  function startTimer() {
    $timer.value = +$timer.value + 1;
    $text.innerHTML = $timer.value;
    // Show the element h2 with value of timer when the timer start
    if ($timer.value >= 1) {
      $timer.style.display = "none";
    }
    interval = setTimeout(startTimer, 1000);
    console.log($timer.value);
  }

  // function for stop the time
  function stopTimer() {
    clearTimeout(interval);
  }

  // Function for reset timer value
  function resetTimer() {
    // set the time value for zero
    $timer.value = 0;
    // set the DOM text for a empty string
    $text.innerHTML = '';
    stopTimer();
  }

  // Event for when the buttons are clicked
  $start.addEventListener('click', startTimer, false);
  $stop.addEventListener('click', stopTimer, false);
  $reset.addEventListener('click', resetTimer, false);


})();
