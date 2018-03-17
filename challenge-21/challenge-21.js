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
(function(doc, win) {
  'use strict';

  var $input = doc.querySelector('input');

  var $start = doc.querySelector('[data-js="start"]');
  var $stop = doc.querySelector('[data-js="stop"]');
  var $reset = doc.querySelector('[data-js="reset"]');

  var counter = Number($input.value);
  var interval;

  function setValueToCounter(val) {
    counter = val;
    $input.value = counter;
  }

  function timer() {
    setValueToCounter(++counter);
  }

  $start.addEventListener('click', function() {
    interval = setInterval(timer, 1000);
  }, false);
  $stop.addEventListener('click', function() {
    clearInterval(interval);
  }, false);
  $reset.addEventListener('click', function() {
    setValueToCounter(0);
  }, false);

})(document, window);