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
(function (document) {
  var $fieldName = document.querySelector('[data-js="fieldName"]');
  var $fieldOption = document.querySelector('[data-js="fieldOption"]');
  var $fieldResult = document.querySelector('[data-js="fieldResult"]');

  $fieldName.addEventListener('keyup', keyUpFieldName, false);
  $fieldName.addEventListener('copy', copyFieldName, false);
  $fieldName.addEventListener('dblclick', doubleClickFieldName, false);
  $fieldOption.addEventListener('click', selectFieldOption, false);
  $fieldResult.addEventListener('paste', pasteFieldResult, false);

  function keyUpFieldName (event) {
    console.log('Keyup DOM event', $fieldName.value);
  }

  function copyFieldName (event) {
    console.log('Field name has been copied');
  }

  function doubleClickFieldName (event) {
    console.log('Field name has been double clicked, its not allowed do that');
  }

  function selectFieldOption (event) {
    console.log('A option has been selected in field option: ', $fieldOption.value);
  }

  function pasteFieldResult (event) {
    console.log('Field result has been pasted');
  }

}) (document)
