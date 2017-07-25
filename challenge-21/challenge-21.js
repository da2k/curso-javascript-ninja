(function () {
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

  var timer = document.querySelector('[data-js="timer"]');
  var idTimer;

  function runTimer() {
    idTimer = setTimeout(function () {
      timer.value = parseInt(timer.value) + 1;
      runTimer();
    }, 1000);
  }

  function stopTimer() {
    clearInterval(idTimer);
  }

  function resetTimer() {
    clearInterval(idTimer);
    timer.value = 0;
  }

  document.querySelector('[data-js="btn-start"]')
    .addEventListener('click', runTimer, false);

  document.querySelector('[data-js="btn-stop"]')
    .addEventListener('click', stopTimer, false);

  document.querySelector('[data-js="btn-reset"]')
    .addEventListener('click', resetTimer, false);

})();
