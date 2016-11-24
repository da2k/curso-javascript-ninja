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
  function on(element, event, callback) {
    doc.querySelector(element).addEventListener(event, callback, false);
  }

  function handleFocus() {
    this.value = "Ganhou o foco!";
  }

  function handleBlur() {
    this.value = "Perdeu o foco!";
  }

  function handleClickSelect() {
    doc.querySelector('[data-js="input"]').value = this.value;
  }

  function handleMouseOver() {
    this.value = "Mouse over";
  }

  function handleMouseOut() {
    this.value = "Mouse out";
  }

  function handleKeyUp() {
    doc.querySelector('[data-js="text1"]').value = this.value;
  }

  function handleKeyDown() {
    doc.querySelector('[data-js="text2"]').value = this.value;
  }

  on('[data-js="focus-blur"]', 'focus', handleFocus);
  on('[data-js="focus-blur"]', 'blur', handleBlur);
  on('[data-js="select"]', 'change', handleClickSelect);
  on('[data-js="mouse"]', 'mouseover', handleMouseOver);
  on('[data-js="mouse"]', 'mouseout', handleMouseOut);
  on('[data-js="keyup"]', 'keyup', handleKeyUp);
  on('[data-js="keydown"]', 'keydown', handleKeyDown);

 })(window, document);
