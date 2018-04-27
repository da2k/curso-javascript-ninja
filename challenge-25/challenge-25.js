(function (win, doc) {
  'use strict';
  /*
  Essa semana você terá dois desafios:
  1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
  tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
  ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
  o que não ficou tão claro das aulas anteriores.
  É essencial que você entenda todo o conteúdo que foi passado até aqui,
  para que possamos prosseguir para a parte mais avançada do curso :D

  2) Estudar eventos!
  Acesse a página do MDN:
  https://developer.mozilla.org/en-US/docs/Web/Events#Categories

  Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
  desafio os experimentos legais que você conseguir desenvolver :D
  */

  var posX = 0;
  var posY = 0;
  var $iconRedSnake = doc.querySelector('[data-js="icon-red-snake"]');

  function on($el, event, callback) {
    $el.addEventListener(event, callback, false);
  }

  on(win, 'mousemove', function (e) {
    posX = e.clientX;
    posY = e.clientY;
  });

  on(win, 'mousemove', function (e) {
    $iconRedSnake.style.top = e.clientX + 'px';
    $iconRedSnake.style.left = e.clientY + 'px';
  });

  on(win, 'contextmenu', function (e) {
    e.preventDefault();

    var $divRightButton = doc.querySelector('[data-js="box-right-button"]');
    $divRightButton.style.display = 'inline-block';
    $divRightButton.style.top = posY + 'px';
    $divRightButton.style.left = posX + 'px';
  });




})(window, document);
