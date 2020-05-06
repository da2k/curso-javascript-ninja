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
// ?

(function(win, doc){
  'use strict';

  var $cronometer = doc.querySelector('[data-js="cronometer"]');
  var $startButton = doc.querySelector('[data-js="start-button"]');
  var $stopButton = doc.querySelector('[data-js="stop-button"]');
  var $resetButton = doc.querySelector('[data-js="reset-button"]');

  var value = 0;
  var cronometerId;

  $startButton.addEventListener('click', function() {
    cronometerId = setInterval(function() {
      $cronometer.value = value++;
    }, 1000)
  }, false);

  $stopButton.addEventListener('click', function() {
    stopCronometer();
  }, false);

  $resetButton.addEventListener('click', function() {
    stopCronometer();
    value = 0;
    $cronometer.value = value;
  }, false);

  function stopCronometer() {
    clearInterval(cronometerId);
  }

})(window, document);
