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
(function (win, doc) {
  'use strict';

  function on(element, event, callback) {
    doc.querySelector(element)
      .addEventListener(event, callback, false);
  }

  on('[data-js="link1"]', 'click', function (event) {
    event.preventDefault;
    alert('clicou');
  })

  on('[data-js="link2"]', 'mouseover', function (event) {
    event.preventDefault;
    alert('passou');
  })

  on('[data-js="input"]', 'input', function (event) {
    event.preventDefault;
    doc.querySelector('[data-js="div"]').innerHTML = this.value;
  })

  on('[data-js="select"]', 'change', function (event) {
    event.preventDefault;
    doc.querySelector('[data-js="number"]').value = this.value;
  })



})(window, document);
