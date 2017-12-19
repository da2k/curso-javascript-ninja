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

(function(doc){
  'use strict';
  var $inputChrono = doc.querySelector('[data-js="chrono"]');
  var $buttonStart = doc.querySelector('button[data-js="chrono-start"]');
  var $buttonStop = doc.querySelector('button[data-js="chrono-stop"]');
  var $buttonReset = doc.querySelector('button[data-js="chrono-reset"]');
  var timeOutId;

  function timer(){
    $inputChrono.value = Number($inputChrono.value) + 1;
    timeOutId = setTimeout( timer, 1000);
  }

  $buttonStart.addEventListener('click', function(){
    timer();
  }, false);

  $buttonReset.addEventListener('click', function(){
    $inputChrono.value = 0;
    clearTimeout(timeOutId);
  }, false);

  $buttonStop.addEventListener('click', function(){
    clearTimeout(timeOutId);
  }, false);
})(document);
