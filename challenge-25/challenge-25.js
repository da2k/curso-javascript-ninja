(function(win,doc){
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

  var $nome = doc.querySelector('[data-js="nome"]');
  var $email = doc.querySelector('[data-js="email"]');
  var $data = doc.querySelector('[data-js="data"]');
  var $image = doc.querySelector('[data-js="image"]');
  var $button = doc.querySelector('[data-js="button"]');

  var $nomeTable = doc.querySelector('[data-js="nome-user"]');
  var $emailTable = doc.querySelector('[data-js="email-user"]');
  var $dataTable = doc.querySelector('[data-js="data-user"]');
  var $imageTable = doc.querySelector('[data-js="image-user"]');

  // var $edit = doc.querySelector('[data-js="edit"]');
  // var $excluir = doc.querySelector('[data-js="excluir"]');

  function initialize(){
  initEvents();
  }

  function handleClick() {
  $nomeTable.value += $nome.value;
  $emailTable.value += $email.value;
  $dataTable.value += $data.value;
  $imageTable.value += $image.value;
  }

  function initEvents(){
  function clickButton() {
    $button.addEventListener('click', handleClick, false);
  }
  clickButton();
  }

  initialize();

})(window, document);
