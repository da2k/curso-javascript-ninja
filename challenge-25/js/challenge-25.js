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

  var body = doc.querySelector('body');

  function init() {
    eventHover();
    eventClick();
    eventDragstart();
    eventKeydown();
  }

  function evListener(sel, event, func) {
    return sel.addEventListener(event, func, 'false');
  }

  function eventHover() {

  }

  function eventClick() {
    var squareClick = doc.querySelector('.click');
    var colors = [
      '#03ac15',
      '#034eac',
      '#ac0370',
    ];
    colors.forEach(function(item, index, array) {
      squareClick.addEventListener('click', function(e) {}, false);
    });
  }

  function eventDragstart() {

  }

  function eventKeydown() {
    var squareKeydown = doc.querySelector('.square');
    for(var i = 0; i <= 0; i++) {
      var numKey = String(i);
      body.addEventListener('keydown', function(e) {
        if (e.keyCode === 37) {
          squareKeydown.style.marginLeft = --numKey + 'px';
        }

        if (e.keyCode === 39) {
          squareKeydown.style.marginLeft = ++numKey + 'px';
        }

        if (e.keyCode === 38) {
          squareKeydown.style.marginTop = --numKey + 'px';
        }

        if (e.keyCode === 40) {
          square.style.marginTop = ++numKey + 'px';
        }
      }, 'false');
    }
  }

  init();
})(window, document);
