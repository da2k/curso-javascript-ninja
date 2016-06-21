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

  // Eventos Copy/Drag&Drop/Mouseup

  var $input = doc.querySelector('[data-js="input"]');
  var $dropTarget = doc.querySelectorAll('[data-js="droptarget"]');
	var $dragStart = doc.querySelector('[data-js="dragstart"]');
  var $selectedText = doc.querySelector('[data-js="selected-text"]');

  Array.prototype.forEach.call($dropTarget, function(dropTarget) {
  	dropTarget.addEventListener('drop', drop, false);
    dropTarget.addEventListener('dragover', allowDrop, false);
  });
  $dragStart.addEventListener('dragstart', dragStart, false);
  $input.addEventListener('copy', copiedValue, false);
  $selectedText.addEventListener('mouseup', getSelected, false);

  function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
    console.log( "O elemento <p> começou a ser arrastado!" );
  }

  function allowDrop(event) {
  	event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(doc.getElementById(data));
    console.log( 'O elemento <p> foi solto!' );
  }

  function getSelected() {
    var text = win.getSelection().toString();
    var formatText = 'Você selecionou o trecho: ' + '"' + text + '"' + ' com ' + text.length + ' caracteres!';
    console.log(formatText);
  }

  function copiedValue() {
    console.log( "Texto Copiado: ", this.value );
  }

})(window, document);
