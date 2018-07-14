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

(function(doc, win){
  'use strict'

  var $input = doc.querySelector('[data-input="cron-value"]')
  var $startButton = doc.querySelector('[data-button="start"]')
  var $stopButton = doc.querySelector('[data-button="stop"]')
  var $resetButton = doc.querySelector('[data-button="reset"]')

  var currentTimer = 0

  function stopTimer() {
    clearTimeout(currentTimer);
  }

  $startButton.addEventListener('click', function(){
    function timer(){
      $input.value = new Number($input.value) + 1;
      currentTimer = setTimeout(timer, 1000);
    }
    timer();
  }, false)

  $stopButton.addEventListener('click', stopTimer, false)

  $resetButton.addEventListener('click', function(){
    $input.value = 0
    stopTimer();
  }, false)

})(document, window)
