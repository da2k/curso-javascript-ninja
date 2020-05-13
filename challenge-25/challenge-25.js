(function (win, doc) {
  'use strict'
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

  //Imprime o Texto selecionado na tela.Digita no Input e depois selecione
  var $log = doc.querySelector('[data-js="log"]');



  on('[data-js="text"]', 'select', select);

  function on(element, event, callback) {

    doc.querySelector(element)
      .addEventListener(event, callback, false)

  }

  function select(event) {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    $log.textContent = `You selected: ${selection}`;
  }


})(window, document)
