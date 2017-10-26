(function(win, doc) {
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

  function initialize() {
    initEvents();
  }

  function initEvents() {
    on('[data-js="input2"]', 'focus', handleInputFocus);
    on('[data-js="input2"]', 'dblclick', handleDblClick);
    on('[data-js="paragraph"]', 'copy', handleCopy);
    win.addEventListener('load', handleLoad);
  }

  function handleLoad() {
    console.log('carregou');
  }

  function handleDblClick() {
    console.log('clicou 2x');
  }

  function handleCopy() {
    console.log('text copied to clipboard');
  }

  function handleInputFocus() {
    console.log('foco no input');
  }

  function on(element, eventName, callback) {
    doc.querySelector(element).addEventListener(eventName, callback);
  }

  initialize();

})(window, document);
